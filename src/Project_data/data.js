import Eco_mobile from '../assets/Videos/Ecommerce_mobile.mp4';
import Eco_laptop from '../assets/Videos/Ecommerce_laptop.mp4';
import Port_mobile from '../assets/Videos/Portfolio_mobile.mp4';
import Port_laptop from '../assets/Videos/Portfolio_laptop.mp4';

export const MyProjects = [
    {
        id: '01.',
        title: "My-Portfolio",
        image : "https://i.ibb.co/0ycrKKn/Screenshot-10-3-2024-14223-localhost.jpg",
        desc1 : "Sahil Raza, a Portfolio Web app is made with ReactJs.",
        desc2 : "Fresh UI Experience and Smooth transitions between each sections of the WebPage.",
        desc3 : "Minimalist color selection to highlight essential part of the Portfolio.",
    },
    {
        id: '02.',
        title: "Ecommerce",
        image : "https://i.ibb.co/0yxqq6W/Screenshot-10-3-2024-141351-localhost.jpg",
        desc1 : "Sahil is a full stack Ecommerce app made with MERN stack.",
        desc2 : "Managing User and Cart States using React_Redux dependency and fetching data from MongoDB.",
        desc3 : "Fully Responsive Web-Page for all kinds of devices.",
    },
]

export const DemoData = [
  {
    id: 0,
    title: 'My-Portfolio',
    desk: Port_laptop,
    mob: Port_mobile,
    frontend_link: 'https://github.com/SahillRazaa/My-Portfolio',
    backend_link: '',
    techStack: [
      { tech: 'https://i.ibb.co/TB3zZjN/image.png' },
      { tech: 'https://i.ibb.co/0hXDjTM/image.png' },
      { tech: 'https://i.ibb.co/6rcXkhp/image.png' },
      { tech: 'https://i.ibb.co/4T69Lb2/image.png' },

    ],
  },
  {
    id: 1,
    title: 'Ecommerce',
    desk: Eco_laptop,
    mob: Eco_mobile,
    frontend_link: 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backend_link: 'https://github.com/SahillRazaa/Sahil_Ecommerce_backend',
    techStack: [
      { tech: 'https://i.ibb.co/TB3zZjN/image.png' },
      { tech: 'https://i.ibb.co/0hXDjTM/image.png' },
      { tech: 'https://i.ibb.co/6rcXkhp/image.png' },
      { tech: 'https://i.ibb.co/4T69Lb2/image.png' },
      { tech: 'https://i.ibb.co/0KcqYQF/image.png' },
      { tech: 'https://i.ibb.co/Pcmxcgf/icons8-mongo-db-96.png' },
    ],
  },
];
