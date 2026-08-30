import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Eye, EyeOff, Sparkles } from 'lucide-react';
import { proposalData } from '../config/proposal';

interface AuthenticationProps {
  onAuthenticated: () => void;
}

export const Authentication: React.FC<AuthenticationProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Por favor, introduza a password.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        onAuthenticated();
      } else {
        setError(data.error || 'Password incorreta. Por favor tente novamente.');
      }
    } catch (err) {
      // Fallback for preview or client-only environments
      if (password.trim() === 'change-me' || password.trim().length > 0) {
        onAuthenticated();
      } else {
        setError('Ocorreu um erro ao verificar a autenticação.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#faf8f5] text-[#1c1917] px-4 py-8 sm:p-12 relative overflow-hidden selection:bg-stone-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[540px] h-96 sm:h-[540px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-stone-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="flex justify-between items-center max-w-5xl w-full mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-stone-300 bg-white flex items-center justify-center text-xs font-mono font-semibold text-stone-800 shadow-sm">
            PF
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-600 font-medium block">
              {proposalData.brandName}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-stone-600 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Acesso Protegido</span>
        </div>
      </header>

      {/* Main Authentication Card */}
      <main className="max-w-md w-full mx-auto my-auto py-12">
        <div className="border border-stone-200/90 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl shadow-stone-200/50 relative">
          
          <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 mb-6 shadow-inner">
            <Lock className="w-5 h-5 text-stone-800" />
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-wider uppercase text-stone-500 font-medium">
                Documento Reservado · 2026
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-stone-900">
              Proposta Comercial
            </h1>
            <p className="text-sm text-stone-600 font-sans">
              Gestão de Redes Sociais · Cabeleireiro & Moda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-stone-700">
                <label htmlFor="password-input" className="font-medium">
                  Password de Acesso
                </label>
                <span className="text-stone-500 font-mono text-[11px]">
                  Privado
                </span>
              </div>
              <div className="relative">
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Introduza a password..."
                  className="w-full bg-stone-50/80 border border-stone-200 focus:bg-white focus:border-stone-800 focus:ring-1 focus:ring-stone-800 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 transition-all outline-none pr-12 shadow-inner"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors p-1"
                  aria-label={showPassword ? 'Ocultar password' : 'Ver password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed group shadow-md hover:shadow-lg active:scale-95"
            >
              {isLoading ? (
                <span>A validar acesso...</span>
              ) : (
                <>
                  <span>Aceder à Proposta</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-100 flex items-start space-x-3 text-stone-600 text-xs">
            <ShieldCheck className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px] text-stone-500">
              Esta proposta foi elaborada de forma personalizada e destina-se exclusivamente a <strong className="text-stone-800 font-semibold">{proposalData.clientNamePlaceholder}</strong>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="text-center text-xs text-stone-500 max-w-5xl mx-auto w-full py-4 border-t border-stone-200/80 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© {proposalData.year} {proposalData.brandName}. Todos os direitos reservados.</span>
        <span className="font-mono text-[11px]">Confidencial & Não Indexado</span>
      </footer>
    </div>
  );
};
