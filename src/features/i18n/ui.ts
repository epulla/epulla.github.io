export const languages = { en: "English", es: "Español" } as const;

export type Lang = keyof typeof languages;

const link = (href: string, text: string) =>
  `<a class="underline" href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const accent = (text: string) =>
  `<span class="text-razzmatazz-600 dark:text-razzmatazz-400">${text}</span>`;

const moodleApi = "https://docs.moodle.org/dev/Web_service_API_functions";

const en = {
  "meta.title": "Erick Pulla | Fullstack developer",
  "meta.description":
    "Portfolio of Erick Pulla, fullstack developer: work experience, open-source projects like Patio, Senda and Snipzy, and the tech I use every day.",
  "lang.change": "Change language",
  "theme.toggle": "Toggle theme",
  "intro.hello": `Hi! I'm a ${accent("fullstack developer ")}who loves building random stuff :)`,

  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.techs": "Stack",
  "nav.education": "Education",

  "section.experience": "Experience",
  "section.projects": "Projects",
  "section.moreProjects": "More projects",
  "section.techs": "Tech & Tools",
  "section.education": "Education",

  "stack.frontend": "Frontend",
  "stack.backend": "Backend & data",
  "stack.tools": "Tools & platforms",

  "loc.usa": "Incline Village, NV, USA",

  "exp.ube.time": "March 2026 - now",
  "exp.ube.title": "Master's Professor (Bolivarian University of Ecuador)",
  "exp.ube.1":
    'Teach the course "Chatbots y Asistentes Virtuales en el Aula" (Chatbots and Virtual Assistants in the Classroom) in the Master\'s in Artificial Intelligence for Education.',
  "exp.novacomp.time": "April 2023 - now",
  "exp.novacomp.title": "Senior Software Engineer (Novacomp)",
  "exp.novacomp.1":
    "Developed cron job solutions in Apache Airflow for ACH files and reports deliveries according to stakeholders' requirements such as schedule, days (weekdays/holidays/weekend).",
  "exp.novacomp.2":
    "Supported production as On Call Person to watch any incident, requirement or special events during the day along with BizOps, DevOps and Backend team.",
  "exp.novacomp.3":
    "Created data dashboards for different teams across the company (BizOps, Partners, Product owners) using React, GraphQL, JavaScript and PostgreSQL",
  "exp.ioet.time": "December 2021 - April 2023",
  "exp.ioet.title": "Software Engineer (IOET)",
  "exp.ioet.1":
    "Led the development of a web application (frontend) of statistical dashboard showing metrics about the performance of developers completing Jira tickets during a sprint or a certain time lapse.",
  "exp.ioet.2":
    "Designed and implemented scalable APIs (REST and GraphQL) along with cron jobs for managing first and third party services and reducing time by 90% (from 10 seconds to 1 second)",
  "exp.gye.time": "September 2021 - November 2021",
  "exp.gye.title": "Data Analyst (Guayaquil Municipality)",
  "exp.gye.1":
    "Collected and cleaned demographic raw data about pregnant women from low-income neighborhoods in Guayaquil.",
  "exp.gye.2":
    "Led the development and design of a frontend application that helped to track syphilis cases in Guayaquil city using Google Maps.",
  "exp.priscila.time": "February 2020 - January 2021",
  "exp.priscila.title": "Software Engineer (Fish Industry Santa Priscila)",
  "exp.priscila.1":
    "Developed an automated bot that browses the Ecuadorian tax website to extract relevant information for the company.",
  "exp.priscila.2":
    "Developed and implemented an e-learning system for seasonal evaluation of workers and trained HR staff to manage it.",
  "exp.casagrande.time": "February 2019 - February 2020",
  "exp.casagrande.title": "Master Assistant (Casa Grande University)",
  "exp.casagrande.1":
    "Designed and developed mini games that helped a class lesson be more interactive for students (games such as roulette with prizes, tic tac toe, dice roller, coin flipper).",

  "proj.patio":
    "Open-source desktop workspace for AI chats, kanban boards and automation. Works with Claude Code, Codex, Copilot, opencode and local AI on macOS, Windows and Linux.",
  "proj.senda":
    "Browser extension plus local MCP server that lets your AI assistant browse, read and act in your own signed-in browser, only in its own tab group and with on-page approvals before sensitive actions.",
  "proj.tabjury":
    "Browser extension that reuses open tabs and finds duplicates. Put unused tabs to sleep or close them automatically according to your rules.",
  "proj.ziran":
    "Keyboard-first window switcher that lives in the macOS menu bar. Requires macOS 14 or later and installs via Homebrew.",
  "proj.anthropicAuth":
    "OpenCode plugin for using Anthropic models with your Claude Pro or Max subscription. No API key needed.",
  "proj.chismesillo": `Transcribe long audio files with Whisper entirely in the browser: no uploads, no backend, no API keys. Audio is streamed in windows through Web Workers, so memory stays flat even for multi-hour podcasts. Exports to SRT, VTT, JSON, TXT and CSV (${link("https://github.com/epulla/chismesillo.app", "source code")}).`,
  "proj.snipzy":
    "Native macOS menu-bar screenshot tool. Capture a region, annotate it, then copy or save it as PNG. It also includes on-device OCR to grab text from any capture.",
  "proj.burnedOut":
    "Agent skill that puts a burned-out senior dev inside your coding agent: answer first, minimal code, and never cuts validation, security or tests. Works with Claude Code, OpenCode, Codex, Gemini CLI and more.",
  "proj.prodTickets":
    "Jira clone made with SvelteKit (frontend) and Nest.js (backend) for ticketing. This project was implemented for the ITB (Instituto Tecnológico Bolivariano) and released privately in 09/2024.",
  "proj.portfolio.title": "Portfolio",
  "proj.portfolio":
    "Personal portfolio made with Astro and React. This project was created to show my projects, experiences and techs that I love and deployed using Github Pages.",
  "proj.easyWebMacros":
    "Google Chrome extension that lets you record your web actions and replay them with a single click.",
  "proj.moodle": `Moodle API Handler is an open-source tiny app that helps to manage your ${link(moodleApi, "API functions from Moodle")} (you can read more about Moodle WebServices ${link(moodleApi, "here")}).`,
  "proj.quicknote":
    "Quicknote is an open-source app that helps you create and share volatile, text-only messages. It's perfect for quickly sharing passwords, private tokens, private credentials and gossip :)",
  "proj.twilio": `This is a minimal application for video calling (Peer-to-Peer) using ${link("https://www.twilio.com/docs", "Twilio API")} (you need Twilio credentials to use the app).`,
  "proj.pokedex": `This is a project about showing an interactive Pokedex in a mobile version. This project was created using Flutter, Dart and ${link("https://pokeapi.co/", "PokéApi")} (free pókemon API).`,
  "proj.bingo":
    "This project is a Bingo generator (Ecuador version). It is one of my very first projects as a programming student. Hope you like it! :D",

  "edu.master.time": "March 2026",
  "edu.master.title": "Master's Degree (Casa Grande University)",
  "edu.master.desc": "Master in Cybersecurity",
  "edu.eng.time": "February 2017 - March 2022",
  "edu.eng.title": "Engineer Degree (ESPOL)",
  "edu.eng.desc": "Major in Computer Science Engineering",

  "footer.madeWith": "Made with",
  "footer.by": "by epulla",

  "social.linkedin": "LinkedIn profile",
  "social.github": "GitHub profile",
  "social.x": "X profile",
  "social.cv": "Download CV (PDF)",

  "tip.copy": "Copy",
  "tip.copied": "Copied!",
  "tip.chromeExtension": "Chrome Extension",
  "tip.react": "Love it! specially the community!",
  "tip.python": "My first language <3",
  "tip.firebase":
    "Really nice service! Specially its NoSQL database (FireStore) and realtime changes",
  "tip.supabase":
    "Damn good service! Specially its SQL database and realtime changes",
  "tip.svelte": "I personally love it along with SvelteKit",
  "tip.drizzle": "My favourite ORM!",
  "tip.astro": "Perfect. Everything, down to the last minute details",
  "tip.p5": "Best JS library ever!",
  "tip.tailwind": "Best CSS library ever!",
  "tip.daisyui": "Best Tailwind library ever!",
  "tip.claude": "My daily coding partner",
  "tip.huggingFace": "Whisper models running in the browser",
  "tip.swift": "For native macOS apps",
};

