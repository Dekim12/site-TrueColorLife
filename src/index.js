import './styles/style.sass';

/*
 * Example of images import:
 * import './images/header/pencil.png';
*/
let arrEvents = document.getElementsByClassName('first')[0];
let modalW = document.getElementsByClassName('modal')[0];
let headerFixed = document.getElementsByClassName('fixed_block')[0];
let btnClose = document.getElementsByClassName('btnClose')[0];
let nav = document.getElementsByClassName('navigation')[0];
let btnGamb = document.getElementsByClassName('menu_burger_icon')[0];

// console.log(nav.classList.toggle('show'));

btnGamb.addEventListener('click', function() {
  nav.classList.toggle('show');
  console.log(nav.classList);
});

arrEvents.addEventListener('click', function() {
  modalW.style.display = 'block';
  headerFixed.style.position = 'relative';
});

btnClose.addEventListener('click', function() {
  modalW.style.display = 'none';
  headerFixed.style.position = 'fixed';
});

window.addEventListener('click', function(event) {
  if (event.target == modalW) {
    modalW.style.display = 'none';
  }
});
