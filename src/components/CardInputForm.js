import React, { useContext } from 'react';
import './CardInputForm.scss';
import { Store } from '../redux/store';

const CardInputForm = () => {
  const { state, dispatch } = useContext(Store);

  function changeNumber(event) {
    const number = event.target.value
    if (number.length <= 16) {
      dispatch({ type : 'CHANGE_NUMBER', value: number })
    }
    let re = new RegExp('^4')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'visa' })
    
    re = new RegExp('^(34|37)')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'amex' })

    re = new RegExp('^5[1-5]')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'mastercard' })

    re = new RegExp('^6011')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'discover' })

    re = new RegExp('^62')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'unionpay' })

    re = new RegExp('^9792')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'troy' })

    re = new RegExp('^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}')
    if (number.match(re) != null) return 'dinersclub'

    re = new RegExp('^35(2[89]|[3-8])')
    if (number.match(re) != null) dispatch({ type: 'CHANGE_LOGO', value: 'jcb' })
  }

  function changeName(event) {
    if (event.target.value.length <= 30) {
      dispatch({ type: 'CHANGE_NAME', value: event.target.value})
    }
  }

  function changeMonth(event) {
    dispatch({ type: 'CHANGE_MONTH', value: event.target.value})
  }

  function changeYear(event) {
    dispatch({ type: 'CHANGE_YEAR', value: event.target.value})
  }

  function changeCW(event) {
    if (event.target.value.length <= 4) {
      dispatch({ type: 'CHANGE_CW', value: event.target.value})
    }
  }

  function onFocus(focus) {
    dispatch({ type: 'CHANGE_FOCUS', value: focus })
  }

  function onBlur() {
    dispatch({ type: 'CHANGE_FOCUS', value: 'NON' })
  }

  return (
    <div className="card-input-form">
      <div className="card-input-form__inner">
        <div className="card-input-form__column">
          Card Number
          <input className="card-input-form__input-form" type="number" name="number" value={state.number} onChange={changeNumber} onFocus ={() => onFocus('NUMBER')} onBlur={onBlur}/>
        </div>
        <div className="card-input-form__column">
          Card Name
          <input className="card-input-form__input-form" type="text" name="name" value={state.name} onChange={changeName} onFocus ={() => onFocus('NAME')} onBlur={onBlur}/>
        </div>
        <div className="card-input-form__column">
          <div className="card-input-form__subtitle">
            <div style={{width: '70%'}}>Expiration Date</div>
            <div style={{width: '30%'}}>CW</div>
          </div>
          <div className="card-input-form__row">
            <div className="card-input-form__expiration">
              <select className="card-input-form__input-form card-input-form__select" onChange={changeMonth} onFocus ={() => onFocus('LIMIT')} onBlur={onBlur}>
                <option value="MM" defaultValue>Month</option>
                {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(item => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <select className="card-input-form__input-form card-input-form__select" onChange={changeYear} onFocus ={() => onFocus('LIMIT')} onBlur={onBlur}>
                <option value="YY" defaultValue>Year</option>
                {["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"].map(item => (
                  <option value={item[2]+item[3]}>{item}</option>
                ))}
              </select>
            </div>
            <input className="card-input-form__input-form card-input-form__input-cw" type="number" name="cw" value={state.cw} onChange={changeCW} onFocus ={() => onFocus('CW')} onBlur={onBlur}/>
          </div>
        </div>
        <div className="card-input-form__submit-button">
          Submit
        </div>
      </div>
    </div>
  )
}

const cardNumber = (number) => {
  let four_numbers = ""
  let result = ""
  for(let i=0; i<number.length; i++) {
    four_numbers += number[i]
    if (four_numbers.length === 4) {
      result += four_numbers
      result += " "
      four_numbers = ""
    }
  }
  return result
}

export default CardInputForm