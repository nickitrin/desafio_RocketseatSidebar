const menu = {
    Close(){
        //document.querySelectorAll(".textos_menu").remove();
        const texto = document.querySelectorAll(".textos_menu");
        texto.forEach(function(innerText) {
            innerText="";
          });
    }


}