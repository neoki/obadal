import { Scale, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ background: "#050d1a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #C9A84C, #d4b56a)" }}>
                <Scale className="w-4 h-4" style={{ color: "#050d1a" }} />
              </div>
              <span className="font-serif text-lg font-bold" style={{ color: "#f0f4f8" }}>
                Afectados<span style={{ color: "#C9A84C" }}>Obadal</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }}>
              Información y asesoramiento jurídico especializado para empleados públicos afectados
              por el abuso de temporalidad. Sentencia TJUE C‑418/24.
            </p>
            <p className="text-xs" style={{ color: "#334155" }}>
              Servicio prestado por el Área de Empleo Público de{" "}
              <a
                href="https://vento.es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline transition-colors"
                style={{ color: "#475569" }}
              >
                Vento Abogados
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#94a3b8" }}>
              Información
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "La Sentencia Obadal" },
                { href: "#por-que", label: "Tus derechos" },
                { href: "#formulario", label: "Consulta gratuita" },
                { href: "#faq", label: "Preguntas frecuentes" },
                { href: "/privacidad", label: "Política de privacidad" },
                { href: "/aviso-legal", label: "Aviso legal" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: "#475569" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#94a3b8" }}>
              Contacto directo
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:empleo@vento.es"
                className="flex items-center gap-3 text-sm group transition-colors"
                style={{ color: "#475569" }}
              >
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(201, 168, 76, 0.08)", border: "1px solid rgba(201, 168, 76, 0.15)" }}
                >
                  <Mail className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
                </div>
                <span className="group-hover:underline">empleo@vento.es</span>
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: "#475569" }}>
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(201, 168, 76, 0.08)", border: "1px solid rgba(201, 168, 76, 0.15)" }}
                >
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
                </div>
                <span>España · Atención nacional</span>
              </div>
            </div>

            {/* Urgency note */}
            <div
              className="mt-6 p-4 rounded-xl text-sm"
              style={{ background: "rgba(201, 168, 76, 0.06)", border: "1px solid rgba(201, 168, 76, 0.15)" }}
            >
              <p className="font-semibold mb-1" style={{ color: "#C9A84C" }}>
                ⏱ Los plazos son limitados
              </p>
              <p style={{ color: "#64748b", fontSize: "12px" }}>
                Las acciones legales por abuso de temporalidad tienen plazos de prescripción.
                No lo dejes para después.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "#334155" }}>
            © {currentYear} AfectadosObadal.com — Todos los derechos reservados
          </p>
          <p className="text-xs text-center" style={{ color: "#334155" }}>
            La información de esta web tiene carácter orientativo y no sustituye al asesoramiento
            jurídico individualizado.
          </p>
          <a
            href="https://vento.es"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-70"
            style={{ color: "#334155" }}
          >
            Vento Abogados
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
