const swiperOrderList = Array.from(document.querySelectorAll(".swiper"));
const swiperClassList = [
  "swiper-1",
  "swiper-2",
  "swiper-3",
  "swiper-4",
  "swiper-5",
  "swiper-6",
  "swiper-7",
];
const audio = new Audio('./TICKING.mp3');

let activeIndex = 3;

setInitialClasses();

function setInitialClasses() {
  swiperOrderList.forEach((el, i) => {
    el.classList.remove(...swiperClassList);
    el.classList.add(swiperClassList[i]);
  });
}

function setActiveSlide(index) {
  const rotationAmount =
    (index - activeIndex + swiperOrderList.length) % swiperOrderList.length;
  rotateArray(swiperOrderList, rotationAmount);
  setInitialClasses();
  activeIndex = index;

  const imgSrc = swiperOrderList[activeIndex].getAttribute("data-img");
  const imgElement = document.querySelector("img");
  imgElement.setAttribute("src", imgSrc);
}

function rotateArray(arr, amount) {
  if (amount > 0) {
    const removedItems = arr.splice(0, amount);
    arr.push(...removedItems);
  } else if (amount < 0) {
    const removedItems = arr.splice(amount);
    arr.unshift(...removedItems);
  }
}

swiperOrderList.forEach((el, index) => {
  el.addEventListener("click", () => {
    setActiveSlide(index);
  });
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode === 38) {
    audio.play();
    e.preventDefault();
    setActiveSlide(
      (activeIndex - 1 + swiperOrderList.length) % swiperOrderList.length
    );
  } else if (e.keyCode === 40) {
    audio.play();
    e.preventDefault();
    setActiveSlide((activeIndex + 1) % swiperOrderList.length);
  }
}
