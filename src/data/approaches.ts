export interface Approach {
  slug: string;
  icon: string; // lucide icon name
  numeral: string;
  titleEs: string;
  titleEn: string;
  titlePt: string;
  summaryEs: string;
  summaryEn: string;
  summaryPt: string;
  descEs: string;
  descEn: string;
  descPt: string;
  bodyEs: string[];
  bodyEn: string[];
  bodyPt: string[];
  methodsEs: string[];
  methodsEn: string[];
  methodsPt: string[];
}

export const approaches: Approach[] = [
  {
    slug: "rigor-clinico",
    icon: "FlaskConical",
    numeral: "01",
    titleEs: "Rigor Clínico",
    titleEn: "Clinical Rigour",
    titlePt: "Rigor Clínico",
    summaryEs:
      "Métodos basados en evidencia — TCC, EMDR, terapia sistémica — adaptados con precisión a las realidades interculturales y a la complejidad emocional de las familias internacionales.",
    summaryEn:
      "Evidence-based methods — CBT, EMDR, systemic therapy — adapted with precision to intercultural realities and the emotional complexity of international families.",
    summaryPt:
      "Métodos baseados em evidências — TCC, EMDR, terapia sistêmica — adaptados com precisão às realidades interculturais e à complexidade emocional das famílias internacionais.",
    descEs:
      "La ciencia al servicio de la persona: un marco clínico sólido que se adapta a la historia única de cada familia.",
    descEn:
      "Science at the service of the person: a solid clinical framework that adapts to each family's unique story.",
    descPt:
      "A ciência ao serviço da pessoa: um marco clínico sólido que se adapta à história única de cada família.",
    bodyEs: [
      "El rigor clínico no es rigidez. Es la capacidad de elegir, con criterio informado, qué herramienta terapéutica se ajusta mejor a la situación concreta de cada persona o familia en un momento determinado.",
      "La Terapia Cognitivo-Conductual (TCC) ofrece estructuras claras para identificar y transformar patrones de pensamiento que generan malestar. El EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares) trabaja directamente con el sistema nervioso para procesar experiencias traumáticas de forma segura y eficaz. La terapia sistémica amplía el foco más allá del individuo, para comprender cómo las dinámicas familiares, culturales y generacionales moldean el presente.",
      "En el contexto de las familias internacionales, el rigor clínico también implica una formación intercultural sólida: entender que los conceptos de salud mental, bienestar, duelo o resiliencia no son universales, sino que están profundamente arraigados en la cultura de origen.",
      "Cada sesión está diseñada con intención. No se improvisa. La evaluación inicial es exhaustiva, el plan terapéutico es personalizado, y el progreso se revisa de forma regular con el cliente. El objetivo es siempre claro: que cada persona y familia alcance el cambio que está buscando, con el menor sufrimiento posible en el camino.",
    ],
    bodyEn: [
      "Clinical rigour is not rigidity. It is the capacity to choose, with informed judgment, which therapeutic tool best fits the specific situation of each person or family at a given moment.",
      "Cognitive-Behavioural Therapy (CBT) offers clear structures to identify and transform thinking patterns that cause distress. EMDR (Eye Movement Desensitisation and Reprocessing) works directly with the nervous system to process traumatic experiences safely and effectively. Systemic therapy broadens the focus beyond the individual to understand how family, cultural, and generational dynamics shape the present.",
      "In the context of international families, clinical rigour also implies solid intercultural training: understanding that concepts of mental health, wellbeing, grief, or resilience are not universal, but deeply rooted in one's culture of origin.",
      "Each session is designed with intention. Nothing is improvised. The initial assessment is thorough, the therapeutic plan is personalised, and progress is reviewed regularly with the client. The goal is always clear: for each person and family to achieve the change they are seeking, with as little suffering as possible along the way.",
    ],
    bodyPt: [
      "O rigor clínico não é rigidez. É a capacidade de escolher, com critério informado, qual ferramenta terapêutica se adapta melhor à situação concreta de cada pessoa ou família num determinado momento.",
      "A Terapia Cognitivo-Comportamental (TCC) oferece estruturas claras para identificar e transformar padrões de pensamento que geram sofrimento. O EMDR (Dessensibilização e Reprocessamento por Movimentos Oculares) trabalha diretamente com o sistema nervoso para processar experiências traumáticas de forma segura e eficaz. A terapia sistêmica amplia o foco para além do indivíduo, para compreender como as dinâmicas familiares, culturais e geracionais moldam o presente.",
      "No contexto das famílias internacionais, o rigor clínico também implica uma formação intercultural sólida: entender que os conceitos de saúde mental, bem-estar, luto ou resiliência não são universais, mas profundamente enraizados na cultura de origem.",
      "Cada sessão é projetada com intenção. Nada é improvisado. A avaliação inicial é exaustiva, o plano terapêutico é personalizado e o progresso é revisto regularmente com o cliente. O objetivo é sempre claro: que cada pessoa e família alcance a mudança que procura, com o menor sofrimento possível no caminho.",
    ],
    methodsEs: ["TCC", "EMDR", "Terapia Sistémica", "Evaluación Intercultural", "Planificación Terapéutica"],
    methodsEn: ["CBT", "EMDR", "Systemic Therapy", "Intercultural Assessment", "Therapeutic Planning"],
    methodsPt: ["TCC", "EMDR", "Terapia Sistêmica", "Avaliação Intercultural", "Planejamento Terapêutico"],
  },
  {
    slug: "discrecion-absoluta",
    icon: "ShieldCheck",
    numeral: "02",
    titleEs: "Discreción Absoluta",
    titleEn: "Absolute Discretion",
    titlePt: "Discrição Absoluta",
    summaryEs:
      "La confidencialidad no es un protocolo — es el fundamento de nuestra relación. Cada sesión es un espacio protegido, sin filtros ni condicionantes externos.",
    summaryEn:
      "Confidentiality is not a protocol — it is the foundation of our relationship. Each session is a protected space, without filters or external conditions.",
    summaryPt:
      "A confidencialidade não é um protocolo — é o fundamento da nossa relação. Cada sessão é um espaço protegido.",
    descEs:
      "Un espacio terapéutico donde la privacidad es sagrada y la confianza es el punto de partida de todo proceso de cambio.",
    descEn:
      "A therapeutic space where privacy is sacred and trust is the starting point for every process of change.",
    descPt:
      "Um espaço terapêutico onde a privacidade é sagrada e a confiança é o ponto de partida de todo processo de mudança.",
    bodyEs: [
      "Para las familias internacionales, la discreción no es un lujo: es una necesidad. Muchas de ellas pertenecen a comunidades pequeñas y visibles en Madrid — comunidades diplomáticas, corporativas o de expatriados — donde la privacidad puede ser especialmente frágil.",
      "La confidencialidad en este consultorio está garantizada por el marco deontológico del Colegio Oficial de Psicólogos, por el Reglamento General de Protección de Datos (RGPD) europeo, y por un compromiso personal que va más allá de cualquier obligación legal. Ninguna información compartida en sesión sale del espacio terapéutico sin el consentimiento explícito del cliente.",
      "Las sesiones pueden realizarse en formato presencial en un espacio discreto y cuidadosamente elegido en Madrid, o en formato online con plataformas encriptadas de extremo a extremo. En ningún caso se utilizan herramientas de videoconferencia con políticas de datos que comprometan la privacidad.",
      "La primera consulta — orientativa y sin compromiso — se realiza con el mismo nivel de confidencialidad que cualquier sesión terapéutica. Porque la confianza se construye desde el primer contacto.",
    ],
    bodyEn: [
      "For international families, discretion is not a luxury — it is a necessity. Many of them belong to small and visible communities in Madrid — diplomatic, corporate, or expat communities — where privacy can be especially fragile.",
      "Confidentiality in this practice is guaranteed by the ethical framework of the Official College of Psychologists, by the European General Data Protection Regulation (GDPR), and by a personal commitment that goes beyond any legal obligation. No information shared in session leaves the therapeutic space without the client's explicit consent.",
      "Sessions can be held in person in a discreet and carefully chosen space in Madrid, or online with end-to-end encrypted platforms. Under no circumstances are videoconferencing tools with data policies that compromise privacy used.",
      "The first consultation — exploratory and without commitment — is held at the same level of confidentiality as any therapeutic session. Because trust is built from the very first contact.",
    ],
    bodyPt: [
      "Para as famílias internacionais, a discrição não é um luxo — é uma necessidade. Muitas delas pertencem a comunidades pequenas e visíveis em Madrid — comunidades diplomáticas, corporativas ou de expatriados — onde a privacidade pode ser especialmente frágil.",
      "A confidencialidade neste consultório é garantida pelo marco deontológico do Colégio Oficial de Psicólogos, pelo Regulamento Geral de Proteção de Dados (RGPD) europeu, e por um compromisso pessoal que vai além de qualquer obrigação legal. Nenhuma informação partilhada em sessão sai do espaço terapêutico sem o consentimento explícito do cliente.",
      "As sessões podem ser realizadas de forma presencial num espaço discreto e cuidadosamente escolhido em Madrid, ou online com plataformas encriptadas de ponta a ponta. Em nenhum caso são utilizadas ferramentas de videoconferência com políticas de dados que comprometam a privacidade.",
      "A primeira consulta — orientativa e sem compromisso — é realizada com o mesmo nível de confidencialidade que qualquer sessão terapêutica. Porque a confiança se constrói desde o primeiro contacto.",
    ],
    methodsEs: ["Protocolo RGPD", "Plataformas Encriptadas", "Espacio Presencial Privado", "Consentimiento Informado"],
    methodsEn: ["GDPR Protocol", "Encrypted Platforms", "Private In-Person Space", "Informed Consent"],
    methodsPt: ["Protocolo RGPD", "Plataformas Encriptadas", "Espaço Presencial Privado", "Consentimento Informado"],
  },
  {
    slug: "perspectiva-internacional",
    icon: "Globe2",
    numeral: "03",
    titleEs: "Perspectiva Internacional",
    titleEn: "International Perspective",
    titlePt: "Perspectiva Internacional",
    summaryEs:
      "Trabajo en español, inglés y portugués con familias de múltiples orígenes. Entiendo desde adentro la complejidad de vivir entre culturas en Madrid.",
    summaryEn:
      "I work in Spanish, English, and Portuguese with families of multiple backgrounds. I understand from within the complexity of living between cultures in Madrid.",
    summaryPt:
      "Trabalho em espanhol, inglês e português com famílias de múltiplas origens. Entendo por dentro a complexidade de viver entre culturas em Madrid.",
    descEs:
      "Vivir entre culturas es una riqueza y un reto. Esta perspectiva no es teórica — es parte de mi propia historia clínica e intercultural.",
    descEn:
      "Living between cultures is both a richness and a challenge. This perspective is not theoretical — it is part of my own clinical and intercultural story.",
    descPt:
      "Viver entre culturas é uma riqueza e um desafio. Esta perspectiva não é teórica — é parte da minha própria história clínica e intercultural.",
    bodyEs: [
      "Madrid acoge una de las comunidades de familias internacionales más diversas de Europa. Diplomáticos, ejecutivos globales, familias mixtas, parejas binacionales, hijos de tercera cultura: cada uno llega con una historia única formada por la superposición de lenguas, valores, sistemas de crianza y referencias culturales a veces contradictorias.",
      "La perspectiva intercultural en terapia no es simplemente «conocer otras culturas». Es entender cómo la cultura moldea la manera en que una persona experimenta el duelo, la autoridad, el afecto, la vergüenza, el éxito o el fracaso. Es saber que un mismo síntoma puede tener significados radicalmente distintos según el contexto cultural del que proviene.",
      "Trabajo en tres lenguas — español, inglés y portugués — no solo para eliminar barreras de comunicación, sino porque la lengua en la que uno habla de sus emociones importa profundamente. Muchas personas se expresan de forma distinta según el idioma: hay cosas que solo se pueden decir en la lengua materna.",
      "Mi formación incluye especialización en psicología intercultural y trabajo clínico con poblaciones de múltiples orígenes. He trabajado con familias de más de veinte países distintos, lo que me ha permitido desarrollar una sensibilidad cultural genuina — no aprendida de libros, sino forjada en el trabajo terapéutico real.",
    ],
    bodyEn: [
      "Madrid hosts one of the most diverse international family communities in Europe. Diplomats, global executives, mixed families, binational couples, third-culture children: each arrives with a unique story shaped by the overlapping of languages, values, parenting systems, and sometimes contradictory cultural references.",
      "Intercultural perspective in therapy is not simply 'knowing other cultures'. It means understanding how culture shapes the way a person experiences grief, authority, affection, shame, success, or failure. It means knowing that the same symptom can have radically different meanings depending on the cultural context from which it comes.",
      "I work in three languages — Spanish, English, and Portuguese — not only to remove communication barriers, but because the language in which one speaks about emotions matters profoundly. Many people express themselves differently depending on the language: there are things that can only be said in one's mother tongue.",
      "My training includes specialisation in intercultural psychology and clinical work with populations of multiple backgrounds. I have worked with families from more than twenty different countries, which has allowed me to develop genuine cultural sensitivity — not learned from books, but forged in real therapeutic work.",
    ],
    bodyPt: [
      "Madrid acolhe uma das comunidades de famílias internacionais mais diversas da Europa. Diplomatas, executivos globais, famílias mistas, casais binacionais, filhos de terceira cultura: cada um chega com uma história única formada pela sobreposição de línguas, valores, sistemas de criação e referências culturais por vezes contraditórias.",
      "A perspectiva intercultural na terapia não é simplesmente 'conhecer outras culturas'. É entender como a cultura molda a forma como uma pessoa experimenta o luto, a autoridade, o afeto, a vergonha, o sucesso ou o fracasso. É saber que um mesmo sintoma pode ter significados radicalmente diferentes dependendo do contexto cultural de onde provém.",
      "Trabalho em três línguas — espanhol, inglês e português — não apenas para eliminar barreiras de comunicação, mas porque a língua em que se fala sobre as emoções importa profundamente. Muitas pessoas se expressam de forma diferente dependendo do idioma: há coisas que só podem ser ditas na língua materna.",
      "A minha formação inclui especialização em psicologia intercultural e trabalho clínico com populações de múltiplas origens. Trabalhei com famílias de mais de vinte países diferentes, o que me permitiu desenvolver uma sensibilidade cultural genuína — não aprendida em livros, mas forjada no trabalho terapêutico real.",
    ],
    methodsEs: ["Psicología Intercultural", "Terapia Multilingüe", "Adaptación Cultural", "Trabajo con TCK", "Identidad Bicultural"],
    methodsEn: ["Intercultural Psychology", "Multilingual Therapy", "Cultural Adaptation", "TCK Work", "Bicultural Identity"],
    methodsPt: ["Psicologia Intercultural", "Terapia Multilíngue", "Adaptação Cultural", "Trabalho com TCK", "Identidade Bicultural"],
  },
];
