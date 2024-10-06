document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menu-toggle');
  var menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function () {
      menu.classList.toggle('show');
  });
});