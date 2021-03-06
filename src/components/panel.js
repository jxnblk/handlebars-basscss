
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');
var getState = require('./util/get-state-classes');

module.exports = function(options) {

  var panel = new Helper('panel', options);

  if (options.hash) {
    panel.data.headerClass = getState(options.hash.type) || 'bg-lighter-gray border-bottom';
  } else {
    panel.data.headerClass = 'bg-lighter-gray border-bottom';
  }

  return panel.safeString();

};

