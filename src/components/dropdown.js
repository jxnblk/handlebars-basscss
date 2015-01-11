
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(label, options) {

  var options = options || {};
  var data = util.defaults(options);
  data.label = label;

  if (options.hash) {
    data.buttonClass = options.hash.buttonClass || 'button-light-gray';
    data.onclick = options.hash.onclick || null;
  } else {
    data.buttonClass = 'button-light-gray';
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/dropdown.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

