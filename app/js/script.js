const Menu = {

    Close(){
        let $elementos_textos_menu = document.querySelectorAll(".textos_menu")
        
        console.log($elementos_textos_menu)

        $elementos_textos_menu.forEach(item => {
            item.classList.add('nova classe')
            console.log(item.innerHTML.trim())
        } )

       
            
        /*
            .map();
            .find();
            .findIndex();
            .forEach();

        */
    }


}