
module.exports = function(hash) {

  var arr = [];
  var keys = Object.keys(hash);

  keys.forEach(function(key) {
    switch (key) {
      case 'id':
      case 'style':
      case 'href':
      case 'rel':
      case 'alt':
      case 'title':
        arr.push({
          key: key,
          value: hash[key]
        });
        break;
    }
  });

  return arr;

};
