import { preparacoesCard } from './dataset/preparacoes.js';

//Cria e retorna o HTML de um cartão (card) para um item específico.
let getCartao = (item) => {
    return `
    <div class="col-sm-6 col-md-4 col-lg-3 p-2">
        <div class="card h-100 d-flex flex-column">
            <img src="${item.src}" class="card-img-top" alt="${item.nome}" style="object-fit: cover; height: 200px;">
            <div class="card-body d-flex flex-column text-center">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text flex-grow-1">${item.descricao}</p>
                <a href="#" class="btn btn-primary mt-auto">${item.preco}</a>
            </div>
        </div>
    </div>`;
};

//Insere o HTML de um cartão na div principal da página.
let setCartaoCol = (cartao) => {
    let cartoesDiv = document.getElementById('cartoes');
    cartoesDiv.insertAdjacentHTML('beforeend', cartao);
};

//Itera sobre a lista de preparações e cria um cartão para cada uma.
let createCartoes = () => {
    
    for (let item of preparacoesCard) {
        // Html completo referente a cada card com o conteúdo.
        let cartao = getCartao(item);

        // Inserir cartão dentro do código html na div com id cartoes.
        setCartaoCol(cartao);
    }
};

createCartoes();




