import React from 'react'
import './Card.css'

function Card(props) {

  return (
    <div >
      <div id='card' className="card " >
        <div id='con' className="row g-0" key={props.id}>
          <div className="col-md-2">
            <img id='imagi' src={props.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col">
            <div id='cardbody' className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <p>Price: ${props.price}</p>    
            </div>
            <div className='right-div'>
              <button id='dec' onClick={() => props.decrement(props.id)}>-</button>
              <span>{props.quantity}</span>
              <button id='inc' onClick={() => props.increment(props.id)}>+</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
