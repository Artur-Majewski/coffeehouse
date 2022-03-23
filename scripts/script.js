const btnBurger = document.querySelector('.nav-bar__menu__burger');
const btnBurgerIcoUpper = document.querySelector('.nav-bar__menu__burger__ico-upper');
const btnBurgerIcoCenter = document.querySelector('.nav-bar__menu__burger__ico-center');
const btnBurgerIcoBottom = document.querySelector('.nav-bar__menu__burger__ico-bottom');
const menuList = document.querySelector('.nav-bar__menu__list');

btnBurger.addEventListener('click', () => {
  btnBurgerIcoUpper.classList.toggle('active')
  btnBurgerIcoCenter.classList.toggle('active');
  btnBurgerIcoBottom.classList.toggle('active');
  menuList.classList.toggle('nav-bar__menu__list--active');

  console.log(btnBurger.classList)
})