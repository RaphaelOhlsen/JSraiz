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

const carrinhoItens =  {
  'abc123': {
    id: 'abc123',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300',
    quantidade: 1
  },
  'bbc123': {
    id: 'bbc123',
    nome: 'JSRaiz para Node',
    preco: 1200,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300', 
    quantidade: 2
  },
}

function renderizaProduto(produto) {
  return `
  <div class="col-sm-4 mb-3">
    <div class="card loja__item">
      <img class="card-img-top" src="https://lorempixel.com/500/300" alt="...">
      <div class="card-body">
        <h5 class="card-title">${produto.nome}</h5>
        <small>${produto.preco}</small>
        <p class="card-text">${produto.descricao}</p>           
        <button data-value="300" class="btn btn-primary btn-add">Adcionar</button>
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
      <button class="btn btn-danger btn-sm">Remover</button>
    </div>
  </div>
  `
}

function renderizaProdutos() {
  let html = '';
  produtos.forEach(produto => html = html + renderizaProduto(produto));
  return html;
}

function renderizaCarrinho() {
  let html = '';
  for (let produtoId in carrinhoItens) {
    html = html + renderizaItemCarrinho(carrinhoItens[produtoId]);
  }
  return html;
}

document.body.addEventListener('click', function(ev) {
  const elemento = ev.target;
  if (elemento.classList.contains('btn-add')) alert('Clicou adicionar');
})

document.querySelector('.loja').innerHTML = renderizaProdutos();
document.querySelector('.carrinho_itens').innerHTML = renderizaCarrinho();

