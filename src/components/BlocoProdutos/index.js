import './styles.css';

export default function BlocoProdutos( { codigo, descricao, marca, preco } ) {

  return (
    <div className='prod-container'>
      <div className='prod-info'>
        <span className='prod-info-codigo'>{codigo} - </span>
        <span className='prod-info-descricao'>{descricao} - </span>
        <span className='prod-info-marca'>marca {marca} - </span>
        <span className='prod-info-preco'>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </div>
    </div>
  )
}