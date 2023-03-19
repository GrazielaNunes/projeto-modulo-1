import Cabecalho from './components/Cabecalho';
import ListaProdutos from './components/ListaProdutos';
import PesquisaProdutos from './components/PesquisaProdutos';
import Carrinho from './components/Carrinho';
import Cupom from './components/Cupom';


import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function App() {

  const [produtos, setProdutos] = useState([]);
  const [itensPedido, setItensPedido] = useState([]);
  console.log('tela principalo : ', itensPedido)

  useEffect(() => {  
    axios.get('produtos.json')   
      .then(resp => resp.data)
      .then(produtos => {
        setProdutos(produtos);
      })
      .catch(erro => console.log(erro))
  }, [])

  return (
      <div className="App">
        <Cabecalho />
        <div class="container">
          <ListaProdutos produtos={produtos} />
          <div>
            <PesquisaProdutos produtos={produtos} itensDoPedido={itensPedido} fcAtualizarItensDoPedido={setItensPedido}/>
            
            <Carrinho itensDoPedido={itensPedido} fcAtualizarItensDoPedido={setItensPedido}/>
          </div>
          <Cupom itensDoPedido={itensPedido}/>
        </div>
      </div>
  )

  }
export default App
