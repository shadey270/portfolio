//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/TS.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/channel/UC2DdCKnUt9tb_uaijG7yMEQ',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/oduwaye_shade/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/shadey270',
  },
  {
    icon: <FiFacebook />,
    href: 'https://web.facebook.com/oladele.shade.58/',
  },
];



// projects
export const projectsData = [
  {
  
    image: Project1,
    name: 'Dormartng',
    category: 'web development',
  },
  {
    id: '2',
    image: Project2,
    name: 'Peekay Homes',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'iseh',
    category: 'web development',
  },
  {
    id: '4',
    image: Project4,
    name: 'Maftoe',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Designing sophisticated websites with the use of HTML, CSS, and Bootstrap.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'This entails developing amazing interfaces using javascript libaries. We achieve this for clients',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'We also help companies brand their products through their websites.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'We ensure that our works are optimized to aid marketing and recognition of the clients company.',
  },
];



// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at oladeleshadey@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Ondo State, Akure',
    description: 'Serving clients worldwide',
  },
];
