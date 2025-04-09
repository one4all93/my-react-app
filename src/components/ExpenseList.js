import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete , initialExpanses , handleEdit , clearItems}) => {
//export class ExpenseList extends Component {
  //render() {
    // props로 초기값을 받는다.
    // const { initialExpanses } = this.props;
    // let { initialExpanses } = this.props.initialExpanses;
    console.log(initialExpanses);
    return (
    // eact.Fragment 사용하면 해당 div 생략됨
    //   <React.Fragment>

    //   </React.Fragment>
    // eact.Fragment 사용하면 해당 div 생략됨
        <>
            <ul className='list'>
                {initialExpanses.map(expanse => {
                    return (
                        <ExpenseItem 
                            key={expanse.id} 
                            expense={expanse}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
            {initialExpanses.length > 0 && (
                <button 
                    className='btn'
                    onClick={clearItems}
                >
                    목록지우기 <MdDelete/>
                </button>
            )}
        </>
    )
  }
//}

export default ExpenseList