import './Styles/Global.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Global-Components/Form';

import Drops from "./Views/Drops";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drops/>} />
        <Route path="/create-drop" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
