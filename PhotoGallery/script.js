document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.fox-contain, .whale-contain, .baboon-contain, .deer-contain');
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementsByClassName("close")[0];

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

        container.addEventListener('click', function() {
            const bgImage = getComputedStyle(container, '::before').backgroundImage.slice(5, -2);
            modalImage.src = bgImage;
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
