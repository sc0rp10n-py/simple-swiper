import React, { useState } from "react";

const SimpleSwiper = (props) => {
    const { data } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState(data);

    const prevImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img
                src={images[currentIndex]}
                alt="Slide"
                style={{ width: "100%", height: 300 }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
};

export default SimpleSwiper;

// import React from "react";
// const SimpleSwiper = (options) => {
//   const { data } = options;
//   if (typeof document !== "undefined") {
//     let hideAllSlides = function() {
//       for (const slide of slides) {
//         slide.classList.remove("carousel-item-visible");
//         slide.classList.add("carousel-item-hidden");
//       }
//     };
//     const slides = document.getElementsByClassName("carousel-item");
//     const nextButton = document.getElementById("carousel-next");
//     const prevButton = document.getElementById("carousel-prev");
//     let position = 0;
//     const numberOfSlides = slides.length;
//     const handleMoveToNextSlide = function(e) {
//       hideAllSlides();
//       if (position === numberOfSlides - 1) {
//         position = 0;
//       } else {
//         position++;
//       }
//       slides[position].classList.add("carousel-item-visible");
//     };
//     const handleMoveToPrevSlide = function(e) {
//       hideAllSlides();
//       if (position === 0) {
//         position = numberOfSlides - 1;
//       } else {
//         position--;
//       }
//       slides[position].classList.add("carousel-item-visible");
//     };
//     nextButton.addEventListener("click", handleMoveToNextSlide);
//     prevButton.addEventListener("click", handleMoveToPrevSlide);
//   }
//   return /* @__PURE__ */ React.createElement("div", { className: "carousel" }, data.map((item, index) => {
//     return /* @__PURE__ */ React.createElement("div", { className: "carousel-item", key: index }, /* @__PURE__ */ React.createElement("img", { src: item }));
//   }), /* @__PURE__ */ React.createElement("div", { className: "carousel-actions" }, /* @__PURE__ */ React.createElement("button", { id: "carousel-prev" }, "P"), /* @__PURE__ */ React.createElement("button", { id: "carousel-next" }, "N")));
// };
// module.exports = SimpleSwiper;
