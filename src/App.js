import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css"; //css file stylesheet
import Header from "./components/Header";
import Content from "./components/Content";

export const DataContext = createContext();

function App() {
  const [angka, setAngka] = useState(0);

  // let angka = 0;

  // const tambahAngka = () => {
    //   angka = angka + 1;
    //   console.log(angka);
    // setAngka(angka + 1);
  // };

  return (
    <DataContext.Provider value={{ angka, setAngka }}>
      <div className="App">
        <Header />
        <Content />
        {/* <h1>{angka}</h1> */}
        {/* <button onClick={tambahAngka}>Tambah Angka</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
