
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(context, options) {

  var button = new Helper('button', options);

  button.data.body = context;

  if (options.hash) {
    button.data.color = options.hash.color || 'light-gray';
    button.data.buttonType = options.hash.type || 'button';
    button.data.isGroup = options.hash.group || false;
    button.data.isActive = options.hash.active || false;
  } else {
    button.data.color = 'light-gray';
  }

  return button.safeString();

};

