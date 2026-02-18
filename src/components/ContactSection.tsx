import { useLanguage } from "@/contexts/LanguageContext";
import { useConsultation } from "@/contexts/ConsultationContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    labelEs: "Barrio de Retiro, Madrid",
    labelEn: "Retiro District, Madrid",
    labelPt: "Bairro de Retiro, Madrid",
  },
  {
    icon: Phone,
    labelEs: "+34 699 19 27 50",
    labelEn: "+34 699 19 27 50",
    labelPt: "+34 699 19 27 50",
  },
  {
    icon: Mail,
    labelEs: "consulta@taniaono.es",
    labelEn: "consulta@taniaono.es",
    labelPt: "consulta@taniaono.es",
  },
  {
    icon: Globe,
    labelEs: "Español · English · Português",
    labelEn: "Español · English · Português",
    labelPt: "Español · English · Português",
  },
];

const ContactSection = () => {
  const { t, lang } = useLanguage();
  const { openModal } = useConsultation();

  const heading =
    lang === "es" ? (
      <>El primer paso<br /><em>es confidencial</em></>
    ) : lang === "pt" ? (
      <>O primeiro passo<br /><em>é confidencial</em></>
    ) : (
      <>The first step<br /><em>is confidential</em></>
    );

  return (
    <section id="contact" className="bg-primary py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="section-label mb-5" style={{ color: "hsl(var(--gold-light))" }}>
              {t("Contacto Privado", "Private Contact", "Contato Privado")}
            </p>
            <h2 className="font-serif-display mb-6 text-4xl font-light leading-[1.2] text-primary-foreground lg:text-5xl">
              {heading}
            </h2>
            <div className="gold-line mb-8 w-14 opacity-60" />
            <p className="font-sans-body mb-12 text-[15px] font-light leading-[1.9] text-primary-foreground/80">
              {t(
                "Si estás considerando iniciar un proceso terapéutico — para ti, tu pareja o tu familia — te invito a una primera consulta privada sin compromiso. Toda comunicación es estrictamente confidencial.",
                "If you are considering beginning a therapeutic process — for yourself, your partner, or your family — I invite you to a private initial consultation with no commitment required. All communication is strictly confidential.",
                "Se você está considerando iniciar um processo terapêutico, convido-o a uma primeira consulta privada sem compromisso. Toda comunicação é estritamente confidencial."
              )}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mb-12">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <item.icon className="h-4 w-4 shrink-0 text-accent/80" strokeWidth={1.5} />
                  <p className="font-sans-body text-sm font-light tracking-wide text-primary-foreground/80">
                    {t(item.labelEs, item.labelEn, item.labelPt)}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-sans-body text-[10px] font-light uppercase tracking-[0.2em] text-primary-foreground/30">
              {t(
                "Sesiones presenciales en Madrid · Online disponible",
                "In-person in Madrid · Online available",
                "Presencial em Madrid · Online disponível"
              )}
            </p>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="border border-primary-foreground/10 p-12">
              <h3 className="font-serif-display mb-3 text-2xl font-light text-primary-foreground">
                {t("Reserve su consulta", "Book your consultation", "Reserve sua consulta")}
              </h3>
              <p className="font-sans-body mb-10 text-sm font-light leading-[1.8] text-primary-foreground/75">
                {t(
                  "Una conversación privada para conocer su situación y determinar cómo puedo acompañarle de manera más efectiva.",
                  "A private conversation to understand your situation and determine how I can most effectively accompany you.",
                  "Uma conversa privada para entender sua situação e determinar como posso acompanhá-lo de forma mais eficaz."
                )}
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => openModal()}
                  className="gold-gradient font-sans-body block text-center px-8 py-4 text-[11px] font-light uppercase tracking-[0.22em] text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  {t("Consulta Privada por Email", "Private Email Consultation", "Consulta Privada por Email")}
                </button>
                <a
                  href="tel:+34699192750"
                  className="font-sans-body block text-center border border-primary-foreground/20 px-8 py-4 text-[11px] font-light uppercase tracking-[0.22em] text-primary-foreground/60 transition-all duration-300 hover:border-accent/50 hover:text-primary-foreground/90"
                >
                  {t("Llamar ahora", "Call Now", "Ligar agora")}
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <p className="font-sans-body text-[10px] font-light uppercase tracking-[0.18em] text-primary-foreground/30 text-center">
                  {t(
                    "Respuesta en 24 h · Confidencialidad garantizada",
                    "Response within 24h · Confidentiality guaranteed",
                    "Resposta em 24h · Confidencialidade garantida"
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
