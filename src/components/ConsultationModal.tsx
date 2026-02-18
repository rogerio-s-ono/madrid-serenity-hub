import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialties } from "@/data/specialties";

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

// Country dial codes — Spain default
const dialCodes = [
  { code: "+34", flag: "🇪🇸", name: "España" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+1",  flag: "🇺🇸", name: "USA / Canada" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+86", flag: "🇨🇳", name: "China" },
];

const inputClass =
  "w-full bg-transparent border-b border-primary-foreground/20 py-3 font-sans-body text-sm font-light text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-accent/70 transition-colors duration-300";

const labelClass =
  "font-sans-body text-[9px] font-light uppercase tracking-[0.25em] text-primary-foreground/40 mb-2 block";

const ConsultationModal = ({ open, onClose }: ConsultationModalProps) => {
  const { t, lang } = useLanguage();
  const [dialCode, setDialCode] = useState("+34");
  const [showDial, setShowDial] = useState(false);
  const [therapy, setTherapy] = useState("");
  const [showTherapy, setShowTherapy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const therapyOptions = [
    ...specialties.map((s) => ({
      value: s.slug,
      label: lang === "es" ? s.titleEs : lang === "pt" ? s.titlePt : s.titleEn,
    })),
    {
      value: "not-sure",
      label: t(
        "No lo sé aún, ¡pero sé que me ayudarás!",
        "I don't know yet, but I know you will help me!",
        "Ainda não sei, mas sei que você me ajudará!"
      ),
    },
  ];

  const selectedTherapy = therapyOptions.find((o) => o.value === therapy);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const therapyLabel = selectedTherapy?.label ?? "";
    const subjectMap: Record<string, string> = {
      es: `Consulta Privada — ${therapyLabel}`,
      en: `Private Consultation — ${therapyLabel}`,
      pt: `Consulta Privada — ${therapyLabel}`,
    };
    const subject = encodeURIComponent(subjectMap[lang] ?? subjectMap["es"]);
    const body = encodeURIComponent(
      `Nombre / Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Teléfono / Phone: ${dialCode} ${form.phone}\n` +
      `Tipo de terapia / Therapy type: ${selectedTherapy?.label ?? ""}\n\n` +
      `${form.message}`
    );
    window.location.href = `mailto:consulta@taniaono.es?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setTherapy("");
    setDialCode("+34");
    setSubmitted(false);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-primary"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.55)" }}
          >
            {/* Top gold accent line */}
            <div className="h-px w-full gold-gradient opacity-70" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="px-10 pt-12 pb-14 md:px-16">
              {!submitted ? (
                <>
                  {/* Header */}
                  <p className="section-label mb-4" style={{ color: "hsl(var(--gold-light))" }}>
                    {t("Consulta Privada", "Private Consultation", "Consulta Privada")}
                  </p>
                  <h2 className="font-serif-display mb-2 text-3xl font-light leading-[1.2] text-primary-foreground md:text-4xl">
                    {lang === "es" ? (
                      <>El primer paso<br /><em>es confidencial</em></>
                    ) : lang === "pt" ? (
                      <>O primeiro passo<br /><em>é confidencial</em></>
                    ) : (
                      <>The first step<br /><em>is confidential</em></>
                    )}
                  </h2>
                  <div className="gold-line w-10 mb-8 mt-5 opacity-50" />
                  <p className="font-sans-body mb-10 text-[13px] font-light leading-[1.9] text-primary-foreground/60">
                    {t(
                      "Comparta lo que necesita. Toda comunicación es estrictamente confidencial.",
                      "Share what you need. All communication is strictly confidential.",
                      "Compartilhe o que precisa. Toda comunicação é estritamente confidencial."
                    )}
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    {/* Name */}
                    <div>
                      <label className={labelClass}>
                        {t("Nombre completo", "Full Name", "Nome completo")}
                      </label>
                      <input
                        required
                        maxLength={100}
                        className={inputClass}
                        placeholder={t("Su nombre", "Your name", "Seu nome") as string}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass}>
                        {t("Correo electrónico", "Email Address", "Endereço de email")}
                      </label>
                      <input
                        required
                        type="email"
                        maxLength={255}
                        className={inputClass}
                        placeholder={t("Su email privado", "Your private email", "Seu email privado") as string}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    {/* Phone with DDI */}
                    <div>
                      <label className={labelClass}>
                        {t("Teléfono", "Phone Number", "Telefone")}
                      </label>
                      <div className="flex items-end gap-3">
                        {/* Dial code selector */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowDial(!showDial)}
                            className="flex items-center gap-1.5 border-b border-primary-foreground/20 py-3 font-sans-body text-sm font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors focus:outline-none focus:border-accent/70"
                          >
                            <span className="text-base leading-none">
                              {dialCodes.find((d) => d.code === dialCode)?.flag}
                            </span>
                            <span className="text-xs tracking-wide">{dialCode}</span>
                            <ChevronDown className="h-3 w-3 opacity-50" />
                          </button>
                          <AnimatePresence>
                            {showDial && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 top-full z-20 mt-1 max-h-52 w-52 overflow-y-auto border border-primary-foreground/10 bg-primary shadow-2xl"
                              >
                                {dialCodes.map((d) => (
                                  <button
                                    key={d.code}
                                    type="button"
                                    onClick={() => { setDialCode(d.code); setShowDial(false); }}
                                    className="flex w-full items-center gap-2 px-4 py-2.5 font-sans-body text-xs font-light text-primary-foreground/70 hover:bg-primary-foreground/5 hover:text-primary-foreground transition-colors text-left"
                                  >
                                    <span>{d.flag}</span>
                                    <span>{d.name}</span>
                                    <span className="ml-auto opacity-50">{d.code}</span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <input
                          required
                          type="tel"
                          maxLength={20}
                          className={`${inputClass} flex-1`}
                          placeholder={t("Número de teléfono", "Phone number", "Número de telefone") as string}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Therapy type */}
                    <div>
                      <label className={labelClass}>
                        {t("Área de interés", "Area of Interest", "Área de interesse")}
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowTherapy(!showTherapy)}
                          className="flex w-full items-center justify-between border-b border-primary-foreground/20 py-3 font-sans-body text-sm font-light text-left transition-colors focus:outline-none focus:border-accent/70"
                          style={{ color: therapy ? "hsl(var(--primary-foreground))" : "hsl(var(--primary-foreground) / 0.35)" }}
                        >
                          <span>
                            {selectedTherapy?.label ??
                              t("Seleccione una opción", "Select an option", "Selecione uma opção")}
                          </span>
                          <ChevronDown
                            className="h-3.5 w-3.5 opacity-40 shrink-0 ml-2 transition-transform"
                            style={{ transform: showTherapy ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </button>
                        <AnimatePresence>
                          {showTherapy && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 top-full z-20 mt-1 w-full border border-primary-foreground/10 bg-primary shadow-2xl"
                            >
                              {therapyOptions.map((opt) => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => { setTherapy(opt.value); setShowTherapy(false); }}
                                  className={`flex w-full items-start gap-3 px-5 py-3.5 font-sans-body text-xs font-light text-left transition-colors hover:bg-primary-foreground/5 ${
                                    therapy === opt.value
                                      ? "text-primary-foreground"
                                      : "text-primary-foreground/60"
                                  }`}
                                >
                                  {opt.value === "not-sure" ? (
                                    <span className="italic">{opt.label}</span>
                                  ) : (
                                    <>
                                      <span
                                        className="font-sans-body shrink-0 text-[9px] tracking-wider mt-0.5"
                                        style={{ color: "hsl(var(--gold-light))", opacity: 0.7 }}
                                      >
                                        {specialties.find((s) => s.slug === opt.value)?.num}
                                      </span>
                                      <span>{opt.label}</span>
                                    </>
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Free text */}
                    <div>
                      <label className={labelClass}>
                        {t(
                          "¿Por qué necesita mi ayuda?",
                          "Why do you need my help?",
                          "Por que precisa da minha ajuda?"
                        )}
                      </label>
                      <p className="font-sans-body mb-3 text-[11px] font-light leading-[1.7] text-primary-foreground/35">
                        {t(
                          "Comparta un breve resumen de su situación. No hay respuesta incorrecta.",
                          "Please share a brief summary of your situation. There is no wrong answer.",
                          "Por favor, compartilhe um breve resumo da sua situação. Não há resposta errada."
                        )}
                      </p>
                      <textarea
                        required
                        maxLength={1000}
                        rows={5}
                        className={`${inputClass} resize-none border border-primary-foreground/15 px-4 py-3 focus:border-accent/50`}
                        placeholder={t(
                          "Cuénteme brevemente qué le trae aquí...",
                          "Tell me briefly what brings you here...",
                          "Diga-me brevemente o que o traz aqui..."
                        ) as string}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                      <p className="mt-1 text-right font-sans-body text-[9px] text-primary-foreground/25">
                        {form.message.length}/1000
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="gold-gradient w-full py-4 font-sans-body text-[11px] font-light uppercase tracking-[0.25em] text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                      >
                        {t("Enviar consulta privada", "Send private consultation", "Enviar consulta privada")}
                      </button>
                      <p className="mt-4 text-center font-sans-body text-[9px] font-light uppercase tracking-[0.18em] text-primary-foreground/25">
                        {t(
                          "Respuesta en 24 h · Confidencialidad garantizada",
                          "Response within 24h · Confidentiality guaranteed",
                          "Resposta em 24h · Confidencialidade garantida"
                        )}
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  {/* Gold checkmark */}
                  <div
                    className="mb-8 flex h-16 w-16 items-center justify-center border"
                    style={{ borderColor: "hsl(var(--gold-light) / 0.3)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "hsl(var(--gold-light))" }}>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="section-label mb-4" style={{ color: "hsl(var(--gold-light))" }}>
                    {t("Mensaje enviado", "Message Sent", "Mensagem enviada")}
                  </p>
                  <h3 className="font-serif-display mb-4 text-2xl font-light text-primary-foreground">
                    {t("Gracias por su confianza", "Thank you for your trust", "Obrigado pela sua confiança")}
                  </h3>
                  <div className="gold-line w-10 my-4 opacity-40" />
                  <p className="font-sans-body text-sm font-light leading-[1.9] text-primary-foreground/60 max-w-sm">
                    {t(
                      "He recibido su consulta y me pondré en contacto con usted en las próximas 24 horas. Todo es estrictamente confidencial.",
                      "I have received your consultation and will be in touch within the next 24 hours. Everything is strictly confidential.",
                      "Recebi sua consulta e entrarei em contato nas próximas 24 horas. Tudo é estritamente confidencial."
                    )}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-10 font-sans-body text-[10px] font-light uppercase tracking-[0.2em] text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
                  >
                    {t("Cerrar", "Close", "Fechar")}
                  </button>
                </motion.div>
              )}
            </div>

            {/* Bottom gold accent line */}
            <div className="h-px w-full gold-gradient opacity-40" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
