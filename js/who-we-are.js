// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  //------------------------   u-section-1 ------------------------//

  //------------------------   u-section-2 ------------------------//

  // gsap.to(".always-rotate-animation", {
  //   rotation: "360",
  //   duration: 60,
  //   ease: "none",
  //   repeat: -1,
  // });

  gsap.from("#chef-img", {
    scrollTrigger: {
      trigger: "#chef-img",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
    scale: 0.6,
    opacity: 0,
    x: -100,
    duration: 1,
  });

  gsap.from("#delicious-foods-counter", {
    scrollTrigger: {
      trigger: "#delicious-foods-counter",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play none none reset",
      //   markers: true,
    },
    textContent: 950,
    duration: 2,
    ease: "power1.in",
    snap: { textContent: 1 },
    onComplete: function () {
      this.targets()[0].innerHTML = this.targets()[0].textContent + "+";
    },
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#delicious-foods",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
  });

  tl.from("#delicious-foods-icon-1", {
    opacity: 0,
    x: 100,
  });
  tl.from("#delicious-foods-icon-2", {
    opacity: 0,
    x: 100,
  });
  tl.from("#delicious-foods-icon-3", {
    opacity: 0,
    x: 100,
  });

  //------------------------   u-section-3 ------------------------//

  gsap.from("#pay-utility-bills-icons-right", {
    scrollTrigger: {
      trigger: "#pay-utility-bills-icons-right",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    xPercent: -30,
    yPercent: 30,
    duration: 4,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#pay-utility-bills-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
  });

  tl.from("#pay-utility-bills-icon-1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#pay-utility-bills-icon-2", {
    opacity: 0,
    x: -100,
  });
  tl.from("#pay-utility-bills-icon-3", {
    opacity: 0,
    x: -100,
  });
  tl.from("#pay-utility-bills-icon-4", {
    opacity: 0,
    x: -100,
  });
  tl.from("#pay-utility-bills-icon-5", {
    opacity: 0,
    x: -100,
  });
  //------------------------   u-section-4 ------------------------//
  gsap.from("#mobile-img", {
    scrollTrigger: {
      trigger: "#mobile-img",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.from("#pay-utility-bills-progress-circle", {
    scrollTrigger: {
      trigger: "#pay-utility-bills-progress-circle",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      scrub: true,
      //   markers: true,
    },
    opacity: 0,
    yPercent: -100,
    duration: 1,
  });

  //   //------------------------   u-section-5 ------------------------//
  gsap.from("#ticket-img", {
    rotate: -20,
    repeat: -1,
    yoyo: true,
    duration: 5,
  });
  gsap.from("#ticket-bg", {
    scrollTrigger: {
      trigger: "#booking-tickets-section",
      start: "0% 70%",
      end: "0% 20%",
      toggleActions: "play pause resume reset",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    scale: -0.5,
    duration: 2,
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#booking-tickets-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#booking-tickets-icon-1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#booking-tickets-icon-2", {
    opacity: 0,
    x: -100,
  });
  tl.from("#booking-tickets-icon-3", {
    opacity: 0,
    x: -100,
  });
  tl.from("#booking-tickets-icon-4", {
    opacity: 0,
    x: -100,
  });

  tl.to("#and-many-more-text", {
    duration: 2,
    delay: 1,
    repeat: -1,
    // yoyo: true,
    text: {
      value: "and many more...",
    },
  });

  //------------------------   u-section-6 ------------------------//

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#pharmacy-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#pharmacy-text-h1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#pharmacy-text-p1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#pharmacy-text-p2", {
    opacity: 0,
    x: -100,
  });
  gsap.from("#pharmacy-section-img-right", {
    scrollTrigger: {
      trigger: "#pharmacy-section",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });

  //------------------------   u-section-7 ------------------------//
  gsap.from("#delivery-section-img", {
    scrollTrigger: {
      trigger: "#delivery-section",
      start: "0% 70%",
      end: "0% 20%",
      toggleActions: "play pause resume reset",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    scale: -0.5,
    duration: 2,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#delivery-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#delivery-text-h1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#delivery-text-p1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#delivery-text-p2", {
    opacity: 0,
    x: -100,
  });
  tl.from("#delivery-text-p3", {
    opacity: 0,
    x: -100,
  });

  tl.from("#app-store-img", {
    opacity: 0,
    x: -100,
  });

  tl.from(
    "#play-store-img",
    {
      opacity: 0,
      x: -100,
    },
    "<"
  );

  //------------------------   u-section-8 ------------------------//
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#flower-shop-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#flower-shop-text-h1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#flower-shop-text-p1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#flower-shop-text-p2", {
    opacity: 0,
    x: -100,
  });

  gsap.set("#flower-shop-img-div", { backgroundSize: "50% 50%" });
  gsap.to("#flower-shop-img-div", {
    scrollTrigger: {
      trigger: "#flower-shop-section",
      start: "0% 70%",
      end: "0% 20%",
      toggleActions: "play none none reset",
      scrub: true,
      // markers: true,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    autoRound: false,
    ease: Power1.ease0ut,
  });
  //------------------------   u-section-9 ------------------------//
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#fashion-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#fashion-text-h1", {
    opacity: 0,
    x: 100,
  });
  tl.from("#fashion-text-p1", {
    opacity: 0,
    x: 100,
  });
  tl.from("#fashion-text-p2", {
    opacity: 0,
    x: 100,
  });
  tl.from(
    "#fashion-text-p3",
    {
      opacity: 0,
      x: 100,
    },
    "<"
  );

  gsap.from("#fashion-section-img", {
    scrollTrigger: {
      trigger: "#fashion-section",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    x: -100,
    duration: 1,
  });

  //------------------------   u-section-10 ------------------------//
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home-decor-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#home-decor-text-h1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#home-decor-text-p1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#home-decor-text-p2", {
    opacity: 0,
    x: -100,
  });

  gsap.from("#home-decor-img", {
    scrollTrigger: {
      trigger: "#home-decor-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });

  $(".bounce-effect").on("mouseenter", function () {
    var duration = 1;
    TweenMax.to(this, duration / 4, { y: -25, ease: Power2.easeOut });
    TweenMax.to(this, duration / 2, {
      y: 0,
      ease: Bounce.easeOut,
      delay: duration / 4,
    });
  });

  //------------------------   u-section-11 ------------------------//
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#electronics-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#electronics-text-h1", {
    opacity: 0,
    x: 100,
  });
  tl.from("#electronics-text-p1", {
    opacity: 0,
    x: 100,
  });
  tl.from("#electronics-text-p2", {
    opacity: 0,
    x: 100,
  });

  gsap.from("#electronics-section-img", {
    scrollTrigger: {
      trigger: "#electronics-section",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
    opacity: 0,
    x: -100,
    duration: 1,
  });

  //------------------------   u-section-12 ------------------------//
  gsap.from("#partner-with-dealz-img", {
    scrollTrigger: {
      trigger: "#partner-with-dealz-section",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
  });
});
