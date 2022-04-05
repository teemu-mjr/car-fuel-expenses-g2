import "./App.css";
import History from "./components/History";
import FuelingTotal from "./components/FuelingTotal";
import AddExpense from "./components/AddExpense";

function App() {
  return (
    <div className="App">
      <h1>Fueling site</h1>
      <FuelingTotal km={100} liter={100} price={10} />
      <History carHistoryList={[0, 1, 2, 3]} />
      <AddExpense />
    </div>
  );
}

export default App;
