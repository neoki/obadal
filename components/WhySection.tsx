import { Gavel, TrendingUp, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: Gavel,
    title: "Reclamar la Fijeza",
    description:
      "La sentencia obliga a los tribunales españoles a reconocer la fijeza como medida reparadora prioritaria. Si llevas años en temporalidad abusiva, tu plaza podría convertirse en indefinida de pleno derecho.",
    highlight: "La vía más sólida a largo plazo",
  },
  {
    icon: TrendingUp,
    title: "Indemnización Sin Topes",
    description:
      "Los 20 o 33 días por año que se venían aplicando quedan obsoletos. Ahora puedes reclamar una reparación íntegra que cubra todos los daños reales sufridos: económicos, profesionales y personales, sin límite máximo.",
    highlight: "Sin el corsé de la legislación española",
  },
  {
    icon: UserCheck,
    title: "Asesoramiento Individualizado",
    description:
      "Cada situación es distinta. Si te jubilaste, dimitiste, te cesaron o estás estabilizado: todos tenéis derechos. Te analizamos el caso en detalle y te decimos qué acción concreta puedes emprender.",
    highlight: "Evaluación gratuita y sin compromiso",
  },
];

export function WhySection() {
  return (
    <section className="bg-section-dark py-20 sm:py-24 relative" id="por-que">
      {/* Decorative element */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.2)", color: "#C9A84C" }}
          >
            Por qué actuar ahora
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#f0f4f8" }}>
            Tres caminos abiertos{" "}
            <br />
            <span className="gold-shimmer">por el TJUE</span>
          </h2>
          <div className="gold-divider mt-6 mb-6" />
          <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
            La Sentencia Obadal no es una promesa vaga. Establece obligaciones concretas para los
            tribunales españoles. Estas son las tres vías reales que tienes disponibles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col">
              {/* Number */}
              <div className="text-xs font-bold mb-5 opacity-30" style={{ color: "#C9A84C" }}>
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(201, 168, 76, 0.15), rgba(201, 168, 76, 0.05))", border: "1px solid rgba(201, 168, 76, 0.2)" }}
              >
                <reason.icon className="w-6 h-6" style={{ color: "#C9A84C" }} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#f0f4f8" }}>
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#94a3b8" }}>
                {reason.description}
              </p>

              {/* Highlight */}
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold mt-auto"
                style={{ background: "rgba(201, 168, 76, 0.08)", border: "1px solid rgba(201, 168, 76, 0.15)", color: "#C9A84C" }}
              >
                ✦ {reason.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#formulario"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
            id="why-cta"
          >
            Quiero saber si tengo caso →
          </a>
        </div>
      </div>
    </section>
  );
}
