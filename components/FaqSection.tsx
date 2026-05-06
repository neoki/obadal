"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-section-alt py-20 sm:py-24 relative" id="faq">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(74, 144, 217, 0.3), transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(74, 144, 217, 0.1)", border: "1px solid rgba(74, 144, 217, 0.2)", color: "#4A90D9" }}
          >
            Tus dudas, resueltas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#f0f4f8" }}>
            Preguntas frecuentes sobre la{" "}
            <span className="gold-shimmer">Sentencia Obadal</span>
          </h2>
          <div className="gold-divider mt-6 mb-6" />
          <p className="text-base" style={{ color: "#94a3b8" }}>
            Todo lo que necesitas saber sobre tus derechos como empleado público interino.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden transition-all duration-200"
              style={{
                borderColor: openIndex === i ? "rgba(201, 168, 76, 0.35)" : "rgba(255, 255, 255, 0.08)",
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-white/5"
                aria-expanded={openIndex === i}
                id={`faq-btn-${i}`}
              >
                <span className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{
                      background: openIndex === i ? "rgba(201, 168, 76, 0.2)" : "rgba(255, 255, 255, 0.06)",
                      color: openIndex === i ? "#C9A84C" : "#64748b",
                      border: `1px solid ${openIndex === i ? "rgba(201, 168, 76, 0.4)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm sm:text-base font-semibold leading-snug"
                    style={{ color: openIndex === i ? "#f0f4f8" : "#cbd5e1" }}
                  >
                    {faq.question}
                  </span>
                </span>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300"
                  style={{
                    color: openIndex === i ? "#C9A84C" : "#475569",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-content-${i}`}
                className="accordion-content"
                style={{ maxHeight: openIndex === i ? "500px" : "0" }}
              >
                <div
                  className="px-5 sm:px-6 pb-5 sm:pb-6 ml-9"
                  style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
                >
                  <p className="text-sm leading-relaxed pt-4" style={{ color: "#94a3b8" }}>
                    {faq.answer}
                  </p>
                  {/* CTA inside last FAQ */}
                  {i === faqs.length - 1 && (
                    <div className="mt-5">
                      <a
                        href="#formulario"
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                        id={`faq-cta-${i}`}
                      >
                        Solicitar consulta gratuita →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#64748b" }}>
            ¿Tu pregunta no está aquí? Escríbenos directamente.
          </p>
          <a
            href="#formulario"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
            id="faq-bottom-cta"
          >
            Consultar mi caso específico →
          </a>
        </div>
      </div>
    </section>
  );
}
