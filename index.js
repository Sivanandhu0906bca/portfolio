document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const typingElement = document.getElementById('typing-text');
    const textToType = "Sivanandhu Manickam";
    let typeIndex = 0;

    function type() {
        if (typingElement && typeIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(typeIndex);
            typeIndex++;
            setTimeout(type, 100);
        }
    }setTimeout(type, 500);

    // Scroll Reveal Effect (Optional enhancement)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
});