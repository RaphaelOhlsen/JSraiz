const produtos = [
  {
    id: 'abc123',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'bbc123',
    nome: 'JSRaiz para Node',
    preco: 1200,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'cbc123',
    nome: 'Programação Funcional com JS',
    preco: 500,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  },
]

const carrinhoItens =  {}

function renderizaProduto(produto, index) {
  return `
  <div class="col-sm-4 mb-3">
    <div class="card loja__item">
      <img class="card-img-top" src="https://lorempixel.com/500/300" alt="...">
      <div class="card-body">
        <h5 class="card-title">${produto.nome}</h5>
        <small>${produto.preco}</small>
        <p class="card-text">${produto.descricao}</p>           
        <button data-index="${index}" class="btn btn-primary btn-add">Adcionar</button>
      </div>
    </div>
  </div>
  `
}

function renderizaItemCarrinho(produtoCarrinho) {
  return `
  <div class="card carrinho_item">
    <div class="card-body">
      <h5 class="card-title">${produtoCarrinho.nome}</h5>
      <p class="card-text">Preço unidade: R$ ${produtoCarrinho.preco},00 | Quantidade: ${produtoCarrinho.quantidade}  </p>
      <p class="card-text">Valor: R$ ${produtoCarrinho.preco * produtoCarrinho.quantidade},00</p>
      <button data-produtoId="${produtoCarrinho.id}" class="btn btn-danger btn-sm btn-remove">Remover</button>
    </div>
  </div>
  `
}

const renderizaProdutos = () => {
  let html = '';
  produtos.forEach((produto, idx) => html = html + renderizaProduto(produto, idx));
  return html;
}

const renderizaCarrinho = () => {
  let html = '';
  for (let produtoId in carrinhoItens) {
    html = html + renderizaItemCarrinho(carrinhoItens[produtoId]);
  }
  document.querySelector('.carrinho_itens').innerHTML = html;
}

const renderizaCarrinhoTotal = () => {
  
  let total = Object.values(carrinhoItens).reduce((acc, item) => {
    return acc + item.preco * item.quantidade
  },0)

  total ? document.querySelector('.carrinho_total').innerHTML = `<h6>Total: <strong>R$${total},00</strong></h6>` : document.querySelector('.carrinho_total').innerHTML = `<h6><strong>Carrinho Vazio</strong></h6>`
  
  
}

const adicionaItemNoCarrinho = produto => {
  if (!carrinhoItens[produto.id]) {
    carrinhoItens[produto.id] = produto;
    carrinhoItens[produto.id].quantidade = 0;
  }
  ++carrinhoItens[produto.id].quantidade;

  renderizaCarrinho();
  renderizaCarrinhoTotal();

}

const removeItemNoCarrinho = produto => {
 
  --produto.quantidade;

  !produto.quantidade && delete carrinhoItens[produto.id];

  renderizaCarrinho();
  renderizaCarrinhoTotal();
}

document.body.addEventListener('click', ev => {
  const elemento = ev.target;
  
  if (elemento.classList.contains('btn-add')) {
    const index = parseInt(elemento.getAttribute('data-index'), 10);
    const produto = produtos[index];
    adicionaItemNoCarrinho(produto);
  }

  if (elemento.classList.contains('btn-remove')) {
    const index = elemento.getAttribute('data-produtoId');
    const produto = carrinhoItens[index];
    removeItemNoCarrinho(produto);
    
  }
});

// document.body.addEventListener('click', ev => {
//   const elemento = ev.target;
  
// })

document.querySelector('.loja').innerHTML = renderizaProdutos();


