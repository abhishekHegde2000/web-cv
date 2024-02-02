import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abhishek Hegde",
  initials: "AH",
  location: "Bengaluru, Karnatak, India",
  locationLink:
    "https://www.google.com/maps/place/Hebbige,+Karnataka+577452/@13.9538682,74.8956599,16z/data=!3m1!4b1!4m6!3m5!1s0x3bbc790c494e75f1:0xc2c44abdd412e803!8m2!3d13.956197!4d74.9006032!16s%2Fg%2F11vj7grb7?entry=ttu",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "Motivated UI developer with over 1 year of experience crafting sleek, responsive web interfaces and driving engaging user experiences. Proficient in ReactJs, HTML, CSS, and JavaScript. I excel in collaborative environments and am eager to leverage my skills to contribute to the success of dynamic organizations, be it in full-stack product engineering or digital solutions provision.",
  // avatarUrl: photo,
  personalWebsiteUrl: "https://my-portfolio-nu-puce.vercel.app/",
  contact: {
    email: "upahegde28@gmail.com",
    tel: "+919448063523",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abhishekHegde2000",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishekhegde28",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/abhishekHegde28",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sahyadri College of Engineering and Management",
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Cognizant",
      link: "https://www.cognizant.com/in/en",
      badges: ["Sholinganallur, Chennai"],
      title: "Software Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description: [
        "Crafted high-quality, responsive interfaces that not only delighted users but also blazed fast, boasting a 30% reduction in load times. This seamless experience translated to improved user satisfaction and engagement across the board.",
        "Leveraged expertise in Agile Product Lifecycle Management (PLM) methodologies to streamline project management and product development. Translated intricate business requirements and functional specifications into cohesive program designs and code modules, ensuring seamless execution.",
        "Optimized, scrutinized, and meticulously maintained software applications through rigorous testing and debugging processes, ensuring flawless functionality and orchestrating successful deployments.",
        "Coordinated with cross-functional teams and clients to deliver impactful software solutions. Methodically documented technical specifications and user manuals, contributing to the clarity and user-friendliness of the developed applications.",
      ],
    },
    {
      company: "Cognizant",
      link: "https://www.cognizant.com/in/en",
      badges: ["Remote"],
      title: "Software Developer Intern",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description: [
        "Spearheaded the design and development of dynamic web applications using Javascript, HTML, CSS, and Node.js.",
        "Proactively addressed and resolved frontend bugs, ensuring the seamless functionality and integrity of the applications.",
        "Demonstrated a commitment to continuous improvement by staying abreast of the latest frontend technologies, tools, and methodologies.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Redux",
    "HTML/CSS/TailwindCSS",
    "Git",
  ],
  projects: [
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
  ],
} as const;
