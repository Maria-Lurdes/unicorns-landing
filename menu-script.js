document.addEventListener('DOMContentLoaded', function() {
    // Get current menu item and its offset
    function updateNav() {
        const currentMenuItem = document.querySelector('.current-menu-item');
        const menuItems = document.querySelectorAll('.menu-item');
        const wee = document.querySelector('.wee');

        if (!currentMenuItem || !wee) return;

        const initialOffset = currentMenuItem.offsetLeft;

        // Update wee position on hover
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('mouseenter', function() {
                const left = menuItem.offsetLeft - initialOffset;
                const width = menuItem.offsetWidth;
                wee.style.left = `${left}px`;
                wee.style.width = `${width}px`;
            });

            menuItem.addEventListener('mouseleave', function() {
                let current = document.querySelector('.current-menu-item');
                wee.style.left = `${current.offsetLeft - initialOffset}px`;
                wee.style.width = `${current.offsetWidth}px`;
            });

            menuItem.addEventListener('click', function() {
                const left = menuItem.offsetLeft - initialOffset;
                const width = menuItem.offsetWidth;
                wee.style.left = `${left}px`;
                wee.style.width = `${width}px`;
            });

        });
    }

    // Call updateNav on load and resize
    window.addEventListener('load', updateNav);
    window.addEventListener('resize', updateNav);
});

// Scroll to target section when an h6 is clicked
document.querySelectorAll('h6').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            document.getElementsByClassName('current-menu-item')[0].classList.remove('current-menu-item');
            item.parentElement.classList.add('current-menu-item');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('.pulse')[0].addEventListener('click', () => {
    document.getElementById('get-unicorns').scrollIntoView({ behavior: 'smooth' });
})

