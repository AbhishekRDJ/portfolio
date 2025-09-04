import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  // git,
  // figma,
  docker,
  // postgresql,
  // rubyrails,
  // graphql,

  // space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';
import {
  nextjs,
  express,
  flutter,
  dart,
  // c,
  // cpp,
  java,
  python,
  mongodb,
  // mysql,
  // supabase,
  firebase,
  // postman,
  cloudinary, github,
  GradeVise,
  finxtapp,
  Spotify,
  blogapp,
  stockpriceproject,
  FinxtAPP,
  shayakai,
  ecommerce,
  readmeViewCounter,
  reactionSpeed,
  chatapp,
  movie_metro,
  cricketapp,
  chess,
  personalAi,
  // climateAI,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'ML-Engineer',
    icon: ux,
  },
  {
    title: 'App Developer',
    icon: prototyping,
  },
];

const technologies = [
  // { name: 'html', icon: html },
  // { name: 'css', icon: css },
  { name: 'javascript', icon: javascript },
  { name: 'typescript', icon: typescript },
  { name: 'nextjs', icon: nextjs },
  { name: 'tailwindcss', icon: tailwind },
  { name: 'nodejs', icon: nodejs },
  { name: 'expressjs', icon: express },
  { name: 'flutter', icon: flutter },
  { name: 'dart', icon: dart },
  // { name: 'cpp', icon: cpp },
  { name: 'java', icon: java },
  { name: 'python', icon: python },
  { name: 'mongodb', icon: mongodb },
  { name: 'reactjs', icon: reactjs },
  // { name: 'mysql', icon: mysql },
  // { name: 'supabase', icon: supabase },
  { name: 'firebase', icon: firebase },
  // { name: 'postman', icon: postman },
  { name: 'cloudinary', icon: cloudinary },
  // { name: 'git', icon: git },
  { name: 'github', icon: github },
  // { name: 'figma', icon: figma },
  { name: 'docker', icon: docker }
];


