
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');
var Helper = require('./util/Helper');

module.exports = function(context, options) {

  var navItem = new Helper('nav-item', options);

  navItem.data.body = context;

  return navItem.safeString();

};

