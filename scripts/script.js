const btnBurger = document.querySelector('.nav-bar__menu__burger');
const btnBurgerIcoUpper = document.querySelector('.nav-bar__menu__burger__ico-upper');
const btnBurgerIcoCenter = document.querySelector('.nav-bar__menu__burger__ico-center');
const btnBurgerIcoBottom = document.querySelector('.nav-bar__menu__burger__ico-bottom');
const menuList = document.querySelector('.nav-bar__menu__list');
// const infos = document.querySelector('.header__infos');


const allInfo = document.querySelectorAll('.header__info');
// console.log(document.querySelectorAll('.header__info')[1].style.opacity = '1')

const moveLeft = document.querySelector('.header__infos__move:nth-child(1)');
const moveRight = document.querySelector('.header__infos__move:nth-child(2)');

btnBurger.addEventListener('click', () => {
  btnBurgerIcoUpper.classList.toggle('active')
  btnBurgerIcoCenter.classList.toggle('active');
  btnBurgerIcoBottom.classList.toggle('active');
  menuList.classList.toggle('nav-bar__menu__list--active');

  console.log(btnBurger.classList)
})
let moveCounter = 1;

let counter = 0;
allInfo[0].style.opacity = '1';

moveLeft.addEventListener('click', () => {
  counter <= 0 ? counter = 2 : counter--;
  allInfo.forEach(info => info.style.opacity = '0')
  allInfo[counter].style.opacity = '1';
  console.log(counter);
})
moveRight.addEventListener('click', () => {
  counter >= 2 ? counter = 0 : counter++;
  allInfo.forEach(info => info.style.opacity = '0')
  allInfo[counter].style.opacity = '1';
  console.log(counter);
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024 && allInfo[0].style.opacity !== '1') {
    allInfo.forEach(info => {info.style.opacity = '1'})
  }
})