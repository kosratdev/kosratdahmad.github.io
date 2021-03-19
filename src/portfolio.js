/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kosrat D. Ahmed",
  title: "Hi, I'm Kosrat",
  subTitle: emoji("A passionate Team Lead & Software Developer 🚀 having an experience of building Web and Mobile applications with Android / iOS / Vuejs and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1mirJi796aUroJgfI4O9XLLa3YgfsuVM0CZJODxnKtug/edit?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/kosratdahmad",
  linkedin: "https://linkedin.com/in/kosratahmad/",
  gmail: "kosrat.d.ahmad@gmail.com",
  // gitlab: "https://gitlab.com/kosratd",
  facebook: "https://facebook.com/kosrat.dlshad",
  twitter: "https://twitter.com/KosratDAhmad",
  instagram: "https://instagram.com/kosrat_d_ahmad"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY MOBILE AND FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Android / iOS / Front End / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase / AWS / Digital Ocean")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-kickstarter"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Team Lead",
      company: "NassWallet",
      companylogo: require("./assets/images/nasswalletLogo.jpeg"),
      date: "Sep 2020 – Current",
      desc: "",
      descBullets: [
        "Leading the development team ",
        "Create the base structure for VueJs Apps",
        "Create the base structure for Android/iOS Apps",
      ]
    },
    {
      role: "Mentor",
      company: "Udacity",
      companylogo: require("./assets/images/udacityLogo.png"),
      date: "Apr 2020 – Mar 2021",
      desc: "",
      descBullets: [
        "Mentor for Android Kotlin Refresh Nanodegree",
        "Mentor for Introduction to Cybersecurity Nanodegree",
      ]
    },
    {
      role: "CTO",
      company: "KeenTech",
      companylogo: require("./assets/images/keentechLogo.svg"),
      date: "May 2017 – Dec 2019",
      desc: "",
      descBullets: [
        "Project Manager",
        "Developing Android Apps",
        "Developing iOS Apps",
        "Developing Vuejs Apps",
      ]
    },
    {
      role: "Android Developer",
      company: "NGC",
      companylogo: require("./assets/images/ngcLogo.jpg"),
      date: "Desc 2016 – Apr 2017",
      desc: "",
      descBullets: [
        "Developing Android Apps"
      ]
    },
    {
      role: "Training Center Manager",
      company: "Zeyton",
      companylogo: require("./assets/images/zeytonLogo.png"),
      date: "Dec 2015 – Dec 2016",
      desc: "",
      descBullets: [
        "Managing GT Training Center",
        "Courses Preparation",
        "Course Instructor",
        "Developing Android Apps",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kosratdahmad", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/myprayers-android.svg"),
      link: "https://play.google.com/store/apps/details?id=com.kosratdahmad.myprayers"
    },
    {
      image: require("./assets/images/myprayers-ios.svg"),
      link: "https://apps.apple.com/us/app/my-prayers/id1390015257"
    },
    {
      image: require("./assets/images/bruska.svg"),
      link: "https://newpos.bruskaaccount.com"
    },
    {
      image: require("./assets/images/easy-finder-ios.svg"),
      link: "https://apps.apple.com/us/app/easy-finder-local-services/id1425396594"
    },
    {
      image: require("./assets/images/visit-erbil-ios.svg"),
      link: "https://apps.apple.com/th/app/visit-erbil-official-guide/id1292816935"
    },
    {
      image: require("./assets/images/rebari-12-android.svg"),
      link: "https://play.google.com/store/apps/details?id=co.keentech.exam"
    },
    {
      image: require("./assets/images/zmc-ios.svg"),
      link: "https://apps.apple.com/us/app/zmc-express-cargo/id995688587"
    },
    {
      image: require("./assets/images/zmc-android.svg"),
      link: "https://play.google.com/store/apps/details?id=com.jiasaz.zmccustomers"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Android Kotlin Refresh Nanodegree",
      subtitle: "Completed Certification from Udacity for Android Kotlin Developer Nanodegree",
      image: require("./assets/images/udacity.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://confirm.udacity.com/LAWHNMLT"
        },
      ]
    },
    {
      title: "iOS Developer Nanodegree",
      subtitle: "Completed Certification from Udacity for iOS Developer Nanodegree",
      image: require("./assets/images/udacity.png"),
      footerLink: [{
        name: "Certification",
        url: "https://confirm.udacity.com/DK25UQS3"
      }]
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Completed Certification from Udacity for Android Developer Nanodegree",
      image: require("./assets/images/udacity.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://confirm.udacity.com/G6NM7D45"
        }
      ]
    },
    {
      title: "BSc in Computer Engineering",
      subtitle: "Graduated from Information System Engineering Dept. in the Polytechnic University",
      image: require("./assets/images/universty.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B9kfm711y1kGZ3hpS2htX2labDQ/view?usp=sharing"
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  viewBlogSection: false,
};

// Talks Sections

const talkSection = {
  hideTalkSection: true,
};

// Podcast Section

const podcastSection = {
  hidePodcastSection: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+964 750 630 7788",
  email_address: "kosrat.d.ahmad@gmail.com"
};

//Twitter Section

const twitterDetails = {
  hideTwitterDetails: true,
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
