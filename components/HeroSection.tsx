import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-hero relative min-h-screen flex items-center pt-16" id="inicio">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4A90D9, transparent)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-4xl">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 badge-urgent px-4 py-2 rounded-full mb-8 animate-fade-in">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Sentencia histórica del TJUE — C‑418/24 · Obadal</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-delay-1"
            style={{ color: "#f0f4f8" }}
          >
            El Tribunal Europeo ha fallado{" "}
            <span className="gold-shimmer">a tu favor.</span>
            <br className="hidden sm:block" />
            <span style={{ color: "#f0f4f8" }}> Ahora toca actuar.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-4 animate-fade-in-delay-2"
            style={{ color: "#94a3b8" }}
          >
            Si eres empleado público interino y has sufrido{" "}
            <strong style={{ color: "#e2eaf4" }}>abuso de temporalidad</strong>, la Gran Sala del
            TJUE ha abierto la puerta a reclamar tu{" "}
            <strong style={{ color: "#e2eaf4" }}>fijeza</strong> o una{" "}
            <strong style={{ color: "#e2eaf4" }}>indemnización sin límites</strong>.
          </p>
          <p
            className="text-base max-w-xl leading-relaxed mb-10 animate-fade-in-delay-2"
            style={{ color: "#64748b" }}
          >
            La figura del «indefinido no fijo» ha quedado definitivamente cuestionada. Los plazos
            son limitados.
          </p>

          {/* Proof points */}
          <ul className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-delay-2">
            {[
              "Fijeza en tu puesto",
              "Indemnización sin topes",
              "Consulta 100% gratuita",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#22c55e" }} />
                <span className="text-sm font-medium" style={{ color: "#e2eaf4" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <a
              href="#formulario"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
              id="hero-cta-primary"
            >
              Evalúa tu caso gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#faq"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
              id="hero-cta-secondary"
            >
              ¿Qué dice el TJUE?
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0f2040)" }}
      />
    </section>
  );
}
