

let itens = [
    {
        src: "/assets/image/café preto.png",
        nome: "café Preto",
        descricao: "café preto pronto para o seu consumo",
        preco: "R$ 10,00"
    },
    {
        src: "/assets/image/cappucino.png",
        nome: "Cappuccino",
        descricao: "Cappucino dilatada com cafeina proteica",
        preco: "R$ 25,00"
    },
    { 
        src: "/assets/image/Pacote de cafe.png",
        nome: "Pacote de café",
        descricao: "pó de café feito para todos os gostos",
        preco: "R$ 100,00"
    },
    {
        src: "/assets/image/Expresso.png",
        nome: "Café Expresso",
        descricao: "café expresso dilatada com cafeina proteica",
        preco: "R$ 15,00"
    }
];

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


let createCartoes = () => {
    let cartoesdiv = document.getElementById("cartoes");
    for (let item of itens) {
        let cartao = getCartao(item);
        cartoesdiv.insertAdjacentHTML("beforeend", cartao);
    }
};

createCartoes();



