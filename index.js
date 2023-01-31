const SimpleSwiper = (options) => {
  const { data } = options;
  if (typeof document !== "undefined") {
    let hideAllSlides2 = function() {
      for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
      }
    };
    var hideAllSlides = hideAllSlides2;
    const slides = document.getElementsByClassName("carousel-item");
    const nextButton = document.getElementById("carousel-next");
    const prevButton = document.getElementById("carousel-prev");
    let position = 0;
    const numberOfSlides = slides.length;
    const handleMoveToNextSlide = function(e) {
      hideAllSlides2();
      if (position === numberOfSlides - 1) {
        position = 0;
      } else {
        position++;
      }
      slides[position].classList.add("carousel-item-visible");
    };
    const handleMoveToPrevSlide = function(e) {
      hideAllSlides2();
      if (position === 0) {
        position = numberOfSlides - 1;
      } else {
        position--;
      }
      slides[position].classList.add("carousel-item-visible");
    };
    nextButton.addEventListener("click", handleMoveToNextSlide);
    prevButton.addEventListener("click", handleMoveToPrevSlide);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "carousel" }, data.map((item, index) => {
    return /* @__PURE__ */ React.createElement("div", { className: "carousel-item", key: index }, /* @__PURE__ */ React.createElement("img", { src: item }));
  }), /* @__PURE__ */ React.createElement("div", { className: "carousel-actions" }, /* @__PURE__ */ React.createElement("button", { id: "carousel-prev" }, "P"), /* @__PURE__ */ React.createElement("button", { id: "carousel-next" }, "N")));
};
module.exports = SimpleSwiper;
