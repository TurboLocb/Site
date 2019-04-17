var hideDiv = document.querySelector(".hide-div-on");
console.log("Секция системные требования: " + hideDiv);

var h2 = document.querySelector(".section-aside-h2");
console.log("Заголовок Системные требования: " + h2);

h2.addEventListener("click", function(evt){
    evt.preventDefault();
    if(hideDiv.classList.contains("hide-div-off")){
        hideDiv.classList.remove("hide-div-off");
    }else{
        hideDiv.classList.add("hide-div-off");
    }
});
