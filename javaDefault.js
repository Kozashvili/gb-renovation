console.log("Script is running!");

function toggleMenu1() {
  var menu = document.getElementById("menu");
  var mainContent = document.getElementById("main-content");
  var menuIcon = document.querySelector(".menu__icon");

  if (menu.classList.contains("menu-open")) {
    // Menu is currently open, close it
    menu.style.top = "-100vh";
  } else {
    // Menu is closed, open it
    menu.style.display = "block";
    setTimeout(() => {
      menu.style.top = "0";
    }, 10);
  }

  menu.classList.toggle("menu-open");
  mainContent.classList.toggle("blur");
  menuIcon.classList.toggle("close"); // Add a class for styling the "close" state
}

var images = [
  "./images/brokenGlass.jpg",
  "./images/oneWorker.jpg",
  "./images/woodWorking.jpg",
  "./images/twoWorkers.jpg",
];

var currentIndex = 0;
var slideshow = document.querySelector(".slideshow");

function changeImage() {
  slideshow.style.backgroundImage = "url(" + images[currentIndex] + ")";
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeImage, 7000); // Change image every 7 seconds

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;

  if (deltaX > 20) {
    plusSlides(-1); // Swipe left
  } else if (deltaX < -20) {
    plusSlides(1); // Swipe right
  } else {
    // Clicked without swiping, bring to center and pause animation
    const containerWidth =
      document.querySelector(".slider-container").offsetWidth;
    const halfContainerWidth = containerWidth / 2;
    const slidesContainer = document.querySelector(".inside-slider");

    // Calculate the current position of the slides container
    const currentPosition =
      -parseFloat(slidesContainer.style.transform.split("(")[1]) || 0;

    // Calculate the position to center the clicked slide
    const centerPosition =
      Math.floor(currentPosition / containerWidth) * containerWidth;

    slidesContainer.style.transform = `translateX(-${centerPosition}px)`;
    slidesContainer.classList.add("touch-started");
  }
}

document
  .querySelector(".inside-slider")
  .addEventListener("touchstart", handleTouchStart);
document
  .querySelector(".inside-slider")
  .addEventListener("touchend", handleTouchEnd);

// Wait for the image to be loaded
document.getElementById("image-link").onload = function () {
  console.log("Image loaded successfully!");

  try {
    // Create a Vibrant.js instance
    var vibrant = new Vibrant(document.getElementById("image"));

    // Get the color palette
    var swatches = vibrant.swatches();

    // Log the color values
    console.log("Swatches:", swatches);

    // Access specific swatch, e.g., vibrant color
    var vibrantColor = swatches["Vibrant"];
    if (vibrantColor) {
      console.log("Vibrant Color:", vibrantColor.getHex());
    } else {
      console.log("Vibrant color not found.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

let startX;
let isSwiping = false;

document
  .querySelector(".card-container")
  .addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

document.querySelector(".card-container").addEventListener("touchmove", (e) => {
  if (!isSwiping) return;
  let currentX = e.touches[0].clientX;
  let diffX = startX - currentX;

  if (Math.abs(diffX) > 50) {
    // Swipe detected
    if (diffX > 0) {
      // Swipe left
      // Move to the next card
    } else {
      // Swipe right
      // Move to the previous card
    }

    isSwiping = false;
  }
});

document.querySelector(".card-container").addEventListener("touchend", () => {
  isSwiping = false;
});

