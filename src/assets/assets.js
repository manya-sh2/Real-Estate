import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';
import header_img from './header_img.png';
import brand_img from './brand_img.png';
import project_img_1 from './project_img_1.jpg';
import project_img_2 from './project_img_2.jpg';
import project_img_3 from './project_img_3.jpg';
import project_img_4 from './project_img_4.jpg';
import project_img_5 from './project_img_5.jpg';
import project_img_6 from './project_img_6.jpg';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    title: "Skyline Haven",
    price: "$250,000",
    location: "California",
    image: project_img_1,
  },
  {
    title: "Vista Verde",
    price: "$270,000",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    title: "Serenity Suites",
    price: "$310,000",
    location: "Chicago",
    image: project_img_3,
  },
  {
    title: "Central Square",
    price: "$400,000",
    location: "Los Angeles",
    image: project_img_4,
  },
  {
    title: "Greenfield Estate",
    price: "$265,000",
    location: "Seattle",
    image: project_img_5,
  },
  {
    title: "Urban Heights",
    price: "$295,000",
    location: "Austin",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "They understood my vision and helped me find the perfect property. The process was smooth and professional throughout.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "Their platform made it incredibly easy to explore listings and schedule viewings. Highly recommended for first-time buyers.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "Outstanding service and support. They provided valuable insights and made sure every detail was covered before closing.",
  },
];
