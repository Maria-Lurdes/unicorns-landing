document.addEventListener('DOMContentLoaded', function() {
    // Get current menu item and its offset
    function updateNav() {
        const currentMenuItem = document.querySelector('.current-menu-item');
        const menuItems = document.querySelectorAll('.menu-item');
        const wee = document.querySelector('.wee');

        if (!currentMenuItem || !wee) return;

        const initialOffset = currentMenuItem.offsetLeft;
        const initialWidth = currentMenuItem.offsetWidth;

        // Update wee position on hover
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('mouseenter', function() {
                const left = menuItem.offsetLeft - initialOffset;
                const width = menuItem.offsetWidth;
                wee.style.left = `${left}px`;
                wee.style.width = `${width}px`;
            });

            menuItem.addEventListener('mouseleave', function() {
                wee.style.left = '0';
                wee.style.width = `${initialWidth}px`;
            });
        });
    }

    // Call updateNav on load and resize
    window.addEventListener('load', updateNav);
    window.addEventListener('resize', updateNav);
});
