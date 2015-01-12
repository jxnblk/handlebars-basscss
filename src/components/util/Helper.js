
var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');
var defaults = require('./defaults');

module.exports = function(id, options) {

  var self = this;
  this.data;
  this.id = id;

  this.safeString = function() {
    var template = Handlebars.compile(fs.readFileSync(path.join(__dirname, '../' + self.id + '.html'), 'utf8'));
    var html = template(self.data);
    return new Handlebars.SafeString(html);
  }

  this.init = function(options) {
    var options = options || {};
    self.data = defaults(options);
    return self;
  }

  return this.init(options);

};

