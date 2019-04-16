function loginEnter() {
    var loginFormLink = document.querySelector(".header-navigation-list-enter-a");
    var loginForm = document.querySelector(".main-section");
    /*
    Задаем хипстерское название переменной для всплывающих элементов,
    в нашем случае - формы логина
    */
    var popup = loginForm;
    console.log("Линк логина найден: " + loginFormLink);
    loginFormLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("popup-show");
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
    
    console.log("Кнопка закрытия логина найдена: " + loginFormCloseButton);
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
