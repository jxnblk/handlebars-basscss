
var Handlebars = require('handlebars');
var getAttr = require('./get-attributes');

module.exports = function(options) {
  var options = options || {};

  var data = Handlebars.createFrame(options.data || {});
  Handlebars.Utils.extend(data, options.hash || {});

  if (options.hash) {
    data.attr = getAttr(options.hash);
    data.classlist = options.hash.class || null;
  }

  if (options.fn) {
    data.body = options.fn(this);
  }

  return data;
};

