import logo from './logo.svg';
import './App.css';
import MyRouter from './components/routing/routing';
import Nscroll01 from './components/nscroll01/nscroll01';
import Vscroll02 from './components/vscroll02/vscroll02';

function App() {
  return (
    <div className="App">
      {/* <MyRouter/> */}
      {/* <Nscroll01/> */}
      <Vscroll02/>
    </div>
  );
}

export default App;
