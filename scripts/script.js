const btnBurger = document.querySelector(".nav-bar__menu__burger");
const btnBurgerIcoUpper = document.querySelector(
  ".nav-bar__menu__burger__ico-upper"
);
const btnBurgerIcoCenter = document.querySelector(
  ".nav-bar__menu__burger__ico-center"
);
const btnBurgerIcoBottom = document.querySelector(
  ".nav-bar__menu__burger__ico-bottom"
);
const menuList = document.querySelector(".nav-bar__menu__list");
const allInfo = document.querySelectorAll(".header__info");
const moveLeft = document.querySelector(".header__infos__move:nth-child(1)");
const moveRight = document.querySelector(".header__infos__move:nth-child(2)");

btnBurger.addEventListener("click", () => {
  btnBurgerIcoUpper.classList.toggle("active");
  btnBurgerIcoCenter.classList.toggle("active");
  btnBurgerIcoBottom.classList.toggle("active");
  menuList.classList.toggle("nav-bar__menu__list--active");
});


let moveCounter = 1;
let counter = 0;
allInfo[0].style.opacity = "1";

moveLeft.addEventListener("click", () => {
  counter <= 0 ? (counter = 2) : counter--;
  allInfo.forEach((info) => (info.style.opacity = "0"));
  allInfo[counter].style.opacity = "1";
});
moveRight.addEventListener("click", () => {
  counter >= 2 ? (counter = 0) : counter++;
  allInfo.forEach((info) => (info.style.opacity = "0"));
  allInfo[counter].style.opacity = "1";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && allInfo[0].style.opacity !== "1") {
    allInfo.forEach((info) => {
      info.style.opacity = "1";
    });
  }
});

// --->>> Slider with customer comments <<<--- //
const commentWrapper = document.querySelector(".comments-slider__wrapper");
const commentsList = document.querySelectorAll(
  ".comments-slider__wrapper__text"
);
const leftBtn = document.querySelector(".comments-slider__btn--left");
const rightBtn = document.querySelector(".comments-slider__btn--right");
const commentsListSize = commentsList[0].clientWidth;
let counterLsit = 1;

commentWrapper.style.transform = `translateX(${
  -commentsListSize * counterLsit
}px)`;

rightBtn.addEventListener("click", () => {
  if (counterLsit >= commentsList.length - 1) return;
  commentWrapper.style.transition = "1s ease-in-out";
  counterLsit++;
  commentWrapper.style.transform = `translateX(${
    -commentsListSize * counterLsit
  }px)`;
});
leftBtn.addEventListener("click", () => {
  if (counterLsit <= 0) return;
  commentWrapper.style.transition = "transform 0.5s ease-in-out";
  counterLsit--;
  commentWrapper.style.transform = `translateX(${
    -commentsListSize * counterLsit
  }px)`;
});

commentWrapper.addEventListener("transitionend", () => {
  if (commentsList[counterLsit].id === "lastClone") {
    commentWrapper.style.transition = "none";
    counterLsit = commentsList.length - 2;
    commentWrapper.style.transform = `translateX(${
      -commentsListSize * counterLsit
    }px)`;
  }
  if (commentsList[counterLsit].id === "firstClone") {
    commentWrapper.style.transition = "none";
    counterLsit = commentsList.length - counterLsit;
    commentWrapper.style.transform = `translateX(${
      -commentsListSize * counterLsit
    }px)`;
  }
});

// --->>> Section with events <<<--- //
// Set width of picture in box event
document.querySelectorAll(".events__event__picture").forEach((picture) => {
  picture.style.height = `${
    document.querySelector(".events__event").clientWidth * 0.75
  }px`;
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".events__event__picture").forEach((picture) => {
    picture.style.height = `${
      document.querySelector(".events__event").clientWidth * 0.75
    }px`;
  });
});

// Set height of box event
let maxHeight = 0;
document
  .querySelectorAll(".events__event")
  .forEach((singleEvent) =>
    singleEvent.clientHeight > maxHeight
      ? (maxHeight = singleEvent.clientHeight)
      : null
  );
document
  .querySelectorAll(".events__event")
  .forEach((singleEvent) => (singleEvent.style.height = `${maxHeight}px`));

// Scroll BTN
const btnScroll = document.querySelector(".grid-wrapper__btnUp");
btnScroll.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    btnScroll.style.opacity = 1;
    btnScroll.style.zIndex = 10;
  } else {
    btnScroll.style.opacity = 0;
    btnScroll.style.zIndex = 0;
  }
});

///////////////////////
const menuButton = document.querySelector('.nav-bar__menu__item:nth-child(2)');
const menuArticle = document.querySelector(".menu");
const menuItemLists = document.querySelectorAll(".context__menu");
const itemList = document.querySelectorAll(".context__menu__list");
let menuCounter = 0;

const btnMenuPrev = document.querySelector('.menu__btn--prev');
const btnMenuNext = document.querySelector('.menu__btn--next');


const drawList = (itemsList, page) => {
  itemsList.forEach((coffee) => {
    const liItem = document.createElement("li");
    liItem.classList.add("context__menu__list__item");
  
    const title = document.createElement("p");
    title.innerText = coffee.name;
    title.classList.add("context__menu__list__item__title");
    liItem.appendChild(title);
  
    const sep = document.createElement("div");
    sep.classList.add("context__menu__list__item__sep");
    liItem.appendChild(sep);
  
    const price = document.createElement("p");
    price.innerText = `${coffee.priceSmall.toFixed(2)} / ${coffee.priceBug.toFixed(2)} PLN`;
    price.classList.add("context__menu__list__item__price");
    liItem.appendChild(price);
  
    itemList[page].appendChild(liItem);
  });
}

drawList(menuListItem, 0);
drawList(cakeMenuList, 1);

let counterMenu = 0;
menuItemLists[0].style.opacity = "1";

btnMenuPrev.addEventListener("click", () => {
  counterMenu <= 0 ? (counterMenu = menuItemLists.length - 1) : counterMenu--;
  menuItemLists.forEach((menuCard) => (menuCard.style.opacity = "0"));
  menuItemLists[counterMenu].style.opacity = "1";
});
btnMenuNext.addEventListener("click", () => {
  counterMenu >= (menuItemLists.length - 1) ? (counterMenu = 0) : counterMenu++;
  menuItemLists.forEach((menuCard) => (menuCard.style.opacity = "0"));
  menuItemLists[counterMenu].style.opacity = "1";
});

menuButton.addEventListener('click', () => {
  menuArticle.classList.toggle('menu--active');
  menuList.classList.toggle("nav-bar__menu__list--active");
})