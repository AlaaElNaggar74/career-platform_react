import "./App.css";
import Main from "./components/TestProject/Main";

function App() {
  let x = "Alaa ElNaggar";
  // let propName = "GOOOD";
  // let files1 = "Files_1";
  // let files2 = "Files_2";
  // let oneObj = "One Objects";
  // // let oneStr="ALL String";

  // let tags = <h1>KALAM kETERR {x}</h1>;

  // function asd(ala) {
  //   return <h5>{ala}</h5>;
  // }

  // function tiii() {
  //   return "cccccccccc";
  // }
  return <div className="App">

    <Main deep={x} />
  </div>;
}

export default App;
