import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <>
    <div>
      <img className='cards'src={props.img}/>
    </div>
    </>
  )
}
