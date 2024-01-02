import {
  css,
  html,
  react,
  js,
  figma,
  git,
  github,
  next,
  tailwind,
  web,
  adaptive,
  layout,
  autos,
  seera,
  collar,
} from "@/public/img/index";

export const product = [
  {
    name: "Figma Web Design",
    imgURL: layout,
    subtext:
      "Through Figma, I create vibrant designs that capture your vision. It's not just about visuals; it's about making sure we're on the same page for your dream website.",
  },
  {
    name: "Web Development",
    imgURL: web,
    subtext:
      "I turn designs into reality, coding each element with care. Your site won't just look good; it'll feel fantastic too, with a user experience that's seamless and enjoyable.",
  },
  {
    name: "Test & Deploy",
    imgURL: adaptive,
    subtext:
      "Your site gets a thorough check, and once it's polished, I launch it on my server. You'll get a sneak peek before we take it live. Need it on your server? I've got that covered",
  },
];

export const stack = [
  {
    imgURL: html,
    name: "Html",
    alt: "alt",
  },
  {
    imgURL: css,
    name: "CSS",
    alt: "alt",
  },
  {
    imgURL: tailwind,
    name: "Tailwind CSS",
    alt: "alt",
  },
  {
    imgURL: js,
    name: "Java Script",
    alt: "alt",
  },
  {
    imgURL: react,
    name: "React",
    alt: "alt",
  },
  {
    imgURL: next,
    name: "Next.js 14",
    alt: "alt",
  },
  {
    imgURL: figma,
    name: "Figma",
    alt: "alt",
  },
  {
    imgURL: github,
    name: "GitHub",
    alt: "alt",
  },
  {
    imgURL: git,
    name: "Git",
    alt: "alt",
  },
];

export const portfolio = [
  {
    title: "SEERA-CORP",
    imgURL: seera,
    desc: "Minimalistic and modern website displaying necessary information about business",
    buttons: [{ tech: "HTML" }, { tech: "Tailwind CSS" }],
    link: "https://seera-corp.eu",
  },
  {
    title: "AUTO-S",
    imgURL: autos,
    desc: "Advanced website with map, gallery, forms and more",
    buttons: [{ tech: "HTML" }, { tech: "JS" }, { tech: "Tailwind CSS" }],
    link: "https://auto-s.pl",
  },
];

export const projects = [
  {
    title: "Collar Dog - University Project",
    imgURL: collar,
    desc: "Minimalistic and modern website displaying necessary information about business",
    buttons: [{ tech: "HTML" }, { tech: "JS" }, { tech: "Tailwind CSS" }],
    link: "https://zalewa10.github.io/collar-dog-final/",
  },
];


export const testimonials =[
  {
    name: "Sławomir P.",
    role:"Właściciel OSK AUTO-S",
    subtext:
      "Fachowe i merytoryczne podejście przez cały proces realizacji tworzenia strony internetowej. Pan Krzysztof to informatyk kreatywny mający mnóstwo fajnych pomysłów. Strona, którą opracował dla mojej firmy jest po prostu „szyta na miarę”, co przełożyło się na bardzo dobry odbiór i postrzeganie klientów. W 100% polecam."
  },
  {
    name: "Bartosz K.",
    role:"Właściciel SEERA-CORP",
    subtext:
      "Dobry kontakt i szybkie wykonanie. Wszystko jak należy, polecam.",
  },
  {
    name: "Katarzyna B.",
    role:"Właścicelka Drobiazgolandia.pl",
    subtext:
      "Krzysztof zawsze na czas potrafił pomóc przy problemach występujących w moim sklepie internetowym. Polecam!",
  },
]