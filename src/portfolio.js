/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kosrat Ahmed",
  title: "Hi, I'm Kosrat",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Android / iOS / Vuejs and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1mirJi796aUroJgfI4O9XLLa3YgfsuVM0CZJODxnKtug/edit?usp=sharing"
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Android / iOS / Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      role: "Mentor",
      company: "Udacity",
      companylogo: require("./assets/images/udacityLogo.png"),
      date: "Apr 2020 – Present",
      desc: "",
      descBullets: [
        "Mentor for Android Kotlin Refresh ND",
        "Mentor for Introduction to Cybersecurity ND",
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
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
          name: "Certification (In Progress)",
          url: "#"
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
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
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
