
var fs = require('fs');

module.exports = {
  head: fs.readFileSync(__dirname + '/partials/head.html', 'utf8'),
  footer: fs.readFileSync(__dirname + '/partials/footer.html', 'utf8')
};
