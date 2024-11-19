var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
gsap.set(".marqueeElem",{scale:3})
let tl = gsap.timeline(
  {scrollTrigger: {
    trigger: ".home",
    pin: true,
    scrub: 2,
    start: "top top",
    end: "bottom top",
  },
  }
);
tl.to(".vidioDiv", {
  duration: 1,
  "--clip": "0%",
  ease:"Power3.out"
},"a");
tl.to(".marqueeElem", {
  duration: 1,
  scale:1,
  ease:"Power3.out"
},"a");
tl.to(".marqueeElemLeft",{
  xPercent:"-10",
  stagger:0.03,
  ease:"Power3.out"
},"b")
tl.to(".marqueeElemRight",{
  xPercent:"10",
  stagger:0.03,
  ease:"Power3.out"
},"b")
