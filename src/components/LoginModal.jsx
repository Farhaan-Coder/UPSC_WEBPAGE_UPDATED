import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Lock, Mail, User, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { EXAM_YEAR, ROADMAP_LABEL, TARGET_YEAR_OPTIONS } from '../config/exam.js';

export default function LoginModal({ isOpen, onClose, initialTab = 'login' }) {
  // Single state variable controlling BOTH tab highlight and visible form panel
  const [activeTab, setActiveTab] = useState(initialTab);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    targetYear: String(EXAM_YEAR),
    optionalSubject: 'Political Science & IR',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Sync initialTab and manage focus / scroll lock when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      setActiveTab(initialTab);
      setErrors({});
      setToastMessage(null);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      // Auto focus
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  // ESC key & focus trap handlers
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      errs.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    if (activeTab === 'signup' && !formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage(
        activeTab === 'signup'
          ? 'Demo Mode: Account initialized! Welcome to UPSC ZONE AI.'
          : 'Demo Mode: Successfully authenticated as demo aspirant!'
      );
      setTimeout(() => {
        onClose();
      }, 1800);
    }, 800);
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage('Demo Mode: Google Authentication simulated successfully!');
      setTimeout(() => {
        onClose();
      }, 1600);
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden transition-all transform scale-100 animate-scaleUp"
      >
        {/* Header Ribbon */}
        <div className="bg-[#133026] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img 
              src="/assets/upsc-logo.png" 
              alt="UPSC Ashoka Emblem and Chakra Logo" 
              className="w-8 h-8 object-contain shrink-0"
            />
            <div>
              <span className="font-sans font-bold text-sm tracking-tight">UPSC ZONE AI</span>
              <span className="text-[10px] text-emerald-300 block font-normal">Aspirant Command Desk</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher - Single activeTab state controls both tabs and panel */}
        <div className="flex border-b border-stone-200 bg-stone-50/70" role="tablist" aria-label="Account Access Options">
          <button
            type="button"
            role="tab"
            id="tab-login"
            aria-selected={activeTab === 'login'}
            aria-controls="panel-auth"
            onClick={() => {
              setActiveTab('login');
              setErrors({});
            }}
            className={`flex-1 py-3.5 min-h-[44px] flex items-center justify-center text-xs sm:text-sm font-bold font-sans transition-all cursor-pointer ${
              activeTab === 'login'
                ? 'text-[#133026] border-b-2 border-[#133026] bg-white'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Aspirant Login
          </button>
          <button
            type="button"
            role="tab"
            id="tab-signup"
            aria-selected={activeTab === 'signup'}
            aria-controls="panel-auth"
            onClick={() => {
              setActiveTab('signup');
              setErrors({});
            }}
            className={`flex-1 py-3.5 min-h-[44px] flex items-center justify-center text-xs sm:text-sm font-bold font-sans transition-all cursor-pointer ${
              activeTab === 'signup'
                ? 'text-[#133026] border-b-2 border-[#133026] bg-white'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Start Free Prep
          </button>
        </div>

        {/* Modal Body - role="tabpanel" linked to activeTab */}
        <div
          id="panel-auth"
          role="tabpanel"
          aria-labelledby={activeTab === 'login' ? 'tab-login' : 'tab-signup'}
          className="p-6"
        >
          <h2 id="modal-title" className="text-xl font-serif font-bold text-[#133026] tracking-tight mb-1">
            {activeTab === 'login' ? 'Welcome Back, Future Officer' : 'Begin Your Disciplined Preparation'}
          </h2>
          <p className="text-xs text-stone-500 mb-5 font-normal">
            {activeTab === 'login'
              ? 'Access your daily study planner, smart flashcards deck, and mock metrics.'
              : `Zero credit card required. Free diagnostic test & your ${EXAM_YEAR} roadmap.`}
          </p>

          {/* Toast Notification Banner */}
          {toastMessage && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 font-semibold animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Social Auth Button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold text-stone-700 transition-colors shadow-2xs mb-4 cursor-pointer min-h-[44px]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Or with email</span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {activeTab === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-stone-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#133026] text-stone-800`}
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  ref={activeTab === 'login' ? firstInputRef : null}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border ${
                    errors.email ? 'border-red-400 bg-red-50/20' : 'border-stone-200'
                  } focus:outline-none focus:ring-2 focus:ring-[#133026] text-stone-800`}
                />
              </div>
              {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border ${
                    errors.password ? 'border-red-400 bg-red-50/20' : 'border-stone-200'
                  } focus:outline-none focus:ring-2 focus:ring-[#133026] text-stone-800`}
                />
              </div>
              {errors.password && <p className="text-[11px] text-red-600 mt-1">{errors.password}</p>}
            </div>

            {activeTab === 'signup' && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target CSE Year
                  </label>
                  <select
                    value={formData.targetYear}
                    onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#133026] text-stone-800 bg-white"
                  >
                    {TARGET_YEAR_OPTIONS.map((year) => (
                      <option key={year} value={String(year)}>
                        CSE {year} (Prelims: expected May {year})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Optional Subject
                  </label>
                  <select
                    value={formData.optionalSubject}
                    onChange={(e) => setFormData({ ...formData, optionalSubject: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#133026] text-stone-800 bg-white"
                  >
                    <option value="PSIR">Political Science (PSIR)</option>
                    <option value="Geography">Geography</option>
                    <option value="Sociology">Sociology</option>
                    <option value="History">History</option>
                    <option value="Public Administration">Pub Ad</option>
                    <option value="Anthropology">Anthropology</option>
                    <option value="Other">Other / Undecided</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'login' && (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-stone-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-[#133026] focus:ring-[#133026]" />
                  <span>Remember me for 30 days</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Demo Mode: In production, a secure password reset link is dispatched to your email.')}
                  className="text-xs font-semibold text-[#133026] hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-[#133026] hover:bg-[#183C30] text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer min-h-[44px]"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : activeTab === 'login' ? (
                <>
                  <span>Enter Aspirant Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Create Free Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Subtext */}
          <div className="mt-5 text-center">
            {activeTab === 'login' ? (
              <p className="text-xs text-stone-500">
                New aspirant?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('signup');
                    setErrors({});
                  }}
                  className="font-bold text-[#133026] hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  Start free prep today
                </button>
              </p>
            ) : (
              <p className="text-xs text-stone-500">
                Already preparing with us?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('login');
                    setErrors({});
                  }}
                  className="font-bold text-[#133026] hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  Log into workspace
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
