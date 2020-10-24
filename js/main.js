let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(event) {
  // отменяю стандартное поведение ссылки
  event.preventDefault();
  menu.classList.toggle('visible');

})