
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(options) {

  var options = options || {};
  var data = util.defaults(options);

  if (options.hash) {
    data.header = options.hash.header || null;
    data.footer = options.hash.footer || null;
    data.headerClass = util.getStateClasses(options.hash.type) || 'bg-lighter-gray border-bottom';
  } else {
    data.headerClass = 'bg-lighter-gray border-bottom';
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/panel.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

