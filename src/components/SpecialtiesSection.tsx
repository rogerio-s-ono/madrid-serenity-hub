import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, Users, Brain, Baby } from "lucide-react";

const specialties = [
  {
    icon: Heart,
    titleEs: "Ansiedad y Depresión",
    titleEn: "Anxiety & Depression",
    descEs: "Tratamiento especializado para gestionar el estrés, la ansiedad y los trastornos del estado de ánimo con técnicas basadas en evidencia.",
    descEn: "Specialized treatment for managing stress, anxiety, and mood disorders with evidence-based techniques.",
  },
  {
    icon: Users,
    titleEs: "Parejas y Relaciones",
    titleEn: "Couples & Relationships",
    descEs: "Terapia de pareja para fortalecer la comunicación, resolver conflictos y recuperar la conexión emocional.",
    descEn: "Couples therapy to strengthen communication, resolve conflicts, and restore emotional connection.",
  },
  {
    icon: Brain,
    titleEs: "Trauma y EMDR",
    titleEn: "Trauma & EMDR",
    descEs: "Procesamiento de experiencias traumáticas mediante EMDR y otras técnicas terapéuticas de vanguardia.",
    descEn: "Processing traumatic experiences through EMDR and other cutting-edge therapeutic techniques.",
  },
  {
    icon: Baby,
    titleEs: "Infancia y Educación Parental",
    titleEn: "Children & Parental Education",
    descEs: "Apoyo terapéutico para niños y orientación para padres que buscan herramientas para una crianza consciente.",
    descEn: "Therapeutic support for children and guidance for parents seeking tools for conscious parenting.",
  },
];

const SpecialtiesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="specialties" className="bg-primary py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-light uppercase tracking-[0.25em] text-accent">
            {t("Áreas de Especialización", "Areas of Expertise")}
          </p>
          <h2 className="font-serif-display text-4xl font-medium text-primary-foreground">
            {t("Especialidades", "Specialties")}
          </h2>
          <div className="gold-line mx-auto mt-6 w-16" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {specialties.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-sm border border-primary-foreground/10 p-8 transition-all hover:border-accent/40 hover:bg-primary-foreground/5"
            >
              <s.icon className="mb-4 h-8 w-8 text-accent" strokeWidth={1.2} />
              <h3 className="mb-3 font-serif-display text-xl font-medium text-primary-foreground">
                {t(s.titleEs, s.titleEn)}
              </h3>
              <p className="text-sm font-light leading-relaxed text-primary-foreground/70">
                {t(s.descEs, s.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
