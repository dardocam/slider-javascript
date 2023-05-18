(function () {
  "use strict";
  console.log("Simple Slider is Load");
  //declaracion de variables
  const myphotos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  var currentImage = 0;
  const frame = document.getElementById("frame");
  const nextBtn = document.getElementById("nextBtn");
  const prvBtn = document.getElementById("prvBtn");

  //funcion para el manejo de la pila de imagenes
  function swapImage() {
    const newSlide = document.createElement("img");
    newSlide.src = `img/${myphotos[currentImage]}`;
    newSlide.className = "fadeinimg";
    frame.appendChild(newSlide);
    if (frame.children.length > 2) {
      frame.removeChild(frame.children[0]);
    }
  }

  //evento click para el boton next
  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    currentImage++;
    currentImage = currentImage > myphotos.length - 1 ? 0 : currentImage;
    swapImage();
  });
  //evento click para el boton previous
  prvBtn.addEventListener("click", function (event) {
    event.preventDefault();
    currentImage--;
    currentImage = currentImage < 0 ? myphotos.length - 1 : currentImage;
    swapImage();
  });
})();