export type UiKey = keyof typeof en;

const es: Record<UiKey, string> = {
  "meta.title": "Erick Pulla | Desarrollador fullstack",
  "meta.description":
    "Portafolio de Erick Pulla, desarrollador fullstack: experiencia laboral, proyectos open source como Patio, Senda y Snipzy, y las tecnologías que uso a diario.",
  "lang.change": "Cambiar idioma",
  "theme.toggle": "Cambiar tema",
  "intro.hello": `¡Hola! Soy ${accent("desarrollador fullstack ")}y me encanta construir cosas random :)`,

  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.techs": "Stack",
  "nav.education": "Educación",

  "section.experience": "Experiencia",
  "section.projects": "Proyectos",
  "section.moreProjects": "Más proyectos",
  "section.techs": "Tecnologías y herramientas",
  "section.education": "Educación",

  "stack.frontend": "Frontend",
  "stack.backend": "Backend y datos",
  "stack.tools": "Herramientas y plataformas",

  "loc.usa": "Incline Village, NV, EE. UU.",

  "exp.ube.time": "Marzo 2026 - actualidad",
  "exp.ube.title": "Profesor de maestría (Universidad Bolivariana del Ecuador)",
  "exp.ube.1":
    'Imparto la asignatura "CHATBOTS Y ASISTENTES VIRTUALES EN EL AULA" en la Maestría en Inteligencia Artificial para la Educación.',
  "exp.novacomp.time": "Abril 2023 - actualidad",
  "exp.novacomp.title": "Ingeniero de software sénior (Novacomp)",
  "exp.novacomp.1":
    "Desarrollé soluciones de tareas programadas (cron jobs) en Apache Airflow para la entrega de archivos ACH y reportes según los requerimientos de los stakeholders, como horario y días (laborables/feriados/fines de semana).",
  "exp.novacomp.2":
    "Di soporte a producción como persona de guardia (On Call) para atender incidentes, requerimientos o eventos especiales durante el día junto con los equipos de BizOps, DevOps y Backend.",
  "exp.novacomp.3":
    "Creé dashboards de datos para distintos equipos de la empresa (BizOps, Partners, Product Owners) usando React, GraphQL, JavaScript y PostgreSQL.",
  "exp.ioet.time": "Diciembre 2021 - abril 2023",
  "exp.ioet.title": "Ingeniero de software (IOET)",
  "exp.ioet.1":
    "Lideré el desarrollo del frontend de una aplicación web de dashboards estadísticos con métricas sobre el desempeño de los desarrolladores al completar tickets de Jira durante un sprint o un periodo determinado.",
  "exp.ioet.2":
    "Diseñé e implementé APIs escalables (REST y GraphQL) junto con cron jobs para gestionar servicios propios y de terceros, reduciendo el tiempo en un 90% (de 10 segundos a 1 segundo).",
  "exp.gye.time": "Septiembre 2021 - noviembre 2021",
  "exp.gye.title": "Analista de datos (Municipio de Guayaquil)",
  "exp.gye.1":
    "Recolecté y limpié datos demográficos en bruto sobre mujeres embarazadas de barrios de bajos ingresos de Guayaquil.",
  "exp.gye.2":
    "Lideré el desarrollo y diseño de una aplicación frontend que ayudó a dar seguimiento a los casos de sífilis en la ciudad de Guayaquil usando Google Maps.",
  "exp.priscila.time": "Febrero 2020 - enero 2021",
  "exp.priscila.title":
    "Ingeniero de software (Industrial Pesquera Santa Priscila)",
  "exp.priscila.1":
    "Desarrollé un bot automatizado que navega el sitio web del SRI para extraer información relevante para la empresa.",
  "exp.priscila.2":
    "Desarrollé e implementé un sistema e-learning para la evaluación periódica de los trabajadores y capacité al personal de RR. HH. para administrarlo.",
  "exp.casagrande.time": "Febrero 2019 - febrero 2020",
  "exp.casagrande.title": "Asistente de maestría (Universidad Casa Grande)",
  "exp.casagrande.1":
    "Diseñé y desarrollé minijuegos que hicieron las clases más interactivas para los estudiantes (como una ruleta con premios, tres en raya, lanzador de dados y lanzador de monedas).",

  "proj.patio":
    "Espacio de trabajo de escritorio de código abierto para chats de IA, tableros kanban y automatización. Funciona con Claude Code, Codex, Copilot, opencode e IA local en macOS, Windows y Linux.",
  "proj.senda":
    "Extensión de navegador y servidor MCP local que permite a tu asistente de IA navegar, leer y actuar en tu propio navegador con tus sesiones, solo en su propio grupo de pestañas y pidiendo tu aprobación en la página antes de acciones sensibles.",
  "proj.tabjury":
    "Extensión de navegador que reutiliza pestañas abiertas y encuentra duplicadas. Pon a dormir las pestañas que no usas o ciérralas automáticamente según tus reglas.",
  "proj.ziran":
    "Selector de ventanas pensado para el teclado que vive en la barra de menús de macOS. Requiere macOS 14 o posterior y se instala con Homebrew.",
  "proj.anthropicAuth":
    "Plugin de OpenCode para usar modelos de Anthropic con tu suscripción Claude Pro o Max. No necesitas API key.",
  "proj.chismesillo": `Transcribe archivos de audio largos con Whisper completamente en el navegador: sin subidas, sin backend, sin API keys. El audio se procesa por ventanas con Web Workers, así que la memoria se mantiene estable incluso en podcasts de varias horas. Exporta a SRT, VTT, JSON, TXT y CSV (${link("https://github.com/epulla/chismesillo.app", "código fuente")}).`,
  "proj.snipzy":
    "Herramienta nativa de capturas de pantalla para la barra de menús de macOS. Captura una región, anótala y luego cópiala o guárdala como PNG. También incluye OCR en el dispositivo para extraer texto de cualquier captura.",
  "proj.burnedOut":
    "Skill que mete a un dev senior quemado dentro de tu agente de código: responde primero, código mínimo y nunca recorta validaciones, seguridad ni tests. Funciona con Claude Code, OpenCode, Codex, Gemini CLI y más.",
  "proj.prodTickets":
    "Clon de Jira hecho con SvelteKit (frontend) y Nest.js (backend) para gestión de tickets. Este proyecto se implementó para el ITB (Instituto Tecnológico Bolivariano) y se lanzó de forma privada en 09/2024.",
  "proj.portfolio.title": "Portafolio",
  "proj.portfolio":
    "Portafolio personal hecho con Astro y React. Lo creé para mostrar mis proyectos, experiencias y las tecnologías que me encantan, y está desplegado con Github Pages.",
  "proj.easyWebMacros":
    "Extensión de Google Chrome que te permite grabar tus acciones web y reproducirlas con un solo clic.",
  "proj.moodle": `Moodle API Handler es una pequeña app de código abierto que te ayuda a gestionar tus ${link(moodleApi, "funciones de la API de Moodle")} (puedes leer más sobre los WebServices de Moodle ${link(moodleApi, "aquí")}).`,
  "proj.quicknote":
    "Quicknote es una app de código abierto que te ayuda a crear y compartir mensajes volátiles de solo texto. Es perfecta para compartir rápidamente contraseñas, tokens privados, credenciales privadas y chismes :)",
  "proj.twilio": `Aplicación mínima de videollamadas (peer-to-peer) que usa la ${link("https://www.twilio.com/docs", "API de Twilio")} (necesitas credenciales de Twilio para usarla).`,
  "proj.pokedex": `Proyecto que muestra una Pokédex interactiva en versión móvil. Lo creé con Flutter, Dart y ${link("https://pokeapi.co/", "PokéApi")} (API gratuita de Pokémon).`,
  "proj.bingo":
    "Generador de Bingo (versión Ecuador). Es uno de mis primeros proyectos como estudiante de programación. ¡Espero que te guste! :D",

  "edu.master.time": "Marzo 2026",
  "edu.master.title": "Maestría (Universidad Casa Grande)",
  "edu.master.desc": "Maestría en Ciberseguridad",
  "edu.eng.time": "Febrero 2017 - marzo 2022",
  "edu.eng.title": "Ingeniería (ESPOL)",
  "edu.eng.desc": "Ingeniería en Ciencias Computacionales",

  "footer.madeWith": "Hecho con",
  "footer.by": "por epulla",

  "social.linkedin": "Perfil de LinkedIn",
  "social.github": "Perfil de GitHub",
  "social.x": "Perfil de X",
  "social.cv": "Descargar CV (PDF)",

  "tip.copy": "Copiar",
  "tip.copied": "¡Copiado!",
  "tip.chromeExtension": "Extensión de Chrome",
  "tip.react": "¡Me encanta! ¡Sobre todo la comunidad!",
  "tip.python": "Mi primer lenguaje <3",
  "tip.firebase":
    "¡Muy buen servicio! Sobre todo su base de datos NoSQL (Firestore) y los cambios en tiempo real",
  "tip.supabase":
    "¡Servicio buenísimo! Sobre todo su base de datos SQL y los cambios en tiempo real",
  "tip.svelte": "Me encanta, sobre todo junto con SvelteKit",
  "tip.drizzle": "¡Mi ORM favorito!",
  "tip.astro": "Perfecto. Todo, hasta el último detalle",
  "tip.p5": "¡La mejor librería de JS!",
  "tip.tailwind": "¡La mejor librería de CSS!",
  "tip.daisyui": "¡La mejor librería para Tailwind!",
  "tip.claude": "Mi compañero diario de programación",
  "tip.huggingFace": "Modelos Whisper ejecutándose en el navegador",
  "tip.swift": "Para apps nativas de macOS",
};

export const ui: Record<Lang, Record<UiKey, string>> = { en, es };
