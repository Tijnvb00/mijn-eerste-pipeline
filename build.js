const ejs = require('ejs');
const fs = require('fs');

const data = {
  naam: 'Tijn',
  datum: new Date().toLocaleDateString('nl-NL')
};

ejs.renderFile('template.ejs', data, (err, html) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFileSync('index.html', html);
  console.log('Gebouwd! Fakkaaaaa');
});