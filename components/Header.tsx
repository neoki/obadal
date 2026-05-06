"use client";

import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(5, 13, 26, 0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #C9A84C, #d4b56a)" }}>
              <Scale className="w-4 h-4" style={{ color: "#050d1a" }} />
            </div>
            <span className="font-serif text-base sm:text-lg font-bold" style={{ color: "#f0f4f8" }}>
              Afectados<span style={{ color: "#C9A84C" }}>Obadal</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#por-que" className="text-sm transition-colors hover:text-yellow-400" style={{ color: "#94a3b8" }}>
              Tu derecho
            </a>
            <a href="#formulario" className="text-sm transition-colors hover:text-yellow-400" style={{ color: "#94a3b8" }}>
              Consulta gratuita
            </a>
            <a href="#faq" className="text-sm transition-colors hover:text-yellow-400" style={{ color: "#94a3b8" }}>
              Preguntas
            </a>
            <a
              href="#formulario"
              className="btn-primary px-5 py-2.5 rounded-lg text-sm"
            >
              Evalúa tu caso →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#94a3b8" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <nav className="flex flex-col gap-1 pt-3">
              {[
                { href: "#por-que", label: "Tu derecho" },
                { href: "#formulario", label: "Consulta gratuita" },
                { href: "#faq", label: "Preguntas frecuentes" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 rounded-lg text-sm transition-colors hover:bg-white/5"
                  style={{ color: "#94a3b8" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#formulario"
                className="btn-primary mt-2 px-5 py-3 rounded-lg text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Evalúa tu caso gratis →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
