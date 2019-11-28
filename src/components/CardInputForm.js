import React, { useState } from 'react';
import './CardInputForm.scss';

const CardInputForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  return (
    <div className="card-input-form">
      <div className="card-input-form__inner">
        <div className="card-input-form__column">
          Card Number
          <input className="card-input-form__input-form" type="number" name="number" value={number} onChange={(event) => setNumber(event.target.value)} />
        </div>
        <div className="card-input-form__column">
          Card Name
          <input className="card-input-form__input-form" type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="card-input-form__column">
          Expiration Date 
          <div className="card-input-form__limit">
          <input className="card-input-form__input-form card-input-form__input-date" />
          <input className="card-input-form__input-form .card-input-form__input-date" />
          </div>
        </div>
        <div className="card-input-form__submit-button">
          Submit
        </div>
      </div>
    </div>
  )
}

export default CardInputForm