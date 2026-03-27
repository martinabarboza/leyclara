export const legalTopics = [
  {
    id: 1,
    title: "Tenencia de mascotas en espacios públicos",
    category: "tránsito",
    summary:
      "En Uruguay, podés llevar tu mascota a parques y plazas públicas siempre que la mantengas bajo control. Los perros deben ir con correa en espacios compartidos. Algunas plazas tienen áreas específicas para mascotas sin correa.",
    source: "Ordenanza Municipal de Montevideo, Art. 42",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["mascotas", "espacios públicos", "parques"],
    fullText:
      "Los propietarios de mascotas tienen la responsabilidad de mantener a sus animales bajo control en espacios públicos. Se requiere correa en la mayoría de los espacios compartidos.",
  },
  {
    id: 2,
    title: "Derechos del inquilino en contratos de alquiler",
    category: "alquiler",
    summary:
      "Como inquilino, tenés derecho a recibir el inmueble en buenas condiciones, solicitar reparaciones urgentes al propietario, y que te devuelvan el depósito si no causaste daños. El propietario no puede aumentar el alquiler sin previo aviso.",
    source: "Ley 18.412 - Arrendamientos Urbanos",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["alquiler", "inquilino", "vivienda", "contrato"],
    fullText:
      "La ley de arrendamientos urbanos protege los derechos de inquilinos y propietarios en Uruguay.",
  },
  {
    id: 3,
    title: "Licencia por maternidad y paternidad",
    category: "trabajo",
    summary:
      "Las madres trabajadoras tienen derecho a 14 semanas de licencia remunerada. Los padres tienen 10 días hábiles. Además, existe el subsidio por maternidad pagado por el BPS.",
    source: "Ley 19.120 - Subsidio por Paternidad",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["trabajo", "maternidad", "paternidad", "licencia"],
    fullText:
      "Uruguay garantiza licencias parentales para proteger la familia y el trabajo.",
  },
  {
    id: 4,
    title: "Límites de velocidad en zona urbana",
    category: "tránsito",
    summary:
      "En zonas urbanas el límite general es 45 km/h. En zonas escolares y áreas peatonales puede bajar a 30 km/h. Las multas por exceso de velocidad son graduales según el porcentaje de exceso.",
    source: "Decreto 459/000 - Reglamento Nacional de Tránsito",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["tránsito", "velocidad", "moto", "conducción", "auto"],
    fullText:
      "El reglamento de tránsito uruguayo establece límites de velocidad para garantizar la seguridad vial.",
  },
  {
    id: 5,
    title: "Guardia y custodia de hijos tras separación",
    category: "familia",
    summary:
      "En Uruguay se prioriza la tenencia compartida cuando ambos padres están en condiciones. El bienestar del niño es el criterio principal. Si no hay acuerdo, decide el juez de familia.",
    source: "Código de la Niñez y la Adolescencia, Ley 17.823",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["familia", "divorcio", "custodia", "hijos"],
    fullText:
      "El código de la niñez establece el marco legal para la tenencia y cuidado de menores en Uruguay.",
  },
  {
    id: 6,
    title: "Descuento de horas extra en el trabajo",
    category: "trabajo",
    summary:
      "Las horas extra deben pagarse con un 100% de recargo (doble) si son más de 8 horas diarias o 48 semanales. En días feriados el recargo puede ser mayor. Tenés derecho a negarte si superan los límites legales.",
    source: "Ley 15.996 - Jornada Laboral",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["trabajo", "horas extra", "salario", "derechos"],
    fullText:
      "La legislación laboral uruguaya establece límites claros sobre las horas de trabajo y su compensación.",
  },
  {
    id: 7,
    title: "Despido laboral y derechos del trabajador",
    category: "trabajo",
    summary:
      "En Uruguay, el despido sin justa causa da derecho al trabajador a recibir una indemnización por despido. Esta indemnización se calcula en base a la antigüedad y el salario. El empleador puede despedir, pero debe cumplir con el pago correspondiente según la ley.",
    source: "Ley 10.489 - Normas sobre despido e indemnización laboral",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["despido", "indemnizacion", "trabajo"],
    fullText:
      "El régimen laboral uruguayo establece que el empleador puede despedir a un trabajador en cualquier momento, pero en caso de despido sin justa causa debe abonar una indemnización. Esta se calcula generalmente como un mes de sueldo por cada año trabajado o fracción significativa, según la normativa vigente.",
  },
  {
    id: 8,
    title: "Derecho a la salud y atención médica",
    category: "salud",
    summary:
      "Toda persona tiene derecho a acceder a la atención de salud a través del sistema público o mutual. Nadie puede ser negado de atención médica en casos de urgencia, y existen derechos específicos sobre cobertura, medicamentos y atención digna.",
    source: "Ley N° 18.211 - Sistema Nacional Integrado de Salud",
    sourceUrl: "https://www.impo.com.uy",
    tags: ["salud", "medicina", "hospital", "urgencia", "atencion_medica"],
    fullText:
      "El sistema de salud uruguayo garantiza el acceso universal a la atención médica mediante el Sistema Nacional Integrado de Salud. Las instituciones públicas y privadas deben brindar atención en casos de urgencia, independientemente de la situación económica del paciente.",
  },
  {
    id: 9,
    title: "Derecho a la educación",
    category: "educación",
    summary:
      "La educación es un derecho obligatorio y gratuito en los niveles inicial, primario y medio en instituciones públicas. El Estado garantiza el acceso a la educación sin discriminación y promueve la continuidad educativa.",
    source: "Ley General de Educación N° 18.437",
    sourceUrl: "https://www.impo.com.uy",
    tags: [
      "educacion",
      "escuela",
      "liceo",
      "estudio",
      "derechos_estudiantiles",
    ],
    fullText:
      "La educación en Uruguay es un derecho humano fundamental. El Estado debe asegurar el acceso universal, la gratuidad en la educación pública y la igualdad de oportunidades para todos los estudiantes.",
  },
];

