import express from 'express';
import path from 'path';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

// Security & Privacy: Never index any endpoint
app.use((req, res, next) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
  next();
});

app.use(express.json());
app.use(cookieParser());

const SESSION_SECRET = process.env.SESSION_SECRET || 'proposal-secret-salt-2026';
const PROPOSAL_PASSWORD = process.env.PROPOSAL_PASSWORD || 'change-me';

// Simple HMAC token helper for session cookie
function generateSessionToken(): string {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const data = `authenticated:${expiresAt}`;
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(data).digest('hex');
  return `${data}:${signature}`;
}

function verifySessionToken(token?: string): boolean {
  if (!token) return false;
  const parts = token.split(':');
  if (parts.length !== 3) return false;
  const [prefix, expiresAtStr, signature] = parts;
  if (prefix !== 'authenticated') return false;
  const expiresAt = parseInt(expiresAtStr, 10);
  if (isNaN(expiresAt) || Date.now() > expiresAt) return false;

  const expectedSignature = crypto.createHmac('sha256', SESSION_SECRET).update(`${prefix}:${expiresAtStr}`).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}

// API Routes
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ error: 'A password é obrigatória.' });
  }

  // Constant-time comparison to prevent timing attacks
  const expected = Buffer.from(PROPOSAL_PASSWORD);
  const provided = Buffer.from(password);

  let isMatch = false;
  if (expected.length === provided.length) {
    isMatch = crypto.timingSafeEqual(expected, provided);
  }

  if (!isMatch) {
    return res.status(401).json({ error: 'Password incorreta. Por favor verifique e tente novamente.' });
  }

  const token = generateSessionToken();
  res.cookie('proposal_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/',
  });

  return res.json({ success: true, message: 'Autenticado com sucesso.' });
});

app.get('/api/auth/check', (req, res) => {
  const token = req.cookies.proposal_session;
  const isAuthenticated = verifySessionToken(token);
  return res.json({ authenticated: isAuthenticated });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('proposal_session', { path: '/' });
  return res.json({ success: true });
});

app.post('/api/proposal/submit', (req, res) => {
  const { name, email, phone, selectedPlan, message } = req.body;
  
  if (!name || !email || !selectedPlan) {
    return res.status(400).json({ error: 'Campos obrigatórios em falta.' });
  }

  // Format response for client action / confirmation
  return res.json({
    success: true,
    message: 'Proposta submetida com sucesso! Irá ser redirecionado para o email.',
    data: { name, email, phone, selectedPlan, message }
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Proposta Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
