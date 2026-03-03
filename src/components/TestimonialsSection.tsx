import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

// Minimalistic SVG illustrations — one per testimonial
const IllustrationFamily = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Elegant house with pitched roof and chimney */}
    <path d="M40,90 L40,55 L70,32 L100,55 L100,90" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="38" y1="90" x2="102" y2="90" stroke="currentColor" strokeWidth="0.7" />
    <path d="M92,38 L92,32 L98,32 L98,45" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
    {/* Arched doorway */}
    <path d="M62,90 L62,72 Q62,65 70,65 Q78,65 78,72 L78,90" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <circle cx="75" cy="78" r="0.8" fill="currentColor" />
    {/* Mullioned windows */}
    <rect x="44" y="62" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="0.7" />
    <line x1="50" y1="62" x2="50" y2="72" stroke="currentColor" strokeWidth="0.5" />
    <line x1="44" y1="67" x2="56" y2="67" stroke="currentColor" strokeWidth="0.5" />
    <rect x="84" y="62" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="0.7" />
    <line x1="90" y1="62" x2="90" y2="72" stroke="currentColor" strokeWidth="0.5" />
    <line x1="84" y1="67" x2="96" y2="67" stroke="currentColor" strokeWidth="0.5" />
    {/* Garden path */}
    <path d="M66,90 Q68,98 70,105" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="1.5 2" />
    <path d="M74,90 Q72,98 70,105" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="1.5 2" />
    {/* Adult figure left */}
    <ellipse cx="130" cy="44" rx="4.5" ry="5.5" stroke="currentColor" strokeWidth="0.7" />
    <path d="M130,49.5 Q130,58 130,68" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M130,54 Q124,58 121,62" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M130,54 Q136,56 140,58" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M130,68 Q126,76 123,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M130,68 Q134,76 137,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    {/* Adult figure right */}
    <ellipse cx="152" cy="44" rx="4.5" ry="5.5" stroke="currentColor" strokeWidth="0.7" />
    <path d="M152,49.5 Q152,58 152,68" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M152,54 Q146,56 142,58" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M152,54 Q158,58 161,62" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M152,68 Q148,76 145,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M152,68 Q156,76 159,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    {/* Child between parents */}
    <ellipse cx="141" cy="53" rx="3.2" ry="4" stroke="currentColor" strokeWidth="0.6" />
    <path d="M141,57 Q141,63 141,70" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M141,61 Q137,64 135,66" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M141,61 Q145,64 147,66" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M141,70 Q138,76 136,80" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M141,70 Q144,76 146,80" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    {/* Held hands arcs */}
    <path d="M140,58 Q138,56 136,57" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
    <path d="M142,58 Q144,56 146,57" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
    {/* Refined heart */}
    <path d="M141,34 C141,34 138,30 135.5,31.5 C133,33 135,36 141,40 C147,36 149,33 146.5,31.5 C144,30 141,34 141,34Z" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6" />
    {/* Ground flourish */}
    <path d="M115,83 Q141,86 167,83" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.4" />
    {/* Shrub beside house */}
    <path d="M105,90 Q108,84 106,80 Q110,82 112,78 Q114,83 116,80 Q115,86 118,90" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const IllustrationCouple = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Figure left */}
    <ellipse cx="58" cy="36" rx="5" ry="6" stroke="currentColor" strokeWidth="0.8" />
    <path d="M53,34 Q54,28 58,27 Q62,28 63,34" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
    <path d="M58,42 Q58,52 58,64" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M58,48 Q51,53 47,58" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M58,48 Q65,52 72,54" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M58,64 Q53,74 49,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M58,64 Q63,74 67,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    {/* Figure right */}
    <ellipse cx="142" cy="36" rx="5" ry="6" stroke="currentColor" strokeWidth="0.8" />
    <path d="M137,34 Q138,28 142,27 Q146,28 147,34" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
    <path d="M142,42 Q142,52 142,64" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M142,48 Q135,52 128,54" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M142,48 Q149,53 153,58" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M142,64 Q137,74 133,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M142,64 Q147,74 151,82" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    {/* Flowing connection arcs */}
    <path d="M72,54 Q100,38 128,54" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
    <path d="M72,56 Q100,42 128,56" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.3" />
    {/* Intertwined hands */}
    <path d="M94,48 Q97,44 100,46 Q103,44 106,48" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M96,48 Q100,50 104,48" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.6" />
    {/* Ornate speech bubbles */}
    <ellipse cx="40" cy="20" rx="12" ry="8" stroke="currentColor" strokeWidth="0.6" />
    <path d="M46,27 Q44,32 47,34" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    <circle cx="34" cy="19" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="38" cy="21" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="42" cy="19" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="46" cy="21" r="0.8" fill="currentColor" opacity="0.5" />
    <ellipse cx="160" cy="20" rx="12" ry="8" stroke="currentColor" strokeWidth="0.6" />
    <path d="M154,27 Q156,32 153,34" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    <circle cx="154" cy="19" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="158" cy="21" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="162" cy="19" r="0.8" fill="currentColor" opacity="0.5" />
    <circle cx="166" cy="21" r="0.8" fill="currentColor" opacity="0.5" />
    {/* Decorative flourish */}
    <path d="M70,88 Q85,92 100,88 Q115,84 130,88" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.35" />
    <path d="M80,92 Q100,96 120,92" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.25" />
  </svg>
);

