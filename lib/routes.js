import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User
} from 'react-feather';

export default [
  {
    path: '/',
    name: 'Home',
    icon: <Home strokeWidth={1} size={16} />
  },
   {
    name: 'Candidate',
    icon: <User strokeWidth={1} size={16} />,
    children: [
      {
        path: '/candidate',
        name: 'Candidate'
      },
      {
        path: '/candidate/candidateList', 
        name: 'Candidate List'
      }
    ]
  },
  {
    name: 'Customer',
    icon: <User strokeWidth={1} size={16} />,
    children: [
      {
        path: '/customer',
        name: 'Customer'
      },
      {
        path: '/customer/customerList', 
        name: 'Customer List'
      }
    ]
  },
  
  
  
  
];
