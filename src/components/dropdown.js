
var fs = require('fs');

module.exports = function() {
  return {
    scope: {
      items: '=?items'
    },
    transclude: true,
    replace: true,
    template: fs.readFileSync(__dirname + '/dropdown.html', 'utf8'),
    link: function(scope, elem, attr) {
      scope.label = attr.label;
      scope.buttonClass = attr.buttonClass;
      scope.dropdown = {
        isOpen: attr.isOpen || false,
        toggle: function() {
          this.isOpen = !this.isOpen;
        }
      };
    }
  };
};
