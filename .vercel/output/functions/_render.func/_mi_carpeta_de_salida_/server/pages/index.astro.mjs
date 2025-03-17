import { i as createComponent, m as maybeRenderHead, r as renderTemplate, j as createAstro, l as addAttribute, n as renderHead, o as renderComponent, p as renderSlot, q as renderScript, s as spreadAttributes, u as Fragment } from '../chunks/astro/server_BcspQKrc.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const header$1 = {"inicio":"Inicio","tecnologias":"Tecnologías","proyectos":"Proyectos","sobremi":"Sobre mí"};
const hero$1 = {"title":"Hola, Soy Rodrigo","subtitleFirst":"Programador Full-Stack.","subtitleSecond":"Tengo 23 años, soy de Tucumán, Argentina. Me especializo en desarrollo de software y soluciones tecnológicas, siempre buscando mejorar. Mi objetivo es aportar soluciones creativas y efectivas.","openToWork":"Open To Work"};
const tecnologias$1 = {"title":"Tecnologías","lenguajes":"Lenguajes","frameworks":"Frameworks y Librerías","basesDeDatos":"Bases de Datos","herramientas":"Herramientas Adicionales"};
const proyectos$1 = {"title":"Proyectos","project1Title":"Entorno de aplicaciones para el manejo de negocios","project1Description":"Aplicaciones creadas para el manejo de negocios de distintos rubros, con sistema de subscricion mensual (ACTUALMENTE DESARROLLÁNDOSE EN EQUIPO)","project2Title":"Nutriia - Mi primera aplicacion creada con electron","project2Description":"Aplicacion para nutricionistas basado en electron, genera dietas personalizadas con inteligencia artificial para pacientes basado en su altura, peso, nivel de actividad, ubicacion y objetivos. cuenta con un sistema de seguridad propio basado en cuenta de google y licencias para su uso.","project3Title":"Gestor de licencias","project3Description":"Aplicacion web creada para gestionar licencias de uso mediante supabase en entornos de aplicaciones de un mismo desarrollador","project4Title":"D&D - Juego de rol con ia","project4Description":"Este fue un proyecto para la facultad, es un juego de rol que crea historias interactivas con opciones y tambien da la libertad de crear respuestas propias ante los diferentes escenarios, ademas cuenta con una pasarela de pagos. (no es necesario iniciar sesion para jugar solo crear un personaje)"};
const sobremi$1 = {"title":"Sobre mi","description1":"Soy <strong>Programador técnico con formación universitaria</strong> en la UTN FRT (Universidad Tecnológica Nacional, Facultad Regional Tucumán).","description2":"Estoy buscando oportunidades para <strong>crecer como profesional</strong> y prepararme para el mundo laboral.","description3":"Todos los días continúo desarrollando mis habilidades como dev <strong>Full-Stack</strong>, participando en proyectos y haciendo cursos que me permitan <strong>aprender y crecer</strong> como programador."};
const footer$1 = {"sobremi":"Sobre mí","contacto":"Contacto"};
const project$1 = {"code":"Code","preview":"Preview"};
const verCertificado$1 = "Ver Certificado";
const es = {
  header: header$1,
  hero: hero$1,
  tecnologias: tecnologias$1,
  proyectos: proyectos$1,
  sobremi: sobremi$1,
  footer: footer$1,
  project: project$1,
  verCertificado: verCertificado$1,
};

const header = {"inicio":"Home","tecnologias":"Technologies","proyectos":"Projects","sobremi":"About me"};
const hero = {"title":"Hello, I'm Rodrigo","subtitleFirst":"Full-Stack Programmer.","subtitleSecond":"I am 23 years old, from Tucumán, Argentina. I specialize in software development and technological solutions, always looking to improve. My goal is to provide creative and effective solutions.","openToWork":"Open To Work"};
const tecnologias = {"title":"Technologies","lenguajes":"Languages","frameworks":"Frameworks and Libraries","basesDeDatos":"Databases","herramientas":"Additional Tools"};
const proyectos = {"title":"Projects","project1Title":"Business management application environment","project1Description":"Applications created for managing businesses of different types, with a monthly subscription system (CURRENTLY BEING DEVELOPED IN TEAM)","project2Title":"Nutriia - My first application created with electron","project2Description":"Application for nutritionists based on electron, generates personalized diets with artificial intelligence for patients based on their height, weight, activity level, location and goals. It has its own security system based on google account and licenses for its use.","project3Title":"License manager","project3Description":"Web application created to manage user licenses through supabase in environments of applications from the same developer","project4Title":"D&D - Role-playing game with ai","project4Description":"This was a project for the faculty, it is a role-playing game that creates interactive stories with options and also gives the freedom to create your own responses to different scenarios, it also has a payment gateway. (it is not necessary to log in to play just create a character)"};
const sobremi = {"title":"About me","description1":"I am a <strong>Technical programmer with university education</strong> at UTN FRT (National Technological University, Tucumán Regional Faculty).","description2":"I am looking for opportunities to <strong>grow as a professional</strong> and prepare for the world of work.","description3":"Every day I continue to develop my skills as a <strong>Full-Stack</strong> dev, participating in projects and taking courses that allow me to <strong>learn and grow</strong> as a programmer."};
const footer = {"sobremi":"About me","contacto":"Contact"};
const project = {"code":"Code","preview":"Preview"};
const verCertificado = "See Certificate";
const en = {
  header,
  hero,
  tecnologias,
  proyectos,
  sobremi,
  footer,
  project,
  verCertificado,
};

