import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component{

  initialExpanses = [
    { id: 1, charge: "렌트비", amount: 1000 },
    { id: 2, charge: "식비", amount: 200 },
    { id: 3, charge: "교통비", amount: 300 },
    { id: 4, charge: "문화생활비", amount: 400 },
    { id: 5, charge: "의료비", amount: 500 },
    { id: 6, charge: "통신비", amount: 600 },
    { id: 7, charge: "기타", amount: 700 },
  ]

  constructor(props){
    super(props);
    this.state = {
      expenses: this.initialExpanses,
    }
  }

  handleDelete = (id) => {
    console.log(`삭제할 항목의 id : ${id}`);
    // 삭제할 항목의 id를 받아서 해당 항목을 삭제하는 로직을 구현해야함
    const newExpenses = this.state.expenses.filter((item) => item.id !== id);
    console.log(newExpenses);
    this.setState({
      expenses: newExpenses,
    })
  }

  render(){
    return(
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width:'100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseForm/>
        </div>

        <div style={{ width:'100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseList 
            initialExpanses={this.state.expenses}
            handleDelete={this.handleDelete} 
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
          <p style={{ fontSize: '2rem'}}>
            총지출 :
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}

export default App;