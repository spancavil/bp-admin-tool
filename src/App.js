import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainMenu from './Views/MainMenu';
import Form from './Views/DropForm';
import Login from './Views/Login';

import './Styles/Global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/create-drop" element={<Form/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
