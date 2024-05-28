// First slide
var explore = new Splide("#explore", {
  type: "loop",
  perPage: 5,
  //   autoplay: true,
  arrows: false,
  interval: 2000,
  pagination: false,
  gap: 20,

  breakpoints: {
    576: {
      perPage: 2,
    },

    768: {
      perPage: 3,
    },

    1024: {
      perPage: 4,
    },
  },
});

explore.mount();
