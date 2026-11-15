export const site = {
  name: "Ofcasa Pro",
  phoneDisplay: "304 459 9438",
  phoneIntl: "573044599438",
  web: "www.ofcasapro.com",
  url: "https://ofcasa-pro.vercel.app",
  zone: "Bello y Medellín",
  address: "Calle 64A #65D-46",
  city: "Bello",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+64A+%2365D-46+Bello+Antioquia",
  social: {
    instagram: "https://www.instagram.com/ofcasapro",
    tiktok: "https://www.tiktok.com/@ofcasapro",
    facebook: "https://www.facebook.com/ofcasapro",
  },
};

export function waLink(message = "Hola Ofcasa Pro, quiero cotizar un servicio de limpieza.") {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/*
 * BANNER DE LA PORTADA
 * Pon una foto real (horizontal, ojalá 1920x1080) en public/img/banner.jpg
 * y escribe aquí "/img/banner.jpg". Vacío = banner azul con ilustraciones.
 */
export const bannerImage = "";

/*
 * FOTO DEL EQUIPO (página Nosotros)
 * Guarda una foto real del equipo en public/img/equipo.jpg (vertical)
 * y escribe aquí "/img/equipo.jpg". Vacío = panel ilustrado.
 */
export const equipoImage = "";

/* Fotos del servicio de lavado de muebles y colchones (en public/img/) */
export const galeriaMuebles = [
  { src: "/img/sofa.jpg", titulo: "Sofás y salas", alt: "Lavado de sofá con máquina de inyección y succión" },
  { src: "/img/colchon.jpg", titulo: "Colchones", alt: "Lavado de colchón con máquina de inyección y succión" },
  { src: "/img/poltrona.jpg", titulo: "Poltronas y sillones", alt: "Lavado de poltrona tapizada" },
  { src: "/img/sillas.jpg", titulo: "Sillas de comedor", alt: "Lavado de sillas de comedor tapizadas" },
];

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/empresas", label: "Planes para empresas" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export type Service = {
  id: string;
  slug: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  name: string;
  short: string;
  description: string;
  includes: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    id: "oficinas",
    slug: "limpieza-de-oficinas-medellin",
    h1: "Limpieza de oficinas en Bello y Medellín",
    seoTitle: "Limpieza de oficinas en Bello y Medellín",
    seoDescription:
      "Servicio de aseo y limpieza de oficinas en Bello, Medellín y el Valle de Aburrá. Personal uniformado, insumos incluidos y revisión de calidad en cada visita. Cotiza por WhatsApp.",
    intro: [
      "Una oficina limpia es lo primero que nota un cliente al entrar. Nos encargamos de puestos de trabajo, salas de reunión, recepción, cocina y baños para que tu equipo trabaje tranquilo y tus visitas se lleven una buena impresión.",
      "Trabajamos con visitas únicas o con planes semanales y diarios, en el horario que menos interrumpa tu operación. Al terminar cada servicio revisamos el resultado.",
    ],
    name: "Limpieza de oficinas",
    short: "Espacios de trabajo listos para recibir clientes.",
    description:
      "Puestos de trabajo, salas de reunión, recepción, cocina y baños. Dejamos la oficina como debe verse cuando llega el primer cliente del día.",
    includes: [
      "Escritorios, sillas y superficies de trabajo",
      "Salas de reunión y recepción",
      "Cocinas y zonas de café",
      "Baños con desinfección",
      "Vaciado de papeleras",
    ],
    goodFor: "Oficinas corporativas, coworkings y oficinas pequeñas",
  },
  {
    id: "profunda",
    slug: "limpieza-profunda-y-desinfeccion-medellin",
    h1: "Limpieza profunda y desinfección en Medellín",
    seoTitle: "Limpieza profunda y desinfección en Medellín",
    seoDescription:
      "Limpieza profunda y desinfección de oficinas, consultorios y hogares en Medellín: puntos de contacto, baños, cocinas y rincones. Ideal después de obra o antes de mudanza.",
    intro: [
      "Hay momentos en que el aseo de rutina no alcanza: después de una obra, antes de entregar o recibir un inmueble, o simplemente cuando el espacio necesita empezar de cero.",
      "En una limpieza profunda vamos a los rincones, detrás de los muebles, los zócalos y todos los puntos que se tocan a diario, y desinfectamos baños y cocinas.",
    ],
    name: "Limpieza profunda y desinfección",
    short: "Cada rincón y cada punto de contacto.",
    description:
      "Para cuando el espacio necesita algo más que el aseo de rutina: después de una obra, antes de una mudanza o una vez cada cierto tiempo.",
    includes: [
      "Manijas, interruptores y puntos de contacto",
      "Zócalos, rincones y detrás de muebles",
      "Desinfección de baños y cocinas",
      "Limpieza de lámparas y rejillas al alcance",
    ],
    goodFor: "Entregas de inmuebles, post-obra y limpiezas de temporada",
  },
  {
    id: "mantenimiento",
    slug: "aseo-y-mantenimiento-de-oficinas-medellin",
    h1: "Aseo diario o semanal para oficinas en Medellín",
    seoTitle: "Aseo diario o semanal de oficinas en Medellín",
    seoDescription:
      "Planes de aseo y mantenimiento diario o semanal para oficinas y consultorios en Bello y Medellín. Horario a tu medida y revisión en cada visita.",
    intro: [
      "Con un plan de mantenimiento tu oficina se mantiene presentable todos los días sin que tengas que pensar en eso.",
      "Definimos contigo las tareas por zona y el horario, y revisamos el resultado al final de cada visita. Si tu oficina cambia, ajustamos el plan.",
    ],
    name: "Mantenimiento diario o semanal",
    short: "La misma persona, el mismo estándar, cada visita.",
    description:
      "Rutinas fijas en el horario que menos interrumpa tu operación. El espacio se mantiene en orden sin que tengas que pensar en eso.",
    includes: [
      "Plan de tareas por zona",
      "Horario acordado contigo",
      "Revisión de calidad al final de cada visita",
    ],
    goodFor: "Empresas que necesitan su espacio siempre presentable",
  },
  {
    id: "vidrios-pisos",
    slug: "limpieza-de-vidrios-y-pisos-medellin",
    h1: "Limpieza de vidrios y pisos en Medellín",
    seoTitle: "Limpieza de vidrios y pisos en Medellín",
    seoDescription:
      "Limpieza de vidrios, divisiones, espejos y pisos de porcelanato, madera o cerámica en oficinas y hogares de Medellín. Sin marcas ni residuos.",
    intro: [
      "Los vidrios con marcas y los pisos opacos se notan apenas alguien entra. Limpiamos ventanales interiores, divisiones de vidrio y espejos sin dejar rayas.",
      "Para los pisos usamos el producto adecuado según el material, ya sea porcelanato, madera o cerámica, para que queden limpios y con brillo sin dañarlos.",
    ],
    name: "Vidrios y pisos",
    short: "Vidrios sin marcas y pisos con brillo.",
    description:
      "Ventanales, divisiones de vidrio y espejos sin rayas. Pisos de porcelanato, madera o cerámica tratados con el producto adecuado para cada uno.",
    includes: [
      "Vidrios interiores y divisiones",
      "Espejos y superficies brillantes",
      "Barrido, trapeado y brillo de pisos",
    ],
    goodFor: "Oficinas con fachadas de vidrio y espacios de alto tránsito",
  },
  {
    id: "consultorios",
    slug: "limpieza-de-consultorios-y-edificios-medellin",
    h1: "Limpieza de consultorios y edificios en Medellín",
    seoTitle: "Limpieza de consultorios y edificios en Medellín",
    seoDescription:
      "Aseo de consultorios, salas de espera y zonas comunes de edificios en Bello y Medellín. Higiene y orden donde más se nota.",
    intro: [
      "En un consultorio la limpieza es parte de la confianza que siente el paciente. Nos encargamos de salas de espera, recepción, consultorios y baños.",
      "En edificios atendemos pasillos, ascensores y zonas comunes, que son las áreas de más tránsito y las que primero dan una impresión del lugar.",
    ],
    name: "Consultorios y edificios",
    short: "Higiene y calma donde más se nota.",
    description:
      "Salas de espera, consultorios y zonas comunes donde la limpieza es parte de la confianza que siente quien entra.",
    includes: [
      "Salas de espera y recepción",
      "Consultorios y baños",
      "Pasillos, ascensores y zonas comunes",
    ],
    goodFor: "Consultorios, clínicas pequeñas y edificios",
  },
  {
    id: "hogar",
    slug: "lavado-de-muebles-y-colchones-medellin",
    h1: "Lavado de muebles, sofás y colchones en Bello y Medellín",
    seoTitle: "Lavado de muebles, sofás y colchones a domicilio en Bello y Medellín",
    seoDescription:
      "Lavado de sofás, salas, colchones, sillas y alfombras a domicilio en Bello y Medellín con máquinas de inyección y succión. Secado rápido. Cotiza por WhatsApp.",
    intro: [
      "Los sofás, colchones y sillas acumulan polvo, manchas y olores que no salen con una limpieza normal. Los lavamos en tu casa u oficina con máquinas de inyección y succión que sacan la suciedad de adentro.",
      "También hacemos limpieza general de apartamentos y casas, y lavado de alfombras. Usamos productos que cuidan las telas y las superficies.",
    ],
    name: "Hogares, muebles y colchones",
    short: "Sofás, colchones y alfombras como nuevos.",
    description:
      "Limpieza de apartamentos y casas, y lavado de sofás, colchones, sillas y alfombras con máquinas que extraen la suciedad y secan rápido.",
    includes: [
      "Limpieza general del hogar",
      "Lavado de sofás y muebles tapizados",
      "Lavado de colchones",
      "Lavado de sillas de comedor y de oficina",
      "Lavado de alfombras",
    ],
    goodFor: "Apartamentos y casas en Bello, Medellín y alrededores",
  },
];

