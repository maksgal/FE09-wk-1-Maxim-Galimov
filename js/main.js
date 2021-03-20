const menu = document.querySelector('.menu'),
button = document.querySelector('.burger-button'),
logo = document.querySelector('.navigation__logo')


button.addEventListener("click", function() {
    
    menu.classList.remove("menu");
    menu.classList.add("open");
    
    if (
        menu.classList.item(0) == "open"
    ) {
        menu.classList.remove("open")
        menu.classList.add("hidden");
    } else {
        
        menu.classList.remove("hidden") 
        menu.classList.add("open");
    }
});