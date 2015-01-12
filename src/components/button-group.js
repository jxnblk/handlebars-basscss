
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(options) {

  var buttonGroup = new Helper('button-group', options);
  buttonGroup.data.isButtonGroup = true;
  buttonGroup.data.test = 'Herro';

  return buttonGroup.safeString();

};