const translations$1 = {
  es,
  en
};

const languages = Object.keys(translations$1);

const getDefaultLanguage = () => {
    return languages[0];
};

const translate = (key, lang) => {
  const language = getDefaultLanguage();
  const keys = key.split('.');
  let current = translations$1[language];

  for (const k of keys) {
    if (current && current[k]) {
      current = current[k];
    } else {
      console.error(`Translation key not found: ${key} in ${language}`);
      return key;
    }
  }
  return current;
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center mx-auto py-5 sticky top-0 w-full xl:w-[1120px] z-10"> <nav class="flex flex-wrap justify-center items-center px-3 text-sm font-medium rounded-full"> <a class="hover:bg-white/10 rounded-full px-3 py-1 transition text-base md:text-sm" href="#top">${translate("header.inicio")}</a> <a class="hover:bg-white/10 rounded-full px-3 py-1 transition text-base md:text-sm" href="#tecnologias">${translate("header.tecnologias")}</a> <a class="hover:bg-white/10 rounded-full px-3 py-1 transition text-base md:text-sm" href="#proyectos">${translate("header.proyectos")}</a> <a class="hover:bg-white/10 rounded-full px-3 py-1 transition text-base md:text-sm" href="#sobre_mi">${translate("header.sobremi")}</a> </nav> </header>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Header.astro", void 0);

const $$Astro$z = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  let currentLanguage = "es";
  if (typeof document !== "undefined") {
    const langCookie = document.cookie.split("; ").find((row) => row.startsWith("lang="));
    currentLanguage = langCookie ? langCookie.split("=")[1] : "es";
  }
  function t(key) {
    return translations[currentLanguage][key] || key;
  }
  return renderTemplate`<html${addAttribute(currentLanguage, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <!-- Canvas para el fondo dinámico --> <canvas id="background" class="background-canvas" data-astro-cid-sckkx6r4></canvas> <!-- Juego de Pong --> <div id="game-result" data-astro-cid-sckkx6r4></div> <div id="pong-score" data-astro-cid-sckkx6r4>Player: 0 | AI: 0</div> <canvas id="pong-game" width="400" height="200" data-astro-cid-sckkx6r4></canvas> <!-- Contenido principal --> ${renderComponent($$result, "Header", $$Header, { "t": t, "currentLanguage": currentLanguage, "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 mt-4 py-0.5 rounded dark:bg-green-900 dark:text-green-300"> ${renderSlot($$result, $$slots["default"])}</span>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Badge.astro", void 0);

const $$Astro$y = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="white"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Social/Linkedin.astro", void 0);

const $$Astro$x = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Social/Github.astro", void 0);

const $$Astro$w = createAstro();
const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 
text-xs md:text-base
 bg-white/5 hover:scale-110 hover:bg-white/20 transition"${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Social_icons.astro", void 0);

const $$Astro$v = createAstro();
const $$Gmail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Gmail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42"> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Social/Gmail.astro", void 0);

const $$Astro$u = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, t, currentLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="w-full mx-auto lg:w-[800px] py-12"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Section.astro", void 0);

const $$Astro$t = createAstro();
const $$SectionTecno = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$SectionTecno;
  const { id, t, currentLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="w-full mx-auto lg:w-[1220px] pt-32 pb-28 py-12"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Section_tecno.astro", void 0);

const $$Astro$s = createAstro();
const $$TecnosIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$TecnosIcons;
  return renderTemplate`${maybeRenderHead()}<span class="rounded-full bg-gray-900 border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/90 transition"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Tecnos_icons.astro", void 0);

const $$Astro$r = createAstro();
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Lenguajes/Html.astro", void 0);

const $$Astro$q = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Lenguajes/Css.astro", void 0);

const $$Astro$p = createAstro();
const $$Csharp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Csharp;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2222" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 -1.43 255.58 290.11"><path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35"></path><path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z"></path><path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35"></path><g fill="#fff"><path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z"></path><path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z"></path></g></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Lenguajes/Csharp.astro", void 0);

const $$Astro$o = createAstro();
const $$Js = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Js;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Lenguajes/Js.astro", void 0);

const $$Astro$n = createAstro();
const $$Ast = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Ast;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="256" height="366" preserveAspectRatio="xMidYMid"><path d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Frameworks_Librerias/Ast.astro", void 0);

const $$Astro$m = createAstro();
const $$Bootstrap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Frameworks_Librerias/Bootstrap.astro", void 0);

const $$Astro$l = createAstro();
const $$Node = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="292"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Frameworks_Librerias/Node.astro", void 0);

const $$Astro$k = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Frameworks_Librerias/React.astro", void 0);

const $$Astro$j = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Frameworks_Librerias/Tailwind.astro", void 0);

const $$Astro$i = createAstro();
const $$Mongo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Mongo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Bases_de_datos/Mongo.astro", void 0);

const $$Astro$h = createAstro();
const $$Mysql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Mysql;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Bases_de_datos/Mysql.astro", void 0);

const $$Astro$g = createAstro();
const $$Git = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Herramientas_Adicionales/Git.astro", void 0);

const $$Astro$f = createAstro();
const $$Netlify = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Netlify;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 226" xmlns="http://www.w3.org/2000/svg" width="256" height="226" preserveAspectRatio="xMidYMid"><path fill="#05BDBA" d="M69.181 188.087h-2.417l-12.065-12.065v-2.417l18.444-18.444h12.778l1.704 1.704v12.778zM54.699 51.628v-2.417l12.065-12.065h2.417L87.625 55.59v12.778l-1.704 1.704H73.143z"></path><path fill="#014847" d="M160.906 149.198h-17.552l-1.466-1.466v-41.089c0-7.31-2.873-12.976-11.689-13.174-4.537-.119-9.727 0-15.274.218l-.833.852v53.173l-1.466 1.466H95.074l-1.466-1.466v-70.19l1.466-1.467h39.503c15.354 0 27.795 12.441 27.795 27.795v43.882l-1.466 1.466Z"></path><path fill="#05BDBA" d="M71.677 122.889H1.466L0 121.423V103.83l1.466-1.466h70.211l1.466 1.466v17.593zM254.534 122.889h-70.211l-1.466-1.466V103.83l1.466-1.466h70.211L256 103.83v17.593zM117.876 54.124V1.466L119.342 0h17.593l1.466 1.466v52.658l-1.466 1.466h-17.593zM117.876 223.787v-52.658l1.466-1.466h17.593l1.466 1.466v52.658l-1.466 1.465h-17.593z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Herramientas_Adicionales/Netlify.astro", void 0);

const $$Astro$e = createAstro();
const $$Vercel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Vercel;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 222" width="256" height="222" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#000" d="m128 0 128 221.705H0z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Herramientas_Adicionales/Vercel.astro", void 0);

