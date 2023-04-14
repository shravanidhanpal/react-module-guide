import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const App=()=> {
  const expenses = [
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: 'HouseHold Products'
    },
    { 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      locationOfExpenditure: 'Electronics' 
    },
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: 'Bill Payments'
    },
    {
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: 'Material'
    },
  ];
  const addExpenseHandler=expense=>{
    console.log('in App.js');
    console.log(expense);
  }
  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
