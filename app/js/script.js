const Menu = {

    Close(){
        /*pegando os elementos com as classes que preciso esconder, mostrar*/
        let $elementos_textos_menu = document.querySelectorAll(".textos_menu,.info_user, .imagem_logo")

        /*função que opera em cada elemento*/
        $elementos_textos_menu.forEach(item => {
            
        /*método que adiciona ou remove alguma string das classes selecionadas*/
            item.classList.toggle('desativado')

        } )   

    }
}