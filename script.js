// Testimonial carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial carousel
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (dots.length > 0 && testimonials.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Update active dot
                document.querySelector('.dot.active').classList.remove('active');
                dot.classList.add('active');
                
                // Scroll to the corresponding testimonial
                testimonialCarousel.scrollTo({
                    left: testimonials[index].offsetLeft,
                    behavior: 'smooth'
                });
            });
        });
        
        // Auto-scroll testimonials every 5 seconds
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            // Update active dot
            document.querySelector('.dot.active').classList.remove('active');
            dots[currentIndex].classList.add('active');
            
            // Scroll to the next testimonial
            testimonialCarousel.scrollTo({
                left: testimonials[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }, 5000);
    }
    
    // Countdown Timer
    const countdownDays = document.getElementById('countdown-days');
    const countdownHours = document.getElementById('countdown-hours');
    const countdownMinutes = document.getElementById('countdown-minutes');
    const countdownSeconds = document.getElementById('countdown-seconds');
    
    if (countdownDays && countdownHours && countdownMinutes && countdownSeconds) {
        // Set the countdown for 5 days from now
        const now = new Date();
        const fiveDaysFromNow = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
        
        function updateCountdown() {
            const now = new Date();
            const difference = fiveDaysFromNow - now;
            
            if (difference <= 0) {
                // Reset the countdown if it has expired
                const newDeadline = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
                fiveDaysFromNow.setTime(newDeadline.getTime());
            }
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownDays.textContent = days.toString().padStart(2, '0');
            countdownHours.textContent = hours.toString().padStart(2, '0');
            countdownMinutes.textContent = minutes.toString().padStart(2, '0');
            countdownSeconds.textContent = seconds.toString().padStart(2, '0');
        }
        
        // Update countdown immediately and then every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Add hover effects to all cards and sectors
    const cards = document.querySelectorAll('.industry-card, .sector-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.borderColor = 'var(--sky-blue)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.borderColor = '';
        });
    });
});