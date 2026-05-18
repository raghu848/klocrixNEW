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
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/https:\/\/klocrix\.com\/?/g, 'https://www.klocrix.com/');
  c = c.replace(/canonical:\s*'https:\/\/www\.klocrix\.com\/([^']*)'/g, (m, p) => `canonical: 'https://www.klocrix.com/${p.replace(/\/$/, '')}'`);
  c = c.replace(/canonical:\s*'https:\/\/www\.klocrix\.com\//g, `canonical: 'https://www.klocrix.com`);
  c = c.replace(/https:\/\/www\.klocrix\.com\/'/g, `https://www.klocrix.com'`);
  fs.writeFileSync(f, c);
});
console.log('Done');
