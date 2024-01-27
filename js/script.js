// alert('js carregado!');
// Seleção/Manipulaçõa de DOM (HTML)

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

//Trabalhando com EVENTOS

//Monitorando o btnMenu para quando alguém clicar.
// nome do evento, o que vai acontecer quando o evento ocorrer.
btnMenu.addEventListener('click', function(){
    //console.log('clicou');

    //adicionando uma classe ao menu
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

})

    //Ao clicar em algum item do menu. o menu será fechado
menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})
