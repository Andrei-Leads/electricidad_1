import { defineSiteConfig } from "@andrei-leads/core";

// DATOS FICTICIOS para la demo de electricidad-1 «Boletín». Negocio inventado en Paterna (l'Horta Nord).
// Antes de enseñarla: comprobar el nombre en Google y Maps, y sustituir el teléfono.
export default defineSiteConfig({
  negocio: {
    nombre: "Llopis Electricistas",
    nombreLegal: "Llopis y Navarro Instalaciones Eléctricas SL",
    nif: "B98000017",
    sector: "Electricista autorizado",
    descripcionCorta:
      "Empresa instaladora autorizada en Paterna. Boletines eléctricos, aumentos de potencia, puntos de recarga y averías en l'Horta.",
    anioFundacion: 2011,
    registroMercantil:
      "Inscrita en el Registro Mercantil de Valencia, tomo 0000, folio 00, hoja V-000000 (ficticio)",
    tipoSchema: ["Electrician"],
  },
  contacto: {
    telefono: "+34643647915", 
    whatsapp: "+34643647915", 
    email: "avisos@llopiselectricistas.example",
    direccion: {
      calle: "Calle del Cid Campeador, 9, bajo",
      cp: "46980",
      ciudad: "Paterna",
      provincia: "Valencia",
    },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "08:00", cierra: "13:30" },
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "15:30", cierra: "19:30" },
      { dias: ["sabado"], abre: "09:00", cierra: "13:00" },
    ],
    coordenadas: { lat: 39.5026, lng: -0.4403 },
    mensajeWhatsapp: "Hola, os escribo desde vuestra web. Necesito un electricista para:",
    urgencias24h: false,
    tiempoLlegada: "45-60 min",
  },
  zonas: [
    "Paterna",
    "Burjassot",
    "Godella",
    "Mislata",
    "Manises",
    "Quart de Poblet",
    "Aldaia",
    "Alaquàs",
    "Torrent",
    "Valencia",
  ],
  valoracion: { media: 4.8, total: 71 },
  servicios: [
    {
      titulo: "Boletín eléctrico (CIE)",
      descripcion:
        "El certificado de instalación que te piden para dar de alta la luz en una vivienda o para subir la potencia.",
      contenido: [
        "El boletín eléctrico, o Certificado de Instalación Eléctrica (CIE), es el documento que dice que la instalación de tu vivienda es segura y cumple el reglamento de baja tensión. Solo puede firmarlo una empresa instaladora autorizada. Puedes pedirle su número de registro: tiene que dártelo.",
        "Te lo piden sobre todo para dar de alta la luz en una vivienda nueva, en una que lleva años sin suministro o en una reformada, y a veces al subir la potencia. Si solo cambias el nombre del contrato y la luz sigue dada de alta, normalmente no hace falta. Si te lo piden y no estás seguro, llámanos y miramos qué documento es.",
        "Primero vamos a la vivienda y revisamos la instalación: el cuadro, los diferenciales, la toma de tierra, la sección de los cables y el estado de enchufes e interruptores. Medimos con un comprobador y lo apuntamos todo. La visita suele llevar entre una y dos horas.",
        "Si algo no cumple, no podemos firmar el boletín hasta corregirlo. Te decimos qué hay que cambiar y cuánto cuesta antes de tocar nada. El precio del boletín no incluye esas correcciones: así sabes desde el principio qué pagas.",
        "Cuando la instalación cumple, emitimos el certificado y lo registramos ante el organismo de industria de la Generalitat Valenciana. Te damos una copia. Tú se la entregas a tu comercializadora, que lo gestiona con la distribuidora de tu zona.",
        "El boletín cuenta cómo está la instalación el día que se revisa. No es un seguro ni garantiza que no vaya a fallar nada en el futuro. Por eso, si vemos algo que conviene cambiar aunque sea legal, te lo contamos aparte y tú decides.",
      ],
      incluye: [
        "Visita y revisión completa de la instalación",
        "Medición de la toma de tierra y del aislamiento",
        "Certificado firmado por instalador autorizado",
        "Registro del certificado ante Industria",
        "Factura con IVA",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-boletin.jpg",
          alt: "Manos midiendo con un comprobador en un cuadro eléctrico doméstico moderno y ordenado",
        },
      ],
      preguntas: [
        {
          pregunta: "¿Cuánto tarda en estar el boletín?",
          respuesta:
            "Depende de si la instalación necesita correcciones. Si todo cumple, solemos entregarlo en pocos días después de la visita. Te damos la fecha cuando la revisamos.",
        },
        {
          pregunta: "¿Qué pasa si mi instalación no cumple?",
          respuesta:
            "Te decimos qué hay que cambiar y cuánto cuesta. Tú decides si lo hacemos nosotros. Hasta que se corrija, no podemos firmar el certificado.",
        },
        {
          pregunta: "¿Sirve para cualquier compañía?",
          respuesta:
            "Sí. El certificado es de la instalación, no de la compañía con la que contrates la luz.",
        },
        {
          pregunta: "¿Qué documentos necesito para la visita?",
          respuesta:
            "Normalmente ninguno. Si tienes una factura de luz anterior o un boletín antiguo, tenlo a mano: nos ayuda a ver qué potencia tenía.",
        },
      ],
      mensajeWhatsapp: "Hola, necesito un boletín eléctrico para mi vivienda. ¿Qué datos os paso?",
      precioDesde: "desde 140 € + IVA", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Aumento de potencia",
      descripcion:
        "Si se corta la luz al poner varios aparatos a la vez, revisamos la instalación y la adaptamos para subir la potencia.",
      contenido: [
        "Si al encender el horno y la lavadora a la vez se corta la luz de toda la casa, lo más probable es que la potencia contratada se te quede corta. Es una de las llamadas que más recibimos cuando alguien estrena inducción, aire acondicionado o un coche eléctrico.",
        "Hay dos cosas distintas. Una es la potencia contratada, que es un acuerdo con tu comercializadora. La otra es lo que aguanta tu instalación: el grosor de los cables, el interruptor general y las protecciones. Subir la primera es un trámite, pero solo se puede si la segunda lo soporta.",
        "Por eso empezamos revisando la instalación. Comprobamos la derivación que llega a tu vivienda, el interruptor general, el cuadro y la toma de tierra. Si todo aguanta, lo certificamos y te decimos qué potencia puedes pedir. Si algo se queda corto, te presupuestamos el cambio antes de empezar.",
        "El trámite lo pides tú a tu comercializadora. La distribuidora puede pedir el certificado de la instalación, y puede cobrar unos derechos por subir la potencia; su importe lo fija la normativa y no depende de nosotros. Nosotros te preparamos el certificado y te explicamos qué pedir.",
        "Antes de subirla, merece la pena preguntarse si la necesitas toda. A veces basta con no encender dos aparatos grandes a la vez. Si vas a sumar varias cosas (inducción, aire, recarga), calcula todo junto: así subes una sola vez y pagas lo justo.",
      ],
      incluye: [
        "Revisión de la instalación y de la derivación",
        "Cambio del interruptor general si hace falta",
        "Boletín actualizado a la nueva potencia",
        "Te explicamos qué pedir a tu comercializadora",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-potencia.jpg",
          alt: "Cuadro eléctrico abierto con un interruptor general nuevo y etiquetas en blanco",
        },
      ],
      preguntas: [
        {
          pregunta: "¿Puedo subir la potencia sin cambiar nada de la instalación?",
          respuesta:
            "A veces sí. Depende de los cables y del interruptor general que tengas. Lo sabemos al revisarla.",
        },
        {
          pregunta: "¿Cuánta potencia necesito?",
          respuesta:
            "Depende de qué aparatos uses a la vez. Cuéntanos qué tienes (cocina, calefacción, aire, coche) y te decimos una cifra razonable.",
        },
        {
          pregunta: "¿Los derechos que cobra la distribuidora van incluidos?",
          respuesta:
            "No. Los cobra la distribuidora y los pagas tú. Nosotros te lo avisamos para que no te pille por sorpresa.",
        },
      ],
      mensajeWhatsapp: "Hola, quiero subir la potencia de mi vivienda. Os cuento qué aparatos uso a la vez:",
      precioDesde: "desde 190 € + IVA", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Punto de recarga para coche eléctrico",
      descripcion: "Instalamos el cargador en tu garaje, también en garajes comunitarios, con su certificado.",
      contenido: [
        "Instalar un punto de recarga es mucho más que colgar un cargador. Lleva una línea propia desde tu contador hasta la plaza, con sus protecciones (diferencial y magnetotérmico solo para el cargador) y el certificado de la instalación.",
        "Si tu plaza está en un garaje comunitario, la ley te permite instalarlo comunicándolo antes a la comunidad. No necesitas que la junta lo apruebe, y el coste corre de tu cuenta. Te ayudamos a redactar el aviso y a explicar al administrador qué se va a hacer.",
        "La parte más delicada suele ser cómo llega la corriente. Si tu contador está cerca, tiramos una línea directa. Si está lejos, se pasa canalización por las zonas comunes. Cada garaje es distinto, y por eso pedimos fotos antes de dar un precio.",
        "El cargador depende de tu coche y de la potencia que tengas. Te recomendamos el que cabe en tu instalación. Algunos cargadores se ajustan solos para no pasarse de potencia cuando enciendes otros aparatos; si te interesa, te lo explicamos.",
        "Mándanos por WhatsApp una foto de la plaza, otra del cuadro de casa y otra del contador. Con eso suele bastar para un primer precio; si hace falta visita, te lo decimos.",
      ],
      incluye: [
        "Línea propia con protecciones exclusivas",
        "Instalación y puesta en marcha del cargador",
        "Certificado de la instalación",
        "Ayuda con el aviso a la comunidad",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-recarga.jpg",
          alt: "Punto de recarga de pared instalado en un garaje comunitario, sin marca visible",
        },
      ],
      preguntas: [
        {
          pregunta: "¿Puedo instalarlo en un garaje comunitario?",
          respuesta:
            "Sí, en tu plaza. Tienes que avisar antes a la comunidad por escrito. No hace falta que la junta lo apruebe.",
        },
        {
          pregunta: "¿Hace falta subir la potencia?",
          respuesta:
            "No siempre. Depende del cargador y de lo que uses en casa. Lo miramos antes de darte el precio.",
        },
      ],
      mensajeWhatsapp: "Hola, quiero instalar un punto de recarga. Os mando foto del garaje y del cuadro:",
      precioDesde: "desde 850 € + IVA", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Averías y urgencias",
      descripcion: "Te quedas sin luz, salta el diferencial o huele a quemado: vamos a buscar el fallo.",
      contenido: [
        "Si salta el diferencial y no se queda armado, hay una fuga a tierra en algún aparato o línea. Desconecta lo que tengas enchufado, sube el diferencial y ve conectando de uno en uno. Cuando salte, ya sabes cuál es el culpable. Si no lo localizas, llámanos.",
        "Si hay olor a quemado, humo o chispas, baja el interruptor general y no vuelvas a subirlo. Si ves fuego o humo, llama antes al 112. Cuando todo esté seguro, avísanos y buscamos el origen.",
        "Cuando llegamos, buscamos el fallo antes de cambiar piezas. Te decimos el precio por teléfono antes de ir y, si es una avería sencilla, la arreglamos en la misma visita.",
      ],
      incluye: [
        "Desplazamiento con precio dicho antes de ir",
        "Localización del fallo",
        "Reparación en la misma visita si es posible",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-averia.jpg",
          alt: "Mano con linterna frontal revisando un enchufe en un pasillo a oscuras",
        },
      ],
      mensajeWhatsapp: "Hola, tengo una avería eléctrica. Esto es lo que pasa:",
    },
    {
      titulo: "Cuadros eléctricos",
      descripcion:
        "Cambiamos cuadros antiguos de fusibles por cuadros con diferenciales y automáticos, y revisamos los circuitos.",
      contenido: [
        "Un cuadro con fusibles de porcelana o con cables ennegrecidos es una señal clara de que la instalación necesita renovarse. Los fusibles no protegen a las personas de una descarga; los diferenciales sí.",
        "Montamos un cuadro nuevo con interruptor general, diferenciales y un automático por circuito (alumbrado, tomas, cocina, lavadora, baño). Dejamos los cables ordenados y todo etiquetado, para que cualquier electricista pueda entenderlo en el futuro.",
        "Al terminar medimos la toma de tierra y, si lo necesitas, emitimos el boletín para dar de alta o actualizar la luz.",
      ],
      incluye: ["Cuadro nuevo con diferenciales y automáticos", "Etiquetado de circuitos", "Medición de la toma de tierra"],
      imagenes: [
        {
          src: "/ejemplo/servicio-cuadro.jpg",
          alt: "Cuadro eléctrico nuevo con los automáticos alineados y los cables ordenados",
        },
      ],
      precioDesde: "desde 480 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Instalaciones en reformas",
      descripcion: "Instalación eléctrica nueva para pisos en reforma, con su boletín al terminar.",
    },
  ],
  trabajos: [
    {
      titulo: "Cuadro nuevo en un piso de los años 70",
      descripcion:
        "Cambio de un cuadro de fusibles con cables quemados por un cuadro con diferenciales y automáticos, y boletín para el alta de la luz.",
      ubicacion: "Burjassot",
      anio: 2026,
      servicio: "cuadros-electricos",
      duracion: "1 día",
      precio: "unos 650 €", // PRECIO FICTICIO: borrar en la web del cliente
      contenido: [
        "El piso llevaba años cerrado y la compañía pedía el boletín para dar de alta la luz. Al abrir el cuadro encontramos fusibles de porcelana, empalmes con cinta y cables ennegrecidos por el calor.",
        "Montamos un cuadro nuevo con diferenciales y un automático por circuito, comprobamos la toma de tierra y emitimos el certificado. Al día siguiente la propietaria ya podía pedir el alta.",
      ],
      imagenes: [
        {
          src: "/ejemplo/trabajo-cuadro.jpg",
          alt: "Cuadro eléctrico de una vivienda de los años 70 ya renovado, con diferenciales y automáticos nuevos",
        },
      ],
      antes: {
        src: "/ejemplo/trabajo-cuadro-antes.jpg",
        alt: "El mismo cuadro antes de la obra: fusibles de porcelana, cables ennegrecidos y empalmes con cinta aislante",
      },
      testimonio: {
        autor: "Marta C.",
        texto: "Me explicaron qué estaba mal antes de hacer nada. En una semana tenía la luz dada de alta.",
      },
    },
    {
      titulo: "Punto de recarga en un garaje comunitario",
      descripcion:
        "Cargador de pared en una plaza de garaje, con la línea desde el contador de la vivienda y canalización por la pared.",
      ubicacion: "Paterna (Terramelar)",
      anio: 2026,
      servicio: "punto-de-recarga-para-coche-electrico",
      duracion: "1 día",
      contenido: [
        "La plaza estaba a unos 30 metros del contador. Pasamos la canalización por la pared del garaje, con las protecciones propias para el cargador, y avisamos antes a la comunidad por escrito.",
      ],
      imagenes: [
        {
          src: "/ejemplo/trabajo-recarga.jpg",
          alt: "Punto de recarga instalado junto a una plaza de garaje, con la canalización por la pared",
        },
      ],
    },
    {
      titulo: "Boletín para el alta de luz en un piso reformado",
      descripcion:
        "Revisión de la instalación nueva de un piso en reforma y boletín eléctrico para dar de alta el suministro.",
      ubicacion: "Mislata",
      anio: 2026,
      servicio: "boletin-electrico-cie",
      duracion: "Medio día",
      contenido: [
        "El reformista había dejado la instalación nueva, pero sin certificado. Revisamos todos los circuitos, midimos la toma de tierra y emitimos el boletín.",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-boletin.jpg",
          alt: "Manos midiendo con un comprobador en un cuadro eléctrico doméstico moderno y ordenado",
        },
      ],
    },
    {
      titulo: "Más potencia para una casa con inducción y aire",
      descripcion:
        "Cambio del interruptor general y revisión de la derivación para pasar a una potencia mayor en una casa con inducción y aire acondicionado.",
      ubicacion: "Paterna (La Canyada)",
      anio: 2025,
      servicio: "aumento-de-potencia",
      duracion: "1 día",
      contenido: [
        "Se cortaba la luz cada vez que ponían el aire y el horno a la vez. Revisamos la derivación y cambiamos el interruptor general. Después, el propietario pidió el aumento a su comercializadora con nuestro certificado.",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-potencia.jpg",
          alt: "Cuadro eléctrico abierto con un interruptor general nuevo y etiquetas en blanco",
        },
      ],
    },
  ],
  resenas: [
    {
      autor: "Marta C.",
      texto:
        "Necesitaba el boletín para dar de alta la luz de un piso que llevaba años cerrado. Me explicaron todo paso a paso y me dijeron el precio antes de empezar. Muy serios.",
      puntuacion: 5,
      fecha: "2026-10-02",
      fuente: "google",
    },
    {
      autor: "Vicent R.",
      texto:
        "Saltaba el diferencial un domingo por la tarde. Me dijeron cómo buscar el aparato culpable y el lunes a primera hora estaban en casa.",
      puntuacion: 5,
      fecha: "2026-09-14",
      fuente: "google",
    },
    {
      autor: "Pilar M.",
      texto: "Instalaron el punto de recarga en el garaje de la comunidad. Todo limpio y el presupuesto fue el que dijeron.",
      puntuacion: 5,
      fecha: "2026-08-05",
      fuente: "google",
    },
    {
      autor: "Joaquín T.",
      texto: "Correctos. Tuvieron que volver un segundo día porque faltaba una pieza, pero avisaron y no cobraron de más.",
      puntuacion: 4,
      fecha: "2026-06-22",
      fuente: "google",
    },
    {
      autor: "Nerea L.",
      texto:
        "Subimos la potencia para poner inducción. Antes de tocar nada revisaron la instalación y me dijeron que había que cambiar el interruptor general. Me enseñaron las fotos del cuadro.",
      puntuacion: 5,
      fecha: "2026-05-18",
      fuente: "google",
    },
    {
      autor: "Amparo F.",
      texto: "Buen trato y puntuales.",
      puntuacion: 5,
      fecha: "2026-04-09",
      fuente: "google",
    },
  ],
  proceso: [
    { titulo: "Nos llamas o escribes", texto: "Nos cuentas qué te piden: boletín, más potencia o una avería." },
    { titulo: "Revisamos", texto: "Vamos a tu casa y comprobamos cuadro, toma de tierra y cables." },
    { titulo: "Precio antes de empezar", texto: "Si hay que corregir algo, te lo decimos con su precio." },
    { titulo: "Certificado", texto: "Firmamos el boletín como empresa instaladora autorizada." },
    { titulo: "Registro y alta", texto: "Lo registramos y te damos los papeles para la compañía." },
  ],
  acreditaciones: [
    {
      nombre: "Empresa instaladora en baja tensión (RII), categoría básica",
      numero: "46/000000 (ficticio)",
    },
  ],
  garantias: [
    "Presupuesto antes de empezar",
    "Factura con IVA",
    "Seguro de responsabilidad civil",
    "1 año de garantía en la mano de obra",
    "Precio de la visita dicho antes de ir",
  ],
  empresa: {
    historia: [
      "Llopis Electricistas nació en 2011 en Paterna. Vicent Llopis llevaba años de oficial en una empresa de instalaciones y montó la suya con una furgoneta y un cuaderno de clientes.",
      "En 2016 se asoció con Hugo Navarro, y desde entonces somos una sociedad. Trabajamos sobre todo en l'Horta: pisos de Burjassot y Mislata, chalets de Paterna y La Canyada, garajes de comunidades de la zona.",
      "Nos piden boletines, cuadros nuevos, más potencia y puntos de recarga. Si hay que cambiar algo, te lo decimos con su precio antes de tocarlo. Y si no hace falta cambiar nada, también.",
    ],
    imagenes: [
      {
        src: "/ejemplo/empresa-furgoneta.jpg",
        alt: "Furgoneta blanca sin rotular aparcada en una calle, con las puertas traseras abiertas y cajas de material",
      },
    ],
    equipo: [
      { nombre: "Vicent", cargo: "Instalador autorizado y gerente" },
      { nombre: "Laura", cargo: "Oficina: citas, boletines y papeles" },
      { nombre: "Hugo", cargo: "Oficial electricista" },
    ],
  },
  preguntas: [
    {
      pregunta: "¿Qué es el boletín eléctrico?",
      respuesta:
        "Es el certificado que dice que tu instalación cumple el reglamento. Lo firma una empresa instaladora autorizada.",
    },
    {
      pregunta: "¿Cobráis por ir a ver una avería?",
      respuesta: "Sí, el desplazamiento. Te decimos el precio por teléfono antes de ir.",
    },
    { pregunta: "¿Dais factura?", respuesta: "Siempre, con IVA." },
    {
      pregunta: "¿Trabajáis en fin de semana?",
      respuesta:
        "Los sábados por la mañana. Fuera de ese horario, escríbenos por WhatsApp y te decimos si podemos ir.",
    },
    {
      pregunta: "¿En qué zonas trabajáis?",
      respuesta:
        "En Paterna y l'Horta: Burjassot, Godella, Mislata, Manises, Quart de Poblet, Aldaia, Alaquàs, Torrent y Valencia. Si dudas, pregúntanos.",
    },
  ],
  marca: { colorPrimario: "#854d0e" },
  // Plan Básico: Vercel Web Analytics (sin cookies). Activar también Analytics en el proyecto de Vercel.
  analitica: { vercel: true },
  seo: {
    titulo: "Electricista en Paterna y l'Horta | Llopis Electricistas",
    descripcion:
      "Boletín eléctrico, aumento de potencia, puntos de recarga y averías en Paterna y l'Horta. Empresa instaladora autorizada.",
    url: "https://electricidad-1.vercel.app", // PROVISIONAL: poner la URL real de Vercel tras el primer despliegue
  },
});
