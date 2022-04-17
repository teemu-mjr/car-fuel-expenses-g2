import "./App.css";
import { History } from "./components/History";
import { FuelingTotal } from "./components/FuelingTotal";
import { AddExpense } from "./components/AddExpense";
import { Header } from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="AppContainer">
          <FuelingTotal />
          <AddExpense />
          <History />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
