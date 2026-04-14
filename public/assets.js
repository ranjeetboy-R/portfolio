import { RiCodeSSlashFill } from "@remixicon/react";
import { Bot, ExternalLink, FolderOpenDot, Frame, Globe, GraduationCap } from "lucide-react";

export const tools = [
  {
    title: "Figma",
    icon: "/tools/figma.png",
  },
  {
    title: "n8n",
    icon: "/tools/n8n.png",
  },
  {
    title: "Next.js",
    icon: "/tools/nextjs.png",
  },
  {
    title: "Node.js",
    icon: "/tools/nodejs.png",
  },
  {
    title: "Tailwind CSS",
    icon: "/tools/tailwind.png",
  },
  {
    title: "MongoDB",
    icon: "/tools/mongodb.png",
  },
  {
    title: "React.js",
    icon: "/tools/reactjs.png",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: Globe,
    title: ['Website Development', 'Website Developer | Frontend & MERN Stack Developer'],
    description: ['I create responsive and modern websites for businesses, portfolios, and personal brands.', `I am a passionate web developer who creates modern, responsive, and user-friendly websites.
    I have experience in building real-world projects using HTML, CSS, JavaScript, and React.
    I focus on clean design, fast performance, and good user experience.
    I am always learning new technologies and improving my skills every day.
    My goal is to help businesses grow online with professional websites.`],
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'React.js',
      'Node.js',
      'Next.js',
      'Express.js',
      'MongoDB',
      'Git & GitHub',
      'Deployment & Maintenance'
    ],
    experience: `I have around 2 years of experience in web development. Built multiple frontend and full-stack projects
    Practicing daily to improve coding skills
    Learning advanced tools like APIs and automation
    Created real-world projects using MERN stack`,
    projects: [
      {
        title: 'AI Chat Website',
        desc: `Built using React.js and API
        User can ask questions and get AI responses
        Clean and modern UI`
      },
      {
        title: 'Resume Builder Website',
        desc: `User can create and download resume
        Simple and easy-to-use interface
        Built with React and Tailwind CSS`
      },
      {
        title: 'Portfolio Website',
        desc: `Personal portfolio to showcase skills
        Responsive design Fast loading and clean layout`
      }
    ]
  },
  {
    id: 2,
    icon: Bot,
    title: ['AI Automation', 'AI Automation Developer | n8n Workflow Specialist'],

    description: [
      'I build smart automation systems using AI to save time and improve business workflows.',

      `I am an AI automation developer focused on creating smart workflows using tools like n8n.
    I build systems that reduce manual work and automate daily business tasks.
    I have experience in integrating APIs, chatbots, and automation tools.
    I focus on efficiency, scalability, and real-world problem solving.
    My goal is to help businesses automate their processes and grow faster with AI.`
    ],

    skills: [
      'n8n',
      'API Integration',
      'Webhook Automation',
      'AI Chatbot',
      'WhatsApp Automation',
      'Email Automation',
      'Node.js',
      'JavaScript',
      'OpenAI API',
      'Workflow Design'
    ],

    experience: `I have around 1 year of experience in AI automation.
  Built multiple real-world automation workflows using n8n
  Created chatbot and API-based systems
  Integrated WhatsApp and email automation
  Continuously learning advanced AI tools and automation systems`,

    projects: [
      {
        title: 'WhatsApp Appointment Booking',
        desc: `Automated appointment booking system using WhatsApp
      Users can book slots without manual interaction
      Integrated with API and workflow automation`
      },
      {
        title: 'Email Auto Reply System',
        desc: `Automatically replies to incoming emails
      Smart response generation using AI
      Saves time and improves communication speed`
      },
      {
        title: 'AI Chatbot',
        desc: `Built intelligent chatbot using AI APIs
      Can answer user queries in real-time
      Used for customer support and automation`
      }
    ]
  },
  {
    id: 3,
    icon: Frame,
    title: ['UI/UX Design', 'UI/UX Designer | Modern Web & App Design'],

    description: [
      'I design clean, modern, and user-friendly interfaces that improve user experience and engagement.',

      `I am a UI/UX designer who focuses on creating visually appealing and easy-to-use designs.
    I understand user behavior and design interfaces that are simple, intuitive, and effective.
    I have experience in designing websites, dashboards, and mobile interfaces.
    I focus on user experience, accessibility, and modern design trends.
    My goal is to create designs that not only look good but also solve real user problems.`
    ],

    skills: [
      'Figma',
      'UI Design',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Responsive Design',
      'User Flow',
      'Design Systems',
      'Color Theory',
      'Typography'
    ],

    experience: `I have around 1 year of experience in UI/UX design.
    Designed multiple website and app interfaces
    Created wireframes and prototypes for real projects
    Focused on improving user experience and usability
    Continuously learning modern design trends and tools`,

    projects: [
      {
        title: 'Portfolio Website Design',
        desc: `Designed modern and clean portfolio UI
        Focused on readability and smooth user experience
        Fully responsive layout for all devices`
      },
      {
        title: 'Dashboard UI Design',
        desc: `Created user-friendly dashboard interface
      Organized data with clean layout and visuals
      Focused on usability and accessibility`
      },
      {
        title: 'Landing Page Design',
        desc: `High-converting landing page design
      Focused on user engagement and call-to-action
      Modern UI with clean and minimal layout`
      }
    ]
  },
  {
  id: 4,
  icon: ExternalLink,
  title: ['Project Deployment', 'Deployment Specialist | Web Hosting & CI/CD'],
  
  description: [
    'I deploy web applications efficiently with proper configuration, performance optimization, and live hosting.',
    
    `I handle deployment of websites and web applications on modern platforms.
    I ensure that projects run smoothly in production with proper setup and configuration.
    I have experience in deploying frontend and full-stack applications.
    I focus on performance, uptime, and easy scalability.
    My goal is to make applications live, fast, and accessible to users worldwide.`
  ],

  skills: [
    'Vercel',
    'Netlify',
    'GitHub',
    'GitHub Actions',
    'CI/CD Basics',
    'Domain Setup',
    'DNS Configuration',
    'Environment Variables',
    'Node.js Hosting',
    'MongoDB Atlas'
  ],

  experience: `I have around 2 year of experience in project deployment.
  Deployed multiple frontend and full-stack projects
  Connected domains and managed hosting platforms
  Worked with environment variables and production setup
  Learning CI/CD and automation for faster deployments`,

  projects: [
    {
      title: 'Portfolio Website Deployment',
      desc: `Deployed portfolio using Vercel
      Connected custom domain
      Optimized performance and loading speed`
    },
    {
      title: 'Full Stack App Deployment',
      desc: `Deployed MERN stack application
      Backend hosted with proper environment setup
      Database connected using MongoDB Atlas`
    },
    {
      title: 'Landing Page Deployment',
      desc: `Deployed responsive landing page on Netlify
      Configured domain and HTTPS
      Ensured fast and reliable performance`
    }
  ]
}
]

