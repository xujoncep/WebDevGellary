// Image Slider Logic
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

// Function to show the current image
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== index);
    });
}

// Auto-slide function that changes the image every 3 seconds
function startAutoSlide() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 500); // Change image every 3 seconds
}

// Initialize the slider
showImage(currentIndex);
startAutoSlide();

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
