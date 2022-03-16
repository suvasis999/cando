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
  User,Settings,Award,Database

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
      },
      
    ]
  },
  {
    name: 'Customer',
    icon: <Database strokeWidth={1} size={16} />,
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

  {
    name: 'Staffing',
    icon: <Award strokeWidth={1} size={16} />,
    children: [
      {
        path: '/staffing',
        name: 'Staffing List'
      }
      
    ]
  },
  {
    name: 'Pickup Setting',
    icon: <Settings strokeWidth={1} size={16} />,
    children: [
      {
        path: '/pickloc',
        name: 'Pickup Location'
      },
      {
        path: '/pickloc/pickuplocList',
        name: 'Pickup Location List'
      }
      
    ]
  },
 /*{
    name: "Data display",
    icon: <Underline strokeWidth={1} size={16} />,
    children: [
      {
        path: "/data-display/avatar",
        name: "Avatar"
      },
      {
        path: "/data-display/badge",
        name: "Badge"
      },
      {
        path: "/data-display/collapse",
        name: "Collapse"
      },
      {
        path: "/data-display/carousel",
        name: "Carousel"
      },
      {
        path: "/data-display/card",
        name: "Card"
      },
      {
        path: "/data-display/calendar",
        name: "Calendar"
      },
      {
        path: "/data-display/list",
        name: "List"
      },
      {
        path: "/data-display/popover",
        name: "Popover"
      },
      {
        path: "/data-display/tree",
        name: "Tree"
      },
      {
        path: "/data-display/tooltip",
        name: "Tooltip"
      },
      {
        path: "/data-display/timeline",
        name: "Timeline"
      },
      {
        path: "/data-display/tag",
        name: "Tag"
      },
      {
        path: "/data-display/tabs",
        name: "Tabs"
      },
      {
        path: "/data-display/table",
        name: "Table"
      }
    ]
  },*/
  
  
  
];
