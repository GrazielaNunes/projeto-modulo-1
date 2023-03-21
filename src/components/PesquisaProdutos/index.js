import { useEffect, useRef, useState } from 'react';
import './styles.css';

export default function PesquisaProdutos({produtos, itensDoPedido, fcAtualizarItensDoPedido}) {

  const codigoProdutoRef = useRef();
  const quantidadeRef = useRef();
  const [listaDeItensDoPedido, setListaDeItensDoPedido ]  = useState(itensDoPedido);

  useEffect(() => {
    setListaDeItensDoPedido(itensDoPedido);
  }, [itensDoPedido])

  function adicionar() {
    const codigo = codigoProdutoRef.current.value;
    const quantidade = quantidadeRef.current.value;
    const produtoSelecionado = produtos.find(produto => produto.codigo == codigo);
    
    if(produtoSelecionado === undefined){
      alert("Produto inexistente!")
    } else if (itemNoCarrinho(produtoSelecionado)) {
      alert("Produto só pode ser incluído no carrinho uma única vez.")
    } else{
      let novoProduto = {produto:produtoSelecionado, quantidade: quantidade, op:'+', mostraNoCarrinho:true}
      let itensDoPedidoAtualizado =[...itensDoPedido, novoProduto]
      fcAtualizarItensDoPedido(itensDoPedidoAtualizado)
    }
    codigoProdutoRef.current.value = "";
    quantidadeRef.current.value= 0;
  }
  
  function itemNoCarrinho(produtoSelecionado) {
    return listaDeItensDoPedido.some(item => item.produto.codigo == produtoSelecionado.codigo); 
  }
  
  return (
        <div class='produto-pesquisado'>
          <div>
          <h1>Pesquisa Produtos</h1>
          </div>
          <div>
            <span>Código do Produto</span>
            <input type='text' ref={codigoProdutoRef} />
            <span>Quantidade</span>
            <input type='number' min="0" max="99" ref={quantidadeRef}/>
          </div>
          <div>
            <button onClick={adicionar}>Adicionar</button>
          </div>            
        </div>        
  )
}

  