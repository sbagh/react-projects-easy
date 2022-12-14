import './App.css';
import Header from './componenets/Header'
import Balance from './componenets/Balance';
import IncomeExpenses from './componenets/IncomeExpenses';
import TransactionList from './componenets/TransactionList';
import AddNewTransaction from './componenets/AddNewTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
 