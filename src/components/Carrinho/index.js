import { useEffect, useState } from 'react';
import BlocoCarrinho from '../BlocoCarrinho';
import './styles.css';

export default function Carrinho({itensDoPedido, fcAtualizarItensDoPedido}) {
  const [listaDeItensDoPedido, setListaDeItensDoPedido ]  = useState(itensDoPedido)

  useEffect(() => {
    setListaDeItensDoPedido(itensDoPedido)
  }, [itensDoPedido])

  function filtrarItensParaCarrinho(listaDeItensDoPedido) {
    let listaFiltrada = listaDeItensDoPedido.filter(function (item) {
      return item.mostraNoCarrinho === true;
    }).map(function (item) {
      return item;
    })
    return listaFiltrada;
  }

  function excluirProduto(item) {
    item.mostraNoCarrinho = false;
    var novoProdutoExcluido = {produto:item.produto, quantidade: item.quantidade, op:'-', mostraNoCarrinho:false}
    var itensDoPedidoAtualizado = [...itensDoPedido, novoProdutoExcluido]
    fcAtualizarItensDoPedido(itensDoPedidoAtualizado)
  }

  return (
        <div class="carrinho">
          <div>
          <h1>Carrinho de Compras</h1>
          </div>
          {
            filtrarItensParaCarrinho(listaDeItensDoPedido).map(item => <BlocoCarrinho key={item.produto.codigo} item={item} fcExcluirProduto={excluirProduto} />)
         }
      </div>        
  )
}

