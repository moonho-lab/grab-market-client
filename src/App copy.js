import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponetn from "./timer.js";
function App() {
  const text = "인프런 수강생 화이팅 !";
  const sayHello = function () {
    return <h3>이프런 짱</h3>;
  };
  const sayHelloClick = function () {
    alert("안녕하세요 ALERT");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>안녕하세요</h1>
        <h1>{text}</h1>
        {sayHello()}
        <div onClick={sayHelloClick}> 클리해주세요 </div>
        <ChildComponent name="그랩1" age={27} />
        <ChildComponent name="그랩2" age={27} />
        <ChildComponent name="그랩3" age={27} />
        <TimerComponetn />
      </header>
    </div>
  );
}

export default App;
