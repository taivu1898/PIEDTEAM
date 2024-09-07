document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide-demo", {
    perPage: 5,
    rewind: true,
    perMove: 1,
    type: "loop",
    wheel: true,
    autoplay: true,
  });
  splide.mount();
});

// Callback: lắng nghe sự kiện, sau khi html chạy xong rồi thì mới chạy
