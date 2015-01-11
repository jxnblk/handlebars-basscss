
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(context, options) {

  var options = options || {};
  var data = util.defaults(options);

  data.body = context;

  if (options.hash) {
    data.inline = options.hash.inline || false;
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/nav-item.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

