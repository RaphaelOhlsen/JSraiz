const ProdutoComponent = () => {
  return (
    React.createElement('div', { className: 'col-sm-4 mb-3'},
      React.createElement('div', { className: 'card loja_item'},
        React.createElement('img', { className: 'card-img-top', src: "https://lorempixel.com/500/300" }),
        React.createElement('div', { className: 'card-body'},
          React.createElement('h5', { className: 'card-title'}, 'JSRaiz para frameworks'),
          React.createElement('small', null, 'R$ 300,00'),
          React.createElement('p', { className: 'card-text' }, 'O melhor curso do mundo'),
          React.createElement('button', { className: 'btn btn-primary'}, 'Adcionar')
        )
      )
    )
  )
}

const ListaProdutosComponent = () => {
  return ( 
    React.createElement('div', { className: 'row loja' },
      React.createElement(ProdutoComponent),
    )
  )
}

const CarrinhoComponent = () => {
  return (
    React.createElement('div', { className: 'carrinho'}, 
      React.createElement('div', { className: 'carrinho_itens'},
        React.createElement('div', { className: 'card carrinho_item'},
          React.createElement('div', {className: 'card-body'},
            React.createElement('h5', {className: 'card-title'}, 'JS-Raiz para FW'),
            React.createElement('p', { className: 'card-text' }, 'Preço Unidade: R$ 300,00'),
            React.createElement('p', { className: 'card-text' }, 'Valor: R$ 600,00'),
            React.createElement('button', { className: 'btn btn-danger btn-sm'}, 'Remover')
          )
        )
      ),
      React.createElement('div', { className: 'carrinho_total mt-2 p-3'},
        React.createElement('h6', null, 'Total: ', 
          React.createElement('strong', null, 'R$ 600,00')  
        )
      )
    )
  )
}

function AppComponent(){
  return (
    React.createElement(React.Fragment, null, 
      React.createElement('div', { className: 'col-sm-8' },
        React.createElement(ListaProdutosComponent)
      ),
      React.createElement('div', {className: 'col-sm-4' }, 
        React.createElement(CarrinhoComponent)
      )
    )
  )
}

ReactDOM.render(
  React.createElement(AppComponent),
  document.getElementById('app')
)