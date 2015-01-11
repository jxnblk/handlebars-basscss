
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(options) {

  var options = options || {};
  var data = util.defaults(options);

  if (options.hash) {
    data.img = options.hash.img || null;
    data.cardClass = util.getStateClasses(options.hash.type) || 'bg-white border';
  } else {
    data.cardClass = 'bg-white border';
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/card.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

