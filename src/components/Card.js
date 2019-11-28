import React, { useState } from 'react';
import './Card.scss';

const Card = () => {
  const [card_company] = useState("mastercard");
  const [card_number] = useState("");
  const [card_holder] = useState("AD SOAD");
  const [card_limit_month] = useState("MM");
  const [card_limit_year] = useState("YY");
  return (
    <div className="credit-card">
      <div className="credit-card__inner">
        <div className="credit-card__front">
          <div className="credit-card__logo">
            <img src={require("../assets/images/chip.png")} alt="chip" className="credit-card__chip" />
            <img src={require(`../assets/images/${card_company}.png`)} alt="card-company" className="credit-card__company" />
          </div>
          <div className="credit-card__numbers">
            <div className="credit-card__row">
            {CardNumber(card_number).map((item, index) => (
              <div key={index} className="credit-card__number-text">{item}</div>
            ))}
            </div>
          </div>
          <div className="credit-card__bottom">
            <div className="credit-card__holder">
              <div className="credit-card__subtitle">Card Holder</div>
              <div className="credit-card__holder-text">{card_holder}</div>
            </div>
            <div className="credit-card__limit">
              <div className="credit-card__subtitle">Expires</div>
              <div className="credit-card__limit-text">{`${card_limit_month}/${card_limit_year}`}</div>
            </div>
          </div>
        </div>
        <div className="credit-card__back">
          Z
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