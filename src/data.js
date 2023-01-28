import images_1 from './images/tour-1.jpeg';
import images_2 from './images/tour-2.jpeg';
import images_3 from './images/tour-3.jpeg';
import images_4 from './images/tour-4.jpeg';




export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];
//mindig adok nekik egy ID-t ha nincs mert ez egy MAP es ahhoz kell legyen egy kulcs
export const article = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    h4: "saving money",
    p: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
  },
  { id: 2, icon: "fas fa-tree fa-fw", h4: "endless hiking", p: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia." },
  { id: 3, icon: "fas fa-socks fa-fw", h4: "amazing comfort", p: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia." },

];

export const tours = [
  {
    id: 1,
    img: images_1,
    p1: 'august 26th, 2020',
    h4: 'Tibet Adventure',
    p2: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    p3: 'china',
    p4: '6 days',
    p5: 'from $2100',
  },
  {
    id: 2,
    img: images_2,
    p1: 'october 1th, 2020',
    h4: 'best of java',
    p2: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    p3: 'indonesia',
    p4: '11 days',
    p5: 'from $1400',
  },
  {
    id: 3,
    img: images_3,
    p1: 'september 15th, 2020',
    h4: 'explore hong kong',
    p2: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    p3: 'hong kong',
    p4: '8 days',
    p5: 'from $5000',
  },
  {
    id: 4,
    img: images_4,
    p1: 'december 5th, 2019',
    h4: 'kenya highlights',
    p2: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    p3: 'kenya',
    p4: '20 days',
    p5: 'from $3300',
  },
];
