import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;