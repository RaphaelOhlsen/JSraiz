const produtosLista = [
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

const ProdutoComponent = (props) => {
  return (
    React.createElement('div', { className: 'col-sm-4 mb-3'},
      React.createElement('div', { className: 'card loja_item'},
        React.createElement('img', { className: 'card-img-top', src: props.item.imagem }),
        React.createElement('div', { className: 'card-body'},
          React.createElement('h5', { className: 'card-title'}, props.item.nome),
          React.createElement('small', null, `R$ ${props.item.preco}`),
          React.createElement('p', { className: 'card-text' }, props.item.descricao),
          React.createElement('button', { className: 'btn btn-primary', onClick: props.onAddCarrinho.bind(null, props.item)}, 'Adcionar')
        )
      )
    )
  )
}

const ListaProdutosComponent = (props) => {
  console.log(props)
  return ( 
    React.createElement('div', { className: 'row loja' },
      props.children
    )
  )
}

function valorTotal(carrinhoItens) {
  return Object.keys(carrinhoItens).reduce((acc, produtoId) => {
    return acc + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade)
  }, 0);
}

const CarrinhoComponent = ({itens}) => {
  
  return (
    React.createElement('div', { className: 'carrinho'}, 
      React.createElement('div', { className: 'carrinho_itens'},
        Object.values(itens).map((produto, idx) => {
          return(
            React.createElement('div', { className: 'card carrinho_item', key: `item-carrinho-${idx}`},
              React.createElement('div', {className: 'card-body'},
                React.createElement('h5', {className: 'card-title'}, produto.nome),
                React.createElement('p', { className: 'card-text' }, `Preço Unidade: R$ ${produto.preco} | Quantidade: ${produto.quantidade}`),
                React.createElement('p', { className: 'card-text' }, `Valor: R$ ${produto.preco * produto.quantidade}`),
                React.createElement('button', { className: 'btn btn-danger btn-sm'}, 'Remover')
              )
            )
          )  
        })     
      ),
      React.createElement('div', { className: 'carrinho_total mt-2 p-3'},
        React.createElement('h6', null, 'Total: ', 
          React.createElement('strong', null, `R$  ${valorTotal(itens)}`)  
        )
      )
    )
  )
}

function AppComponent(){

  const carrinhoItens = {
    'abc123': {
      id: 'abc123',
      nome: 'JSRaiz para FW',
      preco: 300,
      descricao: 'O melhor curso do mundo',
      imagem: 'https://lorempixel.com/500/300',
      quantidade: 3
    },
    'bbc123': {
      id: 'bbc123',
      nome: 'JSRaiz para Node',
      preco: 1200,
      descricao: 'O melhor curso do mundo',
      imagem: 'https://lorempixel.com/500/300',
      quantidade: 2
    }
  }

  const addCarrinho = (produto) => console.log(produto);

  return (
    React.createElement(React.Fragment, null, 
      React.createElement('div', { className: 'col-sm-8' },
        React.createElement(ListaProdutosComponent,  null,
          produtosLista.map((produto, idx)  => {
            return React.createElement(ProdutoComponent, {item: produto, onAddCarrinho: addCarrinho, key: `produto-${idx}` });
          })       
        )
      ),
      React.createElement('div', {className: 'col-sm-4' }, 
        React.createElement(CarrinhoComponent, { itens: carrinhoItens })
      )
    )
  )
}

ReactDOM.render(
  React.createElement(AppComponent),
  document.getElementById('app')
)