/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Authentication } from './components/Authentication';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { BusinessCards } from './components/BusinessCards';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { CrossContent } from './components/CrossContent';
import { Workflow } from './components/Workflow';
import { Conditions } from './components/Conditions';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check auth session on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          // Check local session fallback for preview environments
          const localAuth = sessionStorage.getItem('proposal_auth');
          setIsAuthenticated(localAuth === 'true');
        }
      } catch (err) {
        const localAuth = sessionStorage.getItem('proposal_auth');
        setIsAuthenticated(localAuth === 'true');
      }
    };

    checkAuth();
  }, []);

  const handleAuthenticated = () => {
    sessionStorage.setItem('proposal_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {
      // ignore
    }
    sessionStorage.removeItem('proposal_auth');
    setIsAuthenticated(false);
  };

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-stone-300 border-t-stone-800 animate-spin"></div>
      </div>
    );
  }

  // Not authenticated: show login
  if (!isAuthenticated) {
    return <Authentication onAuthenticated={handleAuthenticated} />;
  }

  // Authenticated: show full proposal experience
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-stone-200 selection:text-stone-900 relative">
      
      {/* Header Navigation */}
      <HeaderNav
        onLogout={handleLogout}
      />

      {/* Main Proposal Body */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Strategy Overview / 2 Businesses */}
        <BusinessCards />

        {/* 3. Services / Scope of Work */}
        <Services />

        {/* 4. Pricing Plans */}
        <Pricing />

        {/* 5. Cross-Content Strategy */}
        <CrossContent />

        {/* 6. How it works / Workflow */}
        <Workflow />

        {/* 7. Conditions & Schedule */}
        <Conditions />

        {/* 8. Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
