import React from 'react'

function BtmOperaciones(props) {
  return (
    <button onClick={() =>{
      console.log(props.operacion)
    }}>{props.operacion}</button>
  )
}

export  {BtmOperaciones};