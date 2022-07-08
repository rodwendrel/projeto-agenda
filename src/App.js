import { Routes, Route } from 'react-router-dom';
import Login from "./pages/LoginPage/Login.js";
import Register from './pages/Register/Register';
import './App.css'

function App() {
  return (

    
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
