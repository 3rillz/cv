import homeImage from "./assets/sam.png";
// ========================== Header Data
const headerIds = ["home", "profile", "education", "skills", "experience", "certificates"];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  //   {
  //     linkText: "References",
  //     linkID: "references",
  //     boxIcon: "bx-link-external",
  //   },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Samuel Ayomide",
  homeTitle2: "Pitan",
  homeProfession: "Web Developer | Junior Mobile Developer",
  homeInformation: [
    {
      text: "1b Makarius Street, Ajah, Lagos",
      icon: "bx-map",
    },
    {
      text: "pitan.samuel4@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +234 812 4633050",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "Social",
  links: [
    {
      link: "https://www.linkedin.com/in/samuel-pitan/",
      text: "Samuel Ayomide Pitan",
      icon: "bxl-linkedin-square",
    },
    {
      link: "https://twitter.com/iam3rillz",
      text: "iam3rillz",
      icon: "bxl-twitter",
    },
    {
      link: "https://web.facebook.com/pitan.samuel/",
      text: "Sam Ayomide Pitan",
      icon: "bxl-facebook",
    },
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `I am a self-motivated, diligent, and hard-working developer with an engineering mind and creativity is my passion. I possess strong communication skills and the ability to multi-task, which has allowed me to develop polished technical skills in a wide variety of areas. `,
    `I have experience working as both a freelance contractor and for a startup as a front-end developer.`,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "React Native",
      studies: "Zero to Mastery Academy, Udemy",
      year: "2022 - Present",
      line: true,
    },
    {
      title: "JavaScript",
      studies: "Fatech Academy, Lagos, Nigeria",
      year: "2022",
      line: true,
    },
    {
      title: "Post Graduate Diploma in Digital Marketing",
      studies: "Chartered Institute of Social Media and Digital Marketing",
      year: "2021",
      line: true,
    },
    {
      title: "B.sc Computer Engineering",
      studies: "Olabisi Onabanjo University, Ogun State, Nigeria",
      year: "2014 - 2019",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  //   Here you can add further skills array
  skills: [
    [`Html`, `Css`, `JavaScript`],
    [`React Native`, `React`, `WordPress`],
  ],
};
const logoText = "Samuel.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates",
  certificates: [
    {
      title: "Associate Member - Chartered Institute of Social Media and Digital Marketing",
      describe: "We Presented the idea of a Forest fire prevention system using WSN.",
    },
  ],
};

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Fatech Academy | Front-End Developer and Instructor",
      company: "2021 - PRESENT | https://fatech.ng",
      describe:
        "Working as a Front-End developer and instructor at Fatech Academy. Primary responsibilities are to develop the Front-End of Websites and also teach students who are willing to drift into the web design and development career.",
      line: true,
    },
    {
      title: "Free Hosting Resell | Front-End Developer",
      company: "2021 - PRESENT | https://freehostingresell.com",
      describe:
        "Free Hosting Resell offers free reselling platform for resellers to provide hosting services. My duty is to develop different responsive Front-End designs for Resellers' Websites",
      line: true,
    },
    {
      title: "FHBRS | Front-End Developer",
      company: "2021 - 2022 | https://fhbrs.com",
      describe:
        "I worked as a Front-End Developer at FHBRS, FHBRS is a platform where online digital businesses like Web Hosting, SMS, SMM and SEO Businesses, etc. offer a simple and easy reselling model for users.",
      line: false,
    },
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["English", "Yoruba"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  certificatesData,
  experienceData,
  languageData,
  interestsData,
  headerIds,
};
