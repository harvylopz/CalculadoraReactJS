import React from 'react'

function BtmNumeros(props) {
  return (
    <button onClick={() =>{
      console.log(props.numero)
    }}>{props.numero}</button>
    
  )
}

export  {BtmNumeros};