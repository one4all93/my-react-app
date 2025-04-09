import React, { Component } from 'react'
import './ExpenseForm.css'
import {MdSend} from 'react-icons/md'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'

const ExpenseForm = ( {handleCharge , charge , handleAmount, amount , handleSubmit , edit}) => {
//export class ExpenseForm extends Component {
  //render() {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
            <div className='form-group'>
                <label>지출 항목</label>
                <input 
                    type='text' 
                    id='charge' 
                    name='charge'
                    className='form-control' 
                    placeholder=') 렌트비' 
                    value={charge}
                    onChange={handleCharge}
                />
            </div>
            <div className='form-group'>
                <label>비용</label>
                <input 
                    type='number' 
                    id='amount' 
                    name='amout'
                    className='form-control' 
                    placeholder=') 100' 
                    value={amount}
                    onChange={handleAmount}
                />
            </div>
        </div>
        <button 
            type='submit' 
            className='btn'
            //onClick={handleSubmit}
        >
            { edit ? '수정' : '제출' }  <MdSend/>
        </button>
      </form>
    )
  }
//}

export default ExpenseForm