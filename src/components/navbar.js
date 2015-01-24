
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');
var getState = require('./util/get-state-classes');

module.exports = function(options) {

  var navbar = new Helper('navbar', options);

  if (options.hash) {
    navbar.data.navbarClass = getState(options.hash.type) || 'bg-light-gray';
  } else {
    navbar.data.navbarClass = 'bg-light-gray';
  }

  navbar.data.inline = true;

  return navbar.safeString();

};

