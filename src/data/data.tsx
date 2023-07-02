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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage19 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage20 from '../images/portfolio/portfolio-20.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
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
  Hero: 'mirage',
  About: 'about',
  Contact: 'contact',
  InformationM: 'information',
  Education: 'education',
  Experience: 'experience',
  Portfolio: 'applications',
  Skills: 'skills',
  Stats: 'stats',
  Projects: 'projects',
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
      href: '/mirages/resume.pdf',
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
        level: 7,
      }
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
      {
        name: 'SQL',
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
        level: 7,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
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
  {
    name: 'Hardware development',
    skills: [
      {
        name: 'VHDL',
        level: 5,
      },
      {
        name: 'Verilog',
        level: 4,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Jenkins',
    description: 'Jenkins: An open-source automation server that facilitates continuous integration and delivery processes in software development.',
    image: porfolioImage1,
  },
  {
    title: 'JIRA',
    description: 'JIRA: A project management tool and proprietary issue tracking product developed by Atlassion that allows bug tracking and agile project management.',
    image: porfolioImage2,
  },
  {
    title: 'Word, Excel, PowerPoint, Outlook, Access, Visio',
    description: 'Microsoft Word: A word processor to allow users to create, edit, and share documents. Microsoft Excel: A spreadsheet to allow users to create, edit, and share spreadsheets. Microsoft PowerPoint: A presentation program to allow users to create, edit, and share presentations. Microsoft Outlook: A personal information manager to allow users to manage email, calendar, contacts, and tasks. Microsoft Access: A database management system that allow users to store, edit, and share data. Microsoft Visio: A diagramming and vector graphics application to allow users to create diagrams, flowcharts, and other visual representations of information. ',
    image: porfolioImage3,
  },
  {
    title: 'Github / Git',
    description: 'GitHub: a code hosting platform for version control and collaboration. It provides a platform for developers to collaborate, management code repositories, and track changes in software projects',
    image: porfolioImage4,
  },
  {
    title: 'Visual Studio Code, Visual Studio',
    description: 'Visual Studio Code: An integrated development environment that supports multiple programming lanaguages and offers features such as code editing, debugging, and version control integration.',
    image: porfolioImage5,
  },
  {
    title: 'Gradle',
    description: 'Gradle: An open-source build automation tool that is designed to be flexible enough to build software. It allows developers to define, manage project dependencies, build configurations, and deployment tasks.',
    image: porfolioImage6,
  },
  {
    title: 'VirtualBox',
    description: 'VirtualBox: An open-source hosted hypervisor for x86 virtualization that allows users to create and run virtual machines on their computers, allowing them to simulate different operating systems and environments. ',
    image: porfolioImage7,
  },
  {
    title: 'Windows/Linux/MacOS',
    description: 'Ubuntu Linux: An open-source operating system based on the Linux kernel that provides a free and customizable platform for desktop and server computing.',
    image: porfolioImage8,
  },
  {
    title: 'Bitbucket',
    description: 'Bitbucket: A web-based version control repository hosting services, similiar to GitHub, that supports Git and Mercurial version control sstems. It provides a platform for developers to collaborate on code projects.',
    image: porfolioImage9,
  },
  {
    title: 'Trello',
    description: 'A web-based project management tool that uses boards, lists, and cards to help teams organize and track their tasks and projects.',
    image: porfolioImage10,
  },
  {
    title: 'Wireshark',
    description: 'A network protocol analyzer that allows users to capture and analyze network traffic in real-time, helping with network troubleshooting, and security analysis.',
    image: porfolioImage11,
  },
  {
    title: 'TestRail',
    description: 'A test management tool that helps teams plan, track, and manage their software testing efforts. It provides features for test case management, test run tracking and reporting, and defect logging.',
    image: porfolioImage12,
  },
  {
    title: 'Android Studio',
    description: 'Android Studio: An integrated development environment for Android development that allow developers to build Android apps using Java and Kotlin.',
    image: porfolioImage13,
  },
  {
    title: 'Jupyter Notebook',
    description: 'Jupyter Notebook: An open-source web application that allows users to create and share documents that contain live code, equations, visualizations, and narrative text. It is widely used in data science and machine learning applications.',
    image: porfolioImage14,
  },
  {
    title: 'Bash and Shell Scripting',
    description: 'Bash and Shell Scripting: A command language interpreter that executes commands read from a command line interface or from a file. It is used to automate repetitive tasks and can be used to create simple programs.',
    image: porfolioImage15,
  },
  {
    title: 'MySQL, SQLite, PostgreSQL, SQL Server',
    description: 'MySQL: An open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for querying, managing, and manipulating databases. PostgreSQL: An open-source object-relational database management system (ORDBMS) that uses Structured Query Language (SQL) for querying, managing, and manipulating databases. SQLite: An open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for querying, managing, and manipulating databases. SQL Server: A relational database management system (RDBMS) that uses Structured Query Language (SQL) for querying, managing, and manipulating databases.',
    image: porfolioImage16,
  },
  {
    title: 'Clion, PyCharm, IntelliJ',
    description: 'Clion: An integrated development environment for C and C++ development that allows developers to build C and C++ applications. PyCharm: An integrated development environment for Python development that allows developers to build Python applications. IntelliJ: An integrated development environment for Java development that allows developers to build Java applications.',
    image: porfolioImage17,
  },
  {
    title: 'Apache Kafka',
    description: 'Apache Kafka: An open-source distributed event streaming platform that allows developers to build real-time data pipelines and streaming applications.',
    image: porfolioImage18,
  },
  {
    title: 'Docker',
    description: 'Docker: An open-source platform that allow developers to build, deploy, and run applications using containers. It allows developers to package up an application with all of its dependencies into a standardized unit for software development.',
    image: porfolioImage19,
  },
  {
    title: 'Postman',
    description: 'Postman: A collaboration platform for API development that allows developers to design, build, and test APIs.',
    image: porfolioImage20,
  },
];


/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2018 - December 2022',
    location: 'University of Ottawa',
    title: 'Bachelor of Applied Science in Computer Engineering (Engineering Management & Entrepreneurship)',
    content: <p> </p>,
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

export const information: TimelineSkill[] = [
  {
    title: 'Languages',
    content: (
      <p>
        Python (proficient), Java (proficient), C/C++ (proficient), DPC++ (proficient),
        HTML/CSS (proficient), JavaScript (proficient), SQL (proficient), TypeScript (proficient),
        Golang (proficient), Prolog (proficient), Scheme (proficient), Bash (prior experience),
        Matlab (proficient), VHDL/Verilog (prior experience)
      </p>
    ),
  },
  {
    title: 'Java/Python/C/C++ Programming',
    content: (
      <p> 
        <p>•Developed new features, fixed bugs </p>
        <p>•Problem solved and designed algorithms </p>
        <p>•Implemented stacks, queues, singly linked list, doubly linked list </p>
        <p>•Learned and applied the process of abstraction, encapsulation, inheritance,polymorphism, and object-oriented programming </p>
      </p>    
    ),
  },
    {
    title: 'Networking',
    content: (
      <p>
      <p>•Installed, configured, and managed Linux(Ubuntu) server </p>
      <p>•Analyzed traffic control packets with Wireshark </p>
      <p>•Implemented an encryption/decryption client-server application using RSA algorithm </p>
      <p>•Generated a public and private key from three different machines using RSA algorithm </p>
      </p>
    ),
  },
  {
    title: 'Data Structures and Algorithm',
    content: (
      <p> 
        <p> •Analyzed algorithms such as Dijkstra, Prim, Kruskal algorithm </p>  
        <p> •Reduced run time and learned time complexity </p>  
        <p> •Implemented binary search tree, full binary tree, AVL tree, 2-4 tree, hash table, priority queue </p>  
        <p> •Implemented stacks, queues, singly linked list, doubly linked list </p>
        <p> •Gained an understanding of different types of sorting </p>  
        <p> •Traversed and implemented graphs, decision-making trees </p>  
        <p> •Used GPU parallel reduction on oneAPI Data Parallel C++ platform </p>  

      </p>    
    ),
  },
  {
    title: 'Software Engineering',
    content: (
      <p> 
        <p>•Collaboratively contributed to the agile development of applications through GIT </p>
        <p>•Avoided deadlocks with the dining philosophers class using semaphores or limited waiting time or odd takes left and even takes right </p>
        <p>•Applied mutex as a synchronization mechanism to make sure thread can access shared resources </p>
        <p>•Implemented a client/server application using TCP/IP sockets </p>
        <p>•Developed client/server interaction </p>
        <p>•Designed and built mobile apps for instance a calculator, bilingual hangman game using Android Studio </p>
        <p>•Modeled with interaction, state diagrams, use case UML </p>
        <p>•Designed dynamic websites with Javascript and HTML/CSS </p>

      </p>    
    ),
  },
  {
    title: 'Operating Systems',
    content: (
      <p> 
        <p>•Implemented page-reference algorithm in C language (FIFO, LRU, OPTIMAL) </p> 
        <p>•Implemented a Catalan number reader in Java </p> 
        <p>•Coded a multithreaded Fibonacci sequence and prime number sequence </p> 
        <p>•Used semaphores to make student thread wait for teaching assistant </p> 
        <p>•Developed in C language a reading child processor through pipes and fork (Linux) </p> 
        <p>•Created an embedded matrix using the sigmoid activation function with DPC++ </p> 

      </p>    
    ),
  },
  {
    title: 'Computer Architecture/Electronics',
    content: (
      <p> 
        <p>•Implemented and simulated circuits with Quartus and Multisim </p>  
        <p>•Acquired an understanding of operations with binary numbers and the number system </p>  
        <p>•Designed and simulated combinational and sequential circuits </p>
        <p>•Compiled and pin planned instructions of the digital circuits into the Altera board </p>  
        <p>•Designed digital computer to execute a given set of instructions </p>  
        <p>•Measured voltages, currents, data with the use of a multimeter, digital power supply, function generator, digital multimeter, and oscilloscope </p>  
        <p>•Wrote subroutine in assembly language to test programmable device </p>  
        <p>•Calculated parallel time and serial time with DPC++ </p>  

      </p>    
    ),
  },
  {
    title: 'Microsoft Office',
    content: (
      <p> 
        <p>•Designed charts, tables, graphs, and calculated equations in Microsoft Excel </p> 
        <p>•Skilled in typing, formatting, page setup with Microsoft Word </p> 
        <p>•Customized slides, templates, animations with Microsoft PowerPoint </p> 
        <p>•Organized, wrote, drew, insert files with OneNote </p> 

      </p>    
    ),
  },
  {
    title: 'Communication Writing Skills',
    content: (
      <p> 
        <p>•Communication Writing Skills </p>
        <p>•Typed out and reviewed individual lab reports </p>
        <p>•Composed and edited essays </p>
        <p>•Worked long hours typing out work-term reports </p>
        <p>•Sent emails on a daily basis </p>

      </p>    
    ),
  },
  {
    title: 'Verbal Communication',
    content: (
      <p>
        <p>•Listened and asked questions to understand and appreciate the points of others </p>
        <p>•Hosted Microsoft Team meetings using the scheduling assistant </p>
        <p>•Presented oral presentation on multiple subjects </p>
        <p>•Recorded and presented a mobile app to a teaching assistant </p>
        <p>•Conducted groups for debates, events  </p>

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
      url: 'https://github.com/MirageM/Hangman',
      text: 'An android studio project using Java and YML to design the user interface of an mobile app that switches between the image every frames of an incorrect answer. The app is a bilingual hangman game that allows the user to choose between English and French. https://github.com/MirageM/Hangman',
      image: 'https://t3.ftcdn.net/jpg/03/18/05/58/360_F_318055891_aSOmZ2heKd7EOADVEKNrSvlGBT3oidO8.jpg',
    },
    {
      name: 'Chess',
      url: 'https://github.com/MirageM/Chess',
      text: 'A chess game called Piece using chess pieces with rows 1 to 8 and columns a to h to move the pieces. The game is played by two players and the objective is to checkmate the opponent\'s king. (King, Queen, Rook, Bishop, Knight, Pawn) https://github.com/MirageM/Chess',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/VS/MQ/BB/89274313/3-7-luxury-emperor-series-staunton-chess-pieces-set-250x250.jpg',
    },
    {
      name: 'Health Service Site',
      url: 'https://miragem.github.io/Enchancement-of-Health-Service-Site/',
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
