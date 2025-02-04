const imagePaths = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg"
];

let currentIndex = 0;

function changeImage(imagePath) {
  document.getElementById("main-image").src = imagePath;
  currentIndex = imagePaths.indexOf(imagePath);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  document.getElementById("main-image").src = imagePaths[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  document.getElementById("main-image").src = imagePaths[currentIndex];
}