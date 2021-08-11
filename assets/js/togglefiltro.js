/*FUNÇÃO RECOLHER E ANIMAÇÃO DO FILTRO TAMANHO*/
var menosTamanho = document.querySelector('.menos-toggle-tamanho');
var tamanhos = document.querySelector('.tamanhos');

menosTamanho.addEventListener('click', function(){

    if(tamanhos.style.display === 'block'){
        tamanhos.style.display = 'none';
    }
    else
    {
        tamanhos.style.display = 'block';
    }
});

const tamanho = document.querySelector('.tamanho');
let tamanhoOpen = false;

tamanho.addEventListener('click', () =>{
    if(!tamanhoOpen){
        tamanho.classList.add('open');
        tamanhoOpen = true;
    }
    else
    {
        tamanho.classList.remove('open');
        tamanhoOpen = false;
    }
})



/*FUNÇÃO RECOLHER E ANIMAÇÃO DO FILTRO PREÇO*/
var menosMarcas = document.querySelector('.menos-toggle-marca');
var marcas = document.querySelector('.marcas');

menosMarcas.addEventListener('click', function(){

    if(marcas.style.display === 'block'){
        marcas.style.display = 'none';
        
    }
    else
    {
        marcas.style.display = 'block';
    }
});

const marca = document.querySelector('.marca');
let marcaOpen = false;

marca.addEventListener('click', () =>{
    if(!marcaOpen){
        marca.classList.add('open');
        marcaOpen = true;
    }
    else
    {
        marca.classList.remove('open');
        marcaOpen = false;
    }
})


/*FUNÇÃO RECOLHER E ANIMAÇÃO DO FILTRO PREÇO*/
const preco = document.querySelector('.preco');
let precoOpen = false;

preco.addEventListener('click', () =>{
    if(!precoOpen){
        preco.classList.add('open');
        precoOpen = true;
    }
    else
    {
        preco.classList.remove('open');
        precoOpen = false;
    }
})

var menosPreco = document.querySelector('.menos-toggle');
var tablePreco = document.querySelector('.precos');

menosPreco.addEventListener('click', function(){

    if(tablePreco.style.display === 'block'){
        tablePreco.style.display = 'none';
    }
    else
    {
        tablePreco.style.display = 'block';
    }
});