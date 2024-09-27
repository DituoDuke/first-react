import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Games from "./pages/Games";
import Game1 from "./pages/games/Game1";
import Game1Right from "./pages/Game1Right";
import Comprar from "./pages/Comprar";
import Resultado from "./pages/Resultado";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/compras-do-mes" element={<Game1 />} />
          <Route path="/games/compras-do-mes/boa" element={<Game1Right />} />
          <Route path="/compra" element={<Comprar />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="*" element={<h1>404 TEM ESSA PÁGINA NÃO!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
