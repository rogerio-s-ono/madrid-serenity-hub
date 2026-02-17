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
              {t("Sobre Mí", "About Me")}
            </p>
            <h2 className="mb-6 font-serif-display text-4xl font-medium text-foreground">
              {t("Dedicación al bienestar emocional", "Dedicated to emotional wellbeing")}
            </h2>
            <div className="gold-line mb-6 w-16" />
            <p className="mb-4 font-light leading-relaxed text-muted-foreground">
              {t(
                "Con más de 15 años de experiencia, ofrezco un enfoque terapéutico personalizado que combina las técnicas más avanzadas con una profunda empatía y comprensión.",
                "With over 15 years of experience, I offer a personalized therapeutic approach that combines the most advanced techniques with deep empathy and understanding."
              )}
            </p>
            <p className="font-light leading-relaxed text-muted-foreground">
              {t(
                "Mi consulta en el corazón de Madrid es un espacio diseñado para que te sientas seguro/a y acompañado/a en tu proceso de crecimiento personal.",
                "My practice in the heart of Madrid is a space designed for you to feel safe and supported in your personal growth journey."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
