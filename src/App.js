import "./App.css";
import { History } from "./components/History";
import { FuelingTotal } from "./components/FuelingTotal";
import { AddExpense } from "./components/AddExpense";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FuelingTotal />
      <History />
      <AddExpense />
    </div>
  );
}

export default App;
