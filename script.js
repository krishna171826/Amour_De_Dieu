function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// Actualité 

document.addEventListener('DOMContentLoaded', function() {
    const carouselCards = document.querySelector('.carousel-cards');
    const cards = document.querySelectorAll('.news-card');
    const prevBtn = document.querySelector('.nav-left');
    const nextBtn = document.querySelector('.nav-right');
    
    let currentIndex = 1; // Start with the active card
    
    function updateActiveCard() {
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
        
        // Scroll to center the active card
        const cardWidth = cards[0].offsetWidth + 20; // Width + gap
        carouselCards.scrollLeft = (currentIndex * cardWidth) - (carouselCards.offsetWidth / 2) + (cardWidth / 2);
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateActiveCard();
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateActiveCard();
    });
    
    // Initialize
    updateActiveCard();
});
