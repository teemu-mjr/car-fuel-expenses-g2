import "./App.css";
import { History } from "./components/History";
import { FuelingTotal } from "./components/FuelingTotal";
import { AddExpense } from "./components/AddExpense";
import { Header } from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App d-flex flex-column align-items-center text-center w-100 p-3">
        <Header />
        <div className="d-flex flex-row m-3">
          <div className="d-flex flex-column align-items-center me-4">
            <FuelingTotal />
            <AddExpense />
          </div>
          <div>
            <History />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
