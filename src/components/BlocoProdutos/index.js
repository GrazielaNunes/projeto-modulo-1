import './styles.css';

export default function BlocoProdutos( { prod } ) {

  return (
    <div className='prod-container'>
      <div className='prod-info'>
        <span className='prod-info-codigo'>{prod.codigo} - </span>
        <span className='prod-info-descricao'>{prod.descricao} - </span>
        <span className='prod-info-marca'>marca {prod.marca} - </span>
        <span className='prod-info-preco'>{prod.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </div>
    </div>
  )
}