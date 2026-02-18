import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

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
    titleEs: "Bienestar Familiar en la Distancia",
    titleEn: "Family Wellbeing in the Distance",
    titlePt: "Bem-Estar Familiar na Distância",
    descEs: "Cuando la familia extendida queda lejos y las redes de apoyo se reconstruyen desde cero, la familia nuclear lleva un peso invisible. Creamos recursos internos para que ese peso no los divida.",
    descEn: "When extended family is far and support networks must be rebuilt from scratch, the nuclear family carries an invisible weight. We build internal resources so that weight doesn't divide them.",
    descPt: "Quando a família extensa fica longe e as redes de apoio precisam ser reconstruídas do zero, a família nuclear carrega um peso invisível.",
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
  const [selected, setSelected] = useState<number | null>(null);

  const heading =
    lang === "es" ? (
      <>Diseñado para familias que han elegido<br /><em>construir su vida en Madrid</em></>
    ) : lang === "pt" ? (
      <>Desenhado para famílias que escolheram<br /><em>construir sua vida em Madrid</em></>
    ) : (
      <>Designed for families who have chosen<br /><em>to build their life in Madrid</em></>
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
        <div className="grid border border-primary-foreground/10 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {specialties.map((s, i) => {
            const isSelected = selected === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{
                  y: -6,
                  scale: 1.025,
                  rotateX: 2,
                  rotateY: -1,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px hsl(var(--gold)/0.25)",
                  zIndex: 10,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                animate={
                  isSelected
                    ? {
                        y: -10,
                        scale: 1.04,
                        boxShadow: "0 28px 60px rgba(0,0,0,0.55), 0 0 0 1.5px hsl(var(--gold)/0.5)",
                        zIndex: 20,
                      }
                    : {
                        y: 0,
                        scale: 1,
                        boxShadow: "none",
                        zIndex: 1,
                      }
                }
                onClick={() => setSelected(isSelected ? null : i)}
                className="relative border border-primary-foreground/10 bg-primary p-10 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gold accent line on selected */}
                {isSelected && (
                  <motion.div
                    layoutId="selected-accent"
                    className="absolute top-0 left-0 right-0 h-[2px] gold-gradient"
                    transition={{ duration: 0.2 }}
                  />
                )}

                <p className="font-serif-display mb-5 text-3xl font-medium" style={{ color: "hsl(var(--gold-light))" }}>
                  {s.num}
                </p>
                <h3 className="font-serif-display mb-4 text-xl font-light leading-snug text-primary-foreground">
                  {t(s.titleEs, s.titleEn, s.titlePt)}
                </h3>
                <div className={`mb-4 h-px bg-accent/50 transition-all duration-300 ${isSelected ? "w-14" : "w-8 group-hover:w-14"}`} />
                <p className="font-sans-body text-sm font-light leading-[1.85]" style={{ color: "hsl(var(--primary-foreground)/0.75)" }}>
                  {t(s.descEs, s.descEn, s.descPt)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