const $$Astro$d = createAstro();
const $$Notion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Notion;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="268" preserveAspectRatio="xMidYMid" viewBox="0 0 256 268"><path fill="#FFF" d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"></path><path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Herramientas_Adicionales/Notion.astro", void 0);

const $$Astro$c = createAstro();
const $$TecnoIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TecnoIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-category"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Titulos/Tecno_icon.astro", void 0);

const $$Astro$b = createAstro();
const $$Firebase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Firebase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="600" height="600" fill="none" viewBox="0 0 600 600"><path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"></path><path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"></path><path fill="#FF9100" d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"></path><path fill="#DD2C00" d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Bases_de_datos/Firebase.astro", void 0);

const $$Astro$a = createAstro();
const $$Electron = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Electron;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#2F3242"></circle><path fill="#A2ECFB" d="M51.395 39.503a1.8 1.8 0 0 0 .646-3.542l-.646 3.542Zm-22.78 4.072 1.56.9-1.56-.9Zm.324 17.36a1.8 1.8 0 0 0 3.125-1.788l-3.125 1.789Zm8.755 5.81a1.8 1.8 0 0 0-2.665 2.422l2.664-2.421Zm16.055 14.956-.901 1.559.9-1.559Zm43.172 7.814a1.8 1.8 0 1 0-2.03-2.973l2.03 2.973ZM52.04 35.961c-5.57-1.016-10.756-1.064-15.067-.023-4.32 1.043-7.89 3.22-9.918 6.738l3.119 1.798c1.394-2.42 3.97-4.15 7.644-5.037 3.682-.89 8.336-.89 13.576.066l.646-3.542Zm-24.985 6.715c-3.013 5.227-1.778 11.864 1.883 18.26l3.125-1.789c-3.406-5.95-3.955-11.089-1.89-14.673l-3.118-1.798Zm7.973 26.49c4.61 5.074 10.687 9.97 17.819 14.094l1.802-3.117c-6.842-3.956-12.62-8.624-16.956-13.397l-2.665 2.42ZM52.848 83.26c8.496 4.913 17.198 7.984 24.887 9.1 7.624 1.108 14.54.328 19.186-2.845l-2.03-2.973c-3.566 2.435-9.4 3.307-16.639 2.256-7.173-1.041-15.443-3.937-23.602-8.655l-1.802 3.117Zm52.511 1.648a6.292 6.292 0 0 0-6.288-6.295v3.6a2.691 2.691 0 0 1 2.688 2.695h3.6Zm-6.288-6.295a6.291 6.291 0 0 0-6.288 6.295h3.6a2.691 2.691 0 0 1 2.688-2.695v-3.6Zm-6.288 6.295a6.291 6.291 0 0 0 6.288 6.295v-3.6a2.691 2.691 0 0 1-2.688-2.695h-3.6Zm6.288 6.295a6.292 6.292 0 0 0 6.288-6.295h-3.6a2.691 2.691 0 0 1-2.688 2.695v3.6Z"></path><path fill="#A2ECFB" d="M91.487 65.382a1.8 1.8 0 1 0 2.75 2.324l-2.75-2.324Zm7.83-21.747-1.56.9 1.56-.9Zm-14.81-8.394a1.8 1.8 0 1 0-.047 3.6l.047-3.6Zm-9.566 4.64a1.8 1.8 0 0 0-.756-3.52l.756 3.52Zm-21.157 6.492.9 1.558-.9-1.558ZM25.549 80.905a1.8 1.8 0 0 0 3.562-.522l-3.562.522Zm68.688-13.2c3.647-4.314 6.268-8.778 7.515-13.027 1.249-4.257 1.148-8.43-.876-11.941l-3.119 1.797c1.392 2.415 1.603 5.508.54 9.13-1.065 3.63-3.379 7.658-6.81 11.718l2.75 2.324Zm6.639-24.968c-2.964-5.143-9.168-7.402-16.369-7.496l-.047 3.6c6.673.087 11.266 2.17 13.297 5.693l3.119-1.797Zm-26.69-6.377c-6.75 1.449-14.098 4.288-21.303 8.455l1.802 3.116c6.912-3.997 13.91-6.69 20.256-8.05l-.756-3.52Zm-21.303 8.455c-8.746 5.057-15.916 11.28-20.734 17.578-4.772 6.237-7.434 12.819-6.6 18.512l3.562-.522c-.627-4.28 1.364-9.877 5.897-15.803 4.488-5.866 11.276-11.791 19.677-16.649l-1.802-3.116Z"></path><path fill="#A2ECFB" d="M49.083 87.23a1.8 1.8 0 1 0-3.39 1.212l3.39-1.212Zm29.48 9.196a1.8 1.8 0 0 0-3.086-1.853l3.087 1.853ZM79.57 85.18a1.8 1.8 0 1 0 3.436 1.073L79.57 85.18Zm4.813-21.113h-1.8 1.8ZM69.156 22.53a1.8 1.8 0 1 0-1.463 3.29l1.463-3.29ZM45.693 88.442c1.906 5.332 4.457 9.849 7.51 13.063 3.06 3.219 6.725 5.226 10.78 5.226v-3.6c-2.785 0-5.566-1.366-8.17-4.106-2.609-2.746-4.936-6.777-6.73-11.796l-3.39 1.213Zm18.29 18.289c5.886 0 10.91-4.189 14.58-10.305l-3.086-1.853c-3.399 5.662-7.465 8.558-11.494 8.558v3.6Zm19.023-20.478c2.02-6.467 3.177-14.07 3.177-22.186h-3.6c0 7.787-1.11 15.025-3.013 21.113l3.436 1.073Zm3.177-22.186c0-9.953-1.74-19.145-4.687-26.417-2.921-7.206-7.152-12.813-12.34-15.12l-1.463 3.29c3.943 1.753 7.692 6.336 10.467 13.183 2.749 6.78 4.423 15.504 4.423 25.064h3.6Z"></path><path fill-rule="evenodd" stroke="#A2ECFB" stroke-linecap="round" stroke-width="3.6" d="M103.559 84.908a4.491 4.491 0 0 0-4.488-4.495 4.491 4.491 0 0 0-4.488 4.495 4.491 4.491 0 0 0 4.488 4.495 4.491 4.491 0 0 0 4.488-4.495v0ZM28.814 89.403a4.492 4.492 0 0 0 4.488-4.495 4.492 4.492 0 0 0-4.488-4.495 4.491 4.491 0 0 0-4.488 4.495 4.491 4.491 0 0 0 4.488 4.495v0Z" clip-rule="evenodd"></path><ellipse cx="63.983" cy="23.204" stroke="#A2ECFB" stroke-linecap="round" stroke-width="3.6" rx="4.488" ry="4.495"></ellipse><path fill="#A2ECFB" fill-rule="evenodd" d="M64.85 68.086a4.112 4.112 0 0 1-1.733-8.037 4.105 4.105 0 0 1 4.878 3.15 4.111 4.111 0 0 1-3.145 4.887Z" clip-rule="evenodd"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Herramientas_Adicionales/Electron.astro", void 0);

