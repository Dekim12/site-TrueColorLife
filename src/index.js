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
let btnTop = document.getElementById('myBtn');

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

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

btnTop.addEventListener('click', function() {
  document.documentElement.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
