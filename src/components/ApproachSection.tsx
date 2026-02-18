import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const pillars = [
  {
    numeral: "01",
    titleEs: "Rigor Clínico",
    titleEn: "Clinical Rigour",
    titlePt: "Rigor Clínico",
    descEs: "Métodos basados en evidencia — TCC, EMDR, terapia sistémica — adaptados a contextos interculturales y de alta exigencia.",
    descEn: "Evidence-based methods — CBT, EMDR, systemic therapy — adapted to intercultural and high-performance contexts.",
    descPt: "Métodos baseados em evidências — TCC, EMDR, terapia sistêmica — adaptados a contextos interculturais e de alta exigência.",
  },
  {
    numeral: "02",
    titleEs: "Discreción Absoluta",
    titleEn: "Absolute Discretion",
    titlePt: "Discrição Absoluta",
    descEs: "La confidencialidad no es un protocolo — es el fundamento de nuestra relación. Cada sesión es un espacio protegido, sin filtros ni condicionantes.",
    descEn: "Confidentiality is not a protocol — it is the foundation of our relationship. Each session is a protected space, without filters or conditions.",
    descPt: "A confidencialidade não é um protocolo — é o fundamento da nossa relação. Cada sessão é um espaço protegido, sem filtros nem condicionantes.",
  },
  {
    numeral: "03",
    titleEs: "Perspectiva Internacional",
    titleEn: "International Perspective",
    titlePt: "Perspectiva Internacional",
    descEs: "Trabajo en español, inglés y portugués con familias de múltiples orígenes. Entiendo desde adentro la complejidad de vivir entre culturas en una ciudad como Madrid.",
    descEn: "I work in Spanish, English, and Portuguese with families of multiple backgrounds. I understand from the inside the complexity of living between cultures in a city like Madrid.",
    descPt: "Trabalho em espanhol, inglês e português com famílias de múltiplas origens. Entendo por dentro a complexidade de viver entre culturas em uma cidade como Madrid.",
  },
];

const ApproachSection = () => {
  const { t } = useLanguage();

  return (
    <section id="approach" className="bg-background py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-light uppercase tracking-[0.25em] text-accent">
            {t("Mi Enfoque", "My Approach", "Minha Abordagem")}
          </p>
          <h2 className="mb-4 font-serif-display text-4xl font-medium text-foreground">
            {t(
              "Psicoterapia de alta exigencia, para vidas de alta exigencia",
              "High-calibre psychotherapy for high-calibre lives",
              "Psicoterapia de alta exigência, para vidas de alta exigência"
            )}
          </h2>
          <div className="gold-line mx-auto mb-8 w-16" />
          <p className="mx-auto max-w-2xl font-light leading-relaxed text-muted-foreground">
            {t(
              "No existe un protocolo universal. Cada persona, cada familia, llega con una historia única formada por culturas, expectativas y transiciones distintas. Mi trabajo es comprender esa complejidad con precisión — y acompañarte a través de ella.",
              "There is no universal protocol. Each person, each family, arrives with a unique story shaped by different cultures, expectations, and transitions. My work is to understand that complexity with precision — and accompany you through it.",
              "Não existe um protocolo universal. Cada pessoa, cada família, chega com uma história única moldada por culturas, expectativas e transições distintas. Meu trabalho é compreender essa complexidade com precisão — e acompanhá-lo através dela."
            )}
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border-t border-border pt-8"
            >
              <p className="mb-3 font-serif-display text-3xl font-light text-accent/50">{p.numeral}</p>
              <h3 className="mb-3 font-serif-display text-xl font-medium text-foreground">
                {t(p.titleEs, p.titleEn, p.titlePt)}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
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
