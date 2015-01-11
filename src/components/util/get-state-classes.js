
module.exports = function(type) {
  switch (type) {
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
      return false;
      break;
  }
};

