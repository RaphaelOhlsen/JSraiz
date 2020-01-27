function Usuario() {
  this.nome = 'Raphael';
  this.idade = 50;
  this.soma = function(a, b) {
    return a + b
  }
}

// Usuario

// var usuario = new Usuario();
// console.log(usuario);

// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.soma(2,2));

// call

// function Personagem(p1, p2, p3) {
//   console.log(p1,p2,p3)
//   console.log('personagem this', this)
// }

// var personagemThis = {
//   nome: 'Ohlsen'
// }

// Personagem.call(personagemThis, 'param1', 123, [5])

//Apply

// Personagem.apply(personagemThis, ['param???', 123, [5]])

//Bind

// var Pers = Personagem.bind(personagemThis, 'Olá','Mundo');
// Pers('!!!!');

//Arrow Function

// var soma = (a,b) => a + b;

// console.log(soma(10,10))

// Arrow Function this 

var retornaUsuario = (cidade) => (
  {
    nome: 'Raphael',
    idade: 50,
    cidade
  }
)

console.log(retornaUsuario('Vitoria'))

