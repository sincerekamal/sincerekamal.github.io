/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kamalakannan Jayaraman",
  title: "Hi all, I'm Kamal",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having more than 8 years of experience in Javascript and Node.js. He has worked on various frameworks like React.js, ExpressJS, NestJS. He is an AWS certified Solutions Architect and Developer Associate. He has experience in both SQL and NoSQL databases. He loves programming and learning new things."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wJEdCC0sF9WChjcLYUGnx5UyMNMZS3z7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sincerekamal",
  linkedin: "https://www.linkedin.com/in/kamaljayaraman/",
  gmail: "sincerekamal@gmail.com",
  gitlab: "https://gitlab.com/sincerekamal",
  facebook: "https://www.facebook.com/yeahimkamal",
  medium: "https://medium.com/@sincerekamal",
  stackoverflow: "https://stackoverflow.com/users/3764306/kamalakannan-j",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Node.js Expert | Building better backends & webapps using JavaScript",
  skills: [
    emoji(
      "⚡ Develop scalable Backend solutions"
    ),
    emoji("⚡ Develop modern web apps using React.js & Node.js"),
    emoji(
      "⚡ Host and manage services on AWS cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Anna University",
      logo: require("./assets/images/anna-univ-logo.png"),
      subHeader: "Bachelor of Computer Science Engineering",
      duration: "September 2009 - April 2013",
      descBullets: [
        "Department Topper in the year 2010 and 2011"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Node.js",
      progressPercentage: "90%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "ReactJS", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML5",
      progressPercentage: "80%"
    },
    {
      Stack: "CSS3",
      progressPercentage: "75%"
    },
    {
      Stack: "AWS",
      progressPercentage: "80%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "70%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "70%"
    },
    {
      Stack: "PostgreSQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Jasmine",
      progressPercentage: "80%"
    },
    {
      Stack: "Mocha",
      progressPercentage: "80%"
    },
    {
      Stack: "PHP", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Technical Specialist",
      company: "Brillio",
      date: "November 2018 – Present",
      desc: "I’m responsible for,",
      descBullets: [
        "Leading the team in developing REST APIs using Node.js",
        "Designing the systems and it’s architecture along with Architect",
        "Driving the team towards delivery of features",
        "Helping the team in defining the requirements for the features",
        "Actively participating in Agile meetings",
        "Mentoring the team members to improve their skills.",
        "Preparing the release notes and deploying the images",
        "Representing the team and being the point of contact for the client"
      ]
    },
    {
      role: "Principal Engineer",
      company: "GyanMatrix Technologies Private Limited",
      date: "June 2015 – October 2018",
      desc: "I was responsible for,",
      descBullets: [
        "Leading the development in MERN stack",
        "Managing and Deploying Web apps and backend in AWS",
        "Leading the development team for Website, Web apps and Mobile app",
        "MongoDB administration",
        "Designing the system and its architecture"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "GlobalEnglish India Private Limited",
      companylogo: require("./assets/images/ge-2-logo.jpg"),
      date: "July 2013 – June 2015",
      desc: "I was responsible for,",
      descBullets: [
        "Implementing features for the product",
        "Unit testing the features developed by me and my peers.",
        "Giving suggestions to UX designers on product designs"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect Associate",
      subtitle:
        "",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ujD6iTvkAQCbI22HSW7sA6LLtCDU8k5k/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Certified Developer Associate",
      subtitle:
        "",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bhSj736hP7aroQWPQU_SA8izV8LIkKiY/view?usp=sharing"
        }
      ]
    },
    {
      title: "Customer's Core Value - Trust",
      subtitle:
        "Awarded by LineageLogistics for representing the their 'Core Value - Trust' for the year 2020",
      image: require("./assets/images/lineage-logo.png"),
      footerLink: [      ]
    },
    {
      title: "Brillian of the Quarter - 2020",
      subtitle:
        "Awarded by Brillio for my best performance during one of the quarter",
      image: require("./assets/images/brillio-logo.png"),
      footerLink: [      ]
    },
    {
      title: "Customer's Core Value - Trust",
      subtitle:
        "Awarded by LineageLogistics for representing the their 'Core Value - Trust' for the year 2019",
      image: require("./assets/images/lineage-logo.png"),
      footerLink: [      ]
    },
    {
      title: "Best Developer of the Year - 2014",
      subtitle:
        "Awarded by GlobalEnglish India Private Limited",
      image: require("./assets/images/ge-logo.png"),
      footerLink: [      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8754775453",
  email_address: "sincerekamal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "yeahimkamal", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
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
