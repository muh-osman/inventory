var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s3 = document.querySelector(".s3");
var s4 = document.querySelector(".s4");
var s5 = document.querySelector(".s5");
var swiperOrderList = [s1, s2, s3, s4, s5];
var swiperClassList = [
  "swiper-1",
  "swiper-2",
  "swiper-3",
  "swiper-4",
  "swiper-5",
];

function setInitialClasses() {
  swiperOrderList.forEach(function (swiper, i) {
    swiperClassList.forEach(function (c) {
      swiper.classList.remove(c);
    });
    swiper.classList.add(swiperClassList[i]);
  });
}

function setActiveSlide(swiperElement) {
  swiperOrderList.forEach(function (swiper) {
    swiper.classList.remove("active");
  });
  swiperElement.classList.add("active");
  if (swiperElement.classList.contains("s5")) {
    document.getElementById("message").style.display = "block";
  } else {
    document.getElementById("message").style.display = "none";
  }
}

document.querySelectorAll(".swiper").forEach(function (swiper) {
  swiper.addEventListener("click", function () {
    setActiveSlide(swiper);
  });
});

// Detecting arrow key presses
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // up arrow
    console.log("up");
    var s = swiperOrderList.pop();
    swiperOrderList.unshift(s);
    setInitialClasses(); // Reset classes after rotation
    setActiveSlide(s); // Set active class after rotation
  } else if (e.keyCode == "40") {
    // down arrow
    console.log("down");
    var s = swiperOrderList.shift();
    swiperOrderList.push(s);
    setInitialClasses(); // Reset classes after rotation
    setActiveSlide(s); // Set active class after rotation
  }
}

document.body.onload = function () {
  setInitialClasses();
  setActiveSlide(swiperOrderList[0]); // Set the first element as active
};