const $$Astro$9 = createAstro();
const $$Supabase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Supabase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"></path> <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fill-opacity="0.2"></path> <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path> <defs> <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"> <stop stop-color="#249361"></stop> <stop offset="1" stop-color="#3ECF8E"></stop> </linearGradient> <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"> <stop></stop> <stop offset="1" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Tecnologias/Bases_de_datos/Supabase.astro", void 0);

const defaultLang = 'es';
 
  const ui = {
      es:{
          'nav.home': 'Inicio',
          'nav.tecnologias': 'Tecnologías',
          'nav.proyectos': 'Proyectos',
          'nav.sobremi': 'Sobre mí',
          'hero.title': 'Hola, Soy Rodrigo',
          'hero.subtitle': 'Programador Full-Stack. <br>Tengo 23 años, soy de Tucumán, Argentina. Me especializo en desarrollo de software y soluciones tecnológicas, siempre buscando mejorar. Mi objetivo es aportar soluciones creativas y efectivas.',
           'hero.badge': 'Open To Work',
          'hero.linkedin': 'LinkedIn',
          'hero.github': 'GitHub',
          'hero.gmail': 'rodrieldkii@gmail.com',
          'tecnologias.title': 'Tecnologías',
          'tecnologias.lenguajes': 'Lenguajes',
          'tecnologias.frameworks': 'Frameworks y Librerías',
          'tecnologias.basesdedatos': 'Bases de Datos',
          'tecnologias.herramientas': 'Herramientas Adicionales',
          'proyectos.title': 'Proyectos',
           'sobremi.title': 'Sobre mí',
          'sobremi.description1': 'Soy <strong>Programador técnico con formación universitaria</strong> en la UTN FRT (Universidad Tecnológica Nacional, Facultad Regional Tucumán).',
          'sobremi.description2': 'Estoy buscando oportunidades para <strong>crecer como profesional</strong> y prepararme para el mundo laboral.',
         'sobremi.description3': 'Todos los días continúo desarrollando mis habilidades como dev <strong>Full-Stack</strong>, participando en proyectos y haciendo cursos que me permitan <strong>aprender y crecer</strong> como programador.',
         'footer.sobremi': 'Sobre mí',
         'footer.contacto': 'Contacto',
         'project.code': 'Code',
         'project.preview': 'Preview'
      },
      en:{
          'nav.home': 'Home',
          'nav.tecnologias': 'Technologies',
          'nav.proyectos': 'Projects',
          'nav.sobremi': 'About me',
          'hero.title': 'Hi, I\'m Rodrigo',
          'hero.subtitle': 'Full-Stack Developer. <br>I\'m 23 years old, from Tucumán, Argentina. I specialize in software development and technological solutions, always looking to improve. My goal is to provide creative and effective solutions.',
          'hero.badge': 'Open To Work',
          'hero.linkedin': 'LinkedIn',
          'hero.github': 'GitHub',
          'hero.gmail': 'rodrieldkii@gmail.com',
          'tecnologias.title': 'Technologies',
           'tecnologias.lenguajes': 'Languages',
          'tecnologias.frameworks': 'Frameworks and Libraries',
           'tecnologias.basesdedatos': 'Databases',
          'tecnologias.herramientas': 'Additional Tools',
           'proyectos.title': 'Projects',
           'sobremi.title': 'About me',
          'sobremi.description1': 'I am a <strong>Technical programmer with university education</strong> at UTN FRT (National Technological University, Tucumán Regional Faculty).',
          'sobremi.description2': 'I am looking for opportunities to <strong>grow as a professional</strong> and prepare for the world of work.',
          'sobremi.description3': 'Every day I continue to develop my skills as a <strong>Full-Stack</strong> dev, participating in projects and taking courses that allow me to <strong>learn and grow</strong> as a programmer.',
          'footer.sobremi': 'About me',
          'footer.contacto': 'Contact',
          'project.code': 'Code',
          'project.preview': 'Preview'
      },
  };

