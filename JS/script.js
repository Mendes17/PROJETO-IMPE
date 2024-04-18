var menu = document.querySelector("ul");
var bt_menu = document.querySelector("#bt-menu")
var bt_fechar = document.querySelector("#bt-fechar")

// Cria uma função para abrir o menu, feche o menu hamburguer, aparecer o botão fechar.
function abrirMenu() {
    menu.style.display = "flex"
    menu.style.flexDirection = "column"
    bt_menu.style.display = "none"
    bt_fechar.style.display = "inline"
}

function fecharMenu() {
    menu.style.display = "none"
    bt_menu.style.display = "inline"
    bt_fechar.style.display = "none"
}