
var fs = require('fs');
var Handlebars = require('handlebars');
var getAttr = require('./util/get-attributes');

module.exports = function(context, options) {

  var options = options || {};
  var data = {};

  data.body = context;

  if (options.hash) {
    data.attr = getAttr(options.hash);
    data.classlist = options.hash.class || null;
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/nav-item.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

