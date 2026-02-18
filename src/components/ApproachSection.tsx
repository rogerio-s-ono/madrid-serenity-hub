import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pillars = [
  {
    slug: "rigor-clinico",
    Icon: FlaskConical,
    titleEs: "Rigor Clínico",
    titleEn: "Clinical Rigour",
    titlePt: "Rigor Clínico",
    descEs: "Métodos basados en evidencia — TCC, EMDR, terapia sistémica — adaptados con precisión a las realidades interculturales y a la complejidad emocional de las familias internacionales.",
    descEn: "Evidence-based methods — CBT, EMDR, systemic therapy — adapted with precision to intercultural realities and the emotional complexity of international families.",
    descPt: "Métodos baseados em evidências — TCC, EMDR, terapia sistêmica — adaptados com precisão às realidades interculturais e à complexidade emocional das famílias internacionais.",
  },
  {
    slug: "discrecion-absoluta",
    Icon: ShieldCheck,
    titleEs: "Discreción Absoluta",
    titleEn: "Absolute Discretion",
    titlePt: "Discrição Absoluta",
    descEs: "La confidencialidad no es un protocolo — es el fundamento de nuestra relación. Cada sesión es un espacio protegido, sin filtros ni condicionantes externos.",
    descEn: "Confidentiality is not a protocol — it is the foundation of our relationship. Each session is a protected space, without filters or external conditions.",
    descPt: "A confidencialidade não é um protocolo — é o fundamento da nossa relação. Cada sessão é um espaço protegido.",
  },
  {
    slug: "perspectiva-internacional",
    Icon: Globe2,
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
  const navigate = useNavigate();

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
        <div
          className="grid gap-0 md:grid-cols-3 border-t border-border"
          style={{ perspective: "1200px" }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{
                y: -6,
                scale: 1.025,
                rotateX: 2,
                rotateY: -1,
                boxShadow: "0 20px 50px rgba(0,0,0,0.10), 0 0 0 1px hsl(var(--gold)/0.25)",
                zIndex: 10,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              onClick={() => navigate(`/enfoque/${p.slug}`)}
              className={`py-12 pr-10 cursor-pointer ${i > 0 ? "md:border-l md:border-border md:pl-10 md:pr-0" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/5">
                <p.Icon
                  className="h-5 w-5"
                  style={{ color: "hsl(var(--gold))", strokeWidth: 1.25 }}
                />
              </div>

              <h3 className="font-serif-display mb-4 text-2xl font-light text-foreground">
                {t(p.titleEs, p.titleEn, p.titlePt)}
              </h3>
              <div className="mb-5 h-px w-10 bg-accent/40" />
              <p className="font-sans-body text-[14px] font-light leading-[1.85] text-muted-foreground">
                {t(p.descEs, p.descEn, p.descPt)}
              </p>

              {/* Hint */}
              <p
                className="font-sans-body mt-6 text-[10px] font-light uppercase tracking-[0.18em]"
                style={{ color: "hsl(var(--gold-light))", opacity: 0.5 }}
              >
                {t("Ver más →", "Learn more →", "Ver mais →")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
