
var fs = require('fs');
var Handlebars = require('handlebars');
var getAttr = require('./util/get-attributes');

module.exports = function(label, options) {

  var options = options || {};
  var data = {};
  data.body = options.fn(this);
  data.label = label;

  if (options.hash) {
    data.attr = getAttr(options.hash);
    data.classlist = options.hash.class || null;
    data.buttonClass = options.hash.buttonClass || 'button-light-gray';
    data.onclick = options.hash.onclick || null;
  } else {
    data.buttonClass = 'button-light-gray';
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/dropdown.html', 'utf8'));

  var html = template(data);

  return new Handlebars.SafeString(html);

};

