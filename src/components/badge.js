
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');
var getState = require('./util/get-state-classes');

module.exports = function(context, options) {

  var badge = new Helper('badge', options);

  badge.data.body = context;

  if (options.hash) {
    badge.data.stateClass = getState(options.hash.type) || 'bg-light-gray';
  } else {
    badge.data.stateClass = 'bg-light-gray';
  }

  return badge.safeString();

};

