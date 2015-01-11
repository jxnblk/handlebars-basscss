
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(options) {

  var options = options || {};
  var data = util.defaults(options);

  if (options.hash) {
    data.horizontal = options.hash.direction == 'horizontal' || false;
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/nav.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