const IllustrationChildren = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Organic tree */}
    <path d="M100,100 Q100,85 98,70 Q97,60 100,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M99,80 Q98,75 99,70" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.4" />
    <path d="M101,85 Q102,78 101,72" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.4" />
    {/* Flowing branches */}
    <path d="M100,70 Q88,62 75,58" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M100,65 Q112,57 125,54" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M100,58 Q85,48 78,40" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M100,55 Q115,45 122,38" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M100,50 Q92,38 88,30" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    <path d="M100,50 Q108,38 112,30" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    {/* Ornamental language labels */}
    <ellipse cx="72" cy="54" rx="12" ry="7" stroke="currentColor" strokeWidth="0.6" />
    <path d="M60,54 L58,54" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.5" />
    <path d="M84,54 L86,54" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.5" />
    <text x="72" y="57" textAnchor="middle" fontSize="6.5" fill="currentColor" fontFamily="serif" style={{fontStyle:"italic", letterSpacing:"0.05em"}}>ES</text>
    <ellipse cx="128" cy="50" rx="12" ry="7" stroke="currentColor" strokeWidth="0.6" />
    <path d="M116,50 L114,50" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.5" />
    <path d="M140,50 L142,50" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.5" />
    <text x="128" y="53" textAnchor="middle" fontSize="6.5" fill="currentColor" fontFamily="serif" style={{fontStyle:"italic", letterSpacing:"0.05em"}}>EN</text>
    <ellipse cx="85" cy="36" rx="11" ry="7" stroke="currentColor" strokeWidth="0.6" />
    <path d="M74,36 L72,36" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.5" />
    <path d="M96,36 L98,36" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.5" />
    <text x="85" y="39" textAnchor="middle" fontSize="6.5" fill="currentColor" fontFamily="serif" style={{fontStyle:"italic", letterSpacing:"0.05em"}}>PT</text>
    {/* Child left */}
    <ellipse cx="40" cy="62" rx="4" ry="5" stroke="currentColor" strokeWidth="0.6" />
    <path d="M40,67 Q40,74 40,80" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M40,71 Q35,75 33,78" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M40,71 Q45,74 47,76" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M40,80 Q37,87 35,92" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M40,80 Q43,87 45,92" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M47,76 Q55,72 60,68" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
    {/* Child right */}
    <ellipse cx="160" cy="62" rx="4" ry="5" stroke="currentColor" strokeWidth="0.6" />
    <path d="M160,67 Q160,74 160,80" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M160,71 Q155,74 153,76" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M160,71 Q165,75 167,78" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M160,80 Q157,87 155,92" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M160,80 Q163,87 165,92" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M153,76 Q145,72 140,68" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
    {/* Roots */}
    <path d="M100,100 Q92,104 85,102" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
    <path d="M100,100 Q108,104 115,102" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
    {/* Decorative ground */}
    <path d="M25,93 Q60,97 100,93 Q140,89 175,93" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.3" />
    <path d="M35,96 Q70,99 100,96 Q130,93 165,96" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.2" />
    {/* Leaf accents */}
    <circle cx="75" cy="58" r="1.2" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <circle cx="125" cy="54" r="1.2" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <circle cx="78" cy="40" r="1" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <circle cx="122" cy="38" r="1" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <circle cx="88" cy="30" r="0.8" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <circle cx="112" cy="30" r="0.8" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
  </svg>
);

