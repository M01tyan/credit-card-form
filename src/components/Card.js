import React, { useState, useContext } from 'react';
import './Card.scss';
import { Store } from '../redux/store';

const Card = () => {
  const { state } = useContext(Store);
  const [card_company] = useState("mastercard");
  return (
    <div className="credit-card">
      <div className={`credit-card__inner ${state.focus === "CW" && "credit-card__rotate"}`}>
        <div className="credit-card__front">
          <div className="credit-card__logo">
            <img src={require("../assets/images/chip.png")} alt="chip" className="credit-card__chip" />
            <img src={require(`../assets/images/${card_company}.png`)} alt="card-company" className="credit-card__company" />
          </div>
          <div className={`credit-card__numbers ${state.focus === "NUMBER" && "credit-card__focus_border"}`}>
            <div className="credit-card__row">
            {CardNumber(state.number).map((item, index) => (
              <div key={index} className="credit-card__number-text">{item}</div>
            ))}
            </div>
          </div>
          <div className="credit-card__bottom">
            <div className={`credit-card__holder ${state.focus === "NAME" && "credit-card__focus_border"}`}>
              <div className="credit-card__subtitle">Card Holder</div>
              <div className="credit-card__holder-text">{state.name.length ? state.name : 'AD SOYAD'}</div>
            </div>
            <div className={`credit-card__limit ${state.focus === "LIMIT" && "credit-card__focus_border"}`}>
              <div className="credit-card__subtitle">Expires</div>
              <div className="credit-card__limit_text">
                <div style={{flex: 1}}>{state.month || 'MM'}</div>
                <div style={{flex: .5}}>{"/"}</div>
                <div style={{flex: 1}}>{state.year || 'YY'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="credit-card__back">
          <div className="credit-card__card_reader" />
          <div className="credit-card__cw_text">CW</div>
          <div className="credit-card__cw_background">
            <div className="credit-card__cw_text">{state.cw}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CardNumber = (card_number) => {
  let four_numbers = ""
  let result = []
  for(let i=0; i<16; i++) {
    if (card_number[i]) {
      four_numbers += card_number[i]
    } else {
      four_numbers += "#"
    }
    if (four_numbers.length === 4) {
      result.push(four_numbers)
      four_numbers = ""
    }
  }
  return result
}

export default Card;