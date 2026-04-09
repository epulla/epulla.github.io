import { SLIDES_PER_PAGE } from "./constants";

export type OurEvent = {
  title: string;
  description: string;
  date: string; // Formato ISO (YYYY-MM-DD)
  imgs?: string[]; // URLs de imágenes relacionadas con el evento (opcional)
};

export const events: OurEvent[] = [
  // slide 1
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
    title: "Nuestra primera agarrada de manos",
    description: "Fuimos a jugar bolos ese día.",
    date: "2026-02-17",
  },
  {
    title: "Nuestro primer beso",
    description: `Fue en la avenida Samborondón, casi dando vuelta al puente. Yo te lo había propuesto minutos antes y tú aceptaste. Eran las 7:40PM aproximadamente.
      Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más. Me parqueé y te dije que no me aguantaba más. Fue un momento INOLVIDABLE.
      Me acuerdo que después de eso, te pregunté si ya eramos novios y tú me dijiste que tenía que proponértelo formalmente. Yo te dije que haría las cosas bien. 
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
    title: "Nuestro primer beso",
    description:
      "Fue en la avenida Samborondón, casi dando vuelta al puente. Yo te lo había propuesto minutos antes y tú aceptaste. Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más. Me parqueé y te dije que no me aguantaba más.",
    date: "2026-02-20",
  },
  {
    title: "Nuestro primer beso",
    description:
      "Fue en la avenida Samborondón, casi dando vuelta al puente. Yo te lo había propuesto minutos antes y tú aceptaste. Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más. Me parqueé y te dije que no me aguantaba más.",
    date: "2026-02-20",
  },
  {
    title: "Nuestro primer beso",
    description:
      "Fue en la avenida Samborondón, casi dando vuelta al puente. Yo te lo había propuesto minutos antes y tú aceptaste. Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más. Me parqueé y te dije que no me aguantaba más.",
    date: "2026-02-20",
  },
  {
    title: "Nuestro primer beso",
    description:
      "Fue en la avenida Samborondón, casi dando vuelta al puente. Yo te lo había propuesto minutos antes y tú aceptaste. Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más. Me parqueé y te dije que no me aguantaba más.",
    date: "2026-02-20",
  },
  {
    title: "Nuestro primer beso",
    description:
      "Fue en la avenida Samborondón, casi dando vuelta al puente. Yo te lo había propuesto minutos antes y tú aceptaste. Me dijiste que podría ser antes de llegar a casa pero no me pude resistir más. Me parqueé y te dije que no me aguantaba más.",
    date: "2026-02-20",
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
];

export function getSlides() {
  const slides = [];
  for (let i = 0; i < events.length; i += SLIDES_PER_PAGE) {
    slides.push(events.slice(i, i + SLIDES_PER_PAGE));
  }
  return slides;
}
