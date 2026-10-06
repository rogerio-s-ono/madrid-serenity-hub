import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

// Minimalistic SVG illustrations — one per testimonial
const IllustrationFamily = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Cozy premium house */}
    <path d="M34 98V56L72 28L110 56V98" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 98H116" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M98 41V31H106V51" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 98V76C66 70 70 66 76 66C82 66 86 70 86 76V98" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <circle cx="82" cy="82" r="1.2" fill="currentColor" />

    {/* Windows + curtain scratches */}
    <rect x="44" y="66" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1" />
    <line x1="51" y1="66" x2="51" y2="78" stroke="currentColor" strokeWidth="0.8" />
    <line x1="44" y1="72" x2="58" y2="72" stroke="currentColor" strokeWidth="0.8" />
    <path d="M44 66C46 68 47 69 51 70" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
    <path d="M58 66C56 68 55 69 51 70" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />

    <rect x="86" y="66" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1" />
    <line x1="93" y1="66" x2="93" y2="78" stroke="currentColor" strokeWidth="0.8" />
    <line x1="86" y1="72" x2="100" y2="72" stroke="currentColor" strokeWidth="0.8" />

    {/* Family with comfy expressions */}
    <ellipse cx="146" cy="46" rx="6" ry="7" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="144" cy="46" r="0.7" fill="currentColor" />
    <circle cx="148" cy="46" r="0.7" fill="currentColor" />
    <path d="M144 49C145 50.5 147 50.5 148 49" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M146 53V72" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M146 58C140 61 136 64 133 68" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M146 58C151 61 156 63 160 64" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M146 72C142 80 139 87 136 94" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M146 72C150 80 153 87 156 94" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

    <ellipse cx="174" cy="46" rx="6" ry="7" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="172" cy="46" r="0.7" fill="currentColor" />
    <circle cx="176" cy="46" r="0.7" fill="currentColor" />
    <path d="M172 49C173 50.5 175 50.5 176 49" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M174 53V72" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M174 58C169 61 164 63 160 64" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M174 58C180 61 184 64 187 68" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M174 72C170 80 167 87 164 94" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M174 72C178 80 181 87 184 94" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

    <ellipse cx="160" cy="58" rx="4.3" ry="5.2" stroke="currentColor" strokeWidth="1" />
    <circle cx="158.6" cy="58" r="0.6" fill="currentColor" />
    <circle cx="161.4" cy="58" r="0.6" fill="currentColor" />
    <path d="M158.7 60.8C159.4 61.8 160.6 61.8 161.3 60.8" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M160 63.4V77" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M160 67C156 70 154 72 152 74" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M160 67C164 70 166 72 168 74" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M160 77C157 83 155 88 153 92" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M160 77C163 83 165 88 167 92" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />

    <path d="M152 65C154 63 156 63 158 64" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    <path d="M168 65C166 63 164 63 162 64" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    <path d="M160 34C160 34 156.5 29.5 153.5 31.3C150.5 33.2 152.7 37 160 41.4C167.3 37 169.5 33.2 166.5 31.3C163.5 29.5 160 34 160 34Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
    <path d="M130 95C145 99 161 99 190 95" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />
  </svg>
);

