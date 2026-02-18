import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Users, Briefcase, Baby, Heart, ShieldCheck } from "lucide-react";

const specialties = [
  {
    icon: Globe,
    titleEs: "Transición Cultural e Identidad",
    titleEn: "Cultural Transition & Identity",
    titlePt: "Transição Cultural e Identidade",
    descEs: "Para profesionales e familias que han cambiado de país y sienten la tensión entre quiénes eran y quiénes están llegando a ser. Trabajo para integrar identidades sin perder lo que te hace tú.",
    descEn: "For professionals and families who have changed countries and feel the tension between who they were and who they are becoming. We work to integrate identities without losing what makes you, you.",
    descPt: "Para profissionais e famílias que mudaram de país e sentem a tensão entre quem eram e quem estão se tornando. Trabalhamos para integrar identidades sem perder o que te faz único.",
  },
  {
    icon: Baby,
    titleEs: "Familias Criando entre Culturas",
    titleEn: "Families Raising Children Between Cultures",
    titlePt: "Famílias Criando Filhos entre Culturas",
    descEs: "Criar hijos entre dos o más culturas plantea preguntas únicas sobre pertenencia, valores y lengua. Acompañamos a familias a construir un hogar cohesionado sin renunciar a ninguna raíz.",
    descEn: "Raising children between two or more cultures raises unique questions about belonging, values, and language. We help families build a cohesive home without surrendering any roots.",
    descPt: "Criar filhos entre duas ou mais culturas levanta questões únicas sobre pertencimento, valores e língua. Ajudamos famílias a construir um lar coeso sem renunciar a nenhuma raiz.",
  },
  {
    icon: Briefcase,
    titleEs: "Presión Ejecutiva y Liderazgo",
    titleEn: "Executive Pressure & Leadership",
    titlePt: "Pressão Executiva e Liderança",
    descEs: "El éxito profesional en un entorno nuevo es exigente. Trabajamos la gestión emocional, la toma de decisiones bajo presión y el liderazgo auténtico en contextos internacionales.",
    descEn: "Professional success in a new environment is demanding. We work on emotional regulation, high-pressure decision-making, and authentic leadership in international contexts.",
    descPt: "O sucesso profissional em um novo ambiente é exigente. Trabalhamos a regulação emocional, a tomada de decisões sob pressão e a liderança autêntica em contextos internacionais.",
  },
  {
    icon: Users,
    titleEs: "Tensión Conyugal tras la Reubicación",
    titleEn: "Marital Strain After Relocation",
    titlePt: "Tensão Conjugal após a Realocação",
    descEs: "La reubicación expone fragilidades en la pareja que antes permanecían latentes. Terapia de pareja para reconectar, renegociar y reforzar la alianza que sustenta todo lo demás.",
    descEn: "Relocation exposes vulnerabilities in a relationship that were previously dormant. Couples therapy to reconnect, renegotiate, and reinforce the alliance that holds everything else together.",
    descPt: "A realocação expõe fragilidades no casal que antes permaneciam latentes. Terapia de casal para reconectar, renegociar e reforçar a aliança que sustenta todo o resto.",
  },
  {
    icon: Heart,
    titleEs: "Soledad en el Éxito",
    titleEn: "Loneliness Within Success",
    titlePt: "Solidão no Sucesso",
    descEs: "Muchos de mis clientes tienen todo desde fuera — y un silencio interior que nadie ve. Abordamos el aislamiento, la desconexión y la búsqueda de sentido sin juicio ni clichés.",
    descEn: "Many of my clients have everything on the outside — and an interior silence nobody sees. We address isolation, disconnection, and the search for meaning without judgment or clichés.",
    descPt: "Muitos dos meus clientes têm tudo por fora — e um silêncio interior que ninguém vê. Abordamos o isolamento, a desconexão e a busca de sentido sem julgamento nem clichês.",
  },
  {
    icon: ShieldCheck,
    titleEs: "Trauma, EMDR y Resiliencia",
    titleEn: "Trauma, EMDR & Resilience",
    titlePt: "Trauma, EMDR e Resiliência",
    descEs: "Experiencias pasadas que siguen actuando en el presente — en el cuerpo, en las relaciones, en el rendimiento. Con EMDR y métodos basados en evidencia, procesamos y liberamos su influencia.",
    descEn: "Past experiences that continue to act in the present — in the body, in relationships, in performance. With EMDR and evidence-based methods, we process and release their influence.",
    descPt: "Experiências passadas que continuam atuando no presente — no corpo, nas relações, no desempenho. Com EMDR e métodos baseados em evidências, processamos e liberamos sua influência.",
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
            {t("Áreas de Especialización", "Areas of Expertise", "Áreas de Especialização")}
          </p>
          <h2 className="font-serif-display text-4xl font-medium text-primary-foreground">
            {t(
              "Diseñado para quien ya ha alcanzado mucho — y quiere sostenerse bien en ello",
              "Designed for those who have achieved much — and want to sustain it well",
              "Desenhado para quem já alcançou muito — e quer se sustentar bem nisso"
            )}
          </h2>
          <div className="gold-line mx-auto mt-6 w-16" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-sm border border-primary-foreground/10 p-8 transition-all hover:border-accent/40 hover:bg-primary-foreground/5"
            >
              <s.icon className="mb-4 h-7 w-7 text-accent" strokeWidth={1.2} />
              <h3 className="mb-3 font-serif-display text-lg font-medium text-primary-foreground">
                {t(s.titleEs, s.titleEn, s.titlePt)}
              </h3>
              <p className="text-sm font-light leading-relaxed text-primary-foreground/65">
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
