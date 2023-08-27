document.getElementById('startButton').addEventListener('click', function(event) {
  event.preventDefault();
  const targetElement = document.getElementById('start');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});



const carousel = document.getElementById('carousel');
const images = [
  "morning ish.jpeg",
  "school.jpeg",
  "new dark.jpeg",
  "Timeline January - February.png"
];
const numberOfImages = images.length;
let currentImageIndex = 0;

function updateCarousel() {
  const previousIndex = (currentImageIndex - 1 + numberOfImages) % numberOfImages;
  const nextIndex = (currentImageIndex + 1) % numberOfImages;

  document.getElementById('previous').children[0].src = images[previousIndex];
  document.getElementById('current').children[0].src = images[currentImageIndex];
  document.getElementById('next').children[0].src = images[nextIndex];
}

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % numberOfImages;
  updateCarousel();
}, 4000); 

updateCarousel(); 