export const aiAutomation = []
export const uiUxDesign = []
export const Deployment = []

export const workData = [
  {
    title: 'AI Chat Application',
    description: 'Full Stack AI Chat Application',
    img: '/chatAi.jpg',
    link: 'https://chat-ai-pearl-kappa.vercel.app'
  },
  {
    title: 'Resume Builder',
    description: 'Full Stack Resume Builder Web Application',
    img: '/resume_img.webp',
    link: 'https://resume-creator-client-one.vercel.app'
  },
  {
    title: 'Real-Time Conversation',
    description: 'Full-Stack Real-Time Chat Web Application',
    img: '/chat-img.avif',
    link: 'https://chat-app-client-eight-theta.vercel.app'
  },
  {
    title: 'Professional Task',
    description: 'Modern Task & Planner Website',
    img: '/planner_img.avif',
    link: 'https://planner-iota-ashen.vercel.app'
  },
]

export const aboutData = [
  {
    title: 'Languages',
    description: 'HTML, CSS, JavaScript, React Js, Next Js, Node Js, Mongodb and N8n.',
    icon: RiCodeSSlashFill
  },
  {
    title: 'Education',
    description: 'B.SC. in Physics',
    icon: GraduationCap
  },
  {
    title: 'Projects',
    description: 'Built more than 10 projects',
    icon: FolderOpenDot
  }
]