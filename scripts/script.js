// --->>> Functionality of the hamburger menu icon <<<--- //
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

// --->>> Changing the div element with information inside the header <<<--- //
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

// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 1024 && allInfo[0].style.opacity !== "1") {
//     allInfo.forEach((info) => {
//       info.style.opacity = "1";
//     });
//   }
// });

// --->>> Set height of box info <<<--- //
const moveBtnsInfo = document.querySelectorAll('.header__infos__move');
let maxHeightInfoDiv = 0;

const setStyleForDivInfo = () => {
  allInfo.forEach((singleDiv) => (
    singleDiv.clientHeight > maxHeightInfoDiv
        ? (maxHeightInfoDiv = singleDiv.clientHeight)
        : null
  ));
  allInfo.forEach((singleDiv) => {
    singleDiv.style.height = `${maxHeightInfoDiv}px`
  });
  
  moveBtnsInfo.forEach( singleDiv => {
    singleDiv.style.height = `${maxHeightInfoDiv * 0.5}px`
    singleDiv.style.marginBottom = `${maxHeightInfoDiv * 0.25}px`
    singleDiv.style.borderTop = `${maxHeightInfoDiv * 0.25}px solid transparent`
    singleDiv.style.borderBottom = `${maxHeightInfoDiv * 0.25}px solid transparent`
  })
}

setStyleForDivInfo()

// window.addEventListener("resize", () => {
//   maxHeightInfoDiv = 0;

//   allInfo.forEach((singleDiv) => {
//     singleDiv.style.height = 'auto'
//   });

//   setStyleForDivInfo();
// })

// --->>> Slider with customer comments <<<--- //
const commentWrapper = document.querySelector(".comments-slider__wrapper");
let counterLsit = 1;

const commentsList = document.querySelectorAll(".comments-slider__wrapper__text");
const leftBtn = document.querySelector(".comments-slider__btn--left");
const rightBtn = document.querySelector(".comments-slider__btn--right");

let commentsListSize = commentsList[0].clientWidth;

const setStyleForCommentDiv = () => {
  commentWrapper.style.transform = `translateX(${ -commentsListSize * counterLsit }px)`;

  rightBtn.addEventListener("click", () => {
    if (counterLsit >= commentsList.length - 1) return;
    commentWrapper.style.transition = "1s ease-in-out";
    counterLsit++;
    commentWrapper.style.transform = `translateX(${ -commentsListSize * counterLsit }px)`;
  });

  leftBtn.addEventListener("click", () => {
    if (counterLsit <= 0) return;
    commentWrapper.style.transition = "transform 0.5s ease-in-out";
    counterLsit--;
    commentWrapper.style.transform = `translateX(${ -commentsListSize * counterLsit }px)`;
  });

  commentWrapper.addEventListener("transitionend", () => {
    if (commentsList[counterLsit].id === "lastClone") {
      commentWrapper.style.transition = "none";
      counterLsit = commentsList.length - 2;
      commentWrapper.style.transform = `translateX(${ -commentsListSize * counterLsit }px)`;
    }

    if (commentsList[counterLsit].id === "firstClone") {
      commentWrapper.style.transition = "none";
      counterLsit = commentsList.length - counterLsit;
      commentWrapper.style.transform = `translateX(${
        -commentsListSize * counterLsit
      }px)`;
    }
  });
}

setStyleForCommentDiv()

window.addEventListener("resize", () => {
  commentsListSize = commentsList[0].clientWidth;
  setStyleForCommentDiv()

  // Set width of picture in box event
  document.querySelectorAll(".events__event__picture").forEach((picture) => {
    picture.style.height = `${ document.querySelector(".events__event").clientWidth * 0.75 }px`;
  });

  maxHeightInfoDiv = 0;
  allInfo.forEach((singleDiv) => {
    singleDiv.style.height = 'auto'
  });
  setStyleForDivInfo();

  if (window.innerWidth >= 1024 && allInfo[0].style.opacity !== "1") {
    allInfo.forEach((info) => {
      info.style.opacity = "1";
    });
  }
})