const illustrations = [IllustrationFamily, IllustrationCouple, IllustrationChildren];

const testimonials = [
  {
    quoteEs:
      "Cuando llegamos a Madrid, sentimos que perdíamos nuestra familia sin haber ganado aún un hogar. Tania nos ayudó a encontrar un nuevo centro — sin renunciar a ninguno de los dos mundos que habitamos.",
    quoteEn:
      "When we arrived in Madrid, we felt we were losing our family without yet having gained a home. Tania helped us find a new centre — without surrendering either of the two worlds we inhabit.",
    quotePt:
      "Quando chegamos a Madrid, sentíamos que estávamos perdendo nossa família sem ainda termos ganho um lar. Tania nos ajudou a encontrar um novo centro — sem renunciar a nenhum dos dois mundos que habitamos.",
    authorEs: "Familia brasileira residente en Madrid",
    authorEn: "Brazilian family residing in Madrid",
    authorPt: "Família brasileira residente em Madrid",
    yearsEs: "3 años en terapia",
    yearsEn: "3 years in therapy",
    yearsPt: "3 anos em terapia",
  },
  {
    quoteEs:
      "La reubicación sacó a la luz tensiones que llevaban años acumulándose. El proceso con Tania nos devolvió el lenguaje para hablarnos — y la claridad para saber por qué queríamos seguir juntos.",
    quoteEn:
      "The relocation brought to light tensions that had been building for years. The process with Tania gave us back the language to speak to each other — and the clarity to know why we wanted to stay together.",
    quotePt:
      "A realocação trouxe à tona tensões que vinham se acumulando há anos. O processo com Tania nos devolveu a linguagem para nos falar — e a clareza para saber por que queríamos continuar juntos.",
    authorEs: "Pareja internacional, Madrid",
    authorEn: "International couple, Madrid",
    authorPt: "Casal internacional, Madrid",
    yearsEs: "18 meses en terapia de pareja",
    yearsEn: "18 months in couples therapy",
    yearsPt: "18 meses em terapia de casal",
  },
  {
    quoteEs:
      "Mis hijos crecen entre tres idiomas y dos culturas. Lo que parecía una ventaja se convertía a veces en una carga. Tania nos enseñó a ver la riqueza donde antes veíamos confusión.",
    quoteEn:
      "My children are growing up between three languages and two cultures. What seemed like an advantage sometimes became a burden. Tania taught us to see the richness where we once saw confusion.",
    quotePt:
      "Meus filhos crescem entre três idiomas e duas culturas. O que parecia uma vantagem às vezes se tornava um fardo. Tania nos ensinou a ver a riqueza onde antes víamos confusão.",
    authorEs: "Madre portuguesa, expatriada en Madrid",
    authorEn: "Portuguese mother, expatriate in Madrid",
    authorPt: "Mãe portuguesa, expatriada em Madrid",
    yearsEs: "2 años de acompañamiento familiar",
    yearsEn: "2 years of family support",
    yearsPt: "2 anos de acompanhamento familiar",
  },
];

