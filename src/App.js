import { Component, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Alert } from "./components/Alert";
 
const App = () => {
//class App extends Component{

  // initialExpanses = [
  //   { id: 1, charge: "렌트비", amount: 1000 },
  //   { id: 2, charge: "식비", amount: 200 },
  //   { id: 3, charge: "교통비", amount: 300 },
  //   { id: 4, charge: "문화생활비", amount: 400 },
  //   { id: 5, charge: "의료비", amount: 500 },
  //   { id: 6, charge: "통신비", amount: 600 },
  //   { id: 7, charge: "기타", amount: 700 },
  // ]

  const [charge, setChatge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({show:false});
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const [expenses , setExpenses] = useState(
    [
      { id: 1, charge: "렌트비", amount: 1000 },
      { id: 2, charge: "식비", amount: 200 },
      { id: 3, charge: "교통비", amount: 300 },
      { id: 4, charge: "문화생활비", amount: 400 },
      { id: 5, charge: "의료비", amount: 500 },
      { id: 6, charge: "통신비", amount: 600 },
      { id: 7, charge: "기타", amount: 700 },
    ]
  );
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     expenses: this.initialExpanses,
  //   }
  // }

  const handleCharge = (e) => {
    //console.log(e.target.value);
    setChatge(e.target.value);
  }

  const handleAmount = (e) => {
    //console.log(e.target.value);
    setAmount(e.target.valueAsNumber);
  }

  const handleDelete = (id) => {
    //console.log(`삭제할 항목의 id : ${id}`);
    // 삭제할 항목의 id를 받아서 해당 항목을 삭제하는 로직을 구현해야함
    const newExpenses = expenses.filter((item) => item.id !== id);
    //console.log(newExpenses);
    setExpenses(newExpenses);
    handleAlert({type: "danger", text: "항목이 삭제되었습니다."});
    // this.setState({
    //   expenses: newExpenses,
    // })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      if(edit){
        const newExpenses = expenses.map(item => {
          return item.id == id ? {...item, charge, amount} : item;
        })
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type: "success", text: "항목이 수정되었습니다."});
      }else{
        const newExpense = { id: crypto.randomUUID, charge, amount };
        
        //불변성을 지켜주기 위해서 새로운 expenxses를 생성
  
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        setChatge("");
        setAmount(0);
        handleAlert({type: "success", text: "항목이 추가되었습니다."});
      }
    }else{
      console.log("빈값입니다.");
      handleAlert({type: "danger", text: "빈값입니다."});
    }
  }

  const handleAlert = ({type, text}) => {
    console.log(type, text);
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false});
    }, 7000);
  }

  const handleEdit = (id)=>{
    const expense = expenses.find(item=> item.id === id); 
    const {charge,amount} = expense;
    setId(id);
    setChatge(charge);
    setAmount(amount);
    setEdit(true);
  }

  const clearItems = () => {
    setExpenses([]);
    handleAlert({type: "danger", text: "모든 항목이 삭제되었습니다."});
  }

  //render(){
    return(
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>예산 계산기</h1>

        <div style={{ width:'100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseForm 
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
          />
        </div>

        <div style={{ width:'100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseList 
            initialExpanses={expenses}
            handleDelete={handleDelete} 
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
          <p style={{ fontSize: '2rem'}}>
            총지출 :
            {expenses.reduce((acc, curr) => {
              return acc + curr.amount;
            }
            , 0)}
            <span>원</span>
          </p>
        </div>
      </main>
    )
  //}
}

export default App;