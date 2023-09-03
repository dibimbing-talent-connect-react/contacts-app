import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css"; //css file stylesheet
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const DataContext = createContext();

function App() {
  // const [angka, setAngka] = useState(0);
  const [isLogin, setIsLogin] = useState(false)

  // let angka = 0;

  // const tambahAngka = () => {
  //   angka = angka + 1;
  //   console.log(angka);
  // setAngka(angka + 1);
  // };

  return (
    <BrowserRouter>
      <DataContext.Provider value={{ isLogin, setIsLogin }}>
        <div className="App">
          <Header />
          {/* <h1>{angka}</h1> */}
          {/* <button onClick={tambahAngka}>Tambah Angka</button> */}

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Favorites />} path="/favorite-contacts" />
          </Routes>
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
