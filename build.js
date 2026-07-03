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
  fs.mkdirSync('dist', { recursive: true });
  fs.writeFileSync('dist/index.html', html);
  console.log('Gebouwd!', 'Tijn in de trein wohooooooo');
});