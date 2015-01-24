
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');
var getStateClasses = require('./util/get-state-classes');

module.exports = function(options) {

  var card = new Helper('card', options);

  if (options.hash) {
    card.data.cardClass = getStateClasses(options.hash.type) || 'bg-white';
  } else {
    card.data.cardClass = 'bg-white';
  }

  return card.safeString();

};