export const chatExamples = [
  {
    question: "¿Puedo llevar a mi perro al parque?",
    response: {
      explanation:
        "Sí, podés llevar a tu perro a la mayoría de los parques y plazas públicas de Uruguay. La condición principal es que vaya con correa en zonas compartidas con otras personas.",
      example:
        "Si llevás tu perro al Parque Rodó en Montevideo, debe ir con correa. Si hay una zona de perros habilitada, allí puede estar libre. Si tu perro molesta a otras personas, podés recibir una multa.",
      whatToDo:
        "Si alguien no cumple y su perro te molesta o ataca, podés llamar al 1512 (Bromatología Municipal) o hacer la denuncia en la Intendencia correspondiente. También podés contactar al inspector municipal de guardia.",
      source: "Ordenanza Municipal de Montevideo · IMPO",
      keywords: [
        "correa",
        "perro",
        "mascota",
        "parque",
        "zona habilitada",
        "multa",
        "inspector municipal",
      ],
    },
  },
  {
    question: "¿Mi casero puede subir el alquiler sin avisar?",
    response: {
      explanation:
        "No. Tu casero debe avisarte con anticipación antes de cualquier aumento de alquiler. Los aumentos deben estar pactados en el contrato o seguir los índices legales. Un aumento sorpresivo o abusivo es ilegal.",
      example:
        "Si tu contrato dice que el alquiler se ajusta cada 6 meses según el IPC y tu casero intenta subirlo más, tenés derecho a negarte y el ajuste debe hacerse conforme a lo pactado.",
      whatToDo:
        "Revisá tu contrato. Si el aumento no está pactado, hablá con tu casero por escrito. Si no llegás a un acuerdo, podés acudir al Ministerio de Vivienda (MVOT) o presentar una demanda en el Juzgado de Paz más cercano.",
      source: "Ley 18.412 · IMPO Uruguay",
      keywords: [
        "contrato",
        "aumento pactado",
        "casero",
        "alquiler",
        "inquilino",
        "IPC",
        "MVOT",
        "Juzgado de Paz",
      ],
    },
  },
  {
    question:
      "¿Cuántos días de licencia me corresponden por nacimiento de un hijo?",
    response: {
      explanation:
        "Como padre, tenés derecho a 10 días hábiles de licencia por paternidad. Como madre, son 14 semanas remuneradas. Además, existe el cuidado parental compartido después de la licencia maternal.",
      example:
        "Si tu hijo nace el 5 de marzo, como padre podés tomarte los 10 días hábiles a partir de ese momento y el BPS te paga el subsidio directamente.",
      whatToDo:
        "Avisá a tu empleador con anticipación y gestioná el subsidio en el BPS (bps.gub.uy). Necesitarás la partida de nacimiento del bebé y tu carné de trabajo.",
      source: "Ley 19.120 · BPS Uruguay",
      keywords: [
        "10 días hábiles",
        "14 semanas",
        "BPS",
        "subsidio",
        "cuidado parental",
        "licencia",
        "paternidad",
        "maternidad",
        "trabajo",
        "hijo",
        "nacimiento",
      ],
    },
  },
];

export const categories = [
  "tránsito",
  "alquiler",
  "trabajo",
  "familia",
  "salud",
  "educación",
];
