import logo from './logo.svg';
import './App.css';
import LayoutInit from './components/LayoutInit';

function App() {
  return (
  <BrowserRouter>
    <LayoutInit>
      <BaserRoute/>
    </LayoutInit>
  </BrowserRouter>
  );
}

export default App;
