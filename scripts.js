const enteredNumber = document.getElementById("entered-number");
const outputNumber = document.getElementById("number-plate-text");
const carPlate = document.getElementById("number-plate");
const formSubmit = document.getElementById("form");

const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Car number plate inputs
enteredNumber.addEventListener("input", function () {
  let finalNumber = enteredNumber.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (finalNumber.length > 6) {
    finalNumber = finalNumber.slice(0, 6);
  }
  enteredNumber.value = finalNumber;
  outputNumber.textContent = finalNumber;
});

// Images carousel
const carImages = [
  "Nissan-Qashqai.jpg",
  "Lamborghini-Huracan.jpg",
  "Audi_A6_C5.jpg",
];
let currentImageIndex = 0;
const carImage = document.getElementById("car-image");

changeImage = () => {
  carImage.src = `./images/${carImages[currentImageIndex]}`;
  if (carImages[currentImageIndex] == "Nissan-Qashqai.jpg") {
    carPlate.style.transform = "scale(0.65)";
    carPlate.style.top = "286px";
    carPlate.style.left = "273px";
  }
  if (carImages[currentImageIndex] == "Lamborghini-Huracan.jpg") {
    // TODO
    carPlate.style.top = "10px";
    carPlate.style.left = "10px";
    // carPlate.style.transform =
    //   "perspective(1000px) rotateX(10deg) rotateY(20deg) rotateZ(30deg)";
  }

  if (carImages[currentImageIndex] == "Audi_A6_C5.jpg") {
    // TODO
    carPlate.style.top = "10px";
    carPlate.style.left = "10px";
  }
};

nextImage = () => {
  currentImageIndex++;
  if (currentImageIndex >= carImages.length) {
    currentImageIndex = 0;
  }
  changeImage();
};

previousImage = () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = carImages.length - 1;
  }
  changeImage();
};

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

// initial image
carImage.src = `./images/${carImages[currentImageIndex]}`;
carPlate.style.display = "block";
carPlate.style.transform = "scale(0.65)";
carPlate.style.top = "286px";
carPlate.style.left = "273px";
