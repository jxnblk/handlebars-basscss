
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(options) {

  var flag = new Helper('flag', options);

  return flag.safeString();

};

