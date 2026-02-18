import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

// Minimalistic SVG illustrations — one per testimonial
const IllustrationFamily = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* House */}
    <polyline points="30,65 30,40 55,22 80,40 80,65" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="30" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    {/* Door */}
    <rect x="48" y="50" width="14" height="15" rx="0.5" stroke="currentColor" strokeWidth="0.9" />
    {/* Window */}
    <rect x="35" y="45" width="9" height="9" rx="0.5" stroke="currentColor" strokeWidth="0.9" />
    <line x1="39.5" y1="45" x2="39.5" y2="54" stroke="currentColor" strokeWidth="0.7" />
    <line x1="35" y1="49.5" x2="44" y2="49.5" stroke="currentColor" strokeWidth="0.7" />
    {/* Adult figure left */}
    <circle cx="100" cy="38" r="5" stroke="currentColor" strokeWidth="0.9" />
    <line x1="100" y1="43" x2="100" y2="58" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="100" y1="48" x2="93" y2="54" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="100" y1="48" x2="107" y2="52" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="100" y1="58" x2="94" y2="66" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="100" y1="58" x2="106" y2="66" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    {/* Adult figure right */}
    <circle cx="118" cy="38" r="5" stroke="currentColor" strokeWidth="0.9" />
    <line x1="118" y1="43" x2="118" y2="58" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="118" y1="48" x2="111" y2="54" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="118" y1="48" x2="125" y2="52" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="118" y1="58" x2="112" y2="66" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="118" y1="58" x2="124" y2="66" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    {/* Child figure small */}
    <circle cx="109" cy="45" r="3.5" stroke="currentColor" strokeWidth="0.8" />
    <line x1="109" y1="48.5" x2="109" y2="59" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="109" y1="52" x2="104" y2="56" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="109" y1="52" x2="114" y2="56" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="109" y1="59" x2="105" y2="65" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="109" y1="59" x2="113" y2="65" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    {/* Heart above */}
    <path d="M109,31 C109,31 106,27 103.5,29 C101,31 103,34 109,37 C115,34 117,31 114.5,29 C112,27 109,31 109,31Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
  </svg>
);

const IllustrationCouple = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Figure left */}
    <circle cx="50" cy="32" r="6" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="38" x2="50" y2="56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="50" y1="44" x2="42" y2="52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="50" y1="44" x2="62" y2="50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="50" y1="56" x2="44" y2="66" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="50" y1="56" x2="56" y2="66" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    {/* Figure right */}
    <circle cx="110" cy="32" r="6" stroke="currentColor" strokeWidth="1" />
    <line x1="110" y1="38" x2="110" y2="56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="110" y1="44" x2="98" y2="50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="110" y1="44" x2="118" y2="52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="110" y1="56" x2="104" y2="66" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="110" y1="56" x2="116" y2="66" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    {/* Bridge/connection between them — speech path */}
    <path d="M62,50 Q80,38 98,50" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="3 2" />
    {/* Clasped hands in center */}
    <path d="M75,52 Q80,48 85,52" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    {/* Small dialogue bubbles */}
    <ellipse cx="38" cy="20" rx="10" ry="7" stroke="currentColor" strokeWidth="0.8" />
    <path d="M40,27 L38,32" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <ellipse cx="122" cy="20" rx="10" ry="7" stroke="currentColor" strokeWidth="0.8" />
    <path d="M120,27 L122,32" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    {/* Dots inside bubbles */}
    <circle cx="33" cy="20" r="1" fill="currentColor" />
    <circle cx="38" cy="20" r="1" fill="currentColor" />
    <circle cx="43" cy="20" r="1" fill="currentColor" />
    <circle cx="117" cy="20" r="1" fill="currentColor" />
    <circle cx="122" cy="20" r="1" fill="currentColor" />
    <circle cx="127" cy="20" r="1" fill="currentColor" />
  </svg>
);

const IllustrationChildren = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Tree trunk */}
    <line x1="80" y1="75" x2="80" y2="50" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    {/* Branches */}
    <line x1="80" y1="65" x2="60" y2="55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="80" y1="60" x2="100" y2="50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="80" y1="55" x2="65" y2="42" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="80" y1="55" x2="95" y2="42" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="80" y1="50" x2="72" y2="35" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="80" y1="50" x2="88" y2="35" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    {/* Language flags / leaves as speech bubbles with letters */}
    <ellipse cx="58" cy="50" rx="9" ry="6" stroke="currentColor" strokeWidth="0.8" />
    <text x="58" y="53" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif" style={{fontStyle:"italic"}}>ES</text>
    <ellipse cx="102" cy="46" rx="9" ry="6" stroke="currentColor" strokeWidth="0.8" />
    <text x="102" y="49" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif" style={{fontStyle:"italic"}}>EN</text>
    <ellipse cx="68" cy="38" rx="9" ry="6" stroke="currentColor" strokeWidth="0.8" />
    <text x="68" y="41" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif" style={{fontStyle:"italic"}}>PT</text>
    {/* Child figure left */}
    <circle cx="35" cy="58" r="5" stroke="currentColor" strokeWidth="0.9" />
    <line x1="35" y1="63" x2="35" y2="75" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="35" y1="67" x2="29" y2="73" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="35" y1="67" x2="41" y2="71" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="35" y1="75" x2="30" y2="82" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="35" y1="75" x2="40" y2="82" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    {/* Child figure right */}
    <circle cx="125" cy="58" r="5" stroke="currentColor" strokeWidth="0.9" />
    <line x1="125" y1="63" x2="125" y2="75" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="125" y1="67" x2="119" y2="71" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="125" y1="67" x2="131" y2="73" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="125" y1="75" x2="120" y2="82" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="125" y1="75" x2="130" y2="82" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    {/* Ground line */}
    <line x1="20" y1="83" x2="140" y2="83" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="2 3" />
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
    <section className="bg-primary py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-4xl px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-5" style={{ color: "hsl(var(--gold-light))" }}>
            {t("Experiencias", "Experiences", "Experiências")}
          </p>
          <div className="gold-line mx-auto w-14" />
        </motion.div>

        {/* Testimonial card — illustration left, text right */}
        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="w-full grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-center"
            >
              {/* Illustration */}
              <div
                className="hidden md:flex items-center justify-center h-48"
                style={{ color: "hsl(var(--gold-light))", opacity: 0.55 }}
              >
                <Illustration />
              </div>

              {/* Quote content */}
              <div>
                {/* Opening quote mark */}
                <div
                  className="font-serif-display mb-4 leading-none select-none"
                  style={{
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "hsl(var(--gold-light))",
                    opacity: 0.45,
                  }}
                >
                  "
                </div>

                <blockquote className="mb-8">
                  <p className="font-serif-display text-xl font-light leading-[1.75] text-primary-foreground md:text-[1.35rem] lg:text-[1.5rem]">
                    {quote}
                  </p>
                </blockquote>

                <div className="flex flex-col gap-2">
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
        <div className="mt-12 flex justify-center gap-3">
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

        {/* Trustpilot 5-star rating */}
        <TrustpilotStars />
      </div>
    </section>
  );
};

export default TestimonialsSection;
