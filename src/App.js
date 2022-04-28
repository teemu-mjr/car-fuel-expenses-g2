import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FuelingLog } from "./components/FuelingLog";
import { FuelingTotal } from "./components/FuelingTotal";
import { AddExpense } from "./components/AddExpense";
import { NavBar } from "./components/NavBar";
import { History } from "./components/History";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />
        <div className="App d-flex flex-column align-items-center">
          <Routes>
            <Route
              path="/"
              element={
                <div className="d-md-flex justify-content-center flex-row m-3">
                  <div className="d-flex flex-column align-items-center pb-3">
                    <FuelingTotal />
                    <AddExpense />
                  </div>
                  <div className="d-flex justify-content-center">
                    <History />
                  </div>
                </div>
              }
            ></Route>
            <Route
              path="/log"
              element={
                <div className="d-flex flex-row m-3">
                  <div className="d-flex flex-column align-items-center">
                    <FuelingTotal />
                    <FuelingLog />
                  </div>
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
