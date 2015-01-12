
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(options) {

  var xx = new Helper('x', options);

  return xx.safeString();

};

