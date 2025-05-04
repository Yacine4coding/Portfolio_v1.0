const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Dev Struggles\n(a.k.a. Experience)" },
  { value: 13, suffix: "+", label: "Projects That Somehow Worked" },
  { value: 1, suffix: "+", label: "Team Projects\nWithout Losing My Mind" },
  { value: "9999", suffix: "+", label: "Times I Asked\n'Why Is This Not Working?'" },
];



const logoIconsList = [
  {
    name: "figma",
    imgPath: "/images/logos/Stack/new_figma.png",
  },
  {
    name: "html",
    imgPath: "/images/logos/Stack/html.png",
  },
  {
    name: "css",
    imgPath: "/images/logos/Stack/css.png",
  },
  {
    name: "JS",
    imgPath: "/images/logos/Stack/js.png",
  },
  {
    name: "TS",
    imgPath: "/images/logos/Stack/typescript.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/Stack/physics.png",
  },
  {
    name: "nextjs",
    imgPath: "/images/logos/Stack/nextjs.png",
  },
  {
    name: "git",
    imgPath: "/images/logos/Stack/git.png",
  },
  {
    name: "github",
    imgPath: "/images/logos/Stack/github.png",
  },
  {
    name: "office",
    imgPath: "/images/logos/Stack/office.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Pixel-Perfect Precision",
    desc: "Crafting clean, responsive interfaces with a sharp eye for detail and design quality.",
  },
  {
    imgPath: "/images/handshake.png",
    title: "Collaborative Mindset",
    desc: "Working closely with clients and teams to turn ideas into intuitive digital experiences.",
  },  
  {
    imgPath: "/images/time.png",
    title: "Timely Delivery, Always",
    desc: "Respecting your time by shipping projects on schedule without cutting corners.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Figma Designer",
    modelPath: "/models/figma.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "TailwindCSS Styler",
    modelPath: "/models/tailwindcss.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// const expCards = [
//   {
//     review:
//       "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
//     imgPath: "/images/exp1.png",
//     logoPath: "/images/logo1.png",
//     title: "Frontend Developer",
//     date: "January 2023 - Present",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
//   {
//     review:
//       "Adrian's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//     imgPath: "/images/exp2.png",
//     logoPath: "/images/logo2.png",
//     title: "Full Stack Developer",
//     date: "June 2020 - December 2023",
//     responsibilities: [
//       "Led the development of Docker's web applications, focusing on scalability.",
//       "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//       "Contributed to open-source projects that were used with the Docker ecosystem.",
//     ],
//   },
//   {
//     review:
//       "Adrian's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
//     imgPath: "/images/exp3.png",
//     logoPath: "/images/logo3.png",
//     title: "React Native Developer",
//     date: "March 2019 - May 2020",
//     responsibilities: [
//       "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//       "Improved app performance and user experience through code optimization and testing.",
//       "Coordinated with the product team to implement features based on feedback.",
//     ],
//   },
// ];

const expCards = [
  {
    review:
      "Studying at Ahmed Zabana University has given me a solid foundation in both theory and application. It’s been a journey of learning, growth, and countless 'aha' moments.",
    imgPath: "/images/ahmed.png",
    logoPath: "/images/ahmedLogo.png",
    title: "Computer Science Student",
    date: "September 2022 – Present",
    responsibilities: [
      "Learning core subjects like AI, Mobile Development, Cybersecurity, and Data Management.",
      "Working on team projects and academic assignments that simulate real-world challenges.",
      "Sharpening problem-solving and algorithmic thinking through consistent practice.",
    ],
  },
  {
    review:
      "The Udacity Full Stack Development sharpened my frontend and backend skills with practical, hands-on projects and industry practices.",
    imgPath: "/images/Udacity.png",
    logoPath: "/images/udacityLogo.png",
    title: "Full Stack Web Development Track",
    date: "January 2022 – April 2022",
    responsibilities: [
      "Built responsive web apps using HTML, CSS, and JavaScript.",
      "Integrated backend technologies and worked with APIs and databases.",
      "Completed real-world projects showcasing frontend-to-backend development flow.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// const testimonials = [
//   {
//     name: "Esther Howard",
//     mentions: "@estherhoward",
//     review:
//       "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//     imgPath: "/images/client1.png",
//   },
//   {
//     name: "Wade Warren",
//     mentions: "@wadewarren",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//     imgPath: "/images/client3.png",
//   },
//   {
//     name: "Guy Hawkins",
//     mentions: "@guyhawkins",
//     review:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     imgPath: "/images/client2.png",
//   },
//   {
//     name: "Marvin McKinney",
//     mentions: "@marvinmckinney",
//     review:
//       "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
//     imgPath: "/images/client5.png",
//   },
//   {
//     name: "Floyd Miles",
//     mentions: "@floydmiles",
//     review:
//       "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
//     imgPath: "/images/client4.png",
//   },
//   {
//     name: "Albert Flores",
//     mentions: "@albertflores",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//     imgPath: "/images/client6.png",
//   },
// ];

const testimonials = [
  {
    name: "Me",
    mentions: "@me_irl",
    review:
      "This guy? Absolute legend. Solved bugs I didn’t even know existed. 10/10 would debug with again.",
    imgPath: "/images/client1.jpg",
  },
  {
    name: "Myself",
    mentions: "@solo_dev_life",
    review:
      "I watched him drink 3 cups of coffee and talk to a rubber duck until the app worked. Inspiring.",
    imgPath: "/images/client2.jpg",
  },
  {
    name: "I",
    mentions: "@just_me",
    review:
      "He once fixed a bug at 3AM using only sheer willpower and Stack Overflow. Truly a professional.",
    imgPath: "/images/client3.jpg",
  },
];


const socialImgs = [
  {
    url: "https://github.com/Yacine4coding",
    name: "GitHub",
    imgPath: "/images/github.png",
  },
  {
    url: "https://twitter.com/BensidYacin",
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    url: "https://www.linkedin.com/in/yacine-bensidahmed-883a582a8/",
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    url: "https://www.facebook.com/yacine.bensidahmed/",
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    url: "https://www.instagram.com/yacine.bensidahmed/",
    name: "insta",
    imgPath: "/images/insta.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
