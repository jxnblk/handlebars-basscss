
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(label, options) {

  var dropdown = new Helper('dropdown', options);
  dropdown.data.label = label;

  if (!options.hash && !options.hash.buttonClass) {
    dropdown.data.buttonClass = 'button-light-gray';
  }

  return dropdown.safeString();

};