const $$Astro$8 = createAstro();
const $$Tecnologias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tecnologias;
  const currentLang = Astro2.cookies.get("lang")?.value || defaultLang;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center"> <h2 class="text-4xl font-semibold pb-10 flex gap-x-3 items-center text-center mb-4"> ${renderComponent($$result, "Tecno_icon", $$TecnoIcon, { "class": "w-12 h-12" })} ${ui[currentLang]["tecnologias.title"]} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-4"> <div> <h2 class="text-2xl opacity-80 mb-6 text-center">${ui[currentLang]["tecnologias.lenguajes"]}</h2> <nav class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "HTML" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Html", $$Html, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "CSS" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Css", $$Css, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "JavaScript" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Js", $$Js, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "C#" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Csharp", $$Csharp, { "class": "w-12 h-12" })}` })} </nav> <h2 class="text-2xl opacity-80 mt-8 mb-6 text-center">${ui[currentLang]["tecnologias.frameworks"]}</h2> <nav class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Node.js" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Node", $$Node, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "React" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "React", $$React, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Bootstrap" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Bootstrap", $$Bootstrap, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Tailwind CSS" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Tailwind", $$Tailwind, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Astro" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Ast", $$Ast, { "class": "w-12 h-12" })}` })} </nav> </div> <div> <h2 class="text-2xl opacity-80 mb-6 text-center">${ui[currentLang]["tecnologias.basesdedatos"]}</h2> <nav class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "MongoDB" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Mongo", $$Mongo, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "MySQL" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Mysql", $$Mysql, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Firebase" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Firebase", $$Firebase, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Supabase" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Supabase", $$Supabase, { "class": "w-12 h-12" })}` })} </nav> <h2 class="text-2xl opacity-80 mt-8 mb-6 text-center">${ui[currentLang]["tecnologias.herramientas"]}</h2> <nav class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Git" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Git", $$Git, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Electron" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Electron", $$Electron, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Netlify" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Netlify", $$Netlify, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Vercel" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Vercel", $$Vercel, { "class": "w-12 h-12" })}` })} ${renderComponent($$result, "Tecnos_icons", $$TecnosIcons, { "title": "Notion" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Notion", $$Notion, { "class": "w-12 h-12" })}` })} </nav> </div> </div> </div>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Tecnologias.astro", void 0);

const $$Astro$7 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Titulos/Code.astro", void 0);

const $$Astro$6 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Social/Link.astro", void 0);

