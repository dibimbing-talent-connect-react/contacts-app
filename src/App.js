import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css"; //css file stylesheet
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
