import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-muted py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-2 text-sm font-light uppercase tracking-[0.25em] text-accent">{t("Contacto", "Contact")}</p>
          <h2 className="mb-4 font-serif-display text-4xl font-medium text-foreground">
            {t("Da el primer paso", "Take the first step")}
          </h2>
          <div className="gold-line mx-auto mb-8 w-16" />
          <p className="mx-auto mb-12 max-w-lg font-light leading-relaxed text-muted-foreground">
            {t(
              "Tu bienestar emocional merece atención profesional. Estoy aquí para acompañarte.",
              "Your emotional wellbeing deserves professional attention. I'm here to accompany you.",
            )}
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">
                {t("Barrio de Retiro, Madrid", "Retiro District, Madrid")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">+34 600 000 000</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">consulta@taniaono.es</p>
            </div>
          </div>

          <a
            href="mailto:consulta@taniaono.es"
            className="gold-gradient inline-block rounded-sm px-10 py-4 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
          >
            {t("Solicitar Cita", "Book a Session")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
