const placeholderDescr = 'Description goes here: takeback takeback takeback takeback takeback takeback takeback' +
  ' takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback' +
  ' takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback' +
  ' takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback ';

const links = [
  ['Find a Location', 'map'],
  ['Texting Service', 'text'],
  ['FAQ', 'faq'],
  ['Toolkit', 'toolkit'],
  ['About', 'about'],
];
export const headerCopy = {
  linkText: ['', '', 'top'],
  tagLine: 'Get rid of your unused medication. Stop addiction. Protect clean water. End the opioid crisis.',
  title: 'Take Back Day is April 28th',
  description: 'Ready to help out? Search below to find a safe place to get rid of unused medication near you.',
};

const mapCopy = {
  link: ['Find A Location', 'Find', 'map'],
  description: 'Find my nearest drop-off location',
};

export const reminderCopy = {
  link: ['Get a Reminder', 'Reminder', 'text'],
  title: 'Get a Reminder',
  description: 'Sign up to get a text or email reminder with your nearest medication drop-off location before ' +
  'the next National Prescription Drug Take Back Day.',
};

export const aboutCopy = {
  link: ['Find A Location', 'Find', 'map'],
  title: 'About Take Back Day',
  description: placeholderDescr,
};

export const faqCopy = {
  link: ['FAQ', 'FAQ', 'faq'],
  title: 'Frequently Asked Questions',
  description: placeholderDescr,
  faqs: [
    {
      question: 'What is Clear Your Cabinet?',
      answer: 'Clear Your Cabinet is an initiative by New York Attorney General Eric Schneiderman to reduce the ' +
      'amount of unused prescription drugs in New Yorkers’ medicine cabinets. This is a crucial way that we can ' +
      'all help to fight the opioid crisis that is devastating families across New York and our country. Research ' +
      'shows that a majority of abused prescription drugs are obtained from family and friends, and the source is ' +
      'often from medication that was prescribed but never finished and left to sit at home.',
    },
    {
      question: 'So there are designated sites across New York where I can bring my unused medication?',
      answer: 'Yes. New York State, the federal government, national and community pharmacies, and non-profits ' +
      'across New York have responded to our national opioid crisis by setting up safe drop-off sites for New ' +
      'Yorkers to bring unused medication. We have worked to combine all the available sources of information about ' +
      'where you can find these drop-off sites into the site locator above.',
    },
    {
      question: 'Will I get in trouble for dropping off prescription drugs and unused over-the-counter medication?',
      answer: 'No. If you bring in your medication, you’re fine.',
    },
    {
      question: 'Is there a charge for disposing my medications?',
      answer: 'No, the service is free.',
    },
    {
      question: 'Do these sites collect medication year-round?',
      answer: 'Many sites are year-round, but some are only for a short period of time during National Prescription ' +
      'Drug Take Back Day, a twice-yearly effort coordinated by the DEA. We recommend calling sites found on the ' +
      'locator before you head out, and confirming their availability and hours.',
    },
  ],
};

export const footerCopy = {
  home: ['Home', 'top'],
  contact: ['Get in Touch', ''],
  acknowlegements: [['Acknowledgements', '']],
};