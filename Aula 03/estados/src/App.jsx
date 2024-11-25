import Cardproduto from "./components/Cardproduto";

class Produto{
  constructor(nome, imagem, valor, quantidadeEstoque){
    this.nome = nome;
    this.imagem = imagem;
    this.valor = valor;
    this.quantidadeEstoque = quantidadeEstoque;
  }
}


function App() {
  const produtoCriado = new Produto("Camisa", "https://th.bing.com/th?id=OPHS.0f4cdDGgZxxm0Q474C474&w=300&h=300&o=5&pid=21.1", 50.00, 20)

  return (
    <>
      <Cardproduto produto={produtoCriado} />
    </>
  )
}

export default App
