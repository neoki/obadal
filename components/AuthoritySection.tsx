import { BookOpen, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "+200.000", label: "Empleados públicos potencialmente afectados en España" },
  { icon: BookOpen, value: "C‑418/24", label: "Referencia oficial de la Sentencia Obadal del TJUE" },
  { icon: Trophy, value: "Gran Sala", label: "La formación más importante del Tribunal de Justicia de la UE" },
];

export function AuthoritySection() {
  return (
    <section className="bg-section-alt py-20 sm:py-24" id="autoridad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.2)" }}
              >
                <stat.icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
              </div>
              <div className="font-serif text-3xl font-bold mb-2" style={{ color: "#C9A84C" }}>
                {stat.value}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Authority block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(74, 144, 217, 0.1)", border: "1px solid rgba(74, 144, 217, 0.2)", color: "#4A90D9" }}>
              Especialistas en Empleo Público
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 gold-underline" style={{ color: "#f0f4f8" }}>
              Un equipo especializado en tu lado
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
              Esta iniciativa está impulsada por el{" "}
              <strong style={{ color: "#e2eaf4" }}>Área de Empleo Público</strong>, un equipo de abogados
              especializados con amplia experiencia en la defensa de los derechos de los empleados
              públicos frente a las administraciones.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
              Llevamos años siguiendo la evolución de la temporalidad abusiva en el sector público y
              hemos analizado en profundidad la <strong style={{ color: "#e2eaf4" }}>Sentencia Obadal
              (C‑418/24)</strong> desde su publicación. Conocemos las vías y los argumentos para
              defender tu caso.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
              La evaluación inicial es{" "}
              <strong style={{ color: "#C9A84C" }}>completamente gratuita y sin compromiso</strong>.
              Solo si tu caso tiene recorrido te propondremos una estrategia legal concreta.
            </p>
          </div>

          {/* Quote card */}
          <div className="glass-card rounded-2xl p-8 relative">
            <div
              className="absolute top-6 left-6 font-serif text-7xl leading-none opacity-20"
              style={{ color: "#C9A84C" }}
            >
              "
            </div>
            <blockquote className="relative z-10">
              <p className="font-serif text-xl leading-relaxed italic mb-6" style={{ color: "#e2eaf4" }}>
                El modelo de «indefinido no fijo» no es una medida equivalente a la fijeza y no repara
                de forma adecuada el abuso de temporalidad. Los empleados públicos tienen derecho a una
                reparación íntegra.
              </p>
              <footer>
                <cite className="text-sm not-italic font-semibold" style={{ color: "#C9A84C" }}>
                  Gran Sala del TJUE
                </cite>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                  Sentencia C‑418/24 · Obadal
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
