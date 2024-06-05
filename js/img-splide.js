let img = new Splide("#left-img", {
  type: "loop",
  perPage: 1,
  // autoplay: true,
  arrows: false,
  interval: 2000,
  pagination: false,
  gap: 20,

  breakpoints: {
    576: {
      perPage: 1,
    },

    768: {
      perPage: 1,
    },

    1024: {
      perPage: 1,
    },
  },
});

img.mount();

let card = new Splide("#card", {
  type: "loop",
  perPage: 2,
  // autoplay: true,
  arrows: false,
  interval: 2000,
  pagination: false,
  gap: 20,
  perMove: 1,
  breakpoints: {
    576: {
      perPage: 1,
    },

    768: {
      perPage: 2,
      gap: 10,
    },

    1024: {
      perPage: 2,
    },
  },
});

card.mount();
