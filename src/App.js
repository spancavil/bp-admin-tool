import './Styles/Global.scss';

function App() {
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Drops from "./Views/Drops";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drops/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
