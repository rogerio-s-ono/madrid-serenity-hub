import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ApproachSection = () => {
  const { t } = useLanguage();

  return (
    <section id="approach" className="bg-background py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 text-sm font-light uppercase tracking-[0.25em] text-accent">
            {t("Mi Enfoque", "My Approach")}
          </p>
          <h2 className="mb-6 font-serif-display text-4xl font-medium text-foreground">
            {t("Terapia centrada en ti", "Therapy centered on you")}
          </h2>
          <div className="gold-line mx-auto mb-8 w-16" />
          <p className="mb-6 font-light leading-relaxed text-muted-foreground">
            {t(
              "Creo firmemente que cada persona es única y merece un tratamiento a medida. Mi enfoque integra la terapia cognitivo-conductual, EMDR, terapia sistémica y técnicas de mindfulness para crear un plan terapéutico que se adapte a tus necesidades específicas.",
              "I firmly believe that every person is unique and deserves tailored treatment. My approach integrates cognitive-behavioral therapy, EMDR, systemic therapy, and mindfulness techniques to create a therapeutic plan that adapts to your specific needs."
            )}
          </p>
          <p className="font-light leading-relaxed text-muted-foreground">
            {t(
              "En un ambiente de absoluta confidencialidad y respeto, trabajaremos juntos para superar obstáculos, sanar heridas emocionales y construir una vida más plena y significativa.",
              "In an atmosphere of absolute confidentiality and respect, we will work together to overcome obstacles, heal emotional wounds, and build a more fulfilling and meaningful life."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
