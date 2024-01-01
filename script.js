document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            myElement.classList.remove('container');
            myElement.classList.add('newContainer');
            playButton.style.display = "none"
            const duration = 15 * 1000,
                animationEnd = Date.now() + duration,
                defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // since particles fall down, start a bit higher than random
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    })
                );
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    })
                );
            }, 250);
        } else {
            audio.pause();
            playButton.innerText = 'Play Music';
        }
    });
});


