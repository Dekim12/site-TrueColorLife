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
let pagination = document.getElementsByClassName('btnNum');
let paginationNext = document.getElementsByClassName('next')[0];
let paginationPrevious = document.getElementsByClassName('previous')[0];

// Pppup menu
btnGamb.addEventListener('click', function() {
  nav.classList.toggle('show');
});

// Scrol to top
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

// Events
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

//Pagination
var i = 0;
paginationNext.addEventListener('click', function() {
  if (i != pagination.length - 1) {
    pagination[i].classList.toggle('active');
    pagination[i + 1].classList.toggle('active');
    i++;
  }
});

paginationPrevious.addEventListener('click', function() {
  if (i > 0) {
    pagination[i].classList.toggle('active');
    pagination[i - 1].classList.toggle('active');
    i--;
  }
});
