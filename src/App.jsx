import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ModalForm from "./components/Modal/ModalForm";
import { useContext } from "react";
import { TechContext } from "./contexts/TechContext";

function App() {
  const { isModalOpen } = useContext(TechContext);
  return (
    <div className="App">
      <ToastContainer
        position={window.screen.width >= 600 ? "top-right" : "top-center"}
      />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {isModalOpen && <ModalForm />}
    </div>
  );
}

export default App;
