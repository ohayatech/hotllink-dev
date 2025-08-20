// Imagens para o slideshow (adicione URLs ou caminhos locais)
const slideshowImages = [
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1682129723915-70ef9298f99b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1742596373269-5b970d36cfe7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661775632324-d4d95c0e0099?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1614872375964-9ee013fffbda?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function createSlideshow() {
    const slideshow = document.querySelector('.background-slideshow');
    slideshowImages.forEach((src, i) => {
        const img = document.createElement('img');
        
        img.src = src;
        if (i === 0) img.classList.add('active');
        slideshow.appendChild(img);
    });
    let current = 0;
    setInterval(() => {
        const imgs = slideshow.querySelectorAll('img');
        imgs[current].classList.remove('active');
        current = (current + 1) % imgs.length;
        imgs[current].classList.add('active');
    }, 5000); // troca a cada 5 segundos
}

window.addEventListener('DOMContentLoaded', createSlideshow);

const targetDate = new Date();
        targetDate.setMonth(targetDate.getMonth() + 7); // 7 meses a partir de hoje

        function pad(n) {
            return n < 10 ? '0' + n : n;
        }

        function updateTimer() {
            const now = new Date();
            const diff = targetDate - now;
            if (diff <= 0) {
                document.getElementById('timer').innerHTML = '<span style="color:#3a86ff;font-size:1.3rem;">Já estamos prontos!</span>';
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            document.getElementById('timer').innerHTML = `
                <div class="timer-segment">
                    ${pad(days)}
                    <span class="timer-label">Dias</span>
                </div>
                <div class="timer-segment">
                    ${pad(hours)}
                    <span class="timer-label">Horas</span>
                </div>
                <div class="timer-segment">
                    ${pad(minutes)}
                    <span class="timer-label">Min</span>
                </div>
                <div class="timer-segment">
                    ${pad(seconds)}
                    <span class="timer-label">Seg</span>
                </div>
            `;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
