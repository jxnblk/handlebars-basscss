
var fs = require('fs');
var Handlebars = require('handlebars');
var util = require('./util');
var Helper = require('./util/Helper');
var getState = require('./util/get-state-classes');

module.exports = function(context, options) {

  var message = new Helper('message', options);

  message.data.body = context;

  if (options.hash) {
    message.data.stateClass = getState(options.hash.type) || 'bg-light-gray';
  } else {
    message.data.stateClass = 'bg-light-gray';
  }

  return message.safeString();

};

