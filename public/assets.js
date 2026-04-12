import { RiCodeSSlashFill } from "@remixicon/react";
import { FolderOpenDot, GraduationCap } from "lucide-react";

export const tools = [
  "/tools/figma.png",
  "/tools/n8n.png",
  "/tools/nextjs.png",
  "/tools/nodejs.png",
  "/tools/tailwind.png",
  "/tools/mongodb.png",
  "/tools/reactjs.png",
];

export const servicesData = [
  {
    id: 1,
    title: 'Website Development',
    description: 'I create responsive and modern websites for businesses, portfolios, and personal brands.'
  },
  {
    id: 2,
    title: 'AI Automation',
    description: 'I Building AI-based tools like chatbots and automated workflows using tools like n8n.'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'reative UI/UX designer crafting intuitive interfaces, seamless experiences.'
  },
  {
    id: 4,
    title: 'Project Deployment',
    description: 'Skilled in deploying web projects with simple tools, ensuring smooth performance and reliable user experience.'
  },
]

export const WebDevelopment = [
  {
    title: 'Chat AI – Full Stack AI Chat Application',
    description: `Chai AI is a modern AI-powered chat application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Gemini API.
        The application allows users to interact with AI in real time while maintaining a smooth, secure, and user-friendly experience.

        🚀 Key Features
        1. User Authentication (Login & Signup)
        2. AI-powered Chat System
        3. Chat History Storage & Management
        4. Delete & Manage Conversations
        5. Dark / Light Mode Support`,
    link: 'https://chat-ai-pearl-kappa.vercel.app',
    tools: [`Frontend: React.js, Tailwind CSS`, `Backend: Node.js, Express.js`, `Database: MongoDB`, `Gemini api & Libraries`]
  },
  {
    title: 'Resume Builder Web Application (Full-Stack MERN)',
    description: `I developed a fully functional Resume Builder Web Application using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

        This platform allows users to build, customize, preview, and download resumes using modern, responsive templates.

        🔹 Key Features
        1. User authentication (secure login & signup)
        2. Create, edit, and manage multiple resumes
        3. Live resume preview while editing`,
    link: 'https://resume-creator-client-one.vercel.app',
    tools: [`Frontend: React.js, Tailwind CSS`, `Backend: Node.js, Express.js`, `Database: MongoDB`]
  },
  {
    title: "Real-Time Chat Application (MERN Stack)",
    description: `Full-Stack Real-Time Chat Web Application with Socket.IO.
        I developed a real-time chat web application using the MERN Stack (MongoDB, Express.js, React.js, Node.js)

        🔑 Key Features:
        1. Real-time one-to-one messaging like WhatsApp using Socket.IO
        2. User authentication with JWT Token
        5. Clean and modern UI with React`,
    link: 'https://chat-app-client-eight-theta.vercel.app',
    tools: [`Frontend: React.js, Tailwind CSS`, `Backend: Node.js, Express.js`, `Database: MongoDB & Socket IO`]
  },
]

export const aiAutomation = [ ]
export const uiUxDesign = [ ]
export const Deployment = [ ]

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