const $$Astro$5 = createAstro();
const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const currentLang = Astro2.cookies.get("lang")?.value || defaultLang;
  const TAGS = {
    Html: {
      name: "Html",
      class: "bg-[#963419] text-white",
      icon: $$Html
    },
    Css: {
      name: "Css",
      class: "bg-[#07436b] text-white",
      icon: $$Css
    },
    Js: {
      name: "Js",
      class: "bg-[#a39535] text-white",
      icon: $$Js
    },
    React: {
      name: "React",
      class: "bg-[#07436b] text-white",
      icon: $$React
    },
    Electron: {
      name: "Electron",
      class: "bg-[#0c5555] text-white",
      icon: $$Electron
    },
    Supabase: {
      name: "Supabase",
      class: "bg-[#1c7777] text-white",
      icon: $$Supabase
    }
  };
  const PROJECTS = [
    {
      title: "Entorno de aplicaciones para el manejo de negocios",
      description: "Aplicaciones creadas para el manejo de negocios de distintos rubros, con sistema de subscricion mensual (ACTUALMENTE DESARROLL\xC1NDOSE EN EQUIPO)",
      images: [
        "/projects/proyecto3.webp",
        "/projects/proyecto3-2.webp",
        "/projects/proyecto3-3.webp",
        "/projects/proyecto3-4.webp",
        "/projects/proyecto3-5.webp",
        "/projects/proyecto3-6.webp",
        "/projects/proyecto3-7.webp",
        "/projects/proyecto3-8.webp"
      ],
      tags: [TAGS.Css, TAGS.React, TAGS.Supabase, TAGS.Electron]
    },
    {
      title: "Nutriia - Mi primera aplicacion creada con electron",
      description: "Aplicacion para nutricionistas basado en electron, genera dietas personalizadas con inteligencia artificial para pacientes basado en su altura, peso, nivel de actividad, ubicacion y objetivos. cuenta con un sistema de seguridad propio basado en cuenta de google y licencias para su uso.",
      link: "https://rodri-a-dk.github.io/Nutriia_Electron/",
      images: [
        "/projects/proyecto1.webp",
        "/projects/proyecto1-2.webp",
        "/projects/proyecto1-3.webp",
        "/projects/proyecto1-4.webp",
        "/projects/proyecto1-5.webp",
        "/projects/proyecto1-6.webp"
      ],
      tags: [TAGS.Html, TAGS.Css, TAGS.Supabase, TAGS.Electron]
    },
    {
      title: "Gestor de licencias",
      description: "Aplicacion web creada para gestionar licencias de uso mediante supabase en entornos de aplicaciones de un mismo desarrollador",
      link: "https://rodri-a-dk.github.io/License_manager/",
      images: [
        "/projects/proyecto2.webp",
        "/projects/proyecto2-2.webp",
        "/projects/proyecto2-3.webp",
        "/projects/proyecto2-4.webp",
        "/projects/proyecto2-5.webp"
      ],
      tags: [TAGS.Html, TAGS.Css, TAGS.React, TAGS.Supabase]
    },
    {
      title: "D&D - Juego de rol con ia",
      description: "Este fue un proyecto para la facultad, es un juego de rol que crea historias interactivas con opciones y tambien da la libertad de crear respuestas propias ante los diferentes escenarios, ademas cuenta con una pasarela de pagos. (no es necesario iniciar sesion para jugar solo crear un personaje)",
      link: "https://rodri-a-dk.github.io/dndbienhosteado/",
      images: [
        "/projects/proyecto4.webp",
        "/projects/proyecto4-2.webp",
        "/projects/proyecto4-3.webp",
        "/projects/proyecto4-4.webp",
        "/projects/proyecto4-5.webp",
        "/projects/proyecto4-6.webp",
        "/projects/proyecto4-7.webp",
        "/projects/proyecto4-8.webp"
      ],
      tags: [TAGS.Html, TAGS.Css, TAGS.Js, TAGS.React]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ images, title, description, tags, link, github }, projectIndex) => renderTemplate`<article class="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0"> <div class="w-full md:w-1/2 flex items-center group"> <div class="relative flex flex-col items-center transition duration-500 ease-in-out transform shadow-xl overflow-hidden rounded-xl sm:rounded-xl lg:border lg:border-gray-800 group-hover:shadow-2xl"> <div class="relative w-full h-full overflow-hidden"${addAttribute(`carousel-${projectIndex}`, "id")}> <div class="flex transition-transform duration-500 h-full w-full"${addAttribute(`slider-${projectIndex}`, "id")}> ${images.map((image, index) => renderTemplate`<img${addAttribute(`Captura del Proyecto ${index + 1}`, "alt")} class="object-cover object-top w-full h-full shrink-0 transition duration-500 sm:h-full  cursor-pointer" loading="lazy"${addAttribute(image, "src")}${addAttribute(`modal-${projectIndex}-${index}`, "data-modal-target")}>`)} </div> ${images.length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"${addAttribute(`prev-${projectIndex}`, "id")}>
←
</button> <button class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"${addAttribute(`next-${projectIndex}`, "id")}>
→
</button> <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2"> ${images.map((_, index) => renderTemplate`<button class="w-2 h-2 rounded-full transition-colors bg-white/50 dot-indicator"${addAttribute(index, "data-index")}${addAttribute(projectIndex, "data-project")}></button>`)} </div> ` })}`} </div> </div> </div> <div class="w-full md:w-1/2 flex flex-col justify-center"> <h3 class="text-2xl font-bold mb-2">${title}</h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> </div> <div class="mt-2 text-lg mb-4">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "Social_icons", $$SocialIcons, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Github", $$Github, { "class": "size-6" })} ${ui[currentLang]["project.code"]}` })}`} ${link && renderTemplate`${renderComponent($$result, "Social_icons", $$SocialIcons, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })} ${ui[currentLang]["project.preview"]}` })}`} </footer> </div> </article>`)} </div> ${PROJECTS.map(
    ({ images, title }, projectIndex) => images.map((image, imageIndex) => renderTemplate`<div${addAttribute(`modal-${projectIndex}-${imageIndex}`, "id")} class="fixed inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-75 p-4"${addAttribute(projectIndex, "data-project-index")}${addAttribute(imageIndex, "data-image-index")}> <div class="relative w-full flex items-center justify-center"> <img${addAttribute(image, "src")}${addAttribute(`${title} - Imagen ${imageIndex + 1}`, "alt")} class="max-h-[85vh] max-w-[85vw] object-contain"> <button class="absolute -top-4 -right-4 rounded-full bg-gray-300 p-2 text-black hover:bg-gray-200 transition-colors" onclick="this.closest('[id^=modal-]').classList.add('hidden')" aria-label="Cerrar modal">
