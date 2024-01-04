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
      "Through Figma, I create vibrant designs that capture your vision. It's not just about visuals, it's about making sure we're on the same page for your dream website.",
  },
  {
    name: "Web Development",
    imgURL: web,
    subtext:
      "I turn designs into reality, coding each element with care. Your site will look and feel fantastic, with a user experience that's seamless and enjoyable.",
  },
  {
    name: "Test & Deploy",
    imgURL: adaptive,
    subtext:
      "Your site gets a thorough check, and once it's polished, I launch it on my server. You'll get a sneak peek before we take it live. Need it on your server? I've got that covered.",
  },
];

export const stack = [
  {
    imgURL: html,
    name: "Html",
    alt: "HTML icon",
    category: "Frontend Development",
  },
  {
    imgURL: css,
    name: "CSS",
    alt: "CSS icon",
    category: "Frontend Development",
  },
  {
    imgURL: tailwind,
    name: "Tailwind CSS",
    alt: "Tailwind CSS icon",
    category: "CSS Frameworks",
  },
  {
    imgURL: js,
    name: "JavaScript",
    alt: "JavaScript icon",
    category: "Frontend Development",
  },
  {
    imgURL: react,
    name: "React",
    alt: "React icon",
    category: "Frontend Development",
  },
  {
    imgURL: next,
    name: "Next.js 14",
    alt: "Next.js icon",
    category: "Frontend Development",
  },
  {
    imgURL: figma,
    name: "Figma",
    alt: "Figma icon",
    category: "Design Tools",
  },
  {
    imgURL: github,
    name: "GitHub",
    alt: "GitHub icon",
    category: "Version Control",
  },
  {
    imgURL: git,
    name: "Git",
    alt: "Git icon",
    category: "Version Control",
  },
];

export const categories = [
  "Frontend Development",
  "CSS Frameworks",
  "Design Tools",
  "Version Control",
];

export const portfolio = [
  {
    title: "SEERA-CORP",
    imgURL: seera,
    desc: "Minimalistic and modern website displaying necessary information about business. Additionally added Google translate.",
    buttons: [{ tech: "HTML" }, { tech: "Tailwind CSS" }],
    link: "https://seera-corp.eu",
  },
  {
    title: "AUTO-S",
    imgURL: autos,
    desc: "Advanced website for car driving school in Skórzewo. Custom made map with individual locations, gallery and working contact form.",
    buttons: [{ tech: "HTML" }, { tech: "JS" }, { tech: "Tailwind CSS" }],
    link: "https://auto-s.pl",
  },
];

export const projects = [
  {
    title: "Collar Dog - University Project",
    imgURL: collar,
    desc: "Website displaying smart collars for dogs. It has working cart with purchase options and additional features for logged users using admin as login and password",
    buttons: [{ tech: "HTML" }, { tech: "JS" }, { tech: "Tailwind CSS" }],
    link: "https://zalewa10.github.io/collar-dog-final/",
  },
];

export const testimonials = [
  {
    name: "Sławomir P.",
    role: "Właściciel OSK AUTO-S",
    subtext:
      "Fachowe i merytoryczne podejście przez cały proces realizacji tworzenia strony internetowej. Strona, którą opracował dla mojej firmy jest po prostu „szyta na miarę”, co przełożyło się na bardzo dobry odbiór i postrzeganie klientów.",
  },

  {
    name: "Katarzyna B.",
    role: "Właścicelka Drobiazgolandia.pl",
    subtext:
      "Sprawna, szybka pomoc przy problemach występujących przy stworzonym przeze mnie sklepie internetowym. Bardzo dobra komunikacja z klientem dzięki prostemu, zrozumiałemu językowi.",
  },
  {
    name: "Bartosz K.",
    role: "Właściciel SEERA-CORP",
    subtext:
      "Potrzebowałem czytelnej strony internetowej dla mojego biznesu. Kontakt oraz czas wykonania strony przez Pana Krzysztofa była rewelacyjna. Wszystko zostało wykonane jak należy, polecam.",
  },
];
