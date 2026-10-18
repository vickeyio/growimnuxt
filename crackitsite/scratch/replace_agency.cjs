const fs = require('fs');
const path = require('path');

const replacements = [
  // AboutTwo.vue
  {
    file: path.join('app', 'components', 'home', 'AboutTwo.vue'),
    from: "We're Strategic Digital <span>Agency</span>",
    to: "We're a Strategic Tech <span>Company</span>"
  },
  // portfolio-details.vue
  {
    file: path.join('app', 'pages', 'portfolio-details.vue'),
    from: '>Digital Agency</h3>',
    to: '>Tech Company</h3>'
  },
  // portfolio/[slug].vue
  {
    file: path.join('app', 'pages', 'portfolio', '[slug].vue'),
    from: '>Digital Agency</h3>',
    to: '>Tech Company</h3>'
  },
  // WhyChooseTwo.vue - "Digital Solutions" -> "Tech Solutions"
  {
    file: path.join('app', 'components', 'home', 'WhyChooseTwo.vue'),
    from: '>Digital Solutions</p>',
    to: '>Tech Solutions</p>'
  },
  // service-details.vue - "Digital Services" -> "Tech Services"
  {
    file: path.join('app', 'pages', 'service-details.vue'),
    from: '>Digital Services</h3>',
    to: '>Tech Services</h3>'
  },
  // SidebarDrawer.vue - update description
  {
    file: path.join('app', 'components', 'common', 'SidebarDrawer.vue'),
    from: 'Empowering businesses with innovative digital solutions. We craft',
    to: 'Empowering businesses with innovative technology solutions. We craft'
  },
  // AppFooter.vue - "digital services" -> "tech services"
  {
    file: path.join('app', 'components', 'common', 'AppFooter.vue'),
    from: '>digital services</NuxtLink>',
    to: '>tech services</NuxtLink>'
  }
];

let totalUpdates = 0;

for (const { file, from, to } of replacements) {
  const filePath = path.join('c:', 'Users', 'user', 'growimnuxt', 'crackitsite', file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(from)) {
      content = content.replace(from, to);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${file}: "${from}" -> "${to}"`);
      totalUpdates++;
    } else {
      console.log(`✗ ${file}: "${from}" NOT FOUND`);
    }
  } catch (err) {
    console.log(`✗ ${file}: Error - ${err.message}`);
  }
}

console.log(`\nTotal files updated: ${totalUpdates}`);
