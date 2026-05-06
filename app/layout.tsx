import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { faqs } from "@/lib/faq-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sentencia Obadal | Reclama tu Fijeza o Indemnización como Interino",
  description:
    "El TJUE falló a favor de los empleados públicos. Si sufriste abuso de temporalidad, puedes reclamar fijeza o indemnización sin topes. Evalúa tu caso gratis.",
  keywords: [
    "sentencia obadal",
    "abuso temporalidad empleados públicos",
    "reclamar fijeza interinos TJUE",
    "indemnización interinos sin topes",
    "TJUE C-418/24",
    "indefinido no fijo",
    "interinos empleo público",
    "ley 20/2021",
  ],
  authors: [{ name: "AfectadosObadal.com" }],
  metadataBase: new URL("https://afectadosobadal.com"),
  openGraph: {
    title: "Sentencia Obadal — Reclama tu Fijeza o Indemnización",
    description:
      "El TJUE ha fallado a tu favor. Si eres empleado público interino y sufriste abuso de temporalidad, actúa ahora. Consulta gratuita.",
    url: "https://afectadosobadal.com",
    siteName: "AfectadosObadal.com",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentencia Obadal — Reclama tus derechos como empleado público",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentencia Obadal — Reclama tu Fijeza o Indemnización",
    description:
      "El TJUE ha fallado a tu favor. Si eres empleado público interino y sufriste abuso de temporalidad, actúa ahora.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://afectadosobadal.com",
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "AfectadosObadal.com — Especialistas en Empleo Público",
  description:
    "Servicio de asesoramiento jurídico especializado en reclamaciones por abuso de temporalidad en el empleo público, basado en la Sentencia Obadal del TJUE (C-418/24).",
  url: "https://afectadosobadal.com",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  serviceType: "Asesoramiento Jurídico en Empleo Público",
  availableLanguage: "Spanish",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
