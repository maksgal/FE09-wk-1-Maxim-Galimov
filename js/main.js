const menu = document.querySelector('.menu'),
button = document.querySelector('.burger-button'),
logo = document.querySelector('.navigation__logo')


button.addEventListener("click", function() {
    
    menu.classList.remove("menu");
    menu.classList.add("open", "fade");
    
    if (
        menu.classList.item(0) == "open"
    ) {
        menu.classList.remove("open", "fade")
        menu.classList.add("hidden");
    } else {
        
        menu.classList.remove("hidden") 
        menu.classList.add("open");
    }
});