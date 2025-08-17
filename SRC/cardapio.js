// Cria o HTML para uma nova linha da tabela com os dados do item.
const addItemCardapioTable = (itemCardapio) => {
    // Seleciona o corpo da tabela onde as linhas serão inseridas.
    let itensCardapioTBody = document.getElementById('itensCardapioTBody');

    let itemCardapioTr = `<tr>
    <th scope="row">1</th>
    <td>${itemCardapio.nome}</td>
    <td>${itemCardapio.preco}</td>
    <td>${itemCardapio.descricao}</td>
  </tr>`;

    itensCardapioTBody.insertAdjacentHTML('beforeend', itemCardapioTr);
};
/**
 * Carrega os itens do cardápio salvos no localStorage e os exibe na tabela.
 */
const carregarTabela = () => {
    let itensCardapio = JSON.parse(localStorage.getItem('itensCardapio')) ?? [];
    for (let itemCardapio of itensCardapio) {
        addItemCardapioTable(itemCardapio);
    }
};
// Preenche os campos de um formulário da página.
const setPreparacaoFormValues = (nome = '', descricao = '', preco = '') => {
    const nomeInput = document.querySelector('#nome');
    const descricaoInput = document.querySelector('#descricao');
    const precoInput = document.querySelector('#preco');

    nomeInput.value = nome;
    descricaoInput.value = descricao;
    precoInput.value = preco;
};

/**
 * Manipula o evento de envio do formulário de cadastro de item.
 */
const handleSubmit = (event) => {
    event.preventDefault();

     // Dados do formulário -> criação do objeto.
    let cardapioForm = document.getElementById('itemCadastrarForm');
    let cardapioFormData = new FormData(cardapioForm);
    let itemCardapio = Object.fromEntries(cardapioFormData);

    // Pega os itens que JÁ EXISTEM no localStorage. Se não houver nenhum, cria um array vazio.
    const itensAtuais = JSON.parse(localStorage.getItem('itensCardapio')) ?? [];

    // Adiciona o novo item ao array que acabamos de carregar.
    itensAtuais.push(itemCardapio);

    // Salva o array COMPLETO E ATUALIZADO de volta no localStorage.
    localStorage.setItem('itensCardapio', JSON.stringify(itensAtuais));

    // Adicionar na tabela.
    addItemCardapioTable(itemCardapio);

    // Limpar os valores do formulário.
    cardapioForm.reset();
    
    // Fechar o modal.
    $('#cardapioModal').modal('toggle');

    // Exibe uma notificação de sucesso.
    Toastify({
        text: 'Item do cardápio adicionado com sucesso!',
        duration: 3000,
    }).showToast();
};

let itemCadastrarForm = document.getElementById('itemCadastrarForm');
itemCadastrarForm.onsubmit = handleSubmit;

let body = document.body;
body.onload = carregarTabela;
