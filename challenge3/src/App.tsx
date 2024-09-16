import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"; // Importando o arquivo de estilos
import Home from "./pages/Home";
import Criadores from "./pages/Criadores";
import QuemSomos from "./pages/QuemSomos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criadores" element={<Criadores/>}/>
          <Route path="/opalavision" element={<QuemSomos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
