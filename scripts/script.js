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

  console.log(btnBurger.classList);
});
let moveCounter = 1;

let counter = 0;
allInfo[0].style.opacity = "1";

moveLeft.addEventListener("click", () => {
  counter <= 0 ? (counter = 2) : counter--;
  allInfo.forEach((info) => (info.style.opacity = "0"));
  allInfo[counter].style.opacity = "1";
  console.log(counter);
});
moveRight.addEventListener("click", () => {
  counter >= 2 ? (counter = 0) : counter++;
  allInfo.forEach((info) => (info.style.opacity = "0"));
  allInfo[counter].style.opacity = "1";
  console.log(counter);
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
  console.log(window.scrollY);
  if (window.scrollY > window.innerHeight - 100) {
    btnScroll.style.opacity = 1;
    btnScroll.style.zIndex= 10;
  } else {
    btnScroll.style.opacity = 0;
    btnScroll.style.zIndex= 0;
  }
});
