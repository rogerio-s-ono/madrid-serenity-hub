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
            {t("Mi Enfoque", "My Approach", "Minha Abordagem")}
          </p>
          <h2 className="mb-6 font-serif-display text-4xl font-medium text-foreground">
            {t("Tu fuerza interior, tu transformación", "Your inner strength, your transformation", "Sua força interior, sua transformação")}
          </h2>
          <div className="gold-line mx-auto mb-8 w-16" />
          <p className="mb-6 font-light leading-relaxed text-muted-foreground">
            {t(
              "Cada persona lleva en sí misma la capacidad de sanar y transformarse. Mi enfoque integra terapia cognitivo-conductual, EMDR, terapia sistémica y mindfulness para despertar esa fortaleza interior que ya existe en ti.",
              "Every person carries within them the capacity to heal and transform. My approach integrates cognitive-behavioral therapy, EMDR, systemic therapy, and mindfulness to awaken the inner strength that already exists in you.",
              "Cada pessoa carrega em si mesma a capacidade de curar e se transformar. Minha abordagem integra terapia cognitivo-comportamental, EMDR, terapia sistêmica e mindfulness para despertar a força interior que já existe em você."
            )}
          </p>
          <p className="font-light leading-relaxed text-muted-foreground">
            {t(
              "En un espacio de absoluta confidencialidad, trabajaremos juntos para sanar heridas emocionales, ganar claridad y construir una vida más plena — una transformación duradera que nace desde adentro.",
              "In a space of absolute confidentiality, we will work together to heal emotional wounds, gain clarity, and build a more fulfilling life — a lasting transformation that comes from within.",
              "Em um espaço de absoluta confidencialidade, trabalharemos juntos para curar feridas emocionais, ganhar clareza e construir uma vida mais plena — uma transformação duradoura que nasce de dentro."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
