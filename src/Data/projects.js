// Project 1 Images (FinEase)
import P1Home from '@/../public/assets/1/home.png';
import P1Dash from '@/../public/assets/1/dash.png';
import P1Add from '@/../public/assets/1/add.png';
import P1Profile from '@/../public/assets/1/profile.png';

// Project 2 Images (LoanLink)
import P2Home from '@/../public/assets/2/home.png';
import P2Dash from '@/../public/assets/2/dash.png';
import P2Emi from '@/../public/assets/2/emi.png';
import P2Foot from '@/../public/assets/2/foot.png';

// Project 3 Images (GameHub)
import P3Home from '@/../public/assets/3/home.png';
import P3All from '@/../public/assets/3/all.png';
import P3Profile from '@/../public/assets/3/prrofile.png';

export const projects = [
    {
        id: 1,
        title: "FinEase - Money Tracker",
        category: "Full Stack Development",
        client: "Personal Project",
        year: "2025",
        description: "A comprehensive personal finance management platform designed to help users track expenses, set budgets, and achieve financial goals with clarity and confidence. It features an intuitive dashboard for monitoring financial health in real-time.",
        challenge: "The main challenge was to create a seamless user experience for tracking complex financial data while ensuring top-tier security for sensitive user information. Implementing real-time updates and family sync features also posed significant architectural hurdles.",
        solution: "Developed a robust full-stack solution using the MERN stack. We implemented secure JWT authentication and 256-bit encryption for data safety. The dashboard utilizes advanced charting libraries for data visualization, and the backend is optimized for handling real-time transaction updates.",
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vercel"],
        features: [
            "Expense Tracking & Budget Management",
            "Smart Analytics & Visualizations",
            "Goal Setting & Progress Tracking",
            "Family Sync & Shared Wallets",
            "Secure Authentication (256-bit encryption)",
            "Responsive Dashboard UI"
        ],
        liveLink: "https://money-tracker-eta-two.vercel.app/",
        githubClient: "https://github.com/AH-Muzahid/Finance-Management-App",
        githubServer: "",
        images: [P1Home, P1Dash, P1Add, P1Profile],
        color: "#243622ff"
    },
    {
        id: 2,
        title: "LoanLink - Loan Management System",
        category: "Full Stack Development",
        client: "Personal Project",
        year: "2025",
        description: "A seamless, full-stack micro-finance platform designed to simplify loan applications and management. Users can browse loan categories, calculate EMIs, and track their application status in real-time, while administrators have powerful tools to review and manage requests.",
        challenge: "The primary challenge was to build a secure and intuitive loan approval workflow that could handle user data sensitivity while providing instant feedback. Integrating complex financial calculations for the EMI feature and ensuring responsive design across all devices were also significant hurdles.",
        solution: "Implemented a scalable MERN stack architecture with Firebase for robust authentication. React Query was used for efficient server-state management, ensuring real-time updates for loan statuses. The EMI calculator was built with precise financial algorithms, and the UI was vetted for maximum accessibility and responsiveness.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "TanStack Query"],
        features: [
            "Streamlined Loan Application Process",
            "Dynamic EMI Calculator",
            "Real-time Application Status Tracking",
            "Secure Authentication (Firebase)",
            "Admin Dashboard for Loan Approvals",
            "Responsive Design with DaisyUI"
        ],
        liveLink: "https://loan-link-two.vercel.app/",
        githubClient: "https://github.com/AH-Muzahid/LoanLink",
        githubServer: "https://github.com/AH-Muzahid/LoanLink",
        images: [P2Home, P2Dash, P2Emi, P2Foot],
        color: "#25482eff"
    },
    {
        id: 3,
        title: "GameHub - React Gaming Website",
        category: "Frontend Development",
        client: "Personal Project",
        year: "2024",
        description: "A modern, responsive gaming platform where users can discover, explore, and learn about popular games. It features an immersive dark-themed UI with smooth animations and a comprehensive game catalog.",
        challenge: "Creating a highly interactive and visually appealing interface that remains performant on mobile devices. Implementing secure authentication and dynamic routing for a seamless user journey was also a focus.",
        solution: "Built with React and Vite for blazing fast performance. Tailwind CSS and DaisyUI were used to craft a responsive, gaming-centric design. Firebase handles secure authentication, while React Router manages dynamic navigation.",
        technologies: ["React.js", "Vite", "Tailwind CSS", "Firebase", "DaisyUI", "Framer Motion"],
        features: [
            "Interactive Game Catalog with Filters",
            "Secure Authentication (Email/Google)",
            "Dynamic Homepage with Auto-Sliding Banner",
            "Responsive Dark-Themed UI",
            "Game Details & Ratings System",
            "Newsletter Subscription"
        ],
        liveLink: "https://gamehub-by-muzahid.netlify.app/",
        githubClient: "https://github.com/AH-Muzahid/gamehub",
        githubServer: "",
        images: [P3Home, P3All, P3Profile],
        color: "#25482eff"
    }
];
