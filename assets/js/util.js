function toggleMenu() {
    const menuButton = document.getElementById('burger-menu');
    const navigation = document.getElementById('navigation');
    
    if (menuButton.classList.contains('active')) {
        menuButton.classList.remove('active');
    } else {
        menuButton.classList.add('active');
    }
    
    if (navigation.classList.contains('active')) {
        navigation.classList.remove('active');
    } else {
        var bodyRect = document.body.getBoundingClientRect();
        const elemRect = menuButton.getBoundingClientRect();
        const offsetTop   = elemRect.bottom - bodyRect.top;
        
        navigation.classList.add('active');
        navigation.style.top = `${offsetTop}px`;
        navigation.style.right = `0px`;
    }
}