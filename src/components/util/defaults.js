
var util = require('./index');
var getAttr = require('./get-attributes');

module.exports = function(options) {
  var options = options || {};
  var data = {};

  if (options.fn) {
    data.body = options.fn(this);
  }

  if (options.hash) {
    data.attr = getAttr(options.hash);
    data.classlist = options.hash.class || null;
  } else {
  }

  return data;
};
