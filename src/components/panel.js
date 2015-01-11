
var fs = require('fs');
var Handlebars = require('handlebars');

module.exports = function(options) {

  var options = options || {};
  var data = {};

  data.header = options.hash.header || null;
  data.footer = options.hash.footer || null;
  data.body = options.fn(this);

  data.headerClass = function() {
    switch (options.hash.type) {
      case 'info':
        return 'white bg-blue';
        break;
      case 'success':
        return 'white bg-green';
        break;
      case 'warning':
        return 'bg-yellow';
        break;
      case 'error':
        return 'white bg-red';
        break;
      default:
        return 'bg-lighter-gray';
        break;
    }
  };

  data.classlist = options.hash.class || null;

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/panel.html', 'utf8'));

  var html = template(data);

  return new Handlebars.SafeString(html);

};

