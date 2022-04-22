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
        <div className="App d-flex flex-column align-items-center text-center w-100 p-3">
          <Routes>
            <Route
              path="/"
              element={
                <div className="App d-flex flex-column align-items-center text-center w-100 p-3">
                  <h1>Welcome to track your fueling</h1>
                  <FuelingTotal />
                </div>
              }
            ></Route>
            <Route
              path="/add"
              element={
                <div className="d-flex flex-row m-3">
                  <div className="d-flex flex-column align-items-center me-4">
                    <FuelingTotal />
                    <AddExpense />
                  </div>
                  <div>
                    <FuelingLog />
                  </div>
                </div>
              }
            ></Route>
            <Route
              path="/history"
              element={
                <div className="d-flex flex-row m-3">
                  <div className="d-flex flex-column align-items-center me-4">
                    <FuelingTotal />
                    <History />
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
