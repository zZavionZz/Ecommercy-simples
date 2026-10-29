//para adicionar produtos, basta incluir novos objetos neste array.

const PRODUTOS = [
    {id: 1, nome: "Notebook UltraSlim", preco: 3499.90, emoji: '💻'},
    {id: 2, nome: "Mouse Gamer RGB", preco: 149.90, emoji: '🖱'},
    {id: 3, nome: "Teclado Mecanico", preco:299.90, emoji: '⌨'},
    {id: 4, nome: "Headset 7.1 Surround", preco:249.90, emoji: '🎧'},
    {id: 5, nome: "Monitor 24\" Full HD", preco:899.90, emoji: '📺'},
    {id: 6, nome: "Webcam HD 1080p", preco:189.90, emoji: '📷'},

];


// Retorna o carrinho salvo no localStorage (ou array vazio)

function getCarrinho(){
    return JSON.parse(localStorage.getItem('carrinho') || '[]');
}

//salva o carrinho no local storage
function salvarCarrinho(carrinho){
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

//formata
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}