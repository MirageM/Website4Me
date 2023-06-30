import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  // PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  TimelineSkill,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mirage Mohammad',
  description: "Mirage Mohammad's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  InformationM: 'informationm',
  Resume: 'education',
  Education: 'education',
  Experience: 'experience',
  Application: 'application',
  Skills: 'skills',
  Stats: 'stats',
  Projects: 'Projects',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Mirage Mohammad`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hi, I'm a <strong className="text-stone-100">Computering Engineering Graduate </strong>, currently working on personal projects using 
       <strong className="text-stone-100"> Python, Java, C, C++, TypeScript, JavaScript, React, SQL, GIT </strong>  Additionally, I am looking for a full time position in the field of software development.
      </p>
      
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `An aspirational, innovative, and creative computer engineer graduate who has a strong passion for object-oriented 
  programming. Looking for internships, contracts, or full time position.`,
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Interests', text: 'Soccer, Programming, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Ottawa', Icon: AcademicCapIcon},
    {label: 'Employment', text: '......', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 6,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C',
        level: 9,
      },
      {
        name: 'C++',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

// /**
//  * Portfolio section
//  */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://mirage.me',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2018 - December 2022',
    location: 'University of Ottawa',
    title: 'Bachelor of Applied Science in Computer Engineering (Engineering Management & Entrepreneurship)',
    content: <p> Semaphores, Mutex</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - April 2023',
    location: 'Ford Motor Company',
    title: 'Software Test Engineer and Quality Assurance Automation',
    content: (
      <p>
        <p>• Designed a Python Script that extracts data from TestRail and exports the information into Microsoft Excel showing the status of the test cases. (Requirements, Fix Version, Automated, Approved, Repaired, Designed, Blocked, Obsolete, and Total)</p>
        <p>• Fixed and cleaned Python code according to Flake8 errors in GitHub</p>
        <p>• Collaborated in a team environment by contributing to deliverables through agile scrum JIRA development sprints.</p>
        <p>• Made sure to update the developer branch while running the automation scripts </p>
        <p>• Communicated with software developers to design test software </p>
        <p>• Merged multiple pull requests to the master branch using Github </p>
        <p>• Converted open PR (pull request) to draft PR (pull request) </p>
        <p>• Applied git rebase, git merge, git pull origin master </p>
        <p>• Committed and designed functional integrations tests </p>
        <p>• Installed npm (nvm) and automated tests in remote desktop connect environment </p>
        <p>• Deeply understood JIRA applications dashboard, backlog, and issues </p> 
        <p>• Worked on Implementing TypeScript to replace setInterval, clearInterval, setTimeout functions with PeriodicCallback()/Date() object </p>
        <p>• Integrated Jenkins for automation built and testing (consist of Selenium, Maven) </p>
        <p>• Implemented declarative pipelines using Groovy </p>
        <p>• Configured and build jobs using Jenkins </p>
        <p>• Ran and executed Python automation scripts with the slash framework </p>
        <p>• Virtualized and setup vagrant and Virtualbox </p>
        <p>• Networked with command line interface of Windows command prompt and Linux terminal </p>
        <p>• Inspected TestRail for test cases to include all steps to test user stories </p>
        <p>• Joined daily scrum meetings to discuss user stories' and individuals' progress </p>
        <p>• Analyzed logging bugs and software defects with VSCode </p>
        <p>• Communicated with colleagues through Webex, GitHub PRs and Outlook </p>
        <p>• Wrote, read, and edited contents on the Wiki </p>
        <p>• Enabled Jenkin jobs periodically at a scheduled time </p>
        <p>• Created and designed test cases in TestRail </p>

        Technical Applications: Jira, Github, Jenkins, TestRail, Linux, Terminal, Command Prompt
        Languages: Python, TypeScript
      </p>
    ),
  },
  {
    date: 'September 2021 - August 2022',
    location: 'Public Services and Procurement Canada | Services publics et Approvisionnement Canada',
    title: 'Financial Data Analyst',
    content: (
      <p>
          Project Risk Analysis (Computer Science + Financial Systems)

          <p>• Assisted the project risk supervisor with financial analysis, forecasting, and risk assessment </p>
          <p>• Extracted and compiled information from various resources </p>
          <p>• Created pivot tables for querying large amount of data through the PivotTable Fields (Filters, Columns, Rows, Values) </p>
          <p>• Edited documents in the track changes mode using Microsoft Word </p>
          <p>• Distributed huge chunk of data using Microsoft Excel </p>
          <p>• Designed and modified flow charts using Microsoft Visio </p>
          <p>• Allocated files through GCdocs </p>
          <p>• Supported interface request using SIGMA BI (SAP Logon Pad) </p>
          <p>• Extracted files using PS1 (Production Finance, Procurement, and Real Property) and PM1 (Production Solution Manager) </p>
          <p>• Created an Agenda and Record of Decision Chart </p>
          <p>• Analyzed and edited JavaScript on Kofax Power PDF </p>
          <p>• Implemented JS linkage between checkboxes </p>

        Technical Applications: SIGMA BI, PS1, PM1, Excel, Visio, Kofax Power PDF, Word, PowerPoint
      </p>
    ),
  },
];

export const informationM: TimelineSkill[] = [
  {
    title: 'Languages',
    content: (
      <p>
        Python (proficient), Java (proficient), C/C++ (proficient), DPC++ (proficient),
        HTML/CSS (proficient), JavaScript (proficient)
        Matlab (proficient), VHDL/Verilog (prior experience)
        Java/Python/C/C++ Programming
        •Developed new features, fixed bugs
        •Problem solved and designed algorithms
        •Implemented stacks, queues, singly linked list, doubly linked list
        Learned and applied the process of abstraction, encapsulation, inheritance,
        polymorphism
        •
        Networking
        •Installed, configured, and managed Linux(Ubuntu) server
        •Analyzed traffic control packets with Wireshark
        Implemented an encryption/decryption client-server application using RSA
        algorithm
        •
        Generated a public and private key from three different machines using RSA
        algorithm
        •
        Data Structures and Algorithm
        •Analyzed algorithms such as Dijkstra, Prim, Kruskal algorithm
        •Reduced run time and learned time complexity
        Implemented binary search tree, full binary tree, AVL tree, 2-4 tree, hash table,
        priority queue
        •
        •Gained an understanding of different types of sorting
        •Traversed and implemented graphs, decision-making trees
        •Used GPU parallel reduction on oneAPI Data Parallel C++ platform
        Software Engineering
        •Collaboratively contributed to the agile development of applications through GIT
        Avoided deadlocks with the dining philosophers class using semaphores or
        limited waiting time or odd takes left and even takes right
        •
        •Developed client/server interaction
        Designed and built mobile apps for instance a calculator, bilingual hangman
        game using Android Studio
        •
        •Modeled with interaction, state diagrams, use case UML
        •Designed dynamic websites with Javascript and HTML/CSS
        Operating Systems
        •Implemented page-reference algorithm in C language (FIFO, LRU, OPTIMAL)
        •Implemented a Catalan number reader in Java
        •Coded a multithreaded Fibonacci sequence and prime number sequence
        •Used semaphores to make student thread wait for teaching assistant
        Developed in C language a reading child processor through pipes and fork
        (Linux)
        •
        •Created an embedded matrix using the sigmoid activation function with DPC++
        Computer Architecture/Electronics
        •Implemented and simulated circuits with Quartus and Multisim
        Acquired an understanding of operations with binary numbers and the number
        system
        •
        •Compiled and pin planned instructions of the digital circuits into the Altera board
        •Designed digital computer to execute a given set of instructions
        Measured voltages, currents, data with the use of a multimeter, digital power
        meter, and oscilloscope
        •
        •Wrote subroutine in assembly language to test programmable device
        •Calculated parallel time and serial time with DPC++
        Computer Microsoft Office
        •Designed charts, tables, graphs, and calculated equations in Microsoft Excel
        •Skilled in typing, formatting, page setup with Microsoft Word
        •Customized slides, templates, animations with Microsoft PowerPoint
        •Organized, wrote, drew, insert files with OneNote
        Computer Social Networking
        Thorough understanding of social media platforms and trends: Facebook,
        Linkedln, Google+, Snapchat, Instagram, Youtube, Twitter
        •
        Communication Writing Skills
        •Typed out and reviewed individual lab reports
        •Composed and edited essays
        •Worked long hours typing out work-term reports
        •Sent emails on a daily basis
        Verbal Communication
        •Listened and asked questions to understand and appreciate the points of others
        •Hosted Microsoft Team meetings using the scheduling assistant
        •Presented oral presentation on multiple subjects
        •Recorded and presented a mobile app to a teaching assistant
        •Conducted groups for debates, events 
      </p>
    ),
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Bilingual Hangman',
      text: 'An android studio project using Java and YML to design the user interface of an mobile app that switches between the image every frames of an incorrect answer. The app is a bilingual hangman game that allows the user to choose between English and French. https://github.com/MirageM/Hangman',
      image: 'https://t3.ftcdn.net/jpg/03/18/05/58/360_F_318055891_aSOmZ2heKd7EOADVEKNrSvlGBT3oidO8.jpg',
    },
    {
      name: 'Chess',
      text: 'A chess game called Piece using chess pieces with rows 1 to 8 and columns a to h to move the pieces. The game is played by two players and the objective is to checkmate the opponent\'s king. (King, Queen, Rook, Bishop, Knight, Pawn) https://github.com/MirageM/Chess',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/VS/MQ/BB/89274313/3-7-luxury-emperor-series-staunton-chess-pieces-set-250x250.jpg',
    },
    {
      name: 'Health Service Site',
      text: 'An upgraded version of a health service site using HTML/CSS and JavaScript to design the user interface of a website that allows users to book appointments, view services, and contact the company. https://miragem.github.io/Enchancement-of-Health-Service-Site/',
      image: 'https://miragem.github.io/Enchancement-of-Health-Service-Site/images/red.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me',
  description: 'Feel free to reach out to me at any time to discuss potential opportunities, or even if you just want to say hi!',
  items: [
    {
      type: ContactType.Email,
      text: 'imiragemohammad@gmail.com',
      href: 'mailto:imiragemohammad@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
    },
    {
      type: ContactType.Github,
      text: 'MirageM',
      href: 'https://github.com/MirageM',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MirageM'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22141801/mirage'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/miragemohammad/'},
];
