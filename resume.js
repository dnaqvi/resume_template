const data = {
  name: 'Daniyal Naqvi',
  mainEmoji: {
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '647.991.3125',
  email: 'daniyal.naqvi@gmail.com',
  githubHandle: 'dnaqvi',
  linkedInHandle: 'dnaqvi',
  workExperiences: [
    {
      emoji: '🍔',
      jobTitle: 'Manager -Global Business Services',
      institution: 'Restaurant Brands International',
      dates: '2016 - Present',
      details: [
        'Previous positions: Analyst (December 2016 – July 2017), Senior Analyst (August 2017 – July 2018)',
        'Advise C Suite and Finance Exec. Leadership on how to transform organization to enhance value, cut costs and improve performance. Lead a global team of 45+ people operating cross functionally at Burger King, Tim Hortons, and Popeyes to optimize budgeting, planning, forecasting & reporting to achieve strategic objectives',
        'Planned and organized projects, identifying a communication method for mitigating risk by facilitating cross-tower program and project management. Projects included but not limited to redesigning product profitability model & expense baseline measures to improve EBITDA, expansion of supply chain distribution centers across Canada, implementation of Tableau dashboards for optimizing reporting processes, implementation of a brand-new Accounts Payable system with no disruption to daily critical activities',
      ],
    },
    {
      emoji: '🏛',
      jobTitle: 'Communications and Policy Strategist',
      institution: 'Office of the Mayor of Toronto',
      dates: '2016-2016',
      details: [
        'Responsible for issue management including coordinating messaging and rapid response with City Staff and outside agencies like Office of the Prime Minister, Toronto Transit Commission, Community Housing Corporation, Waterfront Toronto and other levels of the government',
        'Coordinated overall communications strategy and all event partnerships for the Mayor of Toronto. Directly worked with public figures including Prime Minister Justin Trudeau, Will Smith, Margot Robbie and Milos Raonic',
      ],
    },
  ],
  educationalExperiences: [
    {
      emoji: '👨🏻‍🎓',
      university: 'McGill University',
      school: 'School of Economics',
      dates: '2012-2015',
      details: [
        'GPA: 3.8/4.0; B.A Economics & Statistics',
        'Activities: McGill Undergraduate Society Board, President of the Economics Students Association, McGill Model United  Nations, McGill Community Engagement Committee, Hillel Theatre Society',
      ],
    },
    {
      emoji: '👨🏻‍🎓',
      university: 'McGill University',
      school: 'European Study Program',
      dates: '2014-2014',
      details: [
        'GPA: 4.0/4.0',
        'Chosen as 1 of 15 undergraduates by McGill Faculty to successfully complete a program that examined the international exchange of trade and monetary flows of Europe while residing and attending lectures in Florence, Venice and Sienna',
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;
