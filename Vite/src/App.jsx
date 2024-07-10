import "./style/App.scss";
import { Home, Game, TablePage, Error } from "./Pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import dataServ from "./data";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setData] = useState(dataServ);
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route
            path="/table"
            element={<TablePage data={data} setData={setData} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
