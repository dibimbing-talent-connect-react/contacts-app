import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css"; //css file stylesheet
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoriteContacts from "./pages/FavoriteContacts";
import Cookies from "js-cookie";
import ProtectedRoute from "./route/ProtectedRoute";

export const DataContext = createContext();

function App() {
  // const [angka, setAngka] = useState(0);
  const [isLogin, setIsLogin] = useState(
    Cookies.get("access_token") ? true : false
  );

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
            <Route element={<ProtectedRoute />}>
              <Route element={<FavoriteContacts />} path="/favorite-contacts" />
            </Route>
          </Routes>
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