const TrustpilotStars = () => (
  <div className="flex flex-col items-center gap-3 mt-14 pt-10 border-t border-primary-foreground/10">
    {/* Stars row */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="#00b67a" />
          <path
            d="M12 2l2.09 6.26H20.18l-5.14 3.74 1.96 6.26L12 14.51l-5 3.75 1.96-6.26L3.82 8.26H9.91L12 2z"
            fill="white"
          />
        </svg>
      ))}
    </div>
    {/* Trustpilot label */}
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#00b67a" />
        <path d="M12 2l2.09 6.26H20.18l-5.14 3.74 1.96 6.26L12 14.51l-5 3.75 1.96-6.26L3.82 8.26H9.91L12 2z" fill="white" />
      </svg>
      <span
        className="font-sans-body text-[10px] font-light uppercase tracking-[0.22em]"
        style={{ color: "hsl(var(--primary-foreground))", opacity: 0.45 }}
      >
        Trustpilot · 5.0
      </span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > active ? 1 : -1));
      setActive(index);
    },
    [active]
  );

  const next = useCallback(() => {
    const nextIndex = (active + 1) % testimonials.length;
    goTo(nextIndex, 1);
  }, [active, goTo]);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const item = testimonials[active];
  const quote = lang === "es" ? item.quoteEs : lang === "pt" ? item.quotePt : item.quoteEn;
  const author = lang === "es" ? item.authorEs : lang === "pt" ? item.authorPt : item.authorEn;
  const years = lang === "es" ? item.yearsEs : lang === "pt" ? item.yearsPt : item.yearsEn;
  const Illustration = illustrations[active];

  return (
    <section className="bg-primary py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-8">

        {/* Header row: icon + label LEFT — Trustpilot RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 flex items-center justify-between"
        >
          {/* Left: icon + label */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "hsl(var(--gold))" }}>
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p
              className="font-serif-display text-2xl font-light italic"
              style={{ color: "hsl(var(--gold-light))" }}
            >
              {t("Experiencias", "Experiences", "Experiências")}
            </p>
            <div className="gold-line w-10 ml-2" style={{ opacity: 0.5 }} />
          </div>

          {/* Right: Trustpilot */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="#00b67a" />
                  <path d="M12 2l2.09 6.26H20.18l-5.14 3.74 1.96 6.26L12 14.51l-5 3.75 1.96-6.26L3.82 8.26H9.91L12 2z" fill="white" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="#00b67a" />
                <path d="M12 2l2.09 6.26H20.18l-5.14 3.74 1.96 6.26L12 14.51l-5 3.75 1.96-6.26L3.82 8.26H9.91L12 2z" fill="white" />
              </svg>
              <span
                className="font-sans-body text-[9px] font-light uppercase tracking-[0.2em]"
                style={{ color: "hsl(var(--primary-foreground))", opacity: 0.4 }}
              >
                Trustpilot · 5.0
              </span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial card — illustration left, text right */}
        <div className="relative min-h-[260px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="w-full grid md:grid-cols-[1fr_2.5fr] gap-8 md:gap-14 items-center"
            >
              {/* Illustration */}
              <div
                className="hidden md:flex items-center justify-center h-40"
                style={{ color: "hsl(var(--gold-light))", opacity: 0.55 }}
              >
                <Illustration />
              </div>

              {/* Quote content */}
              <div>
                {/* Opening quote mark */}
                <div
                  className="font-serif-display mb-3 leading-none select-none"
                  style={{ fontSize: "3rem", lineHeight: 1, color: "hsl(var(--gold-light))", opacity: 0.45 }}
                >
                  "
                </div>

                <blockquote className="mb-6">
                  <p className="font-serif-display text-lg font-light leading-[1.75] text-primary-foreground md:text-xl lg:text-[1.35rem]">
                    {quote}
                  </p>
                </blockquote>

                <div className="flex flex-col gap-1.5">
                  <div className="gold-line w-10 opacity-60" />
                  <p className="font-sans-body mt-2 text-[11px] font-light uppercase tracking-[0.22em] text-primary-foreground/60">
                    {author}
                  </p>
                  <p
                    className="font-sans-body text-[10px] font-light uppercase tracking-[0.18em]"
                    style={{ color: "hsl(var(--gold-light))", opacity: 0.75 }}
                  >
                    {years}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="group relative flex h-6 w-6 items-center justify-center"
            >
              <span
                className="block h-1 transition-all duration-400"
                style={{
                  width: i === active ? "2rem" : "0.5rem",
                  background:
                    i === active
                      ? "linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold)), hsl(var(--gold-light)))"
                      : "hsl(var(--border))",
                  opacity: i === active ? 1 : 0.6,
                }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
