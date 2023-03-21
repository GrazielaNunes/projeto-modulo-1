import BlocoProdutos from '../BlocoProdutos';
import './styles.css';

export default function ListaProdutos({produtos}) {
  
  return (
        <div class="produtos">
        <div>
        <h1>Produtos</h1>
        </div>
            {
                produtos.map(prod => <BlocoProdutos key={prod.codigo} prod={prod}/>)  
            }
        </div>        
  )
}

  