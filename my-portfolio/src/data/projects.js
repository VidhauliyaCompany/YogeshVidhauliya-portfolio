// src/data/projects.js
export const projectList = [
  {
    id: 1,
    title: 'E-Commerce Website',
    desc: 'A full stack online shopping website with cart, login and payment.',
    details:
      'A full stack online shopping website where users can browse products, add them to a cart, log in',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'React',
    features: ['Product listing', 'Shopping cart', 'User login', 'Payment'],
    live: 'https://food-delivery-app-ruby-sigma.vercel.app',
  },
  {
    id: 2,
    title: 'Weather App',
    desc: 'Shows live weather of any city using a public weather API.',
    details:
      'A weather app that shows live temperature, humidity and forecast for any city using a public weather API.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=900',
    tech: ['React', 'API', 'CSS'],
    category: 'React',
    features: ['Search any city', 'Live weather data', 'Responsive design'],
    live: 'https://weather-fuytv1hrp-vidhauliyacompany.vercel.app/',
  },
  {
    id: 3,
    title: 'Task Manager',
    desc: 'Add, edit, delete and track your daily tasks easily.',
    details:
      'A task manager to add, edit, delete and track daily tasks with a clean and simple interface.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900',
    tech: ['React', 'Express', 'MongoDB'],
    category: 'React',
    features: ['Add and edit tasks', 'Delete tasks', 'Track status'],
    live: 'https://task-manager-kappa-ten-13.vercel.app',
  },
  {
    id: 4,
    title: 'Freight Calculator',
    desc: 'Calculates chargeable weight and freight cost from product dimensions and weight.',
    details:
      'Developed a Freight Weight Calculator to calculate the chargeable weight of products based on their dimensions (length, width and height) and actual weight. The tool helps estimate volumetric weight and determine freight charges for efficient shipping cost calculation.',
    image: '/freightImage.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'],
    category: 'React',
    features: [
      'Volumetric weight calculation',
      'Chargeable weight from actual vs volumetric',
      'Freight charge estimation',
    ],
    live: 'https://example.com',
  },
  {
    id: 5,
    title: 'Ticketing Tool',
    desc: 'A MERN ticketing system for internal issue tracking and support.',
    details:
      'Developed a web-based Ticketing Management System using the MERN stack to streamline internal issue tracking and support operations. Implemented ticket creation, assignment, status tracking, role-based access, admin approval, ticket history, analytics, SLA monitoring and Excel report export to improve team coordination and issue resolution efficiency.',
    image: '/ticketimage.avif',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'MERN',
    features: [
      'Ticket creation and assignment',
      'Status tracking and ticket history',
      'Role-based access and admin approval',
      'Analytics and SLA monitoring',
      'Excel report export',
    ],
    live: 'https://ticketing.syrotech.com/',
  },
 {
    id: 6,
    title: 'Bhagwati Sales & Fire Company Website',
    desc: 'A responsive MERN business website for a fire safety company, with a product catalogue, enquiry form and admin dashboard.',
    details:
      'Designed and developed a responsive business website for Bhagwati Sales & Fire Company using the MERN stack. Built a product catalogue grouped by category, an enquiry form that saves customer requests to MongoDB Atlas, and a password-protected admin dashboard to view and delete enquiries. Added a hero image slider, scroll animations, a mobile navigation menu, a training page and a contact page with an embedded map. Frontend deployed on Vercel and backend on Render.',
    image: '/cylinder.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'MERN',
    features: [
      'Fully responsive design with animated hero slider',
      'Product catalogue with category filtering',
      'Enquiry form with validation, saved to MongoDB Atlas',
      'Admin login and enquiries dashboard',
      'Fire safety training and contact pages with map',
    ],
    live: 'https://bhagwati-fire.vercel.app/',
  },

]