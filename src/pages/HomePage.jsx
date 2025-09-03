import Home from "./Home";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import BetCrawlerDeepScan from "./BetCrawlerDeepScan";
import HomeDataIntel from "./HomeDataIntel";
import FraudIntel from "./FraudIntel";
import ComplianceCheck from "./ComplianceCheck";
// import ClientRegistration from "./deepscan/ClientRegistration";

const HomePage = () => {
  return (
    <motion.div
      className="flex w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Sidebar />

      {/* Main Content com rotas internas */}
      <div className="flex-1 h-screen bg-[#FAFBFC] overflow-hidden">
        <div className="w-full h-full px-4 py-3">
          <div className="w-full h-full overflow-auto bg-white rounded-lg shadow-sm px-6 py-4">
            <Routes>
              {/* ROTA PARA HOME PAGE BASEADA NA FUNÇÃO DO USUÁRIO */}
              <Route path="/" element={<Home />} />
              {/* FIM DA ROTA PARA HOME PAGE BASEADA NA FUNÇÃO DO USUÁRIO */}

              {/* ROTA PARA PAINEL DO DEEPSCAN */}
              <Route
                path="/deepscan/betcrawler"
                element={<BetCrawlerDeepScan />}
              />
              {/* FIM DA ROTA PARA PAINEL DO DEEPSCAN */}
              {/* ROTA PARA PAINEL DO DATA INTEL */}
              <Route path="/deepscan/data-intel" element={<HomeDataIntel />} />
              {/* FIM DA ROTA PARA PAINEL DO DATA INTEL */}
              {/* ROTA PARA PAINEL DO FRAUD INTEL */}
              <Route path="/deepscan/fraud-intel" element={<FraudIntel />} />
              {/* FIM DA ROTA PARA PAINEL DO FRAUD INTEL */}
              {/* ROTA PARA PAINEL DO COMPLIANCE CHECK */}
              <Route
                path="/deepscan/compliance-check"
                element={<ComplianceCheck />}
              />
              {/* FIM DA ROTA PARA PAINEL DO COMPLIANCE CHECK */}
            </Routes>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
