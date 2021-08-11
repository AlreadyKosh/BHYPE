//CARROSSEL PEQUENO (1)
const sliders = document.querySelector(".carrossel-box");
var scrollPerClick = 280;
var ImagePadding = 20;


// Rolar 
var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}

//CARROSSEL GRANDE (2)
const slidersG = document.querySelector(".carrossel-box-G");
var scrollPerClickG = 460;
var ImagePaddingG = 20;


// Rolar 
var scrollAmountG = 0;

function sliderScrollLeftG() {
  slidersG.scrollTo({
    top: 0,
    left: (scrollAmountG -= scrollPerClickG),
    behavior: "smooth",
  });

  if (scrollAmountG < 0) {
    scrollAmountG = 0;
  }

  console.log("Scroll Amount: ", scrollAmountG);
}

function sliderScrollRightG() {
  if (scrollAmountG <= slidersG.scrollWidth - slidersG.clientWidth) {
    slidersG.scrollTo({
      top: 0,
      left: (scrollAmountG += scrollPerClickG),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmountG);
}

//CARROSSEL PEQUENO (3)
const slidersP = document.querySelector(".carrossel-box-P");
var scrollPerClickP = 300;
var ImagePaddingP = 20;


// Rolar 
var scrollAmountP = 0;

function sliderScrollLeftP() {
  slidersP.scrollTo({
    top: 0,
    left: (scrollAmountP -= scrollPerClickP),
    behavior: "smooth",
  });

  if (scrollAmountP < 0) {
    scrollAmountP = 0;
  }

  console.log("Scroll Amount: ", scrollAmountP);
}

function sliderScrollRightP() {
  if (scrollAmountP <= slidersP.scrollWidth - slidersP.clientWidth) {
    slidersP.scrollTo({
      top: 0,
      left: (scrollAmountP += scrollPerClickP),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmountP);
}

