const fs = require('fs');
const path = require('path');

const cssPath = path.join('c:', 'Users', 'user', 'growimnuxt', 'crackitsite', 'public', 'assets', 'css', 'growim.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace rgb(99, 90, 217) with var(--growim-primary)
cssContent = cssContent.replace(/rgb\(\s*99\s*,\s*90\s*,\s*217\s*\)/g, 'var(--growim-primary)');

// Replace rgba(99, 90, 217, <opacity>) with rgba(var(--growim-primary-rgb), <opacity>)
cssContent = cssContent.replace(/rgba\(\s*99\s*,\s*90\s*,\s*217\s*,/g, 'rgba(var(--growim-primary-rgb),');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Fixed old rgb colors in growim.css');