export const promises = [
  {
    title: "Personal verificado y uniformado",
    text: "Equipo identificado, capacitado y con protocolos claros de servicio.",
  },
  {
    title: "Insumos de calidad",
    text: "Productos que cuidan muebles, pisos y superficies delicadas.",
  },
  {
    title: "Supervisión en cada servicio",
    text: "Revisamos el resultado al final de cada visita.",
  },
  {
    title: "Puntualidad",
    text: "Llegamos a la hora acordada y cumplimos el plan sin frenar tu día.",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuesta el servicio?",
    a: "Depende del tamaño del espacio, el tipo de limpieza y la frecuencia. Te damos el precio después de conocer el lugar, sin compromiso.",
  },
  {
    q: "¿Ustedes llevan los productos?",
    a: "Sí. Llevamos los insumos y el equipo necesario para cada superficie.",
  },
  {
    q: "¿Quién va a entrar a mi oficina o a mi casa?",
    a: "Personal verificado, uniformado e identificado. Siempre sabes quién llega.",
  },
  {
    q: "¿Quién revisa que quede bien?",
    a: "Al final de cada servicio se hace una revisión de calidad para confirmar que todo quedó como se acordó.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "Estamos en Bello y atendemos sobre todo en Bello y sectores cercanos, además de Medellín y el Valle de Aburrá. Si estás en otra zona, escríbenos y te confirmamos.",
  },
  {
    q: "¿Qué tan rápido responden?",
    a: "Respondemos el mismo día por WhatsApp para coordinar la visita.",
  },
];