// --->>> Section with events <<<--- //
// Set width of picture in box event
document.querySelectorAll(".events__event__picture").forEach((picture) => {
  picture.style.height = `${ document.querySelector(".events__event").clientWidth * 0.75 }px`;
});

// window.addEventListener("resize", () => {
//   document.querySelectorAll(".events__event__picture").forEach((picture) => {
//     picture.style.height = `${ document.querySelector(".events__event").clientWidth * 0.75 }px`;
//   });
// });

// --->>> Set height of box event <<<--- //
const eventDiv = document.querySelectorAll(".events__event");
let maxHeight = 0;
eventDiv.forEach((singleEvent) => (
    singleEvent.clientHeight > maxHeight
      ? (maxHeight = singleEvent.clientHeight)
      : null
));

eventDiv.forEach((singleEvent) => (singleEvent.style.height = `${maxHeight}px`));


// Creating a list of items inside a menu
const menuItemLists = document.querySelectorAll(".context__menu");
const itemList = document.querySelectorAll(".context__menu__list");
const btnMenuPrev = document.querySelector(".menu__btn--prev");
const btnMenuNext = document.querySelector(".menu__btn--next");

let menuCounter = 0;


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
    price.innerText = `${coffee.priceSmall.toFixed( 2 )} / ${coffee.priceBug.toFixed(2)} PLN`;
    price.classList.add("context__menu__list__item__price");
    liItem.appendChild(price);

    itemList[page].appendChild(liItem);
  });
};

drawList(menuListItem, 0);
drawList(cakeMenuList, 1);

// System for changing the lists of items in the menu
let counterMenu = 0;
menuItemLists[0].style.opacity = "1";

btnMenuPrev.addEventListener("click", () => {
  counterMenu <= 0 ? (counterMenu = menuItemLists.length - 1) : counterMenu--;
  menuItemLists.forEach((menuCard) => (menuCard.style.opacity = "0"));
  menuItemLists[counterMenu].style.opacity = "1";
});

btnMenuNext.addEventListener("click", () => {
  counterMenu >= menuItemLists.length - 1 ? (counterMenu = 0) : counterMenu++;
  menuItemLists.forEach((menuCard) => (menuCard.style.opacity = "0"));
  menuItemLists[counterMenu].style.opacity = "1";
});

// --->>> functionality of menu buttons <<<--- //
const homeButton = document.querySelector(".nav-bar__menu__item:nth-child(1)");
const menuButton = document.querySelector(".nav-bar__menu__item:nth-child(2)");
const aboutButton = document.querySelector(".nav-bar__menu__item:nth-child(3)");
const menuArticle = document.querySelector(".menu");

const clearMenu = () => {
  menuList.classList.remove("nav-bar__menu__list--active");
  btnBurgerIcoUpper.classList.remove('active');
  btnBurgerIcoCenter.classList.remove('active');
  btnBurgerIcoBottom.classList.remove('active');
}

menuButton.addEventListener("click", () => {
  menuArticle.classList.toggle("menu--active");
  [...menuArticle.classList].includes('menu--active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'overlay';
  clearMenu();
});

homeButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  menuArticle.classList.remove("menu--active");
  clearMenu();
  document.body.style.overflow = 'overlay';
});

aboutButton.addEventListener("click", () => {
  const distFromTop = document.querySelector(".about__title").offsetTop;
  window.scrollTo({ top: distFromTop - 100, behavior: "smooth" });
  menuArticle.classList.remove("menu--active");
  clearMenu();
  document.body.style.overflow = 'overlay';
});

// --->>> disappearance and appearance of the scroll bar  <<<--- //
let timeoutlRef;

window.addEventListener( 'mousemove' , () => {
  console.log('ruch')
  clearTimeout(timeoutlRef);
  document.body.style.overflow = 'overlay';
  timeoutlRef = setTimeout( () => {
    document.body.style.overflow = 'hidden';
  }, 1000)
})

window.addEventListener( 'wheel' , () => {
  clearTimeout(timeoutlRef);
  document.body.style.overflow = 'overlay';
  timeoutlRef = setTimeout( () => {
    document.body.style.overflow = 'hidden';
  }, 500)
})