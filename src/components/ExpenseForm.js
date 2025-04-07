import React, { Component } from 'react'
import './ExpenseForm.css'
import {MdSend} from 'react-icons/md'

export class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div className='form-center'>
            <div className='form-group'>
                <label>지출 항목</label>
                <input 
                    type='text' 
                    id='charge' 
                    name='charge'
                    className='form-control' 
                    placeholder=') 렌트비' />
            </div>
            <div className='form-group'>
                <label>비용</label>
                <input 
                    type='number' 
                    id='amount' 
                    name='amout'
                    className='form-control' 
                    placeholder=') 100' />
            </div>
        </div>
        <button type='submit' className='btn'>
            제출 <MdSend/>
        </button>
      </form>
    )
  }
}

export default ExpenseForm