const mongoose = require('mongoose');
require('dotenv').config();

const Experience = require('./models/Experience');
const Project = require('./models/Project');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('MongoDB connected');

    // Hapus data sebelumnya (opsional)
    await Experience.deleteMany({});
    await Project.deleteMany({});

    // Dummy data
    const dummyExperiences = [
      {
        title: 'Frontend Developer',
        position: 'Junior Developer',
        company: 'Tech Corp',
        description: 'Developed UI components with React.js',
        startDate: '2022-01-01',
        endDate: '2022-12-31',
      },
      {
        title: 'Backend Developer',
        position: 'Intern',
        company: 'Startup Inc.',
        description: 'Built REST APIs with Node.js and Express',
        startDate: '2021-06-01',
        endDate: '2021-12-01',
      },
      {
        title: 'Full Stack Developer',
        position: 'Staff',
        company: 'Startup Inc.',
        description: 'Built REST APIs with Node.js and Express',
        startDate: '2023-06-01',
        endDate: '2025-12-01',
      },
    ];
    
    const dummyProjects = [
      {
        title: "Personal Portfolio Website",
        description: "A responsive personal website to showcase my skills, experiences, and projects using the MERN stack.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        repoUrl: "https://github.com/yourusername/portfolio-site",
        liveUrl: "https://yourname.vercel.app",
        image: "https://via.placeholder.com/800x600?text=Portfolio+Website",
      },
      {
        title: "Barbershop Booking App",
        description: "A full-stack web application for booking barber appointments with admin panel and real-time notifications.",
        technologies: ["React", "Express", "MongoDB", "Socket.io", "Bootstrap"],
        repoUrl: "https://github.com/yourusername/barbershop-app",
        liveUrl: "https://barbershop-app.vercel.app",
        image: "https://via.placeholder.com/800x600?text=Barbershop+Booking+App",
      },
      {
        title: "Task Manager",
        description: "A simple task management tool with drag-and-drop feature, user auth, and dark mode support.",
        technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
        repoUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://taskmanager.vercel.app",
        image: "https://via.placeholder.com/800x600?text=Task+Manager",
      },
      {
        title: "E-Commerce Store",
        description: "An e-commerce platform featuring product listing, cart, checkout, and admin dashboard.",
        technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        repoUrl: "https://github.com/yourusername/ecommerce-store",
        liveUrl: "https://mystore.vercel.app",
        image: "https://via.placeholder.com/800x600?text=E-Commerce+Store",
      },
      {
        title: "Blog Platform",
        description: "A blogging platform with markdown editor, user auth, and comment system.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        repoUrl: "https://github.com/yourusername/blog-platform",
        liveUrl: "https://blogplatform.vercel.app",
        image: "https://via.placeholder.com/800x600?text=Blog+Platform",
      },
      {
        title: "Booking Barbershop",
        description: "A blogging platform with markdown editor, user auth, and comment system.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        repoUrl: "https://github.com/yourusername/blog-platform",
        liveUrl: "https://blogplatform.vercel.app",
        image: "https://via.placeholder.com/800x600?text=Blog+Platform",
      },
    ];    

    // Insert ke database
    await Experience.insertMany(dummyExperiences);
    await Project.insertMany(dummyProjects);
    console.log('Dummy projects inserted');
    console.log('Dummy experiences inserted');
    process.exit(0);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
