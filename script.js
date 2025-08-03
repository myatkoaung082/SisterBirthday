// Confetti effect
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#ffbe0b', '#9b5de5', '#f15bb5'];
            const confettiCount = 150;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                
                document.body.appendChild(confetti);
                
                // Remove confetti after animation completes
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

function playMusic() {
  const music = document.getElementById("birthday-music");
  music.play();
}

// Confetti
const confettiContainer = document.getElementById("confetti-container");

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  confettiContainer.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

setInterval(createConfetti, 200);

// Countdown to next birthday
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Determine the correct year for next birthday
    let birthdayYear = currentYear;
    if (now.getMonth() > 6 || (now.getMonth() === 6 && now.getDate() > 26)) {
        birthdayYear += 1;
    }

    const nextBirthday = new Date(birthdayYear, 6, 26, 0, 0, 0); // July is 6 (0-indexed)
    const diff = nextBirthday - now; // Keep 'now' with time so timer ticks live

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "🎉 Happy Birthday May Myat Noe!";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Run every second
setInterval(updateCountdown, 1000);
updateCountdown();

        

// Slideshow Logic
let slideIndex = 0;
const slidesContainer = document.getElementById("slides");
const totalSlides = slidesContainer.children.length;

function showSlide(index) {
  const offset = -index * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Auto Slide every 5 seconds
setInterval(nextSlide, 5000);


function typeEffect(element, text, speed = 100) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  // When page loads
  window.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.getElementById("typing-name");
    typeEffect(nameEl, "May Myat Noe", 150); // You can adjust typing speed here
  });



