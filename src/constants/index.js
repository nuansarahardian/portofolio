// import project1 from "../assets/portofolio1.png";
// import project2 from "../assets/portofolio2.png";
// import project3 from "../assets/portofolio3.png";
// import project4 from "../assets/portofolio4.png";
// import project5 from "../assets/portofolio5.png";

export const HERO_CONTENT = `
Passionate Front-end Web Developer and UI/UX Designer, turning visions into reality with sleek, user-focused design and development.`;

export const sectionIds = [
  "home",
  "about",
  "experiences",
  "projects",
  "certificates",
  "contact",
];

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SKILL = [
  {
    image: "https://skillicons.dev/icons?i=javascript",
  },
  {
    image: "https://skillicons.dev/icons?i=react&theme=",
  },
  {
    image: "https://skillicons.dev/icons?i=tailwind",
  },
  {
    image: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    image: "https://skillicons.dev/icons?i=laravel",
  },
  {
    image: "https://skillicons.dev/icons?i=flutter",
  },
  {
    image: "https://skillicons.dev/icons?i=nextjs",
  },
];
export const TOOLS = [
  {
    image: "https://skillicons.dev/icons?i=figma",
  },
  {
    image: "https://skillicons.dev/icons?i=firebase",
  },
  {
    image: "https://skillicons.dev/icons?i=postman",
  },
  {
    image: "https://skillicons.dev/icons?i=git",
  },
  {
    image: "https://skillicons.dev/icons?i=github",
  },
  {
    image: "https://skillicons.dev/icons?i=illustrator",
  },
  {
    image: "https://skillicons.dev/icons?i=vscode",
  },
];

export const WORK_EXPERIENCES = [
  {
    year: "Feb 2024 - May 2024",
    role: "Operating Systems Laboratory Assistant",
    company: "Informatics Laboratory Assistant",
    description: [
      "Supervised 40 students (across two shifts) in hands-on Windows/Linux labs throughout the semester, enhancing their practical understanding of OS concepts",
      "Provided instruction and troubleshooting for OS concepts, including terminal, command prompt, process, memory, file systems, and networking",
      "Developed exam and lab assignment questions, and evaluated student submissions, ensuring a comprehensive assessment of their skills",
    ],
    technologies: ["Linux", "Windows"],
    logo: "images/laboratory.png",
  },

  {
    year: "Jul 2023 - Aug 2023",
    role: "Internship Web Developer",
    company: "Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga",
    description: [
      "Revamped the official government website's design and UI, implementing improvements and features to enhance user experience and functionality, improving user engagement by 20%",
      "Conducted testing on the Inlislite application based on Yii 2",
    ],
    technologies: ["WordPress", "Figma", "PHP", "Yii2"],
    logo: "images/dinarpus.png",
  },
];
export const ORGANIZATION = [
  {
    year: "Mar 2024 - Present",
    role: "Staf External Media Relations Division",
    company: "Generasi Baru Indonesia (GENBI) Purwokerto",
    description: [
      "Elevated Genbi's online presence through UX and branding website optimization",
      "Developed a data-driven content calendar featuring fresh articles and information about Genbi activities",
      "Increased website traffic and user engagement by implementing strategic content and design improvements.",
    ],
    logo: "images/genbi.png",
  },
  {
    year: "Mar 2024 - Present",
    role: "Science and Technology Division Supervisor",
    company: "Dewan Pengawas Organisasi (DPO) HMIF Unsoed",
    description: [
      "Oversaw the successful execution of 9 planned agendas and work programs, ensuring alignment with the department's goals and objectives.",
      "Provided insights and recommendations on organizing activities in technology and website development.",
      "Monitored the execution of activities, including efforts to enhance achievements in the Informatics department.",
    ],
    logo: "images/hmif.png",
  },
  {
    year: "Mar 2023 - Mar 2024",
    role: "Chairman",
    company: "Himpunan Mahasiswa Informatika (HMIF) Unsoed",
    description: [
      "Led and managed a team of 55 active members across 8 divisions",
      "Developed and implemented 16 work programs and 23 work agendas, resulting in a Very Good rating for the association throughout the term",
      "Initiated organizational policies and fostered positive relationships among members and external stakeholders through effective coordination and communication.",
    ],
    logo: "images/hmif.png",
  },
  {
    year: "Mar 2022 - Mar 2023",
    role: "Staf of Media, Communication, and Information Division",
    company: "Himpunan Mahasiswa Informatika (HMIF) Unsoed",
    description: [
      "Spearheaded the Informatics Talk Podcast as the lead organizer, ensuring seamless execution and valuable content delivery.",
      "Curated and distributed vital information for informatics students across Instagram, YouTube, and TikTok, effectively engaging the audience and boosting awareness through multiple platforms.",
    ],
    logo: "images/hmif.png",
  },
];

