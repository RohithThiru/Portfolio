import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohith",
  initials: "T",
  url: "https://dillion.io",
  location: "Coimbatore, India",
  locationLink: "",
  description:
    "Software Developer, Open Source Enthusiast, Enjoys to build new applications",
  summary:
    "I am a dedicated Software Developer with hands-on experience gained through working on real-time projects during my internship, where I honed my skills in both frontend and backend technologies. Additionally, I have a strong foundation in problem-solving, having successfully solved over 400+ Data Structures and Algorithms (DSA) problems on various competitive coding platforms. My passion for coding and eagerness to build and optimize a wide range of applications drives me to continuously enhance my expertise and contribute effectively to innovative projects.",
  avatarUrl: "https://ik.imagekit.io/clcu1oent/Photo%20from%20Rohith.jpg?updatedAt=1744716401846",
  skills: [
    "React",
    "Node.js",
    "Typescript",
    "Javascript",
    "Python",
    "MySQL",
    "PostgreSQL",
    "ORM",
    "Data Structures and Algorithms",
    "System Design",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohithsharama6374@gmail.com",
    tel: "+91 7603941571",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rohithThiru",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohith-t-b30002251/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rohithshar83959",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KG Xperience",
      href: "https://kgx.nivu.me/",
      badges: [],
      location: "Remote",
      title: "MERN Stack Developer",
      logoUrl: "https://kgx.nivu.me/assets/images/logo/kgx_white-logo.svg",
      start: "May 2023",
      end: "Jan 2025",
      description:
        "In this project, we addressed the challenge users face in searching for jobs across multiple platforms by developing an application that scrapes job details from various websites. The application provides users with a consolidated list of job opportunities, and if they wish to apply, they are seamlessly redirected to the respective job posting page. Additionally, during this internship, I also had the opportunity to mentor and teach frontend development to over 60 students, helping them gain practical skills in building modern web applications.",
    },
    {
      company: "Markdot Intellect",
      badges: [],
      href: "https://markdotintellect.com/",
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "https://markdotintellect.com/img/markdotw%20sign.png",
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        " I played the role of a Backend Developer where I built and designed a real-time room booking application. I developed the backend architecture and implemented REST APIs to handle network communication, enabling seamless interactions between users and the platform. Users could easily book their preferred rooms, while property owners were able to log and manage their room details on the website. This project allowed me to enhance my backend development skills and ensure the application performed efficiently under real-time conditions.",
    },
    {
      company: "GameUP",
      badges: [],
      href: "",
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "",
      start: "Apr 2025",
      end: "Current",
      description:
        "I worked as a backend developer at GameUp, where we built a web application tailored for schools to enhance student engagement through gamified learning experiences. The backend was developed using TypeScript, PostgreSQL, and Drizzle ORM. I was responsible for designing the database schema, building RESTful APIs, and implementing secure authentication and role-based access for students, teachers, and admins. The system was designed to be scalable, modular, and easy for schools to customize based on their specific requirements.",
    },
  ],
  education: [
    {
      school: "Breeks Secondary School",
      href: "",
      degree: "10th Grade",
      logoUrl: "https://www.schooldekho.org/storage/logo//3nlhrha0bb40gkkcckk88wcgwksc8wk.jpg",
      start: "2009",
      end: "2020",
    },
    {
      school: "Immaculate Schoo of matriculation",
      href: "https://immaculatematriccbe.edu.in/",
      degree: "12th Grade",
      logoUrl: "https://content3.jdmagicbox.com/comp/coimbatore/n5/0422px422.x422.090923163345.b5n5/catalogue/immaculate-heart-of-marys-matriculation-higher-secondary-school-coimbatore-press-colony-coimbatore-senior-secondary-schools-r4v1uie61b.jpg",
      start: "2020",
      end: "2022",
    },
    {
      school: "KG College of Arts and Science",
      href: "https://www.kgcas.com/",
      degree: "Bachelor's Degree of Information Technology (B.Sc IT)",
      logoUrl: "	https://www.kgcas.com/wp-content/uploads/2022/05/KGCAS-Transparent-Logo-e1652387103791.png?x20102",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Chatbot",
      href: "",
      dates: "Jan 2025- Feb 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Python",
        "Flask",
        "React",
        "Open AI API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RohithThiru/chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/clcu1oent/chatbot.png?updatedAt=1744714829177",
      video:
        "",
    },
    {
      title: "Fur Ever Bond",
      href: "https://magicui.design",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Designed and developed a web application for pet adoption, allowing users to find and adopt pets in their area. The application features a user-friendly interface, advanced search options, and a secure payment system for donations. It also includes a blog section for sharing pet care tips and success stories.",
      technologies: [
        "Node.js",
        "React.js",
        "MySQL",
        "Javascript",
        "CSS",
        "Express",
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/RohithThiru/fur-ever-bond",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/clcu1oent/Fur%20ever%20bond.mp4?updatedAt=1744715581103",
    },
    {
      title: "Medium Scrapper",
      href: "https://llm.report",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "This project is to learn how does scrapping works. I have scrapped the medium website and created a web application which allows users to search for any topic and get the latest articles from medium.",
      technologies: [
        "Node.js",
        "React.js",
        "Express",
        "Puppeteer",
        "CSS",
      ],
      links: [
      
        {
          type: "Source",
          href: "https://github.com/RohithThiru/MediumScraper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/clcu1oent/Mediun%20Scrapper.mp4?updatedAt=1744716026161",
    },
  ],
  hackathons: [
    {
      title: "Avasar Hackathon",
      dates: "November 23rd - 25th, 2022",
      location: "Coimbatore, India",
      description:
        "Implemented idea to purify water using human source and giving rewards to peaple who contribute to the project.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "September 14th - 16th, 2023",
      location: "Coimbatore, India",
      description:
        "Developed a idea to reduce animal violation while constuction work in wildlife area using IoT.",
      image:
        "data:image/jpeg;base64,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",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    ],
} as const;
