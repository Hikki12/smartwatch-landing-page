const toggleButton = document.querySelector('.toggle');
const banner = document.querySelector('.banner');

const toggleMenu = () => {
    toggleButton.classList.toggle('active');
    banner.classList.toggle('active');
}

toggleButton.addEventListener('click', toggleMenu);