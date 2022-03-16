import './Styles/Global.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './Views/MainMenu';
import Form from './Views/DropForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/create-drop" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
