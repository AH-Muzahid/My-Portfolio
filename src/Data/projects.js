import WorkImage from '@/../public/assets/Work1.webp';

export const projects = [
    {
        id: 1,
        title: "Project Title 1",
        category: "Full Stack Development",
        client: "Tech Solutions Inc.",
        year: "2025",
        description: "A comprehensive MERN stack application built for high-performance data management. This solution provided the client with a robust foundation for their future digital expansion, featuring real-time updates and secure authentication.",
        challenge: "The main challenge was to integrate legacy systems with modern web technologies while maintaining zero downtime during the migration process. Handling large-scale real-time data synchronization was also a key hurdle.",
        solution: "We implemented a microservices architecture using Node.js and Express. MongoDB's aggregation framework was utilized for complex queries. React Query handled server state efficiently on the frontend.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "JWT Auth"],
        features: [
            "Secure Authentication & Authorization (JWT)",
            "Real-time Dashboard Analytics",
            "Payment Gateway Integration (Stripe)",
            "Role-based Access Control (RBAC)",
            "Responsive & Adaptive UI"
        ],
        liveLink: "https://example.com",
        githubClient: "https://github.com/example/client",
        githubServer: "https://github.com/example/server",
        images: [WorkImage, WorkImage, WorkImage],
        color: "#1a1a1a"
    },
    {
        id: 2,
        title: "Project Title 2",
        category: "Design System",
        client: "Creative Studio",
        year: "2024",
        description: "Built a comprehensive design system to unify the brand's digital presence. While primarily a frontend focus, it integrates with a Node.js backend for asset management.",
        challenge: "Ensuring consistency across diverse platforms (Web, iOS, Android) while allowing for platform-specific patterns.",
        solution: "We adopted a token-based architecture using Style Dictionary. A custom React component library was built and published to a private NPM registry.",
        technologies: ["React.js", "Storybook", "Typescript", "Node.js", "Rollup"],
        features: [
            "Atomic Design Components",
            "Automated Visual Regression Testing",
            "Dark Mode Support",
            "Interactive Documentation"
        ],
        liveLink: "https://example.com",
        githubClient: "https://github.com/example/ds",
        githubServer: "",
        images: [WorkImage, WorkImage],
        color: "#222222"
    },
    {
        id: 3,
        title: "Project Title 3",
        category: "E-Commerce",
        client: "Fashion Brand",
        year: "2025",
        description: "A seamless e-commerce experience designed to maximize conversion rates. Includes a full admin panel for inventory management.",
        challenge: "Balancing high-quality imagery with fast page load times and mobile performance.",
        solution: "Utilized modern image formats, lazy loading, and edge caching. The backend uses a custom caching layer with Redis to speed up product queries.",
        technologies: ["Next.js", "MongoDB", "Redis", "Stripe", "Framer Motion"],
        features: [
            "Advanced Product Filtering",
            "Cart & Checkout Flow",
            "Admin Dashboard for Inventory",
            "User Reviews & Ratings"
        ],
        liveLink: "https://example.com",
        githubClient: "https://github.com/example/shop",
        githubServer: "https://github.com/example/shop-api",
        images: [WorkImage, WorkImage, WorkImage],
        color: "#2a2a2a"
    }
];
