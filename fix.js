const fs = require('fs');
const path = require('path');
const dir = 'src/vanilla-source';

fs.readdirSync(dir).forEach(folder => {
  const file = path.join(dir, folder, 'index.html');
  if(fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/""/g, '"');
    fs.writeFileSync(file, content);
  }
});
console.log('Fixed double quotes in all index.html files');
