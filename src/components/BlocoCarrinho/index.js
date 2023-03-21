import './styles.css';

export default function BlocoCarrinho( { item, fcExcluirProduto } ) {

  return (
    <div className='produto-container'>
      <img src={item.produto.imagem} className='produto-foto'/>
      <div className='produto-info'>
        <p className='produto-info-cod'>cod: {item.produto.codigo}</p>
        <p className='produto-info-descricao'>{item.produto.descricao}</p>
        <p className="produto-info-marca">Marca: {item.produto.marca}</p>
        <p className='produto-info-preco'>{item.produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <p className='produto-info-quantidade'>Qtde: {item.quantidade}</p>
      </div>
      <div className='produto-botoes'>
      <button onClick={ () => fcExcluirProduto(item) } >Excluir</button>
      </div>
    </div>
  )
}

