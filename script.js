document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); // For animating the hamburger icon
        });
    }

    // Hero Section Image Slider
    const heroSection = document.getElementById('hero-slider');
    const dotsContainer = document.querySelector('.slider-nav');
    const pgImages = [
        'amaravati-pg-for-gents-itpl-road-whitefield-bangalore-paying-guest-accommodations-ftyo6e2s4f.jpg', // Your image is now here!
        'https://via.placeholder.com/1500x600/33FF57/FFFFFF?text=SmartPG+Exterior+2', // Placeholder 2
        'https://via.placeholder.com/1500x600/3357FF/FFFFFF?text=SmartPG+Common+Area+3'  // Placeholder 3
    ];
    let currentImageIndex = 0;

    function changeHeroBackground(index) {
        heroSection.style.backgroundImage = `url('${pgImages[index]}')`;

        // Update active dot
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    }

    // Initialize dots based on images
    if (dotsContainer) {
        // Clear existing dots if any (e.g., from previous runs in dev tools)
        dotsContainer.innerHTML = '';
        pgImages.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentImageIndex = i;
                changeHeroBackground(currentImageIndex);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        });
    }


    // Automatic slider
    let slideInterval;
    const startAutoSlide = () => {
        slideInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % pgImages.length;
            changeHeroBackground(currentImageIndex);
        }, 5000); // Change image every 5 seconds
    };

    const resetAutoSlide = () => {
        clearInterval(slideInterval);
        startAutoSlide();
    };

    // Initial load
    if (pgImages.length > 0) {
        changeHeroBackground(currentImageIndex);
        startAutoSlide();
    }
});