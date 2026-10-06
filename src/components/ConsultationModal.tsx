import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useConsultation } from "@/contexts/ConsultationContext";
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
  "font-sans-body text-[9px] font-light uppercase tracking-[0.25em] text-primary-foreground/55 mb-2 block";

const ConsultationModal = ({ open, onClose }: ConsultationModalProps) => {
  const { t, lang } = useLanguage();
  const { preselectedSpecialty } = useConsultation();
  const [dialCode, setDialCode] = useState("+34");
  const [showDial, setShowDial] = useState(false);
  const [therapy, setTherapy] = useState("");
  const [showTherapy, setShowTherapy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Sync preselection whenever the modal opens or the preselectedSpecialty changes
  useEffect(() => {
    if (open && preselectedSpecialty) {
      setTherapy(preselectedSpecialty);
    }
  }, [open, preselectedSpecialty]);

  // Escape key closes the modal
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Body scroll lock + focus management
  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      // Focus the panel after animation
      requestAnimationFrame(() => {
        panelRef.current?.focus();
      });
    } else {
      document.body.style.overflow = "";
      // Restore focus to the element that opened the modal
      previousFocusRef.current?.focus();
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus trap — Tab/Shift+Tab cycles within the modal
  const handleTrapKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

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
    // Build mailto link — this opens the user's mail client with a pre-filled draft.
    // We do NOT claim the message was "received" since there is no server-side backend.
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
    // Open mail client without affecting the SPA URL / hash
    window.location.href = `mailto:consulta@taniaono.es?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    // ✅ Do NOT reset therapy — preserve the last selection across opens
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
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
            tabIndex={-1}
            onKeyDown={handleTrapKeyDown}
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-primary focus:outline-none"
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
                  <h2 id="consultation-modal-title" className="font-serif-display mb-2 text-3xl font-light leading-[1.2] text-primary-foreground md:text-4xl">
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
                      <label htmlFor="consult-name" className={labelClass}>
                        {t("Nombre completo", "Full Name", "Nome completo")}
                      </label>
                      <input
                        id="consult-name"
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
                      <label htmlFor="consult-email" className={labelClass}>
                        {t("Correo electrónico", "Email Address", "Endereço de email")}
                      </label>
                      <input
                        id="consult-email"
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
                      <label htmlFor="consult-phone" className={labelClass}>
                        {t("Teléfono", "Phone Number", "Telefone")}
                      </label>
                      <div className="flex items-end gap-3">
                        {/* Dial code selector */}
                        <div className="relative">
                          <button
                            type="button"
                            aria-expanded={showDial}
                            aria-haspopup="listbox"
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
                          id="consult-phone"
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
                      <label htmlFor="consult-therapy" className={labelClass}>
                        {t("Área de interés", "Area of Interest", "Área de interesse")}
                      </label>
                      <div className="relative">
                        <button
                          id="consult-therapy"
                          type="button"
                          aria-expanded={showTherapy}
                          aria-haspopup="listbox"
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
                      <label htmlFor="consult-message" className={labelClass}>
                        {t(
                          "¿Por qué necesita mi ayuda?",
                          "Why do you need my help?",
                          "Por que precisa da minha ajuda?"
                        )}
                      </label>
                      {/* Friendly required notice */}
                      <div
                        className="mb-4 border-l-2 pl-4 py-2"
                        style={{ borderColor: "hsl(var(--gold-light) / 0.4)" }}
                      >
                        <p className="font-sans-body text-[11px] font-light leading-[1.8] text-primary-foreground/50">
                          {t(
                            "Para poder atenderle de la mejor manera posible, necesito conocer brevemente su situación. Esta información me permite priorizar y adaptar nuestra primera consulta a sus necesidades reales. No hay respuesta incorrecta — toda experiencia merece ser escuchada.",
                            "To serve you in the best possible way, I need a brief understanding of your situation. This helps me prioritise and tailor our first consultation to your real needs. There is no wrong answer — every experience deserves to be heard.",
                            "Para poder atendê-lo da melhor forma possível, preciso conhecer brevemente a sua situação. Esta informação permite-me priorizar e adaptar a nossa primeira consulta às suas necessidades reais. Não há resposta errada — toda experiência merece ser ouvida."
                          )}
                        </p>
                      </div>
                      <textarea
                        id="consult-message"
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
                      <p className="mt-1 text-right font-sans-body text-[9px] text-primary-foreground/50">
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
                      <p className="mt-4 text-center font-sans-body text-[9px] font-light uppercase tracking-[0.18em] text-primary-foreground/50">
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
                /* Success state — honest: we opened a draft, not received a message */
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
                    {t("Casi listo", "Almost There", "Quase pronto")}
                  </p>
                  <h3 className="font-serif-display mb-4 text-2xl font-light text-primary-foreground">
                    {t(
                      "Revise su correo electrónico",
                      "Check your email client",
                      "Verifique seu cliente de email"
                    )}
                  </h3>
                  <div className="gold-line w-10 my-4 opacity-40" />
                  <p className="font-sans-body text-sm font-light leading-[1.9] text-primary-foreground/60 max-w-sm">
                    {t(
                      "Se ha abierto un borrador en su aplicación de correo. Por favor, revise que el mensaje se ha enviado correctamente. Si no se abrió su correo, puede escribirme directamente a consulta@taniaono.es o llamar al +34 699 19 27 50.",
                      "A draft has been opened in your email app. Please verify the message was sent successfully. If your email client didn't open, you can write to me directly at consulta@taniaono.es or call +34 699 19 27 50.",
                      "Um rascunho foi aberto no seu aplicativo de email. Por favor, verifique se a mensagem foi enviada com sucesso. Se o seu email não abriu, pode escrever diretamente para consulta@taniaono.es ou ligar para +34 699 19 27 50."
                    )}
                  </p>
                  <p className="font-sans-body mt-4 text-[11px] font-light leading-[1.8] text-primary-foreground/40 max-w-xs">
                    {t(
                      "Toda comunicación es estrictamente confidencial.",
                      "All communication is strictly confidential.",
                      "Toda comunicação é estritamente confidencial."
                    )}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-10 font-sans-body text-[10px] font-light uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
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
