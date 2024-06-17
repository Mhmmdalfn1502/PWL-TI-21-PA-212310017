import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import LayoutInit from './component/LayoutInit';
import BaseRoute from './apps/BaseRoute';


function App() {
  const createSessionStorage = () => {
    sessionStorage.setItem('token', '12345');
    alert('Success');
  };
  
  const removeSessionStorage = () => {
    sessionStorage.removeItem('token', '12345');
    alert('Success');
  };
  

  return (
    <>
    <button onClick={createSessionStorage}>Set token sessionStorage</button>
    <div>{sessionStorage.getItem('token')}</div>
    <button onClick={removeSessionStorage}>remove token SessionStorage</button>
    </>
  
  // <BrowserRouter>
  //   <LayoutInit>
  //     <BaseRoute />
  //   </LayoutInit>
  // </BrowserRouter>

  );
}

export default App;