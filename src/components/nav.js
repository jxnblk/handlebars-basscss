
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(options) {

  var nav = new Helper('nav', options);

  return nav.safeString();

};

