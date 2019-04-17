
function loginAndPassword() {
    /* Функция выводит содержимое полей ввода */

    var popup = document.querySelector(".login-form");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    
    /* Получаем ключ-значение логина и пароля */

    popup.addEventListener("submit", function (evt) {
        if(login.value || password.value){
            evt.preventDefault();
            /* localStorage.setItem("login", login.value);   */          
            localStorage.setItem("password", password.value);            
        }else{
            evt.preventDefault();
            /* console.log("Какое поле ввода пусто или пустые оба"); */
        }
    });
}

function storageLinkLoad(){
    /* 
       Функция автоматически подтягивает значения логина
       из storage в поле логина 
    */ 

    var popup = document.querySelector(".login-form");
    var login = popup.querySelector("[name=login]");    
    
    var storageLogin = localStorage.getItem("login");    

    login.addEventListener("click", function(evt) {

    evt.preventDefault();
    login.focus();    

    /* if(storageLogin){            
        console.log("Подтяним логин из storage: " 
        + storageLogin);
        login.value = storageLogin;
    }else{
        evt.preventDefault();
        console.log("Storage пуст " + storageLogin);
    } */
});
}
    
storageLinkLoad();

loginAndPassword();
