function loginEnter() {
    var loginFormLink = document.querySelector(".header-navigation-list-enter-a");
    var loginForm = document.querySelector(".main-section");
    var loginSection = document.querySelector(".login-section");
    /*
    Задаем хипстерские название переменным для всплывающих элементов,
    в нашем случае - формы логина
    */
    var popup = loginForm;
    var popup2 = loginSection;
        
    loginFormLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("popup-show");
        popup2.classList.add("popup-animation");
    });
}
function loginClose() {
    var loginFormCloseButton = document.querySelector(".login-close");
    var loginForm = document.querySelector(".main-section");
    /*
    Задаем хипстерское название переменной для всплывающих элементов,
    в нашем случае - формы логина
    */
    var popup = loginForm;  
    
    loginFormCloseButton.addEventListener("click", function () {
        /* evt.preventDefault(); */
        popup.classList.remove("popup-show");
    });

    window.addEventListener("keydown", function(evt){
        /* Код кнопки Esc */
        if(evt.keyCode == 27){
            evt.preventDefault();
            if(popup.classList.contains("popup-show")){
                popup.classList.remove("popup-show");
            }          
        }  
    });

}
loginEnter();
loginClose();
