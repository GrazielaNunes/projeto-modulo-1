import './styles.css';

export default function BlocoCupom( { prod } ) {

  function calculaValorTotal(quantidade, valor) {
    return valor * quantidade
  }

  return (
    <tr>
        <th>{prod.op}</th>
        <th>{prod.produto.codigo}</th>
        <th>{prod.produto.descricao}</th>
        <th>{prod.produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th>
        <th>{prod.quantidade}</th>
        <th>{calculaValorTotal(prod.produto.preco, prod.quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th>
    </tr>
  )
}

