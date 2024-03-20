// import logo from './logo.svg';
// import './App.css';
import HelloWorld from "./components/HelloWorld"
import Expression from "./components/Expression"
import MyProfile from "./components/MyProfile";
import Profile from "./components/Profile";
import bootstrap from 'react-bootstrap'
import LayoutInit from "./components/Messanger/LayoutInit";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./apps/BaseRoute";
import ChatBox from "./components/ChatBox";

function App({ basename }) {
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <h1>Chat App</h1>
    //   </header>
    //   <main>
    //     <ChatBox />
    //   </main>
    // </div>

    <BrowserRouter>
      <LayoutInit>
        <BaseRoute />
      </LayoutInit>
    </BrowserRouter>
  );
}

export default App;
