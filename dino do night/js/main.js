document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll('.accordionItem');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordionTitle');
        title.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            closeAllItems();
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    function closeAllItems() {
        accordionItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});

function toggleMenu() {
    var lateralMenu = document.querySelector('.lateralMenu');
    var pageContent = document.querySelector('.pageContent');
    pageContent.classList.toggle('close');
    lateralMenu.classList.toggle('active');
}
