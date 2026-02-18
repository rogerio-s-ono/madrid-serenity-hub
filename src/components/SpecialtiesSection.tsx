import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const specialties = [
  {
    num: "01",
    titleEs: "Transición Cultural e Identidad",
    titleEn: "Cultural Transition & Identity",
    titlePt: "Transição Cultural e Identidade",
    descEs: "Para profesionales y familias que sienten la tensión entre quiénes eran y quiénes están llegando a ser. Integramos identidades sin perder lo que te hace tú.",
    descEn: "For professionals and families feeling the tension between who they were and who they are becoming. We integrate identities without losing what makes you, you.",
    descPt: "Para profissionais e famílias que sentem a tensão entre quem eram e quem estão se tornando.",
  },
  {
    num: "02",
    titleEs: "Familias Criando entre Culturas",
    titleEn: "Raising Children Between Cultures",
    titlePt: "Criando Filhos entre Culturas",
    descEs: "Criar hijos entre dos o más culturas plantea preguntas únicas sobre pertenencia, valores y lengua. Acompañamos a familias a construir un hogar cohesionado.",
    descEn: "Raising children across cultures raises unique questions about belonging, values, and language. We help families build a cohesive home without surrendering any roots.",
    descPt: "Criar filhos entre culturas levanta questões únicas sobre pertencimento, valores e língua.",
  },
  {
    num: "03",
    titleEs: "Presión Ejecutiva y Liderazgo",
    titleEn: "Executive Pressure & Leadership",
    titlePt: "Pressão Executiva e Liderança",
    descEs: "El éxito en un entorno nuevo es exigente. Trabajamos la regulación emocional, la toma de decisiones bajo presión y el liderazgo auténtico en contextos internacionales.",
    descEn: "Success in a new environment is demanding. We work on emotional regulation, decision-making under pressure, and authentic leadership in international contexts.",
    descPt: "O sucesso em um novo ambiente é exigente. Trabalhamos a regulação emocional e a liderança autêntica.",
  },
  {
    num: "04",
    titleEs: "Tensión Conyugal tras la Reubicación",
    titleEn: "Marital Strain After Relocation",
    titlePt: "Tensão Conjugal após Realocação",
    descEs: "La reubicación expone fragilidades en la pareja antes latentes. Terapia de pareja para reconectar, renegociar y reforzar la alianza que sostiene todo lo demás.",
    descEn: "Relocation exposes vulnerabilities previously dormant. Couples therapy to reconnect, renegotiate, and reinforce the alliance that holds everything else together.",
    descPt: "A realocação expõe fragilidades antes latentes. Terapia de casal para reconectar e reforçar a aliança.",
  },
  {
    num: "05",
    titleEs: "Soledad en el Éxito",
    titleEn: "Loneliness Within Success",
    titlePt: "Solidão no Sucesso",
    descEs: "Muchos de mis clientes tienen todo desde fuera — y un silencio interior que nadie ve. Abordamos el aislamiento y la búsqueda de sentido sin juicio ni clichés.",
    descEn: "Many of my clients have everything on the outside — and an interior silence nobody sees. We address isolation and the search for meaning without judgment or clichés.",
    descPt: "Muitos clientes têm tudo por fora — e um silêncio interior que ninguém vê. Abordamos o isolamento e a busca de sentido.",
  },
  {
    num: "06",
    titleEs: "Trauma, EMDR y Resiliencia",
    titleEn: "Trauma, EMDR & Resilience",
    titlePt: "Trauma, EMDR e Resiliência",
    descEs: "Experiencias pasadas que actúan en el presente — en el cuerpo, en las relaciones, en el rendimiento. Con EMDR y métodos basados en evidencia, procesamos y liberamos su influencia.",
    descEn: "Past experiences acting in the present — in the body, relationships, and performance. With EMDR and evidence-based methods, we process and release their influence.",
    descPt: "Experiências passadas atuando no presente. Com EMDR e métodos baseados em evidências, processamos e liberamos sua influência.",
  },
];

const SpecialtiesSection = () => {
  const { t, lang } = useLanguage();

  const heading =
    lang === "es" ? (
      <>Diseñado para quien ya ha alcanzado mucho<br />— y quiere <em>sostenerse bien en ello</em></>
    ) : lang === "pt" ? (
      <>Desenhado para quem já alcançou muito<br />— e quer <em>se sustentar bem nisso</em></>
    ) : (
      <>Designed for those who have achieved much<br />— and want to <em>sustain it well</em></>
    );

  return (
    <section id="specialties" className="bg-primary py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 max-w-2xl"
        >
          <p className="section-label mb-5" style={{ color: "hsl(var(--gold-light))" }}>
            {t("Áreas de Especialización", "Areas of Expertise", "Áreas de Especialização")}
          </p>
          <h2 className="font-serif-display text-4xl font-light leading-[1.2] text-primary-foreground lg:text-5xl">
            {heading}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid border border-primary-foreground/8 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border border-primary-foreground/8 bg-primary p-10 transition-colors duration-300 hover:bg-primary-foreground/[0.04] cursor-default"
            >
              <p className="font-serif-display mb-5 text-2xl font-light text-accent/40">{s.num}</p>
              <h3 className="font-serif-display mb-4 text-xl font-light leading-snug text-primary-foreground">
                {t(s.titleEs, s.titleEn, s.titlePt)}
              </h3>
              <div className="mb-4 h-px w-8 bg-accent/30 transition-all duration-300 group-hover:w-14 group-hover:bg-accent/60" />
              <p className="font-sans-body text-sm font-light leading-[1.85] text-primary-foreground/55">
                {t(s.descEs, s.descEn, s.descPt)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
