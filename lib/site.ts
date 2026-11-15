export const site = {
  name: "Ofcasa Pro",
  phoneDisplay: "304 459 9438",
  phoneIntl: "573044599438",
  web: "www.ofcasapro.com",
  zone: "El Poblado, Medellín",
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
  name: string;
  short: string;
  description: string;
  includes: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    id: "oficinas",
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
    goodFor: "Apartamentos y casas en El Poblado y alrededores",
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
    a: "En El Poblado y alrededores, en Medellín. Si estás en otra zona, escríbenos y te confirmamos.",
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
 * { texto: "Muy puntuales y la oficina quedó impecable.", nombre: "Laura M.", lugar: "Consultorio en El Poblado", estrellas: 5 },
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
