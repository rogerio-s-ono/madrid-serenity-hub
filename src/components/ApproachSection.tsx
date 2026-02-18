import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const pillars = [
  {
    numeral: "01",
    titleEs: "Rigor Clínico",
    titleEn: "Clinical Rigour",
    titlePt: "Rigor Clínico",
    descEs: "Métodos basados en evidencia — TCC, EMDR, terapia sistémica — adaptados con precisión a las realidades interculturales y a la complejidad emocional de las familias internacionales.",
    descEn: "Evidence-based methods — CBT, EMDR, systemic therapy — adapted with precision to intercultural realities and the emotional complexity of international families.",
    descPt: "Métodos baseados em evidências — TCC, EMDR, terapia sistêmica — adaptados com precisão às realidades interculturais e à complexidade emocional das famílias internacionais.",
  },
  {
    numeral: "02",
    titleEs: "Discreción Absoluta",
    titleEn: "Absolute Discretion",
    titlePt: "Discrição Absoluta",
    descEs: "La confidencialidad no es un protocolo — es el fundamento de nuestra relación. Cada sesión es un espacio protegido, sin filtros ni condicionantes externos.",
    descEn: "Confidentiality is not a protocol — it is the foundation of our relationship. Each session is a protected space, without filters or external conditions.",
    descPt: "A confidencialidade não é um protocolo — é o fundamento da nossa relação. Cada sessão é um espaço protegido.",
  },
  {
    numeral: "03",
    titleEs: "Perspectiva Internacional",
    titleEn: "International Perspective",
    titlePt: "Perspectiva Internacional",
    descEs: "Trabajo en español, inglés y portugués con familias de múltiples orígenes. Entiendo desde adentro la complejidad de vivir entre culturas en Madrid.",
    descEn: "I work in Spanish, English, and Portuguese with families of multiple backgrounds. I understand from within the complexity of living between cultures in Madrid.",
    descPt: "Trabalho em espanhol, inglês e português com famílias de múltiplas origens. Entendo por dentro a complexidade de viver entre culturas em Madrid.",
  },
];

const ApproachSection = () => {
  const { t, lang } = useLanguage();

  const heading =
    lang === "es" ? (
      <>Psicoterapia que sostiene<br /><em>a toda la familia</em></>
    ) : lang === "pt" ? (
      <>Psicoterapia que sustenta<br /><em>toda a família</em></>
    ) : (
      <>Psychotherapy that holds<br /><em>the whole family</em></>
    );

  return (
    <section id="approach" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 grid lg:grid-cols-2 gap-10 items-end"
        >
          <div>
            <p className="section-label mb-5">
              {t("Mi Enfoque", "My Approach", "Minha Abordagem")}
            </p>
            <h2 className="font-serif-display text-4xl font-light leading-[1.2] text-foreground lg:text-5xl">
              {heading}
            </h2>
          </div>
          <p className="font-sans-body text-[15px] font-light leading-[1.9] text-muted-foreground lg:pb-1">
            {t(
              "No existe un protocolo universal para las familias. Cada una llega con una historia única formada por culturas, lenguas y transiciones distintas. Mi trabajo es comprender esa complejidad con precisión — y acompañarles a través de ella.",
              "There is no universal protocol for families. Each one arrives with a unique story shaped by different cultures, languages, and transitions. My work is to understand that complexity with precision — and accompany them through it.",
              "Não existe um protocolo universal para as famílias. Cada uma chega com uma história única moldada por culturas, línguas e transições distintas. Meu trabalho é compreender essa complexidade com precisão — e acompanhá-las através dela."
            )}
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid gap-0 md:grid-cols-3 border-t border-border">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`py-12 pr-10 ${i > 0 ? "md:border-l md:border-border md:pl-10 md:pr-0" : ""}`}
            >
              <p className="font-serif-display mb-6 text-5xl font-light text-accent/25">{p.numeral}</p>
              <h3 className="font-serif-display mb-4 text-2xl font-light text-foreground">
                {t(p.titleEs, p.titleEn, p.titlePt)}
              </h3>
              <div className="mb-5 h-px w-10 bg-accent/40" />
              <p className="font-sans-body text-[14px] font-light leading-[1.85] text-muted-foreground">
                {t(p.descEs, p.descEn, p.descPt)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