/*
 * ANTES Y DESPUÉS
 * Para mostrar la sección, guarda las fotos en public/img/ y agrégalas aquí.
 * Ejemplo:
 * { titulo: "Cocina de oficina", antes: "/img/cocina-antes.jpg", despues: "/img/cocina-despues.jpg" },
 * Si la lista está vacía, la sección no aparece en la página.
 */
export const antesDespues: { titulo: string; antes: string; despues: string }[] = [];

/*
 * TESTIMONIOS
 * Solo opiniones REALES de clientes (copiadas de WhatsApp o Google).
 * Ejemplo:
 * { texto: "Muy puntuales y la oficina quedó impecable.", nombre: "Laura M.", lugar: "Consultorio en Bello", estrellas: 5 },
 * Si la lista está vacía, la sección no aparece en la página.
 */
export const testimonios: { texto: string; nombre: string; lugar: string; estrellas?: number }[] = [
  {
    texto:
      "Tenía un sofá en L claro que ya daba pena mostrar por manchas de café y de mi perro. Vinieron súper puntuales, trajeron máquinas industriales que casi no hacen ruido y en dos horas quedó impecable y sin olor a humedad. Súper recomendados.",
    nombre: "Camila Restrepo",
    lugar: "Apartamento en Laureles",
  },
  {
    texto:
      "Contraté el paquete de limpieza para dos colchones King y las sillas del comedor. Me sorprendió la cantidad de suciedad que salió del agua cuando me mostraron el tanque de la máquina. El secado fue muy rápido, esa misma noche pudimos dormir tranquilos.",
    nombre: "Andrés Felipe Gómez",
    lugar: "Casa en Envigado (La Magnolia)",
    estrellas: 4,
  },
  {
    texto:
      "Excelente servicio desde que escribí por WhatsApp hasta que terminaron. Tenía un colchón con una mancha vieja que pensé que ya no salía y lograron quitarla casi al 100%. Muy cuidadosos con el piso de madera y dejaron todo recogido.",
    nombre: "Valentina Montoya",
    lugar: "Apartamento en El Poblado (Castropol)",
  },
  {
    texto:
      "Los llamamos para lavar las sillas ergonómicas y dos sofás de la sala de espera de la oficina. Trabajaron un sábado para no interrumpirnos y dejaron todo como nuevo. Muy profesionales y con factura electrónica al día, que para nosotros era clave.",
    nombre: "Julián Darío Ospina",
    lugar: "Oficina en Ciudad del Río",
    estrellas: 4,
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