const IllustrationCouple = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left person */}
    <ellipse cx="66" cy="40" rx="6" ry="7" stroke="currentColor" strokeWidth="1.1" />
    <path d="M60 38C61 32 64 30 66 30C69 30 71 32 72 38" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <circle cx="64" cy="40" r="0.7" fill="currentColor" />
    <circle cx="68" cy="40" r="0.7" fill="currentColor" />
    <path d="M64 43C65 44.5 67 44.5 68 43" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M66 47V70" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M66 54C59 59 54 64 50 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M66 54C73 58 79 61 87 63" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M66 70C61 79 57 88 53 97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M66 70C71 79 75 88 79 97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

    {/* Right person */}
    <ellipse cx="154" cy="40" rx="6" ry="7" stroke="currentColor" strokeWidth="1.1" />
    <path d="M148 38C149 32 152 30 154 30C157 30 159 32 160 38" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <circle cx="152" cy="40" r="0.7" fill="currentColor" />
    <circle cx="156" cy="40" r="0.7" fill="currentColor" />
    <path d="M152 43C153 44.5 155 44.5 156 43" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <path d="M154 47V70" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M154 54C147 58 141 61 133 63" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M154 54C161 59 166 64 170 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M154 70C149 79 145 88 141 97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M154 70C159 79 163 88 167 97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

    {/* Comfy connection */}
    <path d="M86 62C102 52 118 52 134 62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    <path d="M88 66C102 58 118 58 132 66" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
    <path d="M101 56C104 52 108 52 111 56C114 52 118 52 121 56" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />

    {/* Speech bubbles */}
    <ellipse cx="44" cy="22" rx="14" ry="9" stroke="currentColor" strokeWidth="0.9" />
    <path d="M50 30C48 35 50 37 54 38" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <circle cx="36" cy="21" r="1" fill="currentColor" opacity="0.55" />
    <circle cx="41" cy="23" r="1" fill="currentColor" opacity="0.55" />
    <circle cx="46" cy="21" r="1" fill="currentColor" opacity="0.55" />
    <circle cx="51" cy="23" r="1" fill="currentColor" opacity="0.55" />

    <ellipse cx="176" cy="22" rx="14" ry="9" stroke="currentColor" strokeWidth="0.9" />
    <path d="M170 30C172 35 170 37 166 38" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
    <circle cx="168" cy="21" r="1" fill="currentColor" opacity="0.55" />
    <circle cx="173" cy="23" r="1" fill="currentColor" opacity="0.55" />
    <circle cx="178" cy="21" r="1" fill="currentColor" opacity="0.55" />
    <circle cx="183" cy="23" r="1" fill="currentColor" opacity="0.55" />

    <path d="M70 102C84 106 97 108 110 104C123 100 136 102 150 106" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const IllustrationChildren = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Tree */}
    <path d="M110 106C110 90 108 76 106 62C105 54 107 46 110 40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M108 88C107 83 107 78 108 73" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
    <path d="M112 92C113 84 112 78 111 71" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
    <path d="M109 70C94 62 82 58 68 56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M111 64C126 56 138 52 152 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M109 58C95 48 88 42 80 34" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M111 54C125 44 132 38 140 30" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />

    {/* Language leaves */}
    <ellipse cx="66" cy="54" rx="13" ry="8" stroke="currentColor" strokeWidth="0.9" />
    <text x="66" y="57" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif" style={{ fontStyle: "italic", letterSpacing: "0.06em" }}>ES</text>
    <ellipse cx="154" cy="49" rx="13" ry="8" stroke="currentColor" strokeWidth="0.9" />
    <text x="154" y="52" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif" style={{ fontStyle: "italic", letterSpacing: "0.06em" }}>EN</text>
    <ellipse cx="84" cy="32" rx="12" ry="8" stroke="currentColor" strokeWidth="0.9" />
    <text x="84" y="35" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif" style={{ fontStyle: "italic", letterSpacing: "0.06em" }}>PT</text>

    {/* Left child */}
    <ellipse cx="36" cy="68" rx="5" ry="6" stroke="currentColor" strokeWidth="1" />
    <circle cx="34.5" cy="68" r="0.6" fill="currentColor" />
    <circle cx="37.5" cy="68" r="0.6" fill="currentColor" />
    <path d="M34.8 71C35.6 72.2 36.8 72.2 37.4 71" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M36 74V90" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M36 79C30 84 27 88 25 92" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M36 79C42 83 45 86 47 89" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M36 90C33 98 31 104 29 110" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M36 90C39 98 41 104 43 110" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />

    {/* Right child */}
    <ellipse cx="184" cy="68" rx="5" ry="6" stroke="currentColor" strokeWidth="1" />
    <circle cx="182.5" cy="68" r="0.6" fill="currentColor" />
    <circle cx="185.5" cy="68" r="0.6" fill="currentColor" />
    <path d="M182.8 71C183.6 72.2 184.8 72.2 185.4 71" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M184 74V90" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M184 79C178 83 175 86 173 89" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M184 79C190 84 193 88 195 92" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M184 90C181 98 179 104 177 110" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M184 90C187 98 189 104 191 110" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />

    <path d="M47 89C56 82 64 76 74 70" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="2 2" opacity="0.55" />
    <path d="M173 89C164 82 156 76 146 70" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="2 2" opacity="0.55" />

    <path d="M110 106C101 111 92 112 84 109" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <path d="M110 106C119 111 128 112 136 109" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <path d="M20 112C52 118 84 119 110 113C136 107 168 108 200 112" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
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
  const [paused, setPaused] = useState(false);

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

  // Auto-rotate every 10 seconds — pauses on hover and respects prefers-reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReduced) return;
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next, paused]);

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
        <div
          className="relative min-h-[260px] flex items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
          aria-atomic="true"
        >
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
                aria-hidden="true"
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
