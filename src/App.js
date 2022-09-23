import './App.css';
import React,{useState} from 'react'
import Parent from './components/Parent';
function App() {
  const [budget,setBudget]=useState()
  const [page,setPage]=useState(true)
  const updateBudget=(e)=>{
    setBudget(e.target.value);
  }

  const saveBudget=()=>{
    setPage(!page)
  }

  return (
    <div className="App">
      {page? <div className='createbudget'>
            <h1>Get started by creating a new budget</h1>
            <input onChange={updateBudget} type="number"/>
            <button onClick={()=>{saveBudget()}} className="createbudget">create</button></div>
            :
      <Parent budget={budget}/>}
    </div>
  );
}

export default App;
