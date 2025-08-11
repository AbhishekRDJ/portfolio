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
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
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
  stockpriceproject
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


const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
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
    id: 'project-5',
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
];



export { services, technologies, experiences, projects };