// const experiences = [
//   {
//     title: 'Front-End Developer',
//     company_name: 'Cover Hunt',
//     icon: coverhunt,
//     iconBg: '#333333',
//     date: 'Aug 2021 - Feb 2022',
//   },
//   {
//     title: 'Mentor (Volunteer)',
//     company_name: 'Microverse',
//     icon: microverse,
//     iconBg: '#333333',
//     date: 'Mar 2022 - May 2022',
//   },
//   {
//     title: 'Junior Software Engineer',
//     company_name: 'Kelhel',
//     icon: kelhel,
//     iconBg: '#333333',
//     date: 'May 2022 - Oct 2022',
//   },
//   {
//     title: 'Full Stack Developer',
//     company_name: 'Diversity Cyber Council',
//     icon: dcc,
//     iconBg: '#333333',
//     date: 'Sep 2022 - Present',
//   },
// ];
const experiences = [
  {
    title: 'State & National Level Hackathon Participant',
    company_name: 'FedexHackathon (IIT Madras - AIR 5) | SIH (AIR 6) | Finalist - GECA Hackathon',
    icon: coverhunt, // replace with actual icon import
    iconBg: '#333333',
    date: '2023 - 2024',
  },
  {
    title: 'College Major Project in Machine Learning',
    company_name: 'Category: Recommendation | Detection | Classification | Identification',
    icon: microverse, // replace with actual icon import
    iconBg: '#333333',
    date: '2024',
  },
  {
    title: 'Frontend Developer Intern',
    company_name: 'SPINACHO COMPANY',
    icon: kelhel, // replace with actual icon import
    iconBg: '#333333',
    date: '2024',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'SPINACHO COMPANY',
    icon: dcc, // replace with actual icon import
    iconBg: '#333333',
    date: '2024',
  },
  {
    title: 'Freelance Project Developer',
    company_name: 'U.S.-Based Client - Finxtapp Platform',
    icon: FinxtAPP, // replace with actual icon import
    iconBg: '#333333',
    date: '2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'GradeVise',
    description:
      'An AI-powered academic performance analysis platform that provides personalized guidance based on semester results, integrating Google Vertex AI and Firebase for secure data handling.',
    tags: [
      { name: 'flutter', color: 'blue-text-gradient' },
      { name: 'firebase', color: 'green-text-gradient' },
      { name: 'vertexai', color: 'pink-text-gradient' },
    ],
    image: GradeVise,
    repo: 'https://github.com/AbhishekRDJ/GradeVise',
    demo: 'https://github.com/AbhishekRDJ/GradeVise',
  },
  {
    id: 'project-2',
    name: 'FinxtApp CMS Website',
    description:
      'A full-stack CMS platform with admin and user panels, built using React, Tailwind, Three.js, Node.js, and MongoDB, streamlining digital content management for FinxtApp.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: finxtapp,
    repo: 'https://github.com/AbhishekRDJ/Finxtapp-Admin-side',
    demo: 'https://finxtapp.vercel.app',
  },
  {
    id: 'project-3',
    name: 'Mega Blog Platform',
    description:
      'A modern, feature-rich blogging platform built with React 19 and Vite, featuring Three.js animations, OAuth authentication, Appwrite backend, Redux Toolkit, and a rich text editor with TinyMCE. Includes search & filter, analytics dashboard, dark/light mode, and mobile-first responsive design.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'vite', color: 'green-text-gradient' },
      { name: 'appwrite', color: 'pink-text-gradient' },
    ],
    image: blogapp, // replace with actual image import
    repo: 'https://github.com/AbhishekRDJ/Mega-Blog-App-Project',
    demo: 'https://blogspher.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'AI Interviewer',
    description:
      'An AI-powered interviewer platform that simulates real interview sessions inside a virtual meeting room. Built with Next.js and TypeScript, it integrates Daily.co for video calls, JWT authentication for secure access, MongoDB for storing sessions, and Google Gemini LLM for generating interview questions and feedback.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
      { name: 'jwt', color: 'orange-text-gradient' },
      { name: 'daily.co', color: 'purple-text-gradient' },
      { name: 'gemini-llm', color: 'yellow-text-gradient' },
    ],
    image: personalAi, // import your project preview image
    repo: 'https://github.com/AbhishekRDJ/ai-interviewer',
    demo: 'https://reactionspeedgame.netlify.app/', // replace with actual deployed link once ready
  },

  {
    id: 'project-5',
    name: 'Reaction Speed Game',
    description:
      'A fun web-based game to test and improve reaction speed, built with JavaScript, HTML, and CSS. Features responsive design and random event triggers for challenging gameplay.',
    tags: [
      { name: 'javascript', color: 'blue-text-gradient' },
      { name: 'html', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: reactionSpeed, // import separately
    repo: 'https://github.com/AbhishekRDJ/Reaction-Speed-Game',
    demo: 'https://reactionspeedgame.netlify.app/',
  },
  {
    id: 'project-6',
    name: 'Stock Price Prediction',
    description:
      'A machine learning-based application predicting the next 30 days of stock prices for MNCs. Built with Python, TensorFlow, and Streamlit, featuring data preprocessing, model training, and interactive real-time prediction visualization.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'tensorflow', color: 'green-text-gradient' },
      { name: 'streamlit', color: 'pink-text-gradient' },
    ],
    image: stockpriceproject, // replace with actual image import
    repo: 'https://github.com/AbhishekRDJ/Stock-Price-Prediction-Using-Machine-Learning',
    demo: 'https://cbam23fayqugvkbwnwoysg.streamlit.app/',
  },

  {
    id: 'project-7',
    name: 'React Native Chat App',
    description:
      'A real-time chat application built with React Native and WebSockets, featuring instant messaging, user authentication, and responsive UI for cross-platform devices.',
    tags: [
      { name: 'reactnative', color: 'blue-text-gradient' },
      { name: 'websocket', color: 'green-text-gradient' },
      { name: 'nodejs', color: 'pink-text-gradient' },
    ],
    image: chatapp, // import separately
    repo: 'https://github.com/AbhishekRDJ/ReactNative-ChatApp',
    demo: '', // mobile app – no live demo
  },
  {
    id: 'project-8',
    name: 'Spotify Clone',
    description:
      'A responsive Spotify clone with integrated YouTube API to play unofficial tracks, featuring playlist management and backend playback handling.',
    tags: [
      { name: 'nodejs', color: 'blue-text-gradient' },
      { name: 'express', color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient' },
    ],
    image: Spotify,
    repo: 'https://github.com/AbhishekRDJ/Spotify-Clone',
    demo: 'https://spotify-clone-amk1.onrender.com/',
  },


  {
    id: 'project-9',
    name: 'README View Counter',
    description:
      'A dynamic view counter for GitHub READMEs, tracking profile/project views with a backend powered by Node.js, Express, and MongoDB. Includes a client app for interactive tracking.',
    tags: [
      { name: 'nodejs', color: 'blue-text-gradient' },
      { name: 'express', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: readmeViewCounter, // import separately
    repo: 'https://github.com/AbhishekRDJ/readme-view-counter-',
    demo: 'https://client-gold-psi.vercel.app/',
  },
  {
    id: 'project-10',
    name: 'TypeScript Mini Projects',
    description:
      'A collection of TypeScript-based projects including an e-commerce platform, movie recommendation system, and book recommendation platform, showcasing modular architecture and reusable components.',
    tags: [
      { name: 'typescript', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'react', color: 'pink-text-gradient' },
    ],
    image: ecommerce, // import separately
    repo: 'https://github.com/AbhishekRDJ/TypeScript-Projects/',
    demo: '', // multiple projects, no single demo
  },
  {
    id: 'project-11',
    name: 'SahayakAI',
    description:
      'A voice-powered AI assistant to help citizens navigate government welfare schemes, built with React, Node.js, and Gemini AI API. Provides conversational guidance and scheme recommendations.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'geminiai', color: 'pink-text-gradient' },
    ],
    image: shayakai, // import separately
    repo: 'https://github.com/AbhishekRDJ/SahayakAI-Your-Voice-Powered-Guide-to-Government-Welfare',
    demo: 'https://sahayakai-mu.vercel.app/',
  },
  {
    id: 'project-12',
    name: 'Personal AI Assistant',
    description:
      'A personal AI assistant web app combining voice and text inputs with advanced AI processing. Can answer queries, open apps, and handle custom commands, deployed with Node.js backend.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'geminiai', color: 'pink-text-gradient' },
    ],
    image: personalAi, // import separately
    repo: 'https://github.com/AbhishekRDJ/Personal-Ai-Assitant',
    demo: 'https://personal-ai-assitant.onrender.com/',
  },
  {
    id: 'project-13',
    name: 'Advance Climate AI Dashboard',
    description:
      'A TypeScript-powered dashboard leveraging AI to analyze and visualize climate change data. Features interactive charts, real-time insights, and predictive modeling.',
    tags: [
      { name: 'typescript', color: 'blue-text-gradient' },
      { name: 'nextjs', color: 'green-text-gradient' },
      { name: 'ai', color: 'pink-text-gradient' },
    ],
    image: movie_metro, // import separately
    repo: 'https://github.com/AbhishekRDJ/Advance-Climate-Ai-DashBoard',
    demo: '', // not deployed
  },
  {
    id: 'project-14',
    name: 'Chess Game',
    description:
      'An online chess platform built with Next.js, featuring multiplayer gameplay, board state management, and responsive UI. Implements real-time updates and modern chessboard design.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
      { name: 'websocket', color: 'pink-text-gradient' },
    ],
    image: chess, // import separately
    repo: 'https://github.com/AbhishekRDJ/Chess-Game-Next.js-',
    demo: 'https://chess-next-drab.vercel.app/',
  },
  {
    id: 'project-15',
    name: 'Cricket Scoring App',
    description:
      'A Flutter-based cricket scoring app with AI integration using Gemini LLM. Provides real-time match scoring, over-by-over summaries, and generates orange/purple cap holders dynamically.',
    tags: [
      { name: 'flutter', color: 'blue-text-gradient' },
      { name: 'firebase', color: 'green-text-gradient' },
      { name: 'geminiai', color: 'pink-text-gradient' },
    ],
    image: cricketapp, // import separately
    repo: 'https://github.com/AbhishekRDJ/cricket-app',
    demo: '', // mobile app – no live demo
  },

];



export { services, technologies, experiences, projects };
