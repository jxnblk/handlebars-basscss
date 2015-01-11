
var fs = require('fs');
var Handlebars = require('handlebars');

module.exports = function(options) {

  var options = options || {};
  var data = {};

  data.classlist = function() {
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
        return 'bg-light-gray';
        break;
    }
  };

  data.dismiss = options.hash.dismiss || null;

  data.body = options.fn(this);

  var template = Handlebars.compile(fs.readFileSync(__dirname + '/message.html', 'utf8'));
  var html = template(data);
  return new Handlebars.SafeString(html);

};

/*
  <!--
  ng-class="{
    'bg-light-gray': message.type == 'default',
    'white bg-green': message.type == 'success',
    'white bg-blue': message.type == 'info',
    'bg-yellow': message.type == 'warning',
    'white bg-red': message.type == 'error'
  }">
  -->
module.exports = function() {
  return {
    transclude: true,
    replace: true,
    scope: {
      dismiss: '='
    },
    template: fs.readFileSync(__dirname + '/message.html', 'utf8'),
    link: function(scope, elem, attr) {
      scope.message = {};
      scope.message.type = attr.type || 'default';
      scope.message.dismiss = attr.dismiss || null;
    }
  };
};
*/

