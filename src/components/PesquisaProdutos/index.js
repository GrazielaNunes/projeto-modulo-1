import { useEffect, useRef, useState } from 'react';
import './styles.css';

export default function PesquisaProdutos({produtos, itensDoPedido, fcAtualizarItensDoPedido}) {

  const codigoProdutoRef = useRef();
  const quantidadeRef = useRef();
  const [listaDeItensDoPedido, setListaDeItensDoPedido ]  = useState(itensDoPedido)

  useEffect(() => {
    setListaDeItensDoPedido(itensDoPedido)
  }, [itensDoPedido])

  function adicionar() {
    const codigo = codigoProdutoRef.current.value;
    const quantidade = quantidadeRef.current.value;
    const produtoSelecionado = produtos.find(produto => produto.codigo == codigo);
    if(produtoSelecionado === undefined){
      alert("Produto inexistente!")
    }
    var novoProduto = {produto:produtoSelecionado, quantidade: quantidade, op:'+' }
    var itensDoPedidoAtualizado =[...itensDoPedido, novoProduto]
    fcAtualizarItensDoPedido(itensDoPedidoAtualizado)
  }
  
  return (
        <div class="produtos">
        <div>
        <h1>Pesquisa Produtos</h1>
        </div>
            <span>Código do Produto</span>
            <input type='text' ref={codigoProdutoRef} />
            <span>Quantidade</span>
            <input type='number' min="0" max="99" ref={quantidadeRef}/>
            <button onClick={adicionar}>Adicionar</button>
        </div>        
  )
}

  