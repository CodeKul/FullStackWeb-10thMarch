import logo from './logo.svg';
import './App.css';
import Counter from './useState/Counter';
import Effect from './useEffect/Effect';
import CovidCount from './useEffect/CovidCount';
import InputFocus from './useRef/InputFocus';
import StopWatch from './useRef/StopWatch';
function App() {
  return (
    <div>
        <h1>Hooks</h1>
        {/* <Counter/> */}
        {/* <Effect/> 
        <CovidCount/>*/}

        {/* <InputFocus/> */}
        <StopWatch/>
    </div>
  );
}

export default App;
