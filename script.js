let swiperOrderList = [...document.querySelectorAll(".swiper")];

let swiperClassList = [
  "swiper-1",
  "swiper-2",
  "swiper-3",
  "swiper-4",
  "swiper-5",
];

// Set initial active item
let activeIndex = 2;

function setInitialClasses() {
  swiperOrderList.forEach(function (swiper, i) {
    swiper.classList.remove(...swiperClassList);
    swiper.classList.add(swiperClassList[i]);
  });
}

function setActiveSlide(swiperElement) {
  swiperOrderList.forEach(function (swiper) {
    swiper.classList.remove("active");
  });
  swiperElement.classList.add("active");
}

// Handle mouse click on items
swiperOrderList.forEach(function (swiper, i) {
  swiper.addEventListener("click", function () {
    setActiveSlide(swiper);

    swiperOrderList[activeIndex].classList.remove("active");
    const prevActiveIndex = activeIndex;
    activeIndex = (i + swiperOrderList.length) % swiperOrderList.length;
    swiperOrderList[activeIndex].classList.add("active");

    // Rotate array based on active element position
    const rotationAmount =
      (activeIndex - prevActiveIndex + swiperOrderList.length) %
      swiperOrderList.length;
    rotateArray(swiperOrderList, rotationAmount);
    setInitialClasses();
  });
});

function rotateArray(arr, amount) {
  if (amount > 0) {
    // Rotate array right
    const removedItems = arr.splice(0, amount);
    arr.push(...removedItems);
  } else if (amount < 0) {
    // Rotate array left
    const removedItems = arr.splice(amount);
    arr.unshift(...removedItems);
  }
}

// Handle keyboard arrow keys
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // Arrow up
    // let s = swiperOrderList.pop();
    // swiperOrderList.unshift(s);
    // setInitialClasses();
    // setActiveSlide(swiperOrderList[2]);
    setActiveSlide(activeIndex - 1);
  } else if (e.keyCode == "40") {
    // Arrow down
    // let s = swiperOrderList.shift();
    // swiperOrderList.push(s);
    // setInitialClasses();
    // setActiveSlide(swiperOrderList[2]);
    setActiveSlide(activeIndex + 1);
  }
}

window.onload = function () {
  setInitialClasses();
  setActiveSlide(swiperOrderList[activeIndex]);
};
