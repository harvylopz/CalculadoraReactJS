import { useState } from 'react';
import { BtmNumeros } from './componente/BtmNumeros';
import { BoxCalcu } from './componente/BoxCalcu';
import { BtmOperaciones } from './componente/BtmOperaciones';
import '/src/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contenedor-principal">
        <BoxCalcu className="valores" valorInicial={0}/>
        <div className="contenedor-botones">
          <BtmNumeros numero={1}/>
          <BtmNumeros numero={2}/>
          <BtmNumeros numero={3}/>
          <BtmOperaciones operacion="+"/>
              
          <BtmNumeros numero={4}/>
          <BtmNumeros numero={5}/>
          <BtmNumeros numero={6}/>
          <BtmOperaciones operacion="-"/>
              
              
          <BtmNumeros numero={7}/>
          <BtmNumeros numero={8}/>
          <BtmNumeros numero={9}/>
          <BtmOperaciones operacion="x"/>
              
              
          <BtmNumeros numero={"."}/>
          <BtmNumeros numero={0}/> 
          <BtmNumeros numero={"="}/>
          <BtmOperaciones operacion="/"/>
          
        </div>
      </div>
      
    </>
  )
}

export default App
