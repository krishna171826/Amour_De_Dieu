// menu bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// Actualité 

document.addEventListener('DOMContentLoaded', function () {
    const carouselCards = document.querySelector('.carousel-cards');
    const cards = document.querySelectorAll('.news-card');
    const prevBtn = document.querySelector('.nav-left');
    const nextBtn = document.querySelector('.nav-right');

    let currentIndex = 1; // Start with second card as active

    // Function: update active card 
    function updateActiveCard() {
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
    }

    // Function: scroll to the active card
    function scrollToCard(index) {
        const cardWidth = cards[0].offsetWidth + 20; 
        const scrollPosition = (index * cardWidth) - (carouselCards.offsetWidth / 2) + (cardWidth / 2);
        carouselCards.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    // Arrow button functionality (for desktop)
    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateActiveCard();
        scrollToCard(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % cards.length;
        updateActiveCard();
        scrollToCard(currentIndex);
    });

    // Auto-detect active card on scroll (for phones)
    carouselCards.addEventListener('scroll', function () {
        const cardWidth = cards[0].offsetWidth + 20;
        const scrollCenter = carouselCards.scrollLeft + carouselCards.offsetWidth / 2;
        let newIndex = Math.round(scrollCenter / cardWidth - 0.5);
        newIndex = Math.max(0, Math.min(cards.length - 1, newIndex));

        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateActiveCard();
        }
    });

    // Hide arrows on small screens
    function handleArrowVisibility() {
        const isMobile = window.innerWidth <= 768;
        prevBtn.style.display = isMobile ? 'none' : 'block';
        nextBtn.style.display = isMobile ? 'none' : 'block';
    }

    // Initialize everything
    updateActiveCard();
    handleArrowVisibility();
    scrollToCard(currentIndex); 

    //  Recheck arrow visibility on resize
    window.addEventListener('resize', handleArrowVisibility);
});
