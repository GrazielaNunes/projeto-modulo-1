import './styles.css';

export default function BlocoProdutos( { codigo, descricao, marca, preco } ) {


  return (
    <div className='produto-container'>
      <div className='produto-info'>
        <span className='produto-info-codigo'>{codigo} - </span>
        <span className='produto-info-descricao'>{descricao} - </span>
        <span className='produto-info-marca'>marca {marca} - </span>
        <span className='produto-info-preco'>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </div>
    </div>
  )
}