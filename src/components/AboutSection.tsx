import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import taniaPhoto from "@/assets/tania-photo.jpg";

const credentials = [
  { es: "EMDR Certificada", en: "EMDR Certified", pt: "EMDR Certificada" },
  { es: "Terapia Sistémica", en: "Systemic Therapy", pt: "Terapia Sistêmica" },
  { es: "TCC", en: "CBT", pt: "TCC" },
  { es: "Mindfulness Clínico", en: "Clinical Mindfulness", pt: "Mindfulness Clínico" },
];

const AboutSection = () => {
  const { t, lang } = useLanguage();

  const heading = lang === "es"
    ? <>Comprendo lo que significa<br />construir una vida<br /><em>entre dos mundos</em></>
    : lang === "pt"
    ? <>Compreendo o que significa<br />construir uma vida<br /><em>entre dois mundos</em></>
    : <>I understand what it means<br />to build a life<br /><em>between two worlds</em></>;

  return (
    <section id="about" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid items-center gap-20 lg:grid-cols-2"
        >
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full border border-accent/20" />
              <div className="relative h-[500px] w-[380px] overflow-hidden bg-muted">
                <img
                  src={taniaPhoto}
                  alt="Tania Ono — Heart & Soul Therapy"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label mb-5">Tania Ono</p>

            <h2 className="font-serif-display mb-6 text-4xl font-light leading-[1.2] text-foreground lg:text-5xl">
              {heading}
            </h2>

            <div className="gold-line mb-8 w-14" />

            <p className="mb-5 font-sans-body text-[15px] font-light leading-[1.9] text-muted-foreground">
              {t(
                "Con más de 15 años de experiencia clínica internacional, acompaño a familias que han elegido Madrid como hogar y se enfrentan a los desafíos únicos de vivir entre culturas — la adaptación familiar, la identidad de los hijos, la pareja bajo presión, la soledad que nadie ve.",
                "With over 15 years of international clinical experience, I accompany families who have chosen Madrid as home and face the unique challenges of living between cultures — family adaptation, children's identity, the couple under pressure, the loneliness no one sees.",
                "Com mais de 15 anos de experiência clínica internacional, acompanho famílias que escolheram Madrid como lar e enfrentam os desafios únicos de viver entre culturas — adaptação familiar, identidade dos filhos, o casal sob pressão, a solidão que ninguém vê."
              )}
            </p>
            <p className="mb-10 font-sans-body text-[15px] font-light leading-[1.9] text-muted-foreground">
              {t(
                "Mi consulta en el corazón de Madrid ofrece un espacio completamente confidencial, diseñado para quienes valoran la discreción tanto como los resultados.",
                "My practice in the heart of Madrid offers a fully confidential space, designed for those who value discretion as much as outcomes.",
                "Meu consultório no coração de Madrid oferece um espaço completamente confidencial, projetado para quem valoriza a discrição tanto quanto os resultados."
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              {credentials.map((c) => (
                <span
                  key={c.en}
                  className="font-sans-body border border-border px-4 py-1.5 text-[10px] font-light uppercase tracking-[0.18em] text-muted-foreground/80"
                >
                  {t(c.es, c.en, c.pt)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
