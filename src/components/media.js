
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');
var Helper = require('./util/Helper');

module.exports = function(options) {

  var media = new Helper('media', options);

  return media.safeString();

};

