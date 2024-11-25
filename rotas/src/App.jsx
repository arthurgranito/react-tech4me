import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Listagem from "./components/Listagem";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/listagem">Listagem</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/listagem" element={<Listagem />}/>
      </Routes>
    </>
  )
}

export default App
