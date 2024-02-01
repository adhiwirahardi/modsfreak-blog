// Toggle the class to show/hide the menu on click
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navList = document.querySelector('nav ul');

    hamburgerIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