✕
</button> <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 px-3 py-1 rounded-full"> ${imageIndex + 1} / ${images.length} </div> </div> </div>`)
  )} ${renderScript($$result, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Proyectos.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Proyectos.astro", void 0);

const $$Astro$4 = createAstro();
const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SobreMi;
  const fondo_IMAGE = "/projects/fotoperfilabajo.png";
  Astro2.cookies.get("lang")?.value || defaultLang;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row gap-x-8 justify-center items-center"> <div class="[&>p]:mb-4 [&>p>strong]:text-blue-300 [&>p>strong]:font-semibold text-pretty"> <p>
Soy <strong>Programador tecnico con formación universitaria</strong> en la UTN FRT  (Universidad Tecnológica Nacional, Facultad Regional Tucumán).
</p> <p>
Estoy buscando oportunidades para <strong>crecer como profesional</strong> y prepararme para el mundo laboral.
</p> <p class="text-pretty">
Todos los días continúo desarrollando mis habilidades como dev <strong>Full-Stack</strong>, participando en proyectos y haciendo cursos que me permitan <strong>aprender y crecer</strong> como programador.
</p> </div> <!-- Carga de la imagen de perfil --> <img${addAttribute(fondo_IMAGE, "src")} alt="yo" class="rounded-s-full size-64"> </section>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Sobre_mi.astro", void 0);

const $$Astro$3 = createAstro();
const $$MeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/icons/Titulos/Me_icon.astro", void 0);

const $$Astro$2 = createAstro();
const $$SectionSobremi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionSobremi;
  const { id, t, currentLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="w-full mx-auto lg:w-[740px]  pt-32 pb-28 py-12"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Section_sobremi.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLang = Astro2.cookies.get("lang")?.value || defaultLang;
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 mt-8 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center flex items-center"> <a href="https://github.com/Rodri-A-DK" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center ml-2"> ${renderComponent($$result, "Github", $$Github, { "class": "size-4 md:size-6 mr-2" })}
Rodri-A-DK
</a>.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a id="contacto" href="mailto:rodrieldkii@gmail.com" class="hover:underline">${ui[currentLang]["footer.contacto"]}</a> </li> </ul> </div> </footer>`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const PROFILE_IMAGE = "/projects/fotoperfilarriba.png";
  const lang = Astro2.url.searchParams.get("lang");
  if (lang) {
    Astro2.cookies.set("lang", lang, {
      path: "/",
      httpOnly: true
    });
  }
  let currentLanguage = "es";
  if (typeof document !== "undefined") {
    const langCookie = document.cookie.split("; ").find((row) => row.startsWith("lang="));
    currentLanguage = langCookie ? langCookie.split("=")[1] : "es";
  }
  const translations = {
    es: {
      "inicio": "Inicio",
      "tecnologias": "Tecnolog\xEDas",
      "proyectos": "Proyectos",
      "sobremi": "Sobre m\xED",
      "holaSoy": "Hola, Soy Rodrigo",
      "openToWork": "Open To Work",
      "programadorFullStack": "Programador Full-Stack.",
      "descripcionPersonal": "Tengo 23 a\xF1os, soy de Tucum\xE1n, Argentina. Me especializo en desarrollo de software y soluciones tecnologicas, siempre buscando mejorar. Mi objetivo es aportar soluciones creativas y efectivas.",
      "linkedin": "LinkedIn",
      "github": "GitHub",
      "email": "rodrieldkii@gmail.com",
      "tecnologiasTitulo": "Tecnolog\xEDas",
      "lenguajes": "Lenguajes",
      "frameworksLibrerias": "Frameworks y Librer\xEDas",
      "basesDatos": "Bases de Datos",
      "herramientasAdicionales": "Herramientas Adicionales",
      "proyectosTitulo": "Proyectos",
      "sobremiTitulo": "Sobre m\xED",
      "desarrolladorTecnico": "Soy <strong>Programador tecnico con formaci\xF3n universitaria</strong> en la UTN FRT  (Universidad Tecnol\xF3gica Nacional, Facultad Regional Tucum\xE1n).",
      "crecerProfesionalmente": "Estoy buscando oportunidades para <strong>crecer como profesional</strong> y prepararme para el mundo laboral.",
      "habilidadesDev": "Todos los d\xEDas contin\xFAo desarrollando mis habilidades como dev <strong>Full-Stack</strong>, participando en proyectos y haciendo cursos que me permitan <strong>aprender y crecer</strong> como programador.",
      "verCertificado": "Ver Certificado",
      "contacto": "Contacto",
      "code": "Code",
      "preview": "Preview"
    },
    en: {
      "inicio": "Home",
      "tecnologias": "Technologies",
      "proyectos": "Projects",
      "sobremi": "About me",
      "holaSoy": "Hello, I'm Rodrigo",
      "openToWork": "Open To Work",
      "programadorFullStack": "Full-Stack Developer.",
      "descripcionPersonal": "I am 23 years old, from Tucum\xE1n, Argentina. I specialize in software development and technological solutions, always looking to improve. My goal is to provide creative and effective solutions.",
      "linkedin": "LinkedIn",
      "github": "GitHub",
      "email": "rodrieldkii@gmail.com",
      "tecnologiasTitulo": "Technologies",
      "lenguajes": "Languages",
      "frameworksLibrerias": "Frameworks and Libraries",
      "basesDatos": "Databases",
      "herramientasAdicionales": "Additional Tools",
      "proyectosTitulo": "Projects",
      "sobremiTitulo": "About me",
      "desarrolladorTecnico": "I am a <strong>Technical Programmer with university education</strong> at UTN FRT (National Technological University, Tucum\xE1n Regional Faculty).",
      "crecerProfesionalmente": "I am looking for opportunities to <strong>grow professionally</strong> and prepare for the working world.",
      "habilidadesDev": "Every day I continue developing my skills as a <strong>Full-Stack</strong> dev, participating in projects and taking courses that allow me to <strong>learn and grow</strong> as a programmer.",
      "verCertificado": "See Certificate",
      "contacto": "Contact",
      "code": "Code",
      "preview": "Preview"
    }
  };
  function t(key) {
    return translations[currentLanguage][key] || key;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio Rodrigo", "description": "Mi objetivo es aprender y mejorar constantemente, participando en proyectos innovadores que me permitan ampliar mis conocimientos y aportar soluciones creativas y efectivas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "Section", $$Section, { "t": t, "currentLanguage": currentLanguage }, { "default": ($$result3) => renderTemplate` <img class="rounded-full w-20 h-20 mb-4"${addAttribute(PROFILE_IMAGE, "src")} alt="yo" class="rounded-s-full size-64"> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-5 pb-6 lg:pb-10"> ${t("holaSoy")} <a href="https://www.linkedin.com/in/rodrigo-abreg%C3%BA-4b654925a/" target="_blank" rel="noopener"> <div class="flex justify-center items-center hover:scale-110 transition"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`${t("openToWork")}` })} </div><a></a></a></h1> <h2 class="text-xl lg:text-2xl opacity-80 text-pretty max-w-{700px}"> <span class="text-blue-300">${t("programadorFullStack")}</span> <br>${t("descripcionPersonal")} </h2> <nav class="flex gap-x-5 mt-6 flex-wrap"> ${renderComponent($$result3, "Social_icons", $$SocialIcons, { "href": "https://www.linkedin.com/in/rodrigo-abreg%C3%BA-4b654925a/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Linkedin", $$Linkedin, { "class": "size-4 md:size-6" })} ${t("linkedin")}` })} ${renderComponent($$result3, "Social_icons", $$SocialIcons, { "href": "https://github.com/Rodri-A-DK" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Github", $$Github, { "class": "size-4 md:size-6" })} ${t("github")}` })} ${renderComponent($$result3, "Social_icons", $$SocialIcons, { "href": "mailto:rodrieldkii@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Gmail", $$Gmail, { "class": "size-4 md:size-6" })} ${t("email")}` })}</nav> ` })} ${renderComponent($$result2, "Section_tecno", $$SectionTecno, { "id": "tecnologias", "t": t, "currentLanguage": currentLanguage }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Tecnologias", $$Tecnologias, {})} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "proyectos", "t": t, "currentLanguage": currentLanguage }, { "default": ($$result3) => renderTemplate` <div class="flex justify-center"> <h2 class="text-4xl font-semibold pb-10 flex gap-x-3 items-center text-center mb-4"> ${renderComponent($$result3, "Code", $$Code, { "class": "size-8 " })}${t("proyectosTitulo")} </h2> </div> ${renderComponent($$result3, "Proyectos", $$Proyectos, {})} ` })} ${renderComponent($$result2, "Section_sobremi", $$SectionSobremi, { "id": "sobre_mi", "t": t, "currentLanguage": currentLanguage }, { "default": ($$result3) => renderTemplate` <div class="flex justify-center"> <h2 class="text-4xl font-semibold pb-10 flex gap-x-3 items-center text-center mb-4"> ${renderComponent($$result3, "Me_icons", $$MeIcon, { "class": "size-8 " })}${t("sobremiTitulo")} </h2> </div> ${renderComponent($$result3, "Sobre_mi", $$SobreMi, {})} ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/pages/index.astro", void 0);

const $$file = "E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
