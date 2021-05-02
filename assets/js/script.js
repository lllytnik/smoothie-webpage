(function() {
    const burger = document.querySelector('.header__burger-btn');
    const navigation = document.querySelector('.header__navigation');
    
    burger.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
}());