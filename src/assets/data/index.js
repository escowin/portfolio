const portfolioData = {
  applications: {
    Frontend: [
      {
        id: "stroke-rate",
        repo: "https://github.com/escowin/stroke-rate",
        liveUrl: "https://stroke-rate.escowin.dev",
        languages: "typescript javascript",
        libraries: "react vite zustand recharts",
        database: "indexeddb",
        highlight: true,
        collaboration: false,
        description: "Advanced Progressive Web App for real-time heart rate monitoring of rowing crews with Bluetooth integration, featuring live data visualization, crew synchronization, and performance analytics. Built with TypeScript and React for optimal performance and type safety.",
        complexity: "high",
        // year: "2025"
      },
      {
        id: "wireframe-blueprint",
        repo: "https://github.com/escowin/wireframe-blueprint",
        liveUrl: "https://wireframe-blueprint.com",
        languages: "typescript javascript",
        libraries: "react three.js webgl",
        database: "indexeddb",
        highlight: true,
        collaboration: false,
        description: "Cutting-edge interactive 3D wireframe and blueprint visualization tool powered by Three.js and WebGL. Features real-time 3D rendering, interactive model manipulation, and advanced visualization capabilities for architectural and engineering applications.",
        complexity: "high",
        // year: "2025"
      },
      {
        id: "bluestrawberry",
        repo: "https://github.com/escowin/bluestrawberry",
        liveUrl: "https://escowin.github.io/bluestrawberry",
        languages: "js css",
        libraries: "react",
        highlight: false,
        collaboration: false,
        description: "Interactive React application featuring dynamic color manipulation and visual effects, demonstrating modern frontend development techniques with responsive design and smooth animations.",
        complexity: "medium",
        year: "2023"
      },
      {
        id: "caesar-cipher",
        repo: "https://github.com/escowin/caesar-cipher",
        liveUrl: "https://escowin.github.io/caesar-cipher/",
        languages: "js css html",
        libraries: "clipboard webpack jest",
        highlight: false,
        collaboration: false,
        description: "Cryptographic tool implementing the Caesar cipher algorithm with modern web technologies. Features real-time encryption/decryption, clipboard integration, and comprehensive testing with Jest framework.",
        complexity: "low",
        year: "2023"
      },
      {
        id: "escowinart",
        repo: "https://github.com/escowin/escowinart",
        liveUrl: "https://escowinart.com/",
        languages: "js css",
        libraries: "react",
        highlight: false,
        collaboration: false,
        description: "Personal art portfolio website showcasing creative works and digital illustrations. Built with React for dynamic content presentation and responsive design optimized for visual art display.",
        complexity: "medium",
        year: "2023"
      },
      {
        id: "ratio-calculator",
        repo: "https://github.com/escowin/ratio-calculator",
        liveUrl: "https://escowin.github.io/ratio-calculator",
        languages: "js css html",
        libraries: "node webpack jest",
        database: "indexeddb",
        highlight: false,
        description: "Mathematical utility application for calculating and converting ratios with precision. Features local data persistence using IndexedDB, modern build tools with Webpack, and comprehensive testing with Jest framework.",
        complexity: "low",
        year: "2023"
      },
      {
        id: "sun-tracker",
        repo: "https://github.com/escowin/sun-tracker",
        liveUrl: "https://escowin.github.io/sun-tracker",
        languages: "js css html",
        libraries: "node webpack jest dayjs jquery",
        database: "api indexeddb",
        highlight: false,
        collaboration: false,
        description: "Astronomical application for tracking sun position and solar events based on geographic location. Integrates external APIs for real-time data, features local storage with IndexedDB, and includes comprehensive date/time calculations using Day.js.",
        complexity: "medium",
        year: "2023"
      },
    ],
    Backend: [
      {
        id: "pi-server",
        repo: "https://github.com/escowin/pi-server",
        liveUrl: "https://pi-server.escowin.dev",
        languages: "python javascript",
        libraries: "fastapi react docker",
        database: "sqlite postgresql",
        highlight: true,
        collaboration: false,
        description: "Comprehensive Raspberry Pi server management system with advanced IoT integration, featuring real-time monitoring, automated deployment, and containerized microservices architecture. Built with FastAPI and React for high-performance backend services.",
        complexity: "high",
        // year: "2025"
      },
      {
        id: "artist-oeuvre",
        repo: "https://github.com/escowin/artist-oeuvre",
        liveUrl: null,
        languages: "js",
        libraries: "node express sequelize jest dotenv bcrypt session",
        database: "postgresql",
        highlight: false,
        collaboration: false,
        description: "Full-stack web application for managing and cataloging artistic works and collections. Features user authentication with bcrypt, session management, PostgreSQL database with Sequelize ORM, and comprehensive testing with Jest framework.",
        complexity: "medium",
        year: "2023"
      },
      {
        id: "meal-prep",
        repo: "https://github.com/escowin/meal-prep",
        liveUrl: null,
        languages: "js css",
        libraries: "node inquirer jest",
        highlight: false,
        collaboration: false,
        description: "Command-line application for meal planning and preparation management. Built with Node.js and Inquirer for interactive user prompts, featuring comprehensive testing with Jest framework for reliable meal planning workflows.",
        complexity: "low",
        year: "2023"
      },
      {
        id: "readme-generator",
        repo: "https://github.com/escowin/readme-generator",
        liveUrl: null,
        languages: "js",
        libraries: "node inquirer jest",
        highlight: false,
        collaboration: false,
        description: "Automated README file generator for GitHub repositories. Built with Node.js and Inquirer for interactive prompts, creating professional documentation with proper formatting, badges, and comprehensive project information.",
        complexity: "low",
        year: "2023"
      },
      {
        id: "unit-converter",
        repo: "https://github.com/escowin/unit-converter",
        liveUrl: null,
        languages: "python",
        highlight: false,
        collaboration: false,
        description: "Python utility application for converting between different units of measurement. Features comprehensive unit conversion capabilities across various measurement systems with clean, efficient Python implementation.",
        complexity: "low",
        year: "2023"
      },
    ],
    Fullstack: [
      {
        id: "crewssignment",
        repo: "https://github.com/escowin/crewssignment",
        liveUrl: "https://crewssignment.com",
        languages: "typescript javascript",
        libraries: "react axios zustand googleapis express",
        database: "google-sheets",
        highlight: true,
        collaboration: false,
        description: "Intelligent lineup generation platform for rowing coaches featuring advanced algorithm-based crew assignment, Google Sheets API integration, and real-time collaboration tools. Built with TypeScript and modern state management for optimal performance and user experience.",
        complexity: "high",
        // year: "2025"
      },
      {
        id: "rowcalibur",
        repo: "https://github.com/escowin/rowcalibur",
        liveUrl: "https://rowcalibur.com",
        languages: "typescript javascript",
        libraries: "react vite sass googleapis express",
        database: "google-sheets indexeddb",
        highlight: true,
        collaboration: false,
        description: "Comprehensive Progressive Web App for rowing club competition tracking and management, featuring Google Sheets API integration, real-time data synchronization, and advanced analytics. Built with TypeScript and modern web technologies for optimal performance and offline capability.",
        complexity: "high",
        // year: "2025"
      },
      {
        id: "job-tracker",
        repo: "https://github.com/escowin/job-tracker",
        liveUrl: "https://escowin-job-tracker.onrender.com/",
        languages: "graphql js css",
        libraries: "mongoose express react node jwt bcrypt",
        database: "mongodb",
        highlight: false,
        collaboration: false,
        description: "Full-stack job application tracking system with GraphQL API and React frontend. Features user authentication with JWT and bcrypt, MongoDB database with Mongoose ODM, and comprehensive job application management with status tracking and analytics.",
        complexity: "medium",
        year: "2023"
      },
      {
        id: "fitness-logbook",
        repo: "https://github.com/escowin/fitness-logbook",
        liveUrl: "https://fitness-logbook.onrender.com/",
        languages: "js css sql handlebars",
        libraries: "node express sequelize",
        database: "mysql",
        highlight: false,
        collaboration: false,
        description: "Comprehensive fitness tracking application with workout logging and progress monitoring. Built with Node.js, Express, and Handlebars templating, featuring MySQL database with Sequelize ORM for reliable data management and user progress tracking.",
        complexity: "medium",
        year: "2023"
      },
    ],
  },
  info: {
    name: "Edwin M. Escobar",
    occupation: "Software Engineer - IoT, AI, & Full-Stack Development",
    links: [
      { icon: "faLocationDot", string: "Austin, TX" },
      { icon: "faInbox", string: "edwin@escowinart.com" },
      { icon: "faGrip", string: "https://escowin.github.io/portfolio" },
      { icon: "faGithub", string: "https://github.com/escowin" },
      { icon: "faLinkedin", string: "https://linkedin.com/in/escowin" },
    ],
      bio: [
      "I develop technology to make life and work more efficient. With professional experience in full-stack IoT applications and smart manufacturing systems, I focus on creating solutions that streamline processes and enhance productivity. At Crean Innovations, I built comprehensive smart factory systems using AI to dynamically queue and update production lines, seamlessly integrating with factory operators to enhance productivity.",
      "My professional expertise spans Angular 17, Node.js, FastAPI, MQTT, WebSocket, AWS, MSSQL, MariaDB, with proven ability to work across multiple technology stacks while maintaining high code quality and system reliability. I've developed real-time communication protocols, implemented comprehensive technical documentation, and created scalable web applications for industrial clients.",
      "Beyond my professional work, I've developed advanced personal projects including real-time heart rate monitoring systems for rowing crews, interactive 3D visualization tools, and comprehensive project management platforms. These projects showcase my ability to work with complex data flows, Bluetooth integration, and modern web APIs.",
      "My approach combines clean, maintainable code with innovative solutions to real-world problems. I'm particularly drawn to projects that push the boundaries of what's possible in web development, from IoT integrations to advanced data visualization and AI-powered systems.",
      "Based in Austin, TX, I'm actively seeking opportunities to contribute to innovative teams and continue growing as a developer while making meaningful impact through technology."
    ],
  },

  resume: {
    header: {
      name: "Edwin M. Escobar",
      title: "Software Engineer",
      contact: [
        { icon: "Mail", text: "edwin@escowinart.com" },
        { icon: "Phone", text: "949.735.9509" },
        { icon: "MapPin", text: "Austin, TX" },
        { icon: "Linkedin", text: "linkedin.com/in/escowin", url: "https://www.linkedin.com/in/escowin/" },
        { icon: "Github", text: "github.com/escowin", url: "https://github.com/escowin" }
      ]
    },
    summary: "Results-driven Software Engineer with experience developing full-stack IoT applications and smart manufacturing systems. Demonstrated expertise in building scalable web applications, implementing real-time communication protocols, and creating comprehensive technical documentation. Proven ability to work across multiple technology stacks while maintaining high code quality and system reliability.",
    technicalSkills: [
      {
        category: "Programming Languages",
        skills: "JavaScript/TypeScript, Python, SQL, HTML/CSS/SCSS"
      },
      {
        category: "Frontend Technologies",
        skills: "Angular 17, Nebular UI, PrimeNG, Chart.js, ECharts"
      },
      {
        category: "Backend Technologies",
        skills: "Node.js, Express.js, FastAPI, OpenAPI/Swagger"
      },
      {
        category: "Databases",
        skills: "MariaDB, Microsoft SQL Server, Sequelize ORM"
      },
      {
        category: "IoT & Communication",
        skills: "MQTT, WebSocket, RFID, ESP32-C3 firmware"
      },
      {
        category: "Cloud & DevOps",
        skills: "AWS (S3, SES, EC2), PM2, Git, Docker"
      },
      {
        category: "AI/ML",
        skills: "Ollama LLM integration, Local AI models"
      },
      {
        category: "Testing & QA",
        skills: "Comprehensive testing strategies, bug tracking, system validation"
      },
      {
        category: "Documentation",
        skills: "Technical writing, API documentation, user guides, system architecture"
      },
      {
        category: "Design & Creative",
        skills: "3D printing design, Adobe Creative Suite, Product photography, Brand identity design"
      }
    ],
    experience: [
      {
        title: "Software Engineer (IoT Engineer)",
        company: "Crean Innovations",
        duration: "2024-2025",
        description: "Aerospace consulting company focused on accelerating client performance through AI-powered smart manufacturing solutions",
        summary: "Developed comprehensive smart factory system using AI to dynamically queue and update production lines, seamlessly integrating with factory operators to enhance productivity. Provided real-time insights for management and delivered actionable data for clients' customers, enabling strategic expansion opportunities.",
        details: [
          {
            category: "Full-Stack Web Application Development",
            items: [
              "Built a modern Angular 17 web application with Nebular UI framework for real-time manufacturing operations monitoring",
              "Implemented responsive dashboards with Chart.js and ECharts for executive reporting and live operations tracking",
              "Developed role-based authentication system with JWT tokens and comprehensive user management",
              "Created reusable Angular components and services for maintainable, scalable code architecture"
            ]
          },
          {
            category: "Backend API Development",
            items: [
              "Designed and implemented RESTful APIs using Node.js/Express.js with OpenAPI specification",
              "Built real-time event processing engine handling RFID tag events, user interactions, and system alerts",
              "Developed comprehensive API services for dashboard data, entity management, and workflow processing",
              "Implemented WebSocket communication for real-time updates across the platform"
            ]
          },
          {
            category: "IoT System Architecture",
            items: [
              "Architected MQTT-based communication system for smart factory devices (ESP32-C3 RFID readers)",
              "Built gateway service managing device discovery, registration, and real-time event processing",
              "Implemented over-the-air (OTA) firmware updates and LED control for IoT devices",
              "Designed event queue processing with configurable filtering and debouncing mechanisms"
            ]
          },
          {
            category: "AI-Powered Support System",
            items: [
              "Built intelligent chat bot using FastAPI and Ollama LLM integration for 24/7 technical support",
              "Implemented strategic documentation caching and semantic search across technical documentation",
              "Developed WebSocket-based real-time chat interface with streaming AI responses",
              "Created Angular component for seamless integration into existing web application"
            ]
          },
          {
            category: "Database Design & Management",
            items: [
              "Designed and maintained 80+ Sequelize ORM models covering all system entities",
              "Implemented comprehensive data access layer serving multiple microservices",
              "Built migration system for database schema version control and deployment",
              "Maintained data integrity and audit trails across manufacturing workflows"
            ]
          },
          {
            category: "Quality Assurance & Testing",
            items: [
              "Conducted comprehensive system testing including device communication, API endpoints, and UI functionality",
              "Performed detailed QA analysis of IoT device behavior, LED priority systems, and event processing",
              "Created and maintained test documentation for manufacturing workflows and device interactions",
              "Implemented automated health monitoring and alerting systems for production environments"
            ]
          },
          {
            category: "Technical Documentation",
            items: [
              "Authored comprehensive technical documentation covering 10+ software components",
              "Created user guides for operators, supervisors, and administrators",
              "Developed API documentation with OpenAPI specifications and interactive testing",
              "Built system architecture diagrams and component relationship documentation",
              "Maintained configuration guides and setup instructions for deployment teams"
            ]
          },
          {
            category: "Product Design & Creative Development",
            items: [
              "Contributed to Smart Factory hardware design process including modular components and 3D printed IoT device enclosures with iterative prototyping and factory environment testing",
              "Created brand identity assets including company logo design using Adobe Illustrator with vector-based scalability",
              "Produced professional product photography for marketing materials using Canon EOS R-100 with RAW workflow",
              "Developed visual content for website, promotional materials, and technical documentation",
              "Managed SharePoint asset organization and file management for design and photography deliverables"
            ]
          }
        ]
      }
    ],
    keyProjects: [
      {
        title: "VIA Smart Factory Operations System (SFOS)",
        role: "Lead Developer",
        technologies: "Angular 17, Node.js, MQTT, MariaDB, AWS",
        impact: "Streamlined manufacturing operations for industrial clients, reducing manual tracking by 80%"
      },
      {
        title: "AI-Powered Technical Support Chat Bot",
        role: "Full-Stack Developer",
        technologies: "FastAPI, Ollama LLM, WebSocket, Angular",
        impact: "Provided 24/7 technical support reducing support ticket volume by 60%"
      },
      {
        title: "IoT Gateway & Device Management System",
        role: "IoT Developer",
        technologies: "MQTT, ESP32-C3, Node.js, WebSocket",
        impact: "Managed 50+ IoT devices with 99.9% uptime and real-time event processing"
      },
      {
        title: "Manufacturing Data ETL Pipeline",
        role: "Data Engineer",
        technologies: "Node.js, SQL Server, MariaDB, AWS S3",
        impact: "Automated daily data transfers processing 1000+ manufacturing jobs"
      },
      {
        title: "Product Design & Brand Development",
        role: "Product Designer & Creative Developer",
        technologies: "3D Printing, Adobe Creative Suite, Canon EOS R-100",
        impact: "Contributed to Smart Factory hardware design, created brand identity, and produced marketing photography"
      }
    ],
    education: [
      {
        degree: "Computer Programming",
        institution: "University of Texas at Austin",
        year: "2022",
        coursework: "Relevant Coursework: Software Engineering, Database Systems, Web Development"
      },
      {
        degree: "Fine Arts - Illustration",
        institution: "Cal State Fullerton",
        year: "2013",
        coursework: "Relevant Coursework: Digital Design, Product Photography, Brand Identity, Adobe Creative Suite"
      }
    ],
    certifications: {
      title: "Self-Directed Learning & Rapid Skill Acquisition:",
      items: [
        {
          category: "AWS Cloud Services",
          description: "Self-taught implementation of S3, SES, EC2, and AWS Transfer Family for production systems"
        },
        {
          category: "Network Infrastructure",
          description: "Configured and deployed Ubiquiti Dream Machine networking solutions for enterprise environments"
        },
        {
          category: "Legacy System Integration",
          description: "Developed solutions to integrate Windows Server 2012 R2 with modern cloud-based systems"
        },
        {
          category: "AI/ML Tools",
          description: "Proficient in ChatGPT, Cursor AI, Windsurf, and other AI development tools for enhanced productivity"
        }
      ]
    },
    additionalInfo: [
      { label: "Languages", value: "Korean" },
      { label: "Interests", value: "IoT development, AI/ML integration, system architecture, technical writing, product design, photography" },
      { label: "Portfolio", value: "https://escowin.github.io/portfolio", isLink: true },
      { label: "Athletics", value: "Competitive Masters Rower - Medaled at USRowing Masters Nationals, Heart of Texas, Waco Regatta, and San Diego Crew Classic" }
    ]
  }
};

export default portfolioData;
