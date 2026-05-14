const menuBtn = document.querySelector('.js-menu-btn');
const phoneNav = document.querySelector('.js-phone-nav');

menuBtn.addEventListener('click', () => {
  phoneNav.classList.toggle('active');
  
  if (phoneNav.classList.contains('active')) {
    menuBtn.innerHTML = '✕';
  } else {
    menuBtn.innerHTML = '☰';
  }
});