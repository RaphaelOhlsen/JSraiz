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

function renderizaProduto(produto) {

  return `
  <div class="col-sm-4 mb-3">
    <div class="card loja__item">
      <img class="card-img-top" src="https://lorempixel.com/500/300" alt="...">
      <div class="card-body">
        <h5 class="card-title">${produto.nome}</h5>
        <small>${produto.preco}</small>
        <p class="card-text">${produto.descricao}</p>           
        <button data-value="300" class="btn btn-primary">Adcionar</button>
      </div>
    </div>
  </div>
  `
}

function renderizaProdutos() {
  let html = '';
  produtos.forEach(produto => html = html + renderizaProduto(produto));
  return html;
}

document.querySelector('.loja').innerHTML = renderizaProdutos();

