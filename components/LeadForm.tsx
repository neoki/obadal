"use client";

import { useActionState, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, MessageSquare, Shield } from "lucide-react";

const initialState = { success: false, message: "" };

export function LeadForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <section
      className="py-20 sm:py-28 relative"
      id="formulario"
      style={{ background: "linear-gradient(180deg, #0f2040 0%, #0A1628 50%, #050d1a 100%)" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.2)", color: "#C9A84C" }}
            >
              Consulta gratuita
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#f0f4f8" }}>
              ¿Tienes derecho a reclamar?{" "}
              <span className="gold-shimmer">Descúbrelo hoy.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Cuéntanos brevemente tu situación. Nuestros especialistas en Empleo Público analizarán
              tu caso de forma personalizada y te contactarán en{" "}
              <strong style={{ color: "#e2eaf4" }}>menos de 48 horas hábiles</strong>.
            </p>

            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: "Evaluación 100% gratuita y sin compromiso" },
                { icon: CheckCircle2, text: "Respuesta personalizada a tu situación" },
                { icon: CheckCircle2, text: "Si jubilado, cesado o estabilizado: también aplica" },
                { icon: Shield, text: "Tus datos están protegidos bajo el RGPD" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: i === 3 ? "#4A90D9" : "#22c55e" }}
                  />
                  <span className="text-sm" style={{ color: "#94a3b8" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card rounded-2xl p-8">
            <form ref={formRef} action={formAction} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "#94a3b8" }}
                >
                  Nombre completo <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#64748b" }} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre y apellidos"
                    className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "#94a3b8" }}
                >
                  Email <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#64748b" }} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "#94a3b8" }}
                >
                  Teléfono <span style={{ color: "#C9A84C" }}>*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#64748b" }} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+34 600 000 000"
                    className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Situation */}
              <div>
                <label
                  htmlFor="situation"
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "#94a3b8" }}
                >
                  Tu situación{" "}
                  <span className="text-xs normal-case font-normal" style={{ color: "#475569" }}>
                    (opcional, pero ayuda a agilizar tu caso)
                  </span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: "#64748b" }} />
                  <textarea
                    id="situation"
                    name="situation"
                    rows={3}
                    placeholder="Ej: Soy docente interino desde 2015, fui cesado en 2023 al no superar la oposición..."
                    className="form-input w-full pl-10 pr-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>
              </div>

              {/* Privacy checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-0.5 w-4 h-4 rounded accent-yellow-500 flex-shrink-0 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs leading-relaxed cursor-pointer" style={{ color: "#64748b" }}>
                  Acepto la{" "}
                  <a href="/privacidad" className="underline hover:no-underline" style={{ color: "#94a3b8" }}>
                    política de privacidad
                  </a>{" "}
                  y consiento el tratamiento de mis datos para recibir asesoramiento jurídico.{" "}
                  <span style={{ color: "#C9A84C" }}>*</span>
                </label>
              </div>

              {/* Feedback */}
              {state.message && (
                <div
                  className="flex items-start gap-3 p-4 rounded-xl text-sm"
                  style={{
                    background: state.success
                      ? "rgba(34, 197, 94, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                    border: `1px solid ${state.success ? "rgba(34, 197, 94, 0.25)" : "rgba(239, 68, 68, 0.25)"}`,
                    color: state.success ? "#4ade80" : "#f87171",
                  }}
                >
                  {state.success ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  )}
                  {state.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                id="form-submit"
                className="btn-primary w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Solicitar evaluación gratuita
                  </>
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "#475569" }}>
                🔒 Datos protegidos · Sin spam · Solo te contactaremos sobre tu caso
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
