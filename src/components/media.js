
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(options) {

  var options = options || {};
  var data = util.defaults(options);

  if (options.hash) {
    data.img = options.hash.img || null;
    data.imgRight = options.hash.imgRight || null;
    data.imgWidth = options.hash.imgWidth || null;
    data.imgHeight = options.hash.imgHeight || null;
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/media.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

