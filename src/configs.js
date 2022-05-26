const colors = {
  primary: '#90CAF9',
  secondary: '#E0E0E0',
  background: '#FFFFFF',
};

const about = {
  firstName: 'Jeremy',
  lastName: 'Anderson',
  shortDesc: `Hi! I'm a junior full-stack web developer from Salt Lake City, UT.`,
  longDesc: [
    `Here is a description and short bio of myself`
  ],
  email: '',
  github: 'https://github.com/jeremy0anderson or https://github.com/jeremy0anderson-dev for larger projects',
  linkedIn: 'https://www.linkedin.com/in/jeremyanderson-dev/',
};

const projects = [
  {
    name: 'Assassination',
    desc: 'A multiplayer game utilizing the Socket.io Library, Express.js back end, and handlebars front end',
    image: 'https://picsum.photos/400/410',
    demo: '',
    source: '',
  },
  {
    name: 'Student Grade Table',
    desc: 'React + Firebase website with CRUD functionalities',
    image: 'https://picsum.photos/400/410',
    demo: '',
    source: '',
  },
  {
    name: 'When In Rome',
    desc: 'React and Node social media website for finding events around the world',
    image: 'https://picsum.photos/400/410',
    demo: '',
    source: '',
  },
];

const skills = [{
    skill: 'HTML5',
    link: 'https://cdn.svgporn.com/logos/html-5.svg',
  },
  {
    skill: 'CSS3',
    link: 'https://cdn.svgporn.com/logos/css-3.svg',
  },
  {
    skill: 'Javascript',
    link: 'https://cdn.svgporn.com/logos/javascript.svg',
  },
  {
    skill: 'jQuery',
    link: 'https://cdn.svgporn.com/logos/jquery.svg',
  },
  {
    skill: 'MySQL',
    link: 'https://cdn.svgporn.com/logos/mysql.svg',
  },
  {
    skill: 'Express',
    link: 'https://cdn.svgporn.com/logos/express.svg',
  },
  {
    skill: 'React',
    link: 'https://cdn.svgporn.com/logos/react.svg',
  },
  {
    skill: 'Node',
    link: 'https://cdn.svgporn.com/logos/nodejs.svg',
  },
  {
    skill: 'Handlebars',
    link: 'https://cdn.svgporn.com/logos/handlebars.svg',
  },
  {
    skill: 'Bulma',
    link: 'https://cdn.svgporn.com/logos/bulma.svg',
  },
  {
    skill: 'MongoDB', link: 'https://cdn.svgporn.com/logos/mongodb.svg'
  },
  {
    skill: 'Git',
    link: 'https://cdn.svgporn.com/logos/git-icon.svg',
  }];

export default {
  colors, about, projects, skills
}

export { colors, about, projects, skills };
