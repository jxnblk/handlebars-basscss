
module.exports = function(type) {
  if (!type) return false;
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
    case 'dark':
      return 'white bg-dark-gray';
      break;
    default:
      return false;
      break;
  }
};

