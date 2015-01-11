
var Handlebars = require('handlebars');

module.exports = function(context, options) {

  var options = options || {};

  return new Handlebars.SafeString('<h1>Herro' + context + '</h1>');

};

