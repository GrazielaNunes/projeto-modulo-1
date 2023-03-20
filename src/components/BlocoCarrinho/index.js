import './styles.css';

export default function BlocoCarrinho( { item, fcExcluirProduto } ) {

  return (
    <div>
        <p>{item.op}</p>
        <p>{item.produto.imagem}</p>
        <p>cod: {item.produto.codigo}</p>
        <p>{item.produto.descricao}</p>
        <p>Marca:{item.produto.marca}</p>
        <p>{item.produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <p>Qtde:{item.quantidade}</p>
        <div className='produto-botoes'>
        <button onClick={ () => fcExcluirProduto(item) } >Excluir</button>
        </div>
    </div>
  )
}