export const PROJECTS = [
  {
    title: "Mooneater: Pre-Wedding Documentation Services",
    image: "images/portofolio1.png",
    description:
      "Built a web-based application for pre-wedding photography bookings using PHP native",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    category: "Web Development",
    link: "https://github.com/nuansarahardian/mooneater",
  },
  {
    title: "Siperba",
    image: "images/portofolio3.png",
    description:
      "Developed a web-based tool for goods tracking and stock management using Laravel.",
    technologies: ["HTML", "CSS", "Bootstrap", "Laravel9"],
    category: "Web Development",
    link: "https://github.com/maulanazh15/siperba-ver2",
  },

  {
    title: "UnsoedFess",
    image: "images/portofolio2.png",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Flutter", "FireBase"],
    category: "Mobile Development",
    link: "https://github.com/maulana1k/unsoedfess",
  },
  {
    title: "Genggam App - Study Case",
    image: "images/portofolio5.png",
    description:
      "A platform for elderly people, , focusing on physical limitations and visual impairments",
    technologies: ["Figma"],
    category: "UI/UX Design",
    link: "https://docs.google.com/presentation/d/1Pc7soPokuYnlYinP0GJiM5Ix120vdGRwjyK6wsFCjw4/edit#slide=id.p",
  },
  {
    title: "Discover Indonesia",
    image: "images/portofolio4.png",
    description:
      "User-friendly app showcasing Indonesia's beauty and diversity. With an intuitive UI, users can effortlessly explore destinations, plan trips, and experience the rich culture and natural wonders of the archipelago.",
    technologies: ["Figma"],
    category: "UI/UX Design",
    link: "https://dribbble.com/shots/24271928-Indonesian-Tourism-App-UI-Design?utm_source=Clipboard_Shot&utm_campaign=nuansarahardian72&utm_content=Indonesian%20Tourism%20App%20UI%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nuansarahardian72&utm_content=Indonesian%20Tourism%20App%20UI%20Design&utm_medium=Social_Share",
  },
];

export const CERTIFICATE = [
  {
    title: "Chairman",
    company: "Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman",
    year: "2024",
    image: "images/kahim.png",
    category: "Organization",
  },
  {
    title: "Staf of Media Information and Communication Division",
    company: "Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman",
    year: "2022",
    image: "images/medkom.png",
    category: "Organization",
  },
  {
    title: "Web Developer",
    company: "Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga",
    year: "2023",
    image: "images/perpusda.png",
    category: "Work",
  },
  {
    title: "Belajar Dasar UX Design",
    company: "Dicoding Indonesia ",
    year: "2024",
    image: "images/uiux.png",
    category: "Course",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    company: "Dicoding Indonesia ",
    year: "2024",
    image: "images/pemweb.png",
    category: "Course",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    company: "Dicoding Indonesia ",
    year: "2024",
    image: "images/frontend.png",
    category: "Course",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    company: "Dicoding Indonesia ",
    year: "2024",
    image: "images/javascript.png",
    category: "Course",
  },
  // {
  //   title: "Operating Systems Laboratory Assistant",
  //   company: "Informatics Laboratory Assistant",
  //   year: "2024",

  // },
  {
    title: "Sertifikat Kelas Belajar ReactJS",
    company: "CODEPOLITAN",
    year: "2024",
    image: "images/reactjs.png",
    category: "Course",
  },
  {
    title: "Sertifikat Kelas ReactJS State Management",
    company: "CODEPOLITAN",
    year: "2024",
    image: "images/state.png",
    category: "Course",
  },
  {
    title: "Sertifikat Kelas ReactJS Split Bill App",
    company: "CODEPOLITAN",
    year: "2024",
    image: "images/split.png",
    category: "Course",
  },
  {
    title: "Sertifikat Kelas Belajar AJAX dan Web API",
    company: "CODEPOLITAN",
    year: "2024",
    image: "images/ajax.png",
    category: "Course",
  },
  {
    title: "Upgrading Pengurus HMIF Unsoed 2024",
    company: "HMIF Unsoed",
    year: "2024",
    image: "images/upgrading.jpg",
    category: "Committee",
  },
  {
    title: "Informatics Championship",
    company: "HMIF Unsoed",
    year: "2021",
    image: "images/ic.jpeg",
    category: "Committee",
  },
  {
    title: "Chairman",
    company: "Forum Komunikasi Remaja Purbalingga Wetan",
    year: "2022",
    image: "images/fkr.jpeg",
    category: "Organization",
  },
  {
    title: "Genius 2024",
    company: "GenBI Purwokerto",
    year: "2024",
    image: "images/genius.png",
    category: "Committee",
  },
  {
    title: "Operating System Laboratory Assistant",
    company: "Informatics Laboratory Assistant",
    year: "2024",
    image: "images/asprak.png",
    category: "Work",
  },
  {
    title: "Certified Developer",
    company: "Alibaba Cloud",
    year: "2024",
    image: "images/developer.png",
    category: "Course",
  },
];
export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
