
var fs = require('fs');
var Handlebars = require('handlebars');
var Helper = require('./util/Helper');

module.exports = function(options) {

  var pagination = new Helper('pagination', options);

  if (options.hash) {
    pagination.data.pages = options.hash.pages;
    if (options.hash.current) {
      pagination.data.pages[options.hash.current-1].isActive = true;
    }
  }

  return pagination.safeString();

};

