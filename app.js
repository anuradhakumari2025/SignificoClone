// swiper
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
function homePageAnimation() {
  gsap.set(".marqueeElem", { scale: 5 });

  //marquee
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      scrub: 2,
      start: "top top",
      end: "bottom bottom",
    },
  });
  tl.to(
    ".vidioDiv",
    {
      duration: 1,
      "--clip": "0%",
      ease: "Power3.out",
    },
    "a"
  );
  tl.to(
    ".marqueeElem",
    {
      duration: 1,
      scale: 1,
      ease: "Power3.out",
    },
    "a"
  );
  tl.to(
    ".marqueeElemLeft",
    {
      xPercent: "-10",
      stagger: 0.03,
      ease: "Power3.out",
    },
    "b"
  );
  tl.to(
    ".marqueeElemRight",
    {
      xPercent: "10",
      stagger: 0.03,
      ease: "Power3.out",
    },
    "b"
  );
}

function realPageAnimation() {
  gsap.to(".slide", {
    xPercent: -300,
    scrollTrigger: {
      trigger: ".real",
      scrub: 2,
      start: "top top",
      end: "bottom bottom",
    },
    ease: "Power4.out",
  });
}
function teamAnimation() {
  document.querySelectorAll(".listelem").forEach((elem) => {
    elem.addEventListener("mousemove", (detail) => {
      gsap.to(elem.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, detail.clientX),
        duration: 0.5,
        ease: "Power4.out",
      });
    });
    elem.addEventListener("mouseleave", (detail) => {
      gsap.to(elem.querySelector(".picture"), {
        opacity: 0,
        duration: 0.5,
        ease: "Power4.out",
      });
    });
  });
}

(function () {
  var scroll = new LocomotiveScroll();
})();

function bodyColorChange() {
  document.querySelectorAll(".section").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      // markers:true,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        document.body.setAttribute("theme", el.dataset.color);
      },
      onEnterBack: () => {
        document.body.setAttribute("theme", el.dataset.color);
      },
    });
  });
}
// *************************   Cards Animation   *************************
function cardAnimation() {
  gsap.set(".card", { y: 450 });
  gsap.to(".card", {
    scrollTrigger: {
      // markers: true,
      trigger: ".craft",
      start: "top 30%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 50,
    scale: 1,
    backgroundColor: "black",
    duration:2,
    delay: 0.5,
    stagger: 0.3,
    ease: "Power4.out",
  });
}

function blueAnimation(){
  document.querySelectorAll(".blueLayer").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: "Power3.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: "Power3.out",
      });
    });
  });
}


homePageAnimation();
realPageAnimation();
teamAnimation();
bodyColorChange();
cardAnimation();
blueAnimation()
