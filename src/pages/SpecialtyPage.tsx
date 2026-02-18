import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialties } from "@/data/specialties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const SpecialtyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const sp = specialties.find((s) => s.slug === slug);

  if (!sp) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Not found.</p>
      </div>
    );
  }

  const title = lang === "es" ? sp.titleEs : lang === "pt" ? sp.titlePt : sp.titleEn;
  const tag = lang === "es" ? sp.tagEs : lang === "pt" ? sp.tagPt : sp.tagEn;
  const desc = lang === "es" ? sp.descEs : lang === "pt" ? sp.descPt : sp.descEn;
  const body = lang === "es" ? sp.bodyEs : lang === "pt" ? sp.bodyPt : sp.bodyEn;
  const methods = lang === "es" ? sp.methodsEs : lang === "pt" ? sp.methodsPt : sp.methodsEn;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative flex min-h-[55vh] items-end overflow-hidden pt-24">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${sp.image})` }}
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center gap-4">
              <span
                className="font-serif-display text-2xl font-light"
                style={{ color: "hsl(var(--gold-light))" }}
              >
                {sp.num}
              </span>
              <span className="font-sans-body border border-primary-foreground/20 px-3 py-1 text-[10px] font-light uppercase tracking-[0.2em] text-primary-foreground/60">
                {tag}
              </span>
            </div>
            <h1 className="font-serif-display mb-5 text-4xl font-light leading-[1.15] text-primary-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <div className="gold-line w-16 opacity-70" />
          </motion.div>
        </div>
      </div>

      {/* Body content */}
      <article className="mx-auto max-w-3xl px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Lead */}
          <p className="font-serif-display mb-12 text-2xl font-light leading-[1.6] text-foreground lg:text-3xl">
            {desc}
          </p>

          <div className="gold-line mb-12 w-14" />

          {/* Body paragraphs */}
          <div className="flex flex-col gap-8">
            {body.map((para, i) => (
              <p
                key={i}
                className="font-sans-body text-[15px] font-light leading-[1.9] text-muted-foreground"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Methods */}
          <div className="mt-16">
            <p className="section-label mb-6">
              {t("Métodos", "Methods", "Métodos")}
            </p>
            <div className="flex flex-wrap gap-3">
              {methods.map((m) => (
                <span
                  key={m}
                  className="font-sans-body border border-border px-4 py-2 text-[10px] font-light uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* CTA section */}
      <section className="bg-primary py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl px-8 text-center"
        >
          {/* Therapy tag */}
          <span className="font-sans-body mb-6 inline-block border border-primary-foreground/20 px-4 py-1.5 text-[10px] font-light uppercase tracking-[0.22em] text-primary-foreground/50">
            {tag}
          </span>

          <h2 className="font-serif-display mb-6 text-3xl font-light leading-[1.2] text-primary-foreground md:text-4xl lg:text-5xl">
            {lang === "es" && <>¿Listo para el<br /><em>primer paso?</em></>}
            {lang === "en" && <>Ready for the<br /><em>first step?</em></>}
            {lang === "pt" && <>Pronto para o<br /><em>primeiro passo?</em></>}
          </h2>

          <div className="gold-line mx-auto mb-8 w-16 opacity-60" />

          <p className="font-sans-body mx-auto mb-12 max-w-md text-[15px] font-light leading-[1.9] text-primary-foreground/70">
            {t(
              "La primera consulta es confidencial y sin compromiso. Toda comunicación es estrictamente privada.",
              "The first consultation is confidential and without commitment. All communication is strictly private.",
              "A primeira consulta é confidencial e sem compromisso. Toda comunicação é estritamente privada."
            )}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#contact"
              className="gold-gradient font-sans-body inline-block px-12 py-4 text-[11px] font-light uppercase tracking-[0.22em] text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              {t("Consulta Privada", "Private Consultation", "Consulta Privada")}
            </a>
            <button
              onClick={() => navigate(-1)}
              className="font-sans-body inline-flex items-center gap-2 border border-primary-foreground/25 px-10 py-4 text-[11px] font-light uppercase tracking-[0.22em] text-primary-foreground/60 transition-all duration-300 hover:border-gold/50 hover:text-primary-foreground"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
              {t("Volver", "Back", "Voltar")}
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialtyPage;
