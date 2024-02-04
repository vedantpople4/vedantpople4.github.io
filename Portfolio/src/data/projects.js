const projects = [
  {
    id: 1,
    title: "Elastic Cloud App for Image Recognition",
    image: "ml-lab.png",
    url: "https://github.com/vedantpople4/cloud-computing-projects/tree/main/cloud-computing-1",
    category: "Web Application",
    tags: ["AWS SQS", "AWS S3", "AWS EC2", "Spring Boot"],
    description:
      "Elastic cloud application to recognize images using deep learning model. Uses AWS SQS to store requests and results. Employs AWS S3 buckets to store input and results from classification. Implements auto-scaling to scale in and scale out EC2 instances for load balancing. Optimized the integration of Springboot RESTFul API, facilitating seamless communication of requests and responses.",
  },
  {
    id: 2,
    title: "Technical Notes Application",
    image: "smartchange.png",
    url: "https://github.com/xtenzQ/SmartChange",
    category: "Web Application",
    tags: ["React", "CRUD", "MySQL", "MongoDB", "MVC"],
    description:
      "MERN stack application to take and manage notes. Executed using MVC architecture and utilizes MongoDB as the database for storing and organizing notes. Connected to MongoDB Atlas for global access. Implemented and optimized CRUD functionalities. Engineered a granular RBAC system, enhancing data security. This implementation reduced unauthorized access incidents by 80%.",
  },
  {
    id: 3,
    title: "E-commerce web scraping application",
    image: "smartmonitor.png",
    url: "https://github.com/xtenzQ/SmartMonitor",
    category: "Web Application",
    tags: ["React", "Django", "Flask", "MySQL", "RabbitMQ"],
    description:
      "Architected a comprehensive application to scrap data from E-commerce websites. Automated the monitoring of product costs from E-commerce websites, leading to reduction in manual monitoring efforts and associated costs. Restructured backend services using Django for admin and Flask for the main app. Internal API calls using RabbitMQ events. Utilises MySQL for the database.",
  },
];

export default projects;
