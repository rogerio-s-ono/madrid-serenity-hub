import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

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

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
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

  return (
    <section className="bg-primary py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-2xl px-8">
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

        {/* Testimonial card */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Opening quote mark */}
              <div
                className="font-serif-display mb-6 text-center leading-none select-none"
                style={{
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: "hsl(var(--gold-light))",
                  opacity: 0.45,
                }}
              >
                "
              </div>

              <blockquote className="mb-10 text-center">
                <p className="font-serif-display mx-auto max-w-2xl text-xl font-light leading-[1.75] text-primary-foreground md:text-2xl lg:text-[1.6rem]">
                  {quote}
                </p>
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <div className="gold-line w-10 opacity-60" />
                <p className="font-sans-body mt-3 text-[11px] font-light uppercase tracking-[0.22em] text-primary-foreground/60">
                  {author}
                </p>
                <p
                  className="font-sans-body text-[10px] font-light uppercase tracking-[0.18em]"
                  style={{ color: "hsl(var(--gold-light))", opacity: 0.75 }}
                >
                  {years}
                </p>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
