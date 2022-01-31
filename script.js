
/* FUNÇÃO PARA CHAMAR MODAL COM BLUER*/
function iniciaModal(modalID){
const  modal = document.getElementById(modalID);
modal.classList.add('mostrar');
}
const criaAcc = document.querySelector('.criac');
criaAcc.addEventListener('click', function(){
    iniciaModal('modal-fundo')
})

/* FUNÇÃO PARA CHAMAR MODAL FORM DE CADASTRO*/
function iniciaModa(modalID){
const  cri = document.getElementById(modalID);
console.log(cri);
cri.classList.add('mostrar');
}
const criaAc = document.querySelector('.modal-bluer');
criaAcc.addEventListener('click', function(){
    iniciaModa('cri')
})




