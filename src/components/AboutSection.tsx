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
              {t("Sobre Mí", "About Me", "Sobre Mim")}
            </p>
            <h2 className="mb-6 font-serif-display text-4xl font-medium text-foreground">
              {t("Claridad emocional, desde adentro", "Emotional clarity, from within", "Clareza emocional, de dentro para fora")}
            </h2>
            <div className="gold-line mb-6 w-16" />
            <p className="mb-4 font-light leading-relaxed text-muted-foreground">
              {t(
                "Con más de 15 años acompañando procesos de transformación personal, guío a cada persona hacia una mayor claridad emocional y fortaleza interior — con técnicas avanzadas y una profunda empatía.",
                "With over 15 years guiding personal transformation, I help each person find emotional clarity and inner strength — through advanced techniques and deep empathy.",
                "Com mais de 15 anos acompanhando processos de transformação pessoal, guio cada pessoa em direção à clareza emocional e à força interior — com técnicas avançadas e profunda empatia."
              )}
            </p>
            <p className="font-light leading-relaxed text-muted-foreground">
              {t(
                "Mi consulta en el corazón de Madrid es un lugar donde ocurre la transformación duradera: un espacio seguro, confidencial y dedicado a ti.",
                "My practice in the heart of Madrid is where lasting transformation happens — a safe, confidential space dedicated entirely to you.",
                "Meu consultório no coração de Madrid é onde acontece a transformação duradoura — um espaço seguro, confidencial e dedicado a você."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
