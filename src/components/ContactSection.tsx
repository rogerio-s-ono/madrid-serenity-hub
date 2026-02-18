import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

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
          <p className="mb-2 text-sm font-light uppercase tracking-[0.25em] text-accent">
            {t("Contacto Privado", "Private Contact", "Contato Privado")}
          </p>
          <h2 className="mb-4 font-serif-display text-4xl font-medium text-foreground">
            {t(
              "El primer paso es confidencial",
              "The first step is confidential",
              "O primeiro passo é confidencial"
            )}
          </h2>
          <div className="gold-line mx-auto mb-8 w-16" />
          <p className="mx-auto mb-12 max-w-xl font-light leading-relaxed text-muted-foreground">
            {t(
              "Si estás considerando iniciar un proceso terapéutico — para ti, tu pareja o tu familia — te invito a una primera consulta privada sin compromiso. Toda comunicación es estrictamente confidencial.",
              "If you are considering beginning a therapeutic process — for yourself, your partner, or your family — I invite you to a private initial consultation with no commitment required. All communication is strictly confidential.",
              "Se você está considerando iniciar um processo terapêutico — para você, seu parceiro ou sua família — convido-o a uma primeira consulta privada sem compromisso. Toda comunicação é estritamente confidencial."
            )}
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">
                {t("Barrio de Retiro, Madrid", "Retiro District, Madrid", "Bairro de Retiro, Madrid")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">+34 699 19 27 50</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">consulta@taniaono.es</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Globe className="h-6 w-6 text-accent" strokeWidth={1.2} />
              <p className="text-sm font-light text-muted-foreground">
                {t("ES · EN · PT", "ES · EN · PT", "ES · EN · PT")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:consulta@taniaono.es"
              className="gold-gradient inline-block rounded-sm px-10 py-4 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
            >
              {t("Consulta Privada", "Book a Private Consultation", "Consulta Privada")}
            </a>
            <a
              href="tel:+34699192750"
              className="inline-block rounded-sm border border-foreground/25 px-10 py-4 text-sm font-light uppercase tracking-widest text-foreground/70 transition-all hover:border-accent/60 hover:text-accent"
            >
              {t("Llamar ahora", "Call Now", "Ligar agora")}
            </a>
          </div>

          <p className="mt-10 text-xs font-light uppercase tracking-widest text-muted-foreground/60">
            {t(
              "Sesiones presenciales en Madrid · Sesiones online disponibles",
              "In-person sessions in Madrid · Online sessions available",
              "Sessões presenciais em Madrid · Sessões online disponíveis"
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
