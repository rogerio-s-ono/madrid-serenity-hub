import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import taniaPhoto from "@/assets/tania-photo.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-16 md:grid-cols-2"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-[420px] w-[320px] overflow-hidden rounded-sm bg-muted">
                <img src={taniaPhoto} alt="Tania Ono" className="h-full w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 h-[420px] w-[320px] rounded-sm border-2 border-accent/30" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-light uppercase tracking-[0.25em] text-accent">
              {t("Tania Ono", "Tania Ono", "Tania Ono")}
            </p>
            <h2 className="mb-6 font-serif-display text-4xl font-medium text-foreground">
              {t(
                "Comprendo lo que implica construir una vida entre dos mundos",
                "I understand what it means to build a life between two worlds",
                "Compreendo o que significa construir uma vida entre dois mundos"
              )}
            </h2>
            <div className="gold-line mb-6 w-16" />
            <p className="mb-4 font-light leading-relaxed text-muted-foreground">
              {t(
                "Con más de 15 años de experiencia clínica y una formación internacional en psicoterapia, trabajo con familias y profesionales de alto nivel que enfrentan los desafíos únicos de la vida expatriada en Madrid — la presión ejecutiva, la adaptación familiar, la transición cultural y la búsqueda de identidad.",
                "With over 15 years of clinical experience and international training in psychotherapy, I work with high-calibre families and professionals facing the unique challenges of expat life in Madrid — executive pressure, family adaptation, cultural transition, and the search for identity.",
                "Com mais de 15 anos de experiência clínica e formação internacional em psicoterapia, trabalho com famílias e profissionais de alto nível que enfrentam os desafios únicos da vida expatriada em Madrid — pressão executiva, adaptação familiar, transição cultural e a busca de identidade."
              )}
            </p>
            <p className="mb-6 font-light leading-relaxed text-muted-foreground">
              {t(
                "Mi consulta en el corazón de Madrid ofrece un espacio completamente confidencial, pensado para quienes valoran la discreción tanto como los resultados.",
                "My practice in the heart of Madrid offers a fully confidential space, designed for those who value discretion as much as outcomes.",
                "Meu consultório no coração de Madrid oferece um espaço completamente confidencial, pensado para quem valoriza a discrição tanto quanto os resultados."
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                t("EMDR Certificada", "EMDR Certified", "EMDR Certificada"),
                t("Terapia Sistémica", "Systemic Therapy", "Terapia Sistêmica"),
                t("TCC", "CBT", "TCC"),
                t("Mindfulness Clínico", "Clinical Mindfulness", "Mindfulness Clínico"),
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm border border-accent/30 px-3 py-1 text-xs font-light uppercase tracking-widest text-accent"
                >
                  {badge}
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
