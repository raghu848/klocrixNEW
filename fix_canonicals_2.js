const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else results.push(file);
  });
  return results;
}
const files = walk('app').filter(f => f.endsWith('page.jsx') || f.endsWith('layout.jsx'));
files.push('components/JsonLd.jsx');
let updatedCount = 0;
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let original = c;
  
  // Fix missing slash: https://www.klocrix.comsomething -> https://www.klocrix.com/something
  c = c.replace(/canonical:\s*'https:\/\/www\.klocrix\.com([^/'][^']*)'/g, "canonical: 'https://www.klocrix.com/$1'");
  
  if (c !== original) {
    fs.writeFileSync(f, c);
    console.log('Fixed:', f);
    updatedCount++;
  }
});
console.log('Done, updated', updatedCount, 'files.');
