
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');

module.exports = function(options) {

  var options = options || {};
  var data = util.defaults(options);

  if (options.hash) {
    data.dismiss = options.hash.dismiss || null;
    data.stateClass = util.getStateClasses(options.hash.type) || 'bg-light-gray';
  } else {
    data.stateClass = 'bg-light-gray';
  }

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/message.html', 'utf8'));
  var html = template(data);

  return new Handlebars.SafeString(html);

};

