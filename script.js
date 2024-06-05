document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.fox-contain, .whale-contain, .baboon-contain, .deer-contain');

    containers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            const infoDiv = container.querySelector('.info');
            const knowMore = document.createElement('h4');
            knowMore.classList.add('know-more');
            knowMore.innerHTML = 'Know More &#129138;';
            infoDiv.appendChild(knowMore);
            infoDiv.classList.add('move-up');
        });

        container.addEventListener('mouseleave', function() {
            const infoDiv = container.querySelector('.info');
            const knowMore = infoDiv.querySelector('.know-more');
            if (knowMore) {
                infoDiv.removeChild(knowMore);
                
            }
            infoDiv.classList.remove('move-up');
        });
    });
});
