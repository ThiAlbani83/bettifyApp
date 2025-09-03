import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();
  const navigate = useNavigate(); // O hook useNavigate deve ser chamado aqui no corpo do componente

  // ...existing code...

  const getBackgroundClass = () => {
    if (location.pathname.includes("/register/") && window.innerWidth < 768) {
      return 'before:content-[""] before:fixed before:top-[-10%] before:left-[-10%] before:right-[-10%] before:bottom-[-10%] before:bg-[url("/register-image.png")] before:bg-cover before:bg-center before:blur-md before:-z-10 md:bg-background';
    } else if (
      location.pathname.includes("/login") &&
      window.innerWidth < 768
    ) {
      return 'before:content-[""] before:fixed before:top-[-10%] before:left-[-10%] before:right-[-10%] before:bottom-[-10%] before:bg-[url("/login-image.png")] before:bg-cover before:bg-center before:blur-md before:-z-10 md:bg-background';
    }
    return "bg-background";
  };

  return (
    <div
      className={`relative flex items-center justify-center h-screen min-h-screen overflow-hidden ${getBackgroundClass()}`}
    >
      <Toaster position="top-center" />
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
