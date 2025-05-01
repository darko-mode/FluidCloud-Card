// Add subtle animation to the card on mouse movement
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card-container');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        
        // Apply subtle rotation effect
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-5px)`;
    });
    
    // Reset transform when mouse leaves the document
    document.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
    });
}); 