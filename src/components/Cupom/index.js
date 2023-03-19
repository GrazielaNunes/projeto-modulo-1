import { useEffect, useState } from 'react';
import BlocoCupom from '../BlocoCupom';
import './styles.css';

export default function Cupom({itensDoPedido}) {

  const [listaDeItensDoPedido, setListaDeItensDoPedido ]  = useState(itensDoPedido)

  function calculaValorTotal() {
    var valorTotal = 0;
    listaDeItensDoPedido.forEach(element => {
      valorTotal += element.produto.preco * element.quantidade;
    });
    return valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  useEffect(() => {
    setListaDeItensDoPedido(itensDoPedido)
  }, [itensDoPedido])

  return (
        <div class="cupom">
          <div>
            <h1>Cupom Fiscal</h1>
          </div>
          <table>
          <thead>
          <tr>
            <th>op</th>
            <th>cod</th>
            <th>produto</th>
            <th>preço unit</th>
            <th>qtd</th>
            <th>preço</th>
          </tr>
          </thead>
          <tbody>
          {
        
            listaDeItensDoPedido.map(prod => <BlocoCupom key={prod.produto.codigo} prod={prod} />)
            
        }
          </tbody>
          <tfoot>
          <tr>
          <th>Total:{calculaValorTotal()}</th>
          </tr>
          </tfoot>
        </table>
        </div>          
  )
}