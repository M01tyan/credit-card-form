import React, { useState } from 'react';
import './Card.css';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Card = ({ location }) => {
  return (
    <div>
      <Link to='/'></Link>
      <Link to='/back'></Link>
      <TransitionGroup>
        <CSSTransition classNames='fade' timeout={800}>  {/*追加*/}
          <div style={{marginLeft: '50px'}}>
            <Switch location={location}>    {/*追加*/}
              <Route path='/' exact component={CardFront}/>
              <Route path='/back' exact component={CardBack}/>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

const CardFront = () => {
  const [card_company] = useState("mastercard");
  const [card_number] = useState("");
  const [card_holder] = useState("AD SOAD");
  const [card_limit_month] = useState("MM");
  const [card_limit_year] = useState("YY");
  const [card_rotate, setRotate] = useState(false);
  const [card_front, setFront] = useState(true);
  return (
    card_rotate ?
      <div className={`credit-card ${card_rotate && "front-rotate-animation"}`} onClick={() => setRotate(false)}>Z</div> :
      <div className={`credit-card ${!card_rotate && "back-rotate-animation"}`} onClick={() => setRotate(true)} //onAnimationEnd={event => setRotate(false)}
      >
        <div className="logo-container">
          <img src={require("../assets/images/chip.png")} alt="chip" className="chip" />
          <img src={require(`../assets/images/${card_company}.png`)} alt="card-company" className="card-company-logo" />
        </div>
        <div className="card-number-container">
          <div className="card-numbers">
          {CardNumber(card_number).map((item, index) => (
            <div key={index} className="number-text">{item}</div>
          ))}
          </div>
        </div>
        <div className="card-name-limit-container">
          <div className="card-name">
            <div className="subtitle">Card Holder</div>
            <div className="holder-name">{card_holder}</div>
          </div>
          <div className="card-limit">
            <div className="subtitle">Expires</div>
            <div className="limit">{`${card_limit_month}/${card_limit_year}`}</div>
          </div>
        </div>
      </div>
  )
}

const CardBack = () => {
  return (
    <div></div>
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

export default CardFront;