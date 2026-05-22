document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false // Animasi akan berulang setiap kali di-scroll
    });

    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    hamburgerBtn.addEventListener('click', function () {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Video Modal Functionality
    const reelCards = document.querySelectorAll('.reel-card');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.close-modal');

    reelCards.forEach(card => {
        card.addEventListener('click', function () {
            const videoSrc = this.getAttribute('data-video');
            if (videoSrc) {
                modalVideo.src = videoSrc;
                videoModal.style.display = 'flex';
                modalVideo.play();
            }
        });
    });

    closeModal.addEventListener('click', function () {
        videoModal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = '';
    });

    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.src = '';
        }
    });
});
