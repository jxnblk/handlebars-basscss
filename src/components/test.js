
var Handlebars = require('handlebars');

module.exports = function(context, options) {
  var body;
  var data = options.data || {};
  data.test = 'Herro';
  var data = Handlebars.createFrame(data);
  if (options.fn) {
    body = options.fn(this, data);
  }
  return body;
};
