
var Basscss = Basscss || {};

Basscss.dropdowns = document.querySelectorAll('.Dropdown');

for (var i = 0; i < Basscss.dropdowns.length; i++) {
  function init(dropdown) {
    dropdown.button = dropdown.querySelector('.Dropdown-button');
    dropdown.isOpen = false;
    dropdown.body = dropdown.querySelector('.Dropdown-body');
    dropdown.overlay = dropdown.querySelector('.Dropdown-overlay');
    dropdown.button.onclick = dropdown.body.onclick = dropdown.overlay.onclick = function(e) {
      dropdown.isOpen = !dropdown.isOpen;
      if (dropdown.isOpen) {
        dropdown.body.style.display = 'block';
        dropdown.overlay.style.display = 'block';
      } else {
        dropdown.body.style.display = 'none';
        dropdown.overlay.style.display = 'none';
      }
    }
  }
  init(Basscss.dropdowns[i]);
};

