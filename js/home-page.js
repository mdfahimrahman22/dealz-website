// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  //------------------------   u-section-1 ------------------------//


  gsap.fromTo(
    "#cursor",
    { autoAlpha: 0, x: -20 },
    { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
  );

  gsap.to("#section-1-u-text-1", {
    text: {
      value:
        "Restaurant food,<br>takeaway and groceries.",
    },
    duration: 7,
    delay: 1,
    repeat: -1,
    yoyo: true,
    ease: "slow(0.7,0.7,false)",
  });

  //------------------------   u-section-2 ------------------------//
  // parallax effect
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-effect").forEach((shift) => {
      const position = shift.getAttribute("parallax-value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  gsap.from(".rtl-animation", {
    scrollTrigger: {
      trigger: ".rtl-animation",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });
  gsap.from(".ltr-animation", {
    scrollTrigger: {
      trigger: ".ltr-animation",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    x: -100,
    duration: 1,
  });

  //------------------------   u-section-3 ------------------------//
  gsap.to(".always-rotate-animation", {
    rotation: "360",
    duration: 60,
    ease: "none",
    repeat: -1,
  });

  gsap.from("#delicious-foods-counter", {
    scrollTrigger: {
      trigger: "#delicious-foods-counter",
      start: "50% 80%",
      end: "50% 0%",
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
      trigger: ".u-layout-cell-2",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
  });

  tl.from("#section-3-group-elements-1", {
    opacity: 0,
    x: 100,
  });
  tl.from("#section-3-group-elements-2", {
    opacity: 0,
    x: 100,
  });
  tl.from("#section-3-group-elements-3", {
    opacity: 0,
    x: 100,
  });
  //------------------------   u-section-4 ------------------------//
  gsap.from("#pay-utility-bills-icons-left", {
    scrollTrigger: {
      trigger: "#pay-utility-bills-icons-left",
      start: "50% 80%",
      end: "0% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
    opacity: 0,
    x: -100,
    duration: 1,
  });

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
      trigger: ".u-section-4",
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
  //------------------------   u-section-5 ------------------------//
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
  gsap.from("#section-5-progress-circle", {
    scrollTrigger: {
      trigger: "#section-5-progress-circle",
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

  //------------------------   u-section-6 ------------------------//
  gsap.from("#ticket-img", {
    rotate: -20,
    repeat: -1,
    yoyo: true,
    duration: 5,
  });
  gsap.from("#ticket-bg", {
    scrollTrigger: {
      trigger: ".u-section-6",
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
      trigger: ".u-section-6",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#section-6-group-elements-1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-6-group-elements-2", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-6-group-elements-3", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-6-group-elements-4", {
    opacity: 0,
    x: -100,
  });

  gsap.to("#and-many-more-text", {
    duration: 2,
    delay: 1,
    repeat: -1,
    // yoyo: true,
    text: {
      value: "and many more...",
    },
  });

  //------------------------   u-section-8 ------------------------//
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".u-section-8",
      start: "50% 80%",
      end: "50% 0%",
      toggleActions: "play pause resume reset",
      //   markers: true,
    },
  });

  tl.from("#section-8-group-elements-2", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-8-group-elements-1", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-8-group-elements-4", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-8-group-elements-3", {
    opacity: 0,
    x: -100,
  });
  tl.from("#section-8-group-elements-5", {
    opacity: 0,
    x: -100,
  });
});

//------------------------   u-section-9 ------------------------//
