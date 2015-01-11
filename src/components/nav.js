
var fs = require('fs');
var Handlebars = require('handlebars');
var getAttr = require('./util/get-attributes');

module.exports = function(options) {

  var options = options || {};
  var data = {};

  data.body = options.fn(this);

  if (options.hash) {
    data.attr = getAttr(options.hash);
    data.classlist = options.hash.class || null;
    data.horizontal = options.hash.direction == 'horizontal' || false;
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/nav.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

