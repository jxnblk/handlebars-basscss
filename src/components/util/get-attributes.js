
module.exports = function(hash) {

  var arr = [];
  var keys = Object.keys(hash);

  keys.forEach(function(key) {
    switch (key) {
      case 'id':
      //case 'class':
      case 'style':
      case 'href':
      case 'rel':
      case 'title':
        console.log(key);
        arr.push({
          key: key,
          value: hash[key]
        });
        break;
    }
  });

  return arr;

};
