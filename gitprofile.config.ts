// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'srinikha193', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
      /*conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   */ //},
   /* {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],*/
  // Display articles from your medium or dev account. (Optional)
     /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },*/

  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
       projects: ['srinikha193/Covid19_EDA-Modeling', 'srinikha193/Bank-Loan-Dashboard-Tableau-SQL', 'srinikha193/TimeSeriesForecasting','srinikha193/Customer-Churn_Prediction_classification','srinikha193/Diabetes_Prediction','srinikha193/Face-Mask-Classifier','srinikha193/sentiment_analysis','srinikha193/Marketing_Methodology'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
      external: {
      header: 'My Certifications',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      {
        title: 'AWS SAA-03',
        description: 'AWS Solutions Architect - Associate Certification',
        imageUrl: 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png', // Ensure this URL works directly
        link: 'https://www.credly.com/badges/f1a40c2a-3e21-45fd-a6b0-a852ae602711/public_url',
      },
      {
        title: 'BCG',
        description: 'Data Science Job Simulation Certification',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BCG_Corporate_Logo.jpg/480px-BCG_Corporate_Logo.jpg', // Check if this URL loads the image directly
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_kFepDsghtqZGvkSeq_1726172448392_completion_certificate.pdf',
      },
    ],

    },
  },
  seo: {
    title: 'Portfolio of Srinikha Renikunta',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'srinikha-renikunta',
    /*twitter: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',*/
    email: 'srenikunta@ufl.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'Fortran',
    'Java',
    'C++',
    'JavaScript',
    'scientific python stack',
    'MySQL',
    'Cassandra',
    'Tableau',
    'Power BI',
    'Statistical Modeling',
    'Git Version Control',
    'Machine Learning',
    'NLP',
    'Microsoft project management',
    'OpenCV',
  ],
  experiences: [
    {
      company: 'University of Florida',
      position: 'Graduate Student Assistant',
      from: 'January 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'ADP',
      position: 'Data Miner',
      from: 'August 2021',
      to: 'December 2022',
      companyLink: '',
    },
        {
      company: 'Swecha Org',
      position: 'Data Science Intern',
      from: 'May 2018',
      to: 'August 2018',
      companyLink: '',
    },
  ],
  /*certifications: [
    {
      name: 'Microsoft Verzeo',
      body: 'Python for Datascience',
      year: 'Sep 2019',
      link: 'https://example.com',
    },
    {
      name: 'NPTEL',
      body: 'Natural Language Processing',
      year: 'Nov 2019',
      link: 'https://example.com',
    },
  ],
  */
  educations: [
    {
      institution: 'University of Florida',
      degree: 'Master of Science',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Jawaharlal Nehru Technological University',
      degree: 'Bachelor of Technology',
      from: '2017',
      to: '2021',
    },
  ],
  Summary: [
    {
      title: 'Hi ,I am Srinikha',},
   /* //  description:
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  /*// Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,*/
  
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#b5cc64',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,

  enablePWA: true,
};

export default CONFIG;
