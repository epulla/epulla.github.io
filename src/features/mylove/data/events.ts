import { SLIDES_PER_PAGE } from "./constants";

export type OurEvent = {
  title: string;
  description: string;
  date: string; // Formato ISO (YYYY-MM-DD)
  imgs?: string[]; // URLs de imágenes relacionadas con el evento (opcional)
};

export const events: OurEvent[] = [
  {
    title: "Nos encontramos por primera vez",
    description: `Nos vimos por primera vez en clases de salsa siendo 2 completos extraños. No recuerdo mucho de ese día pero recuerdo que me pareciste una persona muy agradable. No estoy seguro si ese día te dije que me parecía
      muy lindo tu pañuelito en la cabeza o si fue en otra ocasión pero recuerdo que me gustó mucho. No recuerdo si ese día hablamos mucho o poco pero recuerdo que me diste mucha paz.
    `,
    imgs: ["/images/mylove/primer-encuentro.webp"],
    date: "2026-01-08",
  },
  {
    title: "Nuestro primer social y encuentro casual",
    description: `Ese día aun seguiamos siendo dos completos extraños. Nos encontramos en el San Marino, yo estaba buscando algo para ponerme esa noche ya que teniamos el primer social de las clases de baile.
      De repente, mientras caminaba por el piso de ropa, te ví y lo primero que hice fue saludarte. Hablamos un poco más. La verdad no recuerdo mucho de esa conversación pero si recuerdo que me diste mucha paz
      ya que sabía que de cierta manera estaría con alguien que conozco en ese evento. En la noche del social, supe tu edad, y supe que estabas soltera jiji. También supe de qué trabajabas. Bailamos esa noche un ratito
      pero mis nervios me ganaron y no pude invitarte a bailar más. Al final, un chico nivel 10 te sacó a bailar y yo me puse muy celoso. Sabía que algo diferente me estaba pasando. Solo quería ser yo quien te sacara a bailar jeje.
      Fue una noche muy interesante!
      `,
    imgs: ["/images/mylove/primer-social.webp"],
    date: "2026-01-30",
  },
  {
    title: "Nuestra primera interacción en ig",
    description: `Ese día (miércoles) te respondí una historia de ig por primera vez haciendo una broma de que eras mas Quiteña que Guayaca. Viajabas mucho a Quito por tu trabajo jeje.`,
    date: "2026-02-04",
  },
  {
    title: "Nuestra primera interacción en wa",
    description: `Un jueves hablamos por primera vez por Whatsapp. Mi primer mensaje fue literalmente una invitación al taller de Pizza y Vinos de miss Right. Yo estaba muy nervioso, no sabía si siquiera me responderías. Pensé en que si me respondías,
      me darías una excusa para no ir al taller pero para mi sorpresa, me respondiste que sí! Según tú, justo ese día estabas libre ya que estabas muy ocupada. Lo tomamos como una señal divina.`,
    date: "2026-02-05",
  },
  {
    title: "Nuestra primera primerísima cita",
    description: `Fue en un café llamado Atmosférico en un evento de Miss Right. Te fui a ver a la UESS y llegamos un poquito tarde pero a tiempo.
      Aprendimos a catar vinos y a hacer pizzas. La verdad casi no me acuerdo de la clase de vinos porque estaba muy nervioso jeje.
      Te dió la alergía y te insistía en salir a tomar aire pero tú querías quedarte a terminar la clase. Al final decidimos salir y me preguntaste sobre "¿Por qué tu estabas allí?" y yo te dije que porque eramos amigos jaja
      No recuerdo que mas dije pero estaba muy nervioso y con una pierna dormida. Al final, tus papás te llamaron para que regreses a casa y te dejé sana y salva. Unos momentos después, cuando llegué a casa, a una matiné,
      me llamaste que tu computadora se había quedado en mi carro. No me había dado cuenta! Me dijiste para llevartela al día siguiente pero yo insistía en dejartela ese mismo día.
      Al final, me llamaste nuevamente un poco mas angustiada y yo supe que tenía que ir a dejartela si o sí. Fui volando! Al llegar, te dí tu mochilita con un trocito de pastel de la matiné. Tu me diste unos dulces. Nos abrazamos 3 veces.
      Fue una noche maravillosa!
      `,
    imgs: ["/images/mylove/primerisima-cita.webp"],
    date: "2026-02-07",
  },
  {
    title: "Nuestra primera llamada larga",
    description: `Era un lunes. Tu estabas en Quito. Quedamos en hablar por teléfono. La verdad estaba muy nervioso porque no sabía si yo haría morir la conversación. Finalmente no pasó jeje y nos quedamos hablando por 4 horas!!! Nunca había hablado tanto con alguien por teléfono.
      Hablamos de todo un poco jeje. Me contaste de tu historia de la U, como había sido ese proceso para ti. Yo te conté de mi hijo pulpo JAJAJA y de cómo fuer mi presentación de tesis con mi compañera. Hablamos también de cómo de cierta manera habían muchas cosas que nos gustaría
      haber hecho antes pero que estabamos con ganas de experimentarlo! de vivir! Fue una conversación maravillosa y la verdad me sentí muy feliz. Gracias por ese bello recuerdo mi amor!
      `,
    date: "2026-02-09",
  },
  {
    title: "Nuestras primeras confesiones y primera experiencia en Salsoteca",
    description: `Fue un jueves. Teníamos un social en la salsoteca Carlos Alberto después de las clases de baile. Estaba muy emocionado ese día porque era nuestra segunda cita jeje. Después de las clases te llevé a comer de mis helados favoritos en Rodilina.
      Ahi me dí cuenta que somos muy dulceros jajaja. Después de eso, fuimos a la salsoteca. JAJAJA recuerdo que los chicos de las clases de salsa nos abordaron ese día xd. Esa noche me volviste a preguntar sobre cuáles eran mis intenciones contigo, por qué yo te había invitado a salir.
      JAJAJAJ esa pregunta siempre se me quedará en el subconsciente porque no sabía exactamente qué decir para no quedar como un loco. Ahi te confesé que me gustabas mucho, y que yo nunca había tenido novia antes, y que en pocas palabras no tenía ni idea de qué estaba haciendo JAJAJA.
      Yo la verdad esa noche esstaba feliz de estar con la chica que me gusta. Tu también me confesaste que nunca habías tenido una experiencia antes, e incluso se te salieron unas lagrimas amor ayyy, pero fue un momento de vulnerabilidad que poco a poco sembraba una semillita de confianza entre nosotros.
      Finalmente, en la Carlos Alberto, bailamos y yo te decía que bailemos en posición cerrada jajaj. La verdad no sabía siquiera si en algún momento podía darte un beso (mi primer beso) pero si quería tener la ilusión de hacerlo, asi que por eso era que te decía sobre bailar tan cerquita.
      Sentirte tan cerquita de mí me hacía sentir muy feliz. Fue una noche maravillosa, gracias por compartirla conmigo mi amor.
      `,
    date: "2026-02-12",
  },
  {
    title: "Mi primero de muchos regalos para ti",
    description: `Un viernes me pediste que te fuera a ver a tu trabajo. Tu salías a las 3PM. Yo estaba un poco full ese día de trabajo, pero saber que me esperabas me hizo organizarme bien, terminar todo en tiempo record e ir volando a buscar un regalito para tí. Fue dificil!! no sabía que darteee!.
      Estabamos a vísperas de San Valentín y quería darte algo lindo pero que no se vea muy intenso. Al final, me decidí por una rosa eterna y un corazón de bombones. Algo clásico, pero que me parecía lindo. Al llegar a tu trabajo, te dije que te tenía un regalito para ti. Te dije que cerraras los ojos.
      Estabas muy nerviosa, me preocupé porque tenía miedo que sientas que yo te haría algo. Ay me puse nervioso en ese momento pero al final solo te dí las sorpresitas y te gustaron jeje. Ese día también me dijiste que te costaba desarrollar sentimientos por las personas, incluso expresarlos sentimientos en sí.
      Yo te dije que tranqui, que no pasaba nada jeje, lo importante es que te sientas cómoda. No lo olvides! Si tu estás bien, yo estoy bien :)
      `,
    date: "2026-02-13",
  },
  {
    title: "Nuestra primera agarrada de manos",
    description: `Fuimos a jugar bolos ese día. Estaba muy nervioso! Fuimos primero a tomar algo y conseguimos a mini Dome y mini Erick en Portella. Ahi nos dijimos nuestros nombres completos jiji (yo ya sabía el tuyo). Luego intentamos ir a los bolos ahi pero esta full full. No conseguimos puesto para los 2 asi que fuimos al Riocentro El Dorado.
      En el Dorado si conseguimos y nos pusimos a jugar jeje. Nos tomamos de nuestras primeras selfies. Jugamos y tu fuiste MUY competitiva JAJAJ. Yo estaba muy nervioso y estaba perdiendo al principio. Luego, me puse las pilas y comencé a remontar pero al final, tú ganaste. Fue un día muy divertido y especial para mí. Me alegra que hayamos compartido ese momento juntos.
      Al salir del juego, te propuse ir de la mano saliendo ya al estacionamiento. Me dijiste que sí y nos tomamos de las manos por primera vez. No fue mucho tiempo, fueron creo que menos de 7 minutos, desde la salida de El Dorado hasta el estacionamiento. Ya había sentido tus manos antes por el baile, pero esa vez fue diferente. Me sentí conectado contigo.
      Quien diría que tiempo después no separaríamos nuestras manos ni para manejar xd. Al final del día fuimos a comprar pansito, yo te acompañé todo el tiempo porque estaba de noche.
    `,
    imgs: ["/images/mylove/bolos-1.webp", "/images/mylove/bolos-2.webp"],
    date: "2026-02-17",
  },
  {
    title: "Tu primer regalo",
    description: `Ese jueves teníamos las clases de salsa. Sin embargo, el cielo estaba muy nublado, y me dijiste que tenías un presentimiento de que iba a llover, y que mejor te deje en casita. Yo confié pero nunca llovió (*inserte sticker de que 'todas mienten, entiende rey' jajajaj). Luego de eso, me regalaste una tarjetita con un dibujo muy bonito
    de mini Erick y mini Dome. En esa cartita me dijiste que me querías mucho. Me puse muy feliz! no me lo esperaba! Me encantó esa tarjetitaaa! Se ha vuelto parte de mi escritorio de trabajo jiji. Muchas gracias por ese detalle mi amor!!!`,
    date: "2026-02-19",
  },
  {
    title: "Nuestro primer beso",
    description: `Desafortunadamente no tengo fotos de ese día. Habiamos ido a comer una hamburguesa en Comar Bites. Estaba muy nervioso ese día jajaj. Estabas hermosisima como siempre. Nos quedamos hablando en Comar Bites por bastante tiempoo! en nuestro mundo jajaj. Cuando nos dimos cuenta, no había nadie mas que nosotros en el local.
      Nosotros dijimos que quizas los habiamos espantado. Tu pediste ir al baño y te demoraste un rato. Yo estaba muy nervioso porque no sabía si dar algun paso mas. La verdad que ese día quería darte un beso, nuestro primer beso, pero no sabía si era el momento o si yo estaba apresurando las cosas.
      La verdad hace ya tiempo que quería darte un beso jeje. Nunca había dado uno antes, asi que no sabía ni como ni cuando. Al final no hice nada en el local y fuimos de camino a tu casita jaja. Siendo sincero, yo me había resignado a no darte el beso... estaba triste y decepcionado conmigo mismo mientras te llevaba a casita.
      Estabamos hablando, yo al tratar de no parecer muy intenso, te decía lo de "ser amigos, conocernos mas y blabla". Por dentro, yo estaba muriendo en vida, diciéndome a mi mismo "Erick por dios, por qué eres tan quedado?". Así estaba en mi mente, hasta que me dijiste, en un tono de indignacion jaja que si de verdad SOLO quería ser tu amigo!
      Yo, con el corazón a mil, y muerto del miedo, dije que NOO, y que queria darte un piquito. Y de repente, llegó el momento. Fue en la avenida Samborondón, casi dando vuelta al puente. Eran las 7:40PM aproximadamente.  Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más.
      Me parqueé y te dije que no me aguantaba más. Fue un momento INOLVIDABLE. Me acuerdo que después de eso, te pregunté si ya eramos novios y tú me dijiste que tenía que proponértelo formalmente. Yo te dije que haría las cosas bien. 
      Fue un gran momento, gracias por darme mi primero de muchos besitos mi amor. Te amo mucho.
      `,
    date: "2026-02-20",
  },
  {
    title: "Me dijiste SI para ser novios",
    description: `
      `,
    date: "2026-02-22",
  },
  {
    title: "Nuestro primer mesesaurio",
    description: `Ese día... no sé ni cómo describirlo. Que DIA PARA MAS BONITO! Fue nuestro primer mesesaurio, un domingo 22 de Marzo. Ese día ya lo tenía planeado desde antes. Ya tenía los regalitos listos, el outfit listo, el plan listo, TODO listoo!! Mi mamá me vió muy feliz y me deseó un lindo día. Te fui a ver temprano para desayunar juntos.
      `,
    date: "2026-03-22",
  },
  {
    title: "Te presenté ante mi familia por primera vez",
    description:
      "Te presenté ante mi familia. Fue en la celebración del cumple 90 de mi abuelita. Fue un día muy especial para mí y me alegra que hayas estado ahí para compartirlo conmigo. Aunque la noche no terminó tan bien jeje, me alegra que hayas estado ahí para compartir ese momento tan importante para mí.",
    imgs: ["/images/mylove/presentacion_familia_de_erick.webp"],
    date: "2026-04-04",
  },
  {
    title: "3era gran pelea",
    description:
      "Tuvimos nuestra tercera gran pelea. Fue un momento difícil para ambos, pero logramos superarlo y fortalecer nuestra relación. Los detalles los guardaremos para nosotros, pero lo importante es que salimos adelante juntos y aprendimos mucho de esa experiencia. Nos reconciliamos al día siguiente",
    date: "2026-04-05",
  },
  {
    title: "Nuestra primera cita en un arcade",
    description: `Lamento no haber tomado fotos ese día. Estaba tan feliz de estar contigo que me olvidé. Fuimos al arcade del Riocentro Norte. Te conté que hace mucho tiempo no había ido a uno. La última vez que fui fue cuando era pequeño y mi papá me llevaba al PlayZone del San Marino.
      De cierta manera sabía que ese día ibas a estar muy competitiva JAJAJA y así fuee. Jugamos varios juegos, algunos en equipo pero la mayoría en competencia directa. Jugamos el hockey de aire, los dinosaurios, el Guitar Hero, el basket, el boxeo, el de las carreras.
      Mis favoritos fueron definivitamente el Guitar Hero y el de las carreras. En el Guitar Hero gané al principio pero luego me destrozaste JAJAJA y el de carreras fue un mate de risa. Nos volcabamos a cada rato jajajaj. Fue muy divertido amor. Muchas gracias por esa experiencia.
      Terminamos el día con unos dulcesitos de Diana Carrión y muchitos
      `,
    date: "2026-04-12",
  },
  {
    title: "Nuestra primera ida al aeropuerto",
    description: `Admito que esa noche casi no dormí jeje. No quería decírtelo para no preocuparte amor. Tu me contaste que tampoco pudiste dormir y que estabas full de trabajo. Raios me hubiese gustado ayudar mas, no solo irte a ver y dejar. Esa mañana la despedida fue muy difícil. Estabas muy sentimental
      y yo traté de hacerme el fuerte. De camino a casa ya no pude más y lloré porque sabía que no te iba a ver por unos días. Al final sé que son solo días... pero ya eres parte de mi día a día, y que te vayas, haces que mis días no esten completos. Te extrañé mucho esos días, y si se me hicieron eternos.
      Espero tener la dicha de algún día ir contigo a Quito y poder compartir y estar juntitos amor. Te amo mucho.
      `,
    date: "2026-04-13",
  },
];

export function getSlides() {
  const slides = [];
  for (let i = 0; i < events.length; i += SLIDES_PER_PAGE) {
    slides.push(events.slice(i, i + SLIDES_PER_PAGE));
  }
  return slides;
}
