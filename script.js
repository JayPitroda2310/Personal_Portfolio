// Smooth scroll with offset for fixed header/navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        // Calculate the offset accounting for the fixed navbar height
        const navbarHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        // Smooth scroll to the target position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Smooth scroll to hero section when "KP" is clicked
document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault();

    const heroSection = document.querySelector('#hero');
    const navbarHeight = document.querySelector('header').offsetHeight;
    const targetPosition = heroSection.offsetTop - navbarHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Kinjal Pitroda";
    let index = 0;
    let isDeleting = false; // Flag to track if we are deleting characters
    const speed = 80; // Speed of typing
    const deleteSpeed = 120; // Speed of deleting
    const delayBeforeDelete = 200; // Delay before starting to delete
    const delayBeforeType = 200; // Delay before starting to type again

    function typeEffect() {
        const typedText = document.getElementById("typed-text");

        if (isDeleting) {
            // Deleting characters
            typedText.innerHTML = text.substring(0, index);
            if (index > 8) {
                index--;
                setTimeout(typeEffect, deleteSpeed); // Deleting speed
            } else {
                isDeleting = false; // Finished deleting, start typing again
                setTimeout(typeEffect, delayBeforeType); // Small delay before typing again
            }
        } else {
            // Typing characters
            typedText.innerHTML = text.substring(0, index);
            if (index < text.length) {
                index++;
                setTimeout(typeEffect, speed); // Typing speed
            } else {
                isDeleting = true; // Start deleting after the full text is typed
                setTimeout(typeEffect, delayBeforeDelete); // Delay before deleting starts
            }
        }
    }

    // Start the typing effect when the page loads
    typeEffect();
});

const carouselWrapper = document.querySelector('.carousel-wrapper');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;
let autoSlideInterval;
const cardWidth = 300 + 20; // Card width + margin

// Automatic sliding function
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideNext();
    }, 3000); // 3 seconds interval
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function slideNext() {
    currentIndex++;
    const maxIndex = carouselWrapper.children.length - 1;
    if (currentIndex > maxIndex) {
        currentIndex = 0; // Loop back to the first card
    }
    updateCarousel();
}

function updateCarousel() {
    carouselWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Drag Start
function touchStart(index) {
    return function(event) {
        stopAutoSlide(); // Stop automatic sliding when dragging
        isDragging = true;
        currentIndex = index;
        startPos = getPositionX(event);
        prevTranslate = currentTranslate;
        animationID = requestAnimationFrame(animation);
        carouselWrapper.classList.add('is-dragging'); // Remove transition for smooth dragging
        carouselWrapper.style.cursor = 'grabbing';
    }
}

// Drag Move
function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

// Drag End
function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    carouselWrapper.classList.remove('is-dragging'); // Re-enable transition after dragging ends
    carouselWrapper.style.cursor = 'grab';

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < carouselWrapper.children.length - 1) {
        currentIndex++;
    }

    if (movedBy > 100 && currentIndex > 0) {
        currentIndex--;
    }

    updateCarousel();
    startAutoSlide(); // Restart automatic sliding
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
}

// Attach drag events
carouselWrapper.addEventListener('mousedown', touchStart(0));
carouselWrapper.addEventListener('mousemove', touchMove);
carouselWrapper.addEventListener('mouseup', touchEnd);
carouselWrapper.addEventListener('mouseleave', () => {
    if (isDragging) touchEnd();
});

carouselWrapper.addEventListener('touchstart', touchStart(0));
carouselWrapper.addEventListener('touchmove', touchMove);
carouselWrapper.addEventListener('touchend', touchEnd);

// Start automatic sliding
startAutoSlide();

