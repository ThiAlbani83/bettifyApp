import React, { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
  FaGavel,
  FaFileAlt,
  FaCalendarAlt,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaClock,
  FaFlag,
} from "react-icons/fa";

const ComplianceCheck = () => {
  const [betHouses, setBetHouses] = useState([]);
  const [selectedBetHouse, setSelectedBetHouse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Dados das casas de apostas autorizadas pelo governo brasileiro
  useEffect(() => {
    const governmentAuthorizedBetHouses = [
      {
        id: 1,
        name: "BETANO",
        company: "KAIZEN GAMING BRASIL LTDA",
        cnpj: "46.786.961/0001-74",
        website: "betano.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 2,
        name: "SUPERBET",
        company: "SPRBT INTERACTIVE BRASIL LTDA",
        cnpj: "54.071.596/0001-40",
        website: "superbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 3,
        name: "MAGICJACKPOT",
        company: "SPRBT INTERACTIVE BRASIL LTDA",
        cnpj: "54.071.596/0001-40",
        website: "magicjackpot.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Slots"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 4,
        name: "SUPER",
        company: "SPRBT INTERACTIVE BRASIL LTDA",
        cnpj: "54.071.596/0001-40",
        website: "super.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 5,
        name: "REI DO PITACO",
        company: "MMD TECNOLOGIA, ENTRETENIMENTO E MARKETING LTDA",
        cnpj: "34.935.286/0001-19",
        website: "reidopitaco.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Fantasy Sports"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 6,
        name: "PITACO",
        company: "MMD TECNOLOGIA, ENTRETENIMENTO E MARKETING LTDA",
        cnpj: "34.935.286/0001-19",
        website: "pitaco.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Fantasy Sports", "Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 7,
        name: "RdP",
        company: "MMD TECNOLOGIA, ENTRETENIMENTO E MARKETING LTDA",
        cnpj: "34.935.286/0001-19",
        website: "rdp.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Fantasy Sports", "Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 8,
        name: "SPORTINGBET",
        company: "VENTMEAR BRASIL S.A.",
        cnpj: "52.868.380/0001-84",
        website: "sportingbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 9,
        name: "BETBOO",
        company: "VENTMEAR BRASIL S.A.",
        cnpj: "52.868.380/0001-84",
        website: "betboo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 10,
        name: "BIG",
        company: "BIG BRAZIL TECNOLOGIA E LOTERIA S.A.",
        cnpj: "41.590.869/0001-10",
        website: "big.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 11,
        name: "APOSTAR",
        company: "BIG BRAZIL TECNOLOGIA E LOTERIA S.A.",
        cnpj: "41.590.869/0001-10",
        website: "apostar.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 12,
        name: "CAESARS",
        company: "BIG BRAZIL TECNOLOGIA E LOTERIA S.A.",
        cnpj: "41.590.869/0001-10",
        website: "caesars.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 13,
        name: "BETNACIONAL",
        company: "NSX BRASIL S.A.",
        cnpj: "55.056.104/0001-00",
        website: "betnacional.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 14,
        name: "KTO",
        company: "APOLLO OPERATIONS LTDA",
        cnpj: "54.923.003/0001-26",
        website: "kto.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 15,
        name: "BETSSON",
        company: "SIMULCASTING BRASIL SOM E IMAGEM S.A.",
        cnpj: "17.385.948/0001-05",
        website: "betsson.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 16,
        name: "GALERA.BET",
        company: "GALERA GAMING JOGOS ELETRONICOS S.A.",
        cnpj: "31.853.299/0001-50",
        website: "galera.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 17,
        name: "F12.BET",
        company: "F12 DO BRASIL JOGOS ELETRONICOS LTDA",
        cnpj: "51.897.834/0001-82",
        website: "f12.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 18,
        name: "LUVA.BET",
        company: "F12 DO BRASIL JOGOS ELETRONICOS LTDA",
        cnpj: "51.897.834/0001-82",
        website: "luva.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 19,
        name: "BRASIL.BET",
        company: "F12 DO BRASIL JOGOS ELETRONICOS LTDA",
        cnpj: "51.897.834/0001-82",
        website: "brasil.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 20,
        name: "SPORTYBET",
        company: "BLAC JOGOS LTDA",
        cnpj: "55.988.317/0001-70",
        website: "sporty.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 21,
        name: "ESTRELABET",
        company: "EB INTERMEDIACOES E JOGOS S.A.",
        cnpj: "52.639.845/0001-25",
        website: "estrelabet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 22,
        name: "VUPI",
        company: "EB INTERMEDIACOES E JOGOS S.A.",
        cnpj: "52.639.845/0001-25",
        website: "vupi.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 23,
        name: "REALS",
        company: "REALS BRASIL LTDA",
        cnpj: "56.197.912/0001-50",
        website: "reals.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 24,
        name: "UX",
        company: "REALS BRASIL LTDA",
        cnpj: "56.197.912/0001-50",
        website: "ux.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 25,
        name: "BINGO",
        company: "REALS BRASIL LTDA",
        cnpj: "56.197.912/0001-50",
        website: "bingo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Bingo Online", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 26,
        name: "BETFAIR",
        company: "BETFAIR BRASIL LTDA",
        cnpj: "55.229.080/0001-43",
        website: "betfair.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Exchange"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 27,
        name: "7GAMES",
        company: "OIG GAMING BRAZIL LTDA",
        cnpj: "55.459.453/0001-72",
        website: "7games.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 28,
        name: "BETÃO",
        company: "OIG GAMING BRAZIL LTDA",
        cnpj: "55.459.453/0001-72",
        website: "betao.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 29,
        name: "R7",
        company: "OIG GAMING BRAZIL LTDA",
        cnpj: "55.459.453/0001-72",
        website: "r7.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 30,
        name: "HIPERBET",
        company: "HIPER BET TECNOLOGIA LTDA.",
        cnpj: "55.404.799/0001-73",
        website: "hiper.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 31,
        name: "NOVIBET",
        company: "NVBT GAMING LTDA",
        cnpj: "50.587.712/0001-27",
        website: "novibet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 32,
        name: "SEGURO BET",
        company: "SEGURO BET LTDA",
        cnpj: "56.268.974/0001-05",
        website: "seguro.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 33,
        name: "KING PANDA",
        company: "SEGURO BET LTDA",
        cnpj: "56.268.974/0001-05",
        website: "kingpanda.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Slots"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 34,
        name: "9F",
        company: "GAMEWIZ BRASIL LTDA",
        cnpj: "56.195.099/0001-89",
        website: "9f.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 35,
        name: "6R",
        company: "GAMEWIZ BRASIL LTDA",
        cnpj: "56.195.099/0001-89",
        website: "6r.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 36,
        name: "BET.APP",
        company: "GAMEWIZ BRASIL LTDA",
        cnpj: "56.195.099/0001-89",
        website: "betapp.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 37,
        name: "IJOGO",
        company: "GAMEWIZ BRASIL LTDA",
        cnpj: "56.195.099/0001-89",
        website: "ijogo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Jogos"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 38,
        name: "FOGO777",
        company: "GAMEWIZ BRASIL LTDA",
        cnpj: "56.195.099/0001-89",
        website: "fogo777.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Slots"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 39,
        name: "P9",
        company: "GAMEWIZ BRASIL LTDA",
        cnpj: "56.195.099/0001-89",
        website: "p9.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 40,
        name: "BET365",
        company: "HS DO BRASIL LTDA",
        cnpj: "47.123.407/0001-70",
        website: "bet365.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 41,
        name: "APOSTA GANHA",
        company: "APOSTA GANHA LOTERIAS LTDA",
        cnpj: "56.001.749/0001-08",
        website: "apostaganha.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 42,
        name: "BRAZINO777",
        company: "FUTURAS APOSTAS LTDA",
        cnpj: "55.399.607/0001-88",
        website: "brazino777.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 43,
        name: "4WIN",
        company: "Lucky Gaming LTDA",
        cnpj: "56.212.040/0001-51",
        website: "4win.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 44,
        name: "4PLAY",
        company: "Lucky Gaming LTDA",
        cnpj: "56.212.040/0001-51",
        website: "4play.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Jogos"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 45,
        name: "PAGOL",
        company: "Lucky Gaming LTDA",
        cnpj: "56.212.040/0001-51",
        website: "pagol.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 46,
        name: "SEUBET",
        company: "H2 LICENSED LTDA",
        cnpj: "56.303.755/0001-10",
        website: "seu.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 47,
        name: "H2 BET",
        company: "H2 LICENSED LTDA",
        cnpj: "56.303.755/0001-10",
        website: "h2.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 48,
        name: "VBET",
        company: "SC OPERATING BRAZIL LTDA",
        cnpj: "54.068.631/0001-71",
        website: "vbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 49,
        name: "VIVARO",
        company: "SC OPERATING BRAZIL LTDA",
        cnpj: "54.068.631/0001-71",
        website: "vivaro.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 50,
        name: "CASA DE APOSTAS",
        company: "CDA GAMING LTDA",
        cnpj: "56.636.543/0001-54",
        website: "casadeapostas.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 51,
        name: "BET SUL",
        company: "CDA GAMING LTDA",
        cnpj: "56.636.543/0001-54",
        website: "betsul.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 52,
        name: "JOGO ONLINE",
        company: "CDA GAMING LTDA",
        cnpj: "56.636.543/0001-54",
        website: "jogoonline.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 53,
        name: "ESPORTES DA SORTE",
        company: "ESPORTES GAMING BRASIL LTDA",
        cnpj: "56.075.466/0001-00",
        website: "esportesdasorte.bet.br",
        status: "warning",
        lastCheck: getTodayDate(),
        violations: [
          {
            type: "Monitoramento especial",
            description:
              "Casa de apostas sob monitoramento por questões contratuais",
            severity: "medium",
            regulation: "MESP 125/2024 - Art. 20",
          },
        ],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: ["Questões contratuais pendentes"],
        riskLevel: "médio",
      },
      {
        id: 54,
        name: "ONABET",
        company: "ESPORTES GAMING BRASIL LTDA",
        cnpj: "56.075.466/0001-00",
        website: "ona.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 55,
        name: "LOTTU",
        company: "ESPORTES GAMING BRASIL LTDA",
        cnpj: "56.075.466/0001-00",
        website: "lottu.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Loterias", "Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 56,
        name: "BETFAST",
        company: "FAST GAMING S.A.",
        cnpj: "55.980.542/0001-60",
        website: "betfast.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 57,
        name: "FAZ1BET",
        company: "FAST GAMING S.A.",
        cnpj: "55.980.542/0001-60",
        website: "faz1.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 58,
        name: "TIVOBET",
        company: "FAST GAMING S.A.",
        cnpj: "55.980.542/0001-60",
        website: "tivo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 59,
        name: "SUPREMABET",
        company: "SUPREMA BET LTDA",
        cnpj: "56.183.358/0001-51",
        website: "suprema.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 60,
        name: "MAXIMABET",
        company: "SUPREMA BET LTDA",
        cnpj: "56.183.358/0001-51",
        website: "maxima.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 61,
        name: "ULTRABET",
        company: "SUPREMA BET LTDA",
        cnpj: "56.183.358/0001-51",
        website: "ultra.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 62,
        name: "BETESPORTE",
        company: "BETESPORTE APOSTAS ON LINE LTDA",
        cnpj: "56.295.104/0001-25",
        website: "betesporte.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 63,
        name: "LANCE DE SORTE",
        company: "BETESPORTE APOSTAS ON LINE LTDA",
        cnpj: "56.295.104/0001-25",
        website: "lancedesorte.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 64,
        name: "BETMGM",
        company: "BOA LION S.A.",
        cnpj: "53.837.227/0001-52",
        website: "betmgm.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 65,
        name: "MGM",
        company: "BOA LION S.A.",
        cnpj: "53.837.227/0001-52",
        website: "mgm.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 66,
        name: "TIGER",
        company: "BETSPEED LTDA",
        cnpj: "56.061.524/0001-47",
        website: "tiger.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 67,
        name: "PQ777",
        company: "BETSPEED LTDA",
        cnpj: "56.061.524/0001-47",
        website: "pq777.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Slots"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 68,
        name: "5G",
        company: "BETSPEED LTDA",
        cnpj: "56.061.524/0001-47",
        website: "5g.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 69,
        name: "BRAVO",
        company: "BLOW MARKETPLACE LTDA",
        cnpj: "37.486.405/0001-91",
        website: "bravo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 70,
        name: "TRADICIONAL",
        company: "BLOW MARKETPLACE LTDA",
        cnpj: "37.486.405/0001-91",
        website: "tradicional.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 71,
        name: "APOSTATUDO",
        company: "BLOW MARKETPLACE LTDA",
        cnpj: "37.486.405/0001-91",
        website: "apostatudo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 72,
        name: "SORTE ONLINE",
        company: "LEVANTE BRASIL LTDA",
        cnpj: "55.045.663/0001-14",
        website: "sorteonline.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Loterias", "Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 73,
        name: "LOTTOLAND",
        company: "LEVANTE BRASIL LTDA",
        cnpj: "55.045.663/0001-14",
        website: "lottoland.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 74,
        name: "ARENAPLUS",
        company: "DIGIPLUS BRAZIL INTERACTIVE LTDA",
        cnpj: "56.060.798/0001-11",
        website: "arenaplus.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 75,
        name: "GAMEPLUS",
        company: "DIGIPLUS BRAZIL INTERACTIVE LTDA",
        cnpj: "56.060.798/0001-11",
        website: "gameplus.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online", "Jogos"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 76,
        name: "BINGOPLUS",
        company: "DIGIPLUS BRAZIL INTERACTIVE LTDA",
        cnpj: "56.060.798/0001-11",
        website: "bingoplus.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Bingo Online", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 77,
        name: "PIXBET",
        company: "PIXBET SOLUÇÕES TECNOLÓGICAS LTDA.",
        cnpj: "40.633.348/0001-30",
        website: "pix.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 78,
        name: "FLABET",
        company: "PIXBET SOLUÇÕES TECNOLÓGICAS LTDA.",
        cnpj: "40.633.348/0001-30",
        website: "fla.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 79,
        name: "BET DA SORTE",
        company: "PIXBET SOLUÇÕES TECNOLÓGICAS LTDA.",
        cnpj: "40.633.348/0001-30",
        website: "betdasorte.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 80,
        name: "APOSTOU",
        company: "BETBR LOTERIAS LTDA",
        cnpj: "55.881.028/0001-77",
        website: "apostou.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 81,
        name: "B1 BET",
        company: "BETBR LOTERIAS LTDA",
        cnpj: "55.881.028/0001-77",
        website: "b1bet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 82,
        name: "BRBET",
        company: "BETBR LOTERIAS LTDA",
        cnpj: "55.881.028/0001-77",
        website: "brbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 83,
        name: "BET GORILLAS",
        company: "GORILLAS GROUP DO BRASIL LTDA",
        cnpj: "37.456.039/0001-28",
        website: "betgorillas.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 84,
        name: "BET BUFFALOS",
        company: "GORILLAS GROUP DO BRASIL LTDA",
        cnpj: "37.456.039/0001-28",
        website: "betbuffalos.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 85,
        name: "BET FALCONS",
        company: "GORILLAS GROUP DO BRASIL LTDA",
        cnpj: "37.456.039/0001-28",
        website: "betfalcons.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 86,
        name: "BATEU BET",
        company: "EA ENTRETENIMENTO E ESPORTES LTDA",
        cnpj: "53.570.592/0001-43",
        website: "bateu.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 87,
        name: "ESPORTIVA BET",
        company: "EA ENTRETENIMENTO E ESPORTES LTDA",
        cnpj: "53.570.592/0001-43",
        website: "esportiva.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 88,
        name: "BETWARRIOR",
        company: "TRACK GAMING BRASIL LTDA",
        cnpj: "56.706.701/0001-03",
        website: "betwarrior.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 89,
        name: "SORTENABET",
        company: "SORTENABET GAMING BRASIL S.A.",
        cnpj: "54.989.030/0001-00",
        website: "sortenabet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 90,
        name: "BETOU",
        company: "SORTENABET GAMING BRASIL S.A.",
        cnpj: "54.989.030/0001-00",
        website: "betou.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 91,
        name: "BETFUSION",
        company: "SORTENABET GAMING BRASIL S.A.",
        cnpj: "54.989.030/0001-00",
        website: "betfusion.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 92,
        name: "BANDBET",
        company: "BELL VENTURES DIGITAL LTDA",
        cnpj: "56.638.458/0001-25",
        website: "bandbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 93,
        name: "AFUN",
        company: "BRILLIANT GAMING LTDA",
        cnpj: "56.259.060/0001-88",
        website: "afun.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 94,
        name: "AI",
        company: "BRILLIANT GAMING LTDA",
        cnpj: "56.259.060/0001-88",
        website: "ai.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 95,
        name: "6Z",
        company: "BRILLIANT GAMING LTDA",
        cnpj: "56.259.060/0001-88",
        website: "6z.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 96,
        name: "BLAZE",
        company: "FOGGO ENTERTAINMENT LTDA",
        cnpj: "56.431.248/0001-61",
        website: "blaze.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 97,
        name: "JONBET",
        company: "FOGGO ENTERTAINMENT LTDA",
        cnpj: "56.431.248/0001-61",
        website: "jonbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 98,
        name: "7K",
        company: "ANA GAMING BRASIL S.A.",
        cnpj: "55.933.850/0001-34",
        website: "7k.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 99,
        name: "CASSINO",
        company: "ANA GAMING BRASIL S.A.",
        cnpj: "55.933.850/0001-34",
        website: "cassino.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 100,
        name: "VERA",
        company: "ANA GAMING BRASIL S.A.",
        cnpj: "55.933.850/0001-34",
        website: "vera.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 101,
        name: "1XBET",
        company: "DEFY LTDA",
        cnpj: "47.974.569/0001-11",
        website: "1xbet.bet.br",
        status: "warning",
        lastCheck: getTodayDate(),
        violations: [
          {
            type: "Verificação pendente",
            description: "Processo de licenciamento em análise",
            severity: "medium",
            regulation: "MESP 36/2025 - Art. 5",
          },
        ],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: ["Licenciamento em análise"],
        riskLevel: "médio",
      },
      {
        id: 102,
        name: "RIVALO",
        company: "OLAVIR LTDA",
        cnpj: "56.873.267/0001-48",
        website: "rivalo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 103,
        name: "STAKE",
        company: "STAKE BRAZIL LTDA",
        cnpj: "56.525.936/0001-90",
        website: "stake.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 104,
        name: "BETCAIXA",
        company: "CAIXA LOTERIAS S.A.",
        cnpj: "24.038.490/0001-83",
        website: "betcaixa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 105,
        name: "MEGABET",
        company: "CAIXA LOTERIAS S.A.",
        cnpj: "24.038.490/0001-83",
        website: "megabet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 106,
        name: "XBET CAIXA",
        company: "CAIXA LOTERIAS S.A.",
        cnpj: "24.038.490/0001-83",
        website: "xbetcaixa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Loterias"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 107,
        name: "MEGAPOSTA",
        company: "NEXUS INTERNATIONAL LTDA",
        cnpj: "55.078.134/0001-17",
        website: "megaposta.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas", "Cassino Online"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 108,
        name: "BAÚ BINGO",
        company: "TQJ-PAR PARTICIPAÇÕES SOCIETÁRIAS S.A.",
        cnpj: "55.238.676/0001-00",
        website: "bau.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 109,
        name: "TELE SENA BET",
        company: "TQJ-PAR PARTICIPAÇÕES SOCIETÁRIAS S.A.",
        cnpj: "55.238.676/0001-00",
        website: "telesena.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 110,
        name: "BET DO MILHÃO",
        company: "TQJ-PAR PARTICIPAÇÕES SOCIETÁRIAS S.A.",
        cnpj: "55.238.676/0001-00",
        website: "milhao.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 111,
        name: "VERTBET",
        company: "7MBR LTDA",
        cnpj: "56.442.917/0001-09",
        website: "vert.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 112,
        name: "CGG",
        company: "7MBR LTDA",
        cnpj: "56.442.917/0001-09",
        website: "cgg.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 113,
        name: "FANBIT",
        company: "7MBR LTDA",
        cnpj: "56.442.917/0001-09",
        website: "fanbit.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 114,
        name: "UPBETBR",
        company: "UPBET BRASIL LTDA",
        cnpj: "56.236.761/0001-00",
        website: "up.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 115,
        name: "9D",
        company: "UPBET BRASIL LTDA",
        cnpj: "56.236.761/0001-00",
        website: "9d.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 116,
        name: "WJCASINO",
        company: "UPBET BRASIL LTDA",
        cnpj: "56.236.761/0001-00",
        website: "wjcasino.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 117,
        name: "KBET",
        company: "ENSEADA SERVIÇOS E TECNOLOGIA LTDA",
        cnpj: "53.429.401/0001-28",
        website: "kbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 118,
        name: "ALFA.BET",
        company: "ALFA ENTRETENIMENTO S.A.",
        cnpj: "55.359.927/0001-04",
        website: "alfa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 119,
        name: "MMA",
        company: "SELECT OPERATIONS LTDA",
        cnpj: "56.875.122/0001-86",
        website: "mmabet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 120,
        name: "BETVIP",
        company: "SELECT OPERATIONS LTDA",
        cnpj: "56.875.122/0001-86",
        website: "betvip.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 121,
        name: "PAPIGAMES",
        company: "SELECT OPERATIONS LTDA",
        cnpj: "56.875.122/0001-86",
        website: "papigames.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 122,
        name: "BET4",
        company: "B3T4 INTERNATIONAL GROUP LTDA",
        cnpj: "56.706.644/0001-54",
        website: "bet4.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 123,
        name: "APOSTA BET",
        company: "B3T4 INTERNATIONAL GROUP LTDA",
        cnpj: "56.706.644/0001-54",
        website: "aposta.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 124,
        name: "FAZ O BET",
        company: "B3T4 INTERNATIONAL GROUP LTDA",
        cnpj: "56.706.644/0001-54",
        website: "fazo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 125,
        name: "ESPORTIVAVIP",
        company: "SPORTVIP GROUP INTERNATIONAL APOSTAS LTDA",
        cnpj: "56.257.966/0001-63",
        website: "esportivavip.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 126,
        name: "CBESPORTES",
        company: "SPORTVIP GROUP INTERNATIONAL APOSTAS LTDA",
        cnpj: "56.257.966/0001-63",
        website: "cbesportes.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 127,
        name: "DONOSDABOLA",
        company: "SPORTVIP GROUP INTERNATIONAL APOSTAS LTDA",
        cnpj: "56.257.966/0001-63",
        website: "donosdabola.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 128,
        name: "BR4BET",
        company: "SABIA ADMINISTRACAO LTDA",
        cnpj: "04.426.418/0001-16",
        website: "br4.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 129,
        name: "GOL DE BET",
        company: "SABIA ADMINISTRACAO LTDA",
        cnpj: "04.426.418/0001-16",
        website: "goldebet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 130,
        name: "LOTOGREEN",
        company: "SABIA ADMINISTRACAO LTDA",
        cnpj: "04.426.418/0001-16",
        website: "lotogreen.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 131,
        name: "BOLSA DE APOSTA",
        company: "A2FBR LTDA",
        cnpj: "56.147.145/0001-74",
        website: "bolsadeaposta.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 132,
        name: "BOLSA DE APOSTA",
        company: "A2FBR LTDA",
        cnpj: "56.147.145/0001-74",
        website: "fulltbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 133,
        name: "BOLSA DE APOSTA",
        company: "A2FBR LTDA",
        cnpj: "56.147.145/0001-74",
        website: "betbra.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 134,
        name: "PINNACLE",
        company: "A2FBR LTDA",
        cnpj: "56.147.145/0001-74",
        website: "pinnacle.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 135,
        name: "MATCHBOOK",
        company: "A2FBR LTDA",
        cnpj: "56.147.145/0001-74",
        website: "matchbook.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 136,
        name: "BETESPECIAL",
        company: "A2FBR LTDA",
        cnpj: "56.147.145/0001-74",
        website: "betespecial.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 137,
        name: "BETBOOM",
        company: "BETBOOM LTDA",
        cnpj: "54.951.974/0001-80",
        website: "betboom.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 138,
        name: "APOSTA1",
        company: "PIX NA HORA",
        cnpj: "55.258.645/0001-10",
        website: "aposta1.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 139,
        name: "APOSTAMAX",
        company: "PIX NA HORA",
        cnpj: "55.258.645/0001-10",
        website: "apostamax.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 140,
        name: "AVIAOBET",
        company: "PIX NA HORA",
        cnpj: "55.258.645/0001-10",
        website: "aviao.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 141,
        name: "GINGABET",
        company: "JOGO PRINCIPAL LTDA",
        cnpj: "56.302.709/0001-04",
        website: "ginga.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 142,
        name: "QGBET",
        company: "JOGO PRINCIPAL LTDA",
        cnpj: "56.302.709/0001-04",
        website: "qg.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 143,
        name: "VIVASORTE",
        company: "JOGO PRINCIPAL LTDA",
        cnpj: "56.302.709/0001-04",
        website: "vivasorte.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 144,
        name: "BACANAPLAY",
        company: "SKILL ON NET LTDA",
        cnpj: "55.927.219/0001-22",
        website: "bacanaplay.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 145,
        name: "PLAYUZU",
        company: "SKILL ON NET LTDA",
        cnpj: "55.927.219/0001-22",
        website: "playuzu.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 146,
        name: "BETCOPA",
        company: "WORLD SPORTS TECHNOLOGY DO BRASIL S.A.",
        cnpj: "55.822.818/0001-81",
        website: "betcopa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 147,
        name: "BRASIL DA SORTE",
        company: "WORLD SPORTS TECHNOLOGY DO BRASIL S.A.",
        cnpj: "55.822.818/0001-81",
        website: "brasildasorte.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 148,
        name: "FYBET",
        company: "WORLD SPORTS TECHNOLOGY DO BRASIL S.A.",
        cnpj: "55.822.818/0001-81",
        website: "fybet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 149,
        name: "MULTIBET",
        company: "Rr Participacoes e Intermediacoes de Negocios LTDA",
        cnpj: "23.159.703/0001-62",
        website: "multi.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 150,
        name: "RICOBET",
        company: "Rr Participacoes e Intermediacoes de Negocios LTDA",
        cnpj: "23.159.703/0001-62",
        website: "rico.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 151,
        name: "BRXBET",
        company: "Rr Participacoes e Intermediacoes de Negocios LTDA",
        cnpj: "23.159.703/0001-62",
        website: "brx.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 152,
        name: "STAKE",
        company: "STAKE BRAZIL LTDA",
        cnpj: "56.525.936/0001-90",
        website: "stake.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 153,
        name: "BETCAIXA",
        company: "CAIXA LOTERIAS S.A.",
        cnpj: "24.038.490/0001-83",
        website: "betcaixa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 154,
        name: "MEGABET",
        company: "CAIXA LOTERIAS S.A.",
        cnpj: "24.038.490/0001-83",
        website: "megabet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 155,
        name: "XBET CAIXA",
        company: "CAIXA LOTERIAS S.A.",
        cnpj: "24.038.490/0001-83",
        website: "xbetcaixa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 156,
        name: "JOGA LIMPO",
        company: "RESPONSA GAMMING BRASIL LIMITADA",
        cnpj: "56.905.647/0001-17",
        website: "jogalimpo.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 157,
        name: "ENERGIA",
        company: "RESPONSA GAMMING BRASIL LIMITADA",
        cnpj: "56.905.647/0001-17",
        website: "energia.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 158,
        name: "SPIN",
        company: "LINDAU GAMING BRASIL S.A.",
        cnpj: "50.550.511/0001-55",
        website: "spin.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 159,
        name: "OLEYBET",
        company: "LINDAU GAMING BRASIL S.A.",
        cnpj: "50.550.511/0001-55",
        website: "oleybet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 160,
        name: "BETPARK",
        company: "LINDAU GAMING BRASIL S.A.",
        cnpj: "50.550.511/0001-55",
        website: "betpark.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 161,
        name: "MERIDIAN",
        company: "MERIDIAN GAMING BRASIL SPE LTDA",
        cnpj: "56.195.600/0001-07",
        website: "meridianbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 162,
        name: "NOSSABET",
        company: "LAGUNA SERVIÇOS E TECNOLOGIA LTDA",
        cnpj: "50.920.462/0001-03",
        website: "nossa.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 163,
        name: "PIN",
        company: "MERIDIAN GAMING BRASIL SPE LTDA",
        cnpj: "56.195.600/0001-07",
        website: "pin.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 164,
        name: "VERSUSBET",
        company: "Versus Brasil Ltda",
        cnpj: "55.080.231/0001-44",
        website: "versus.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 165,
        name: "VS - VERSUS",
        company: "Versus Brasil Ltda",
        cnpj: "55.080.231/0001-44",
        website: "a definir",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 166,
        name: "LUCK.BET",
        company: "LBBR APOSTAS DE QUOTA FIXA LIMITADA",
        cnpj: "56.441.713/0001-45",
        website: "luck.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 167,
        name: "1 PRA 1",
        company: "LBBR APOSTAS DE QUOTA FIXA LIMITADA",
        cnpj: "56.441.713/0001-45",
        website: "1pra1.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 168,
        name: "STARTBET",
        company: "LBBR APOSTAS DE QUOTA FIXA LIMITADA",
        cnpj: "56.441.713/0001-45",
        website: "start.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 169,
        name: "ESPORTE 365",
        company: "VANGUARD ENTRETENIMENTO BRASIL LTDA",
        cnpj: "56.885.537/0001-30",
        website: "esporte365.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 170,
        name: "BET AKI",
        company: "VANGUARD ENTRETENIMENTO BRASIL LTDA",
        cnpj: "56.885.537/0001-30",
        website: "betaki.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 171,
        name: "JOGO DE OURO",
        company: "VANGUARD ENTRETENIMENTO BRASIL LTDA",
        cnpj: "56.885.537/0001-30",
        website: "jogodeouro.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 172,
        name: "LÍDERBET",
        company: "LOGAME DO BRASIL LTDA",
        cnpj: "56.349.116/0001-95",
        website: "lider.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 173,
        name: "GERALBET",
        company: "LOGAME DO BRASIL LTDA",
        cnpj: "56.349.116/0001-95",
        website: "geralbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 174,
        name: "B2XBET",
        company: "LOGAME DO BRASIL LTDA",
        cnpj: "56.349.116/0001-95",
        website: "b2x.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 175,
        name: "BULLSBET",
        company: "SEVENX GAMING LTDA",
        cnpj: "56.504.413/0001-68",
        website: "bullsbet.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 176,
        name: "JOGÃO",
        company: "SEVENX GAMING LTDA",
        cnpj: "56.504.413/0001-68",
        website: "jogao.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
      {
        id: 177,
        name: "JOGOS",
        company: "SEVENX GAMING LTDA",
        cnpj: "56.504.413/0001-68",
        website: "jogos.bet.br",
        status: "compliant",
        lastCheck: getTodayDate(),
        violations: [],
        modalitiesOffered: ["Apostas Esportivas"],
        prohibitedFound: [],
        riskLevel: "baixo",
      },
    ];
    setBetHouses(governmentAuthorizedBetHouses);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "compliant":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "violation":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "compliant":
        return <FaCheckCircle className="w-4 h-4" />;
      case "warning":
        return <FaExclamationTriangle className="w-4 h-4" />;
      case "violation":
        return <FaTimes className="w-4 h-4" />;
      default:
        return <FaClock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "compliant":
        return "Conforme";
      case "warning":
        return "Atenção";
      case "violation":
        return "Violação";
      default:
        return "Pendente";
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "baixo":
        return "text-green-600 bg-green-100";
      case "médio":
        return "text-yellow-600 bg-yellow-100";
      case "alto":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const filteredBetHouses = betHouses.filter((house) => {
    const matchesSearch = house.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || house.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Paginação
  const totalPages = Math.ceil(filteredBetHouses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBetHouses = filteredBetHouses.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  // Reset pagination when search or filter changes
  React.useEffect(() => {
    resetPagination();
  }, [searchTerm, filterStatus]);

  const handleViewDetails = (betHouse) => {
    setSelectedBetHouse(betHouse);
    setShowDetails(true);
  };

  const complianceStats = {
    total: betHouses.length,
    compliant: betHouses.filter((h) => h.status === "compliant").length,
    warning: betHouses.filter((h) => h.status === "warning").length,
    violation: betHouses.filter((h) => h.status === "violation").length,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaGavel className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Compliance Check</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Verificação de conformidade das casas de apostas autorizadas pelo
          governo brasileiro conforme portarias MESP 125/2024 e MESP 36/2025.
          Esta tela monitora {complianceStats.total} casas de apostas
          licenciadas para garantir que estejam oferecendo apenas modalidades
          permitidas.
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total de Casas
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {complianceStats.total}
              </p>
            </div>
            <FaFileAlt className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conformes</p>
              <p className="text-2xl font-bold text-green-600">
                {complianceStats.compliant}
              </p>
            </div>
            <FaCheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Atenção</p>
              <p className="text-2xl font-bold text-yellow-600">
                {complianceStats.warning}
              </p>
            </div>
            <FaExclamationTriangle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Violações</p>
              <p className="text-2xl font-bold text-red-600">
                {complianceStats.violation}
              </p>
            </div>
            <FaTimes className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar casa de apostas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Todos os Status</option>
              <option value="compliant">Conformes</option>
              <option value="warning">Atenção</option>
              <option value="violation">Violações</option>
            </select>
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <FaDownload className="w-4 h-4" />
            Exportar
          </button>
        </div>

        {/* Informações de Paginação */}
        {filteredBetHouses.length > 0 && (
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div>
              {filteredBetHouses.length === betHouses.length ? (
                <span>
                  Mostrando todas as {filteredBetHouses.length} casas de apostas
                </span>
              ) : (
                <span>
                  Encontradas {filteredBetHouses.length} de {betHouses.length}{" "}
                  casas de apostas
                </span>
              )}
            </div>
            {filteredBetHouses.length > itemsPerPage && (
              <div>
                <span>
                  Página {currentPage} de {totalPages} ({itemsPerPage} por
                  página)
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lista de Casas de Apostas */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Casa de Apostas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CNPJ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nível de Risco
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Verificação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedBetHouses.length > 0 ? (
                paginatedBetHouses.map((betHouse) => (
                  <tr key={betHouse.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FaShieldAlt className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {betHouse.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {betHouse.website}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="max-w-xs">
                        <div
                          className="text-sm text-gray-900 truncate"
                          title={betHouse.company}
                        >
                          {betHouse.company}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                      {betHouse.cnpj}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          betHouse.status
                        )}`}
                      >
                        {getStatusIcon(betHouse.status)}
                        {getStatusText(betHouse.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(
                          betHouse.riskLevel
                        )}`}
                      >
                        <FaFlag className="w-3 h-3" />
                        {betHouse.riskLevel.charAt(0).toUpperCase() +
                          betHouse.riskLevel.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="w-4 h-4" />
                        {new Date(betHouse.lastCheck).toLocaleDateString(
                          "pt-BR"
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleViewDetails(betHouse)}
                        className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                      >
                        <FaEye className="w-4 h-4" />
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center">
                      <FaSearch className="w-12 h-12 text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nenhuma casa de apostas encontrada
                      </h3>
                      <p className="text-gray-500">
                        Tente ajustar os filtros ou termo de busca para
                        encontrar as casas de apostas.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Controles de Paginação */}
        {filteredBetHouses.length > itemsPerPage && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-500">
              <span>
                Mostrando {startIndex + 1} a{" "}
                {Math.min(endIndex, filteredBetHouses.length)} de{" "}
                {filteredBetHouses.length} resultados
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 text-sm font-medium rounded-md border ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Anterior
              </button>

              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 2 && page <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-2 text-sm font-medium rounded-md border ${
                            currentPage === page
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 3 ||
                      page === currentPage + 3
                    ) {
                      return (
                        <span
                          key={page}
                          className="px-3 py-2 text-sm text-gray-500"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  }
                )}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 text-sm font-medium rounded-md border ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Detalhes */}
      {showDetails && selectedBetHouse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Detalhes de Compliance - {selectedBetHouse.name}
                </h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Informações Básicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Informações Básicas
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Empresa:</span>{" "}
                      {selectedBetHouse.company}
                    </p>
                    <p>
                      <span className="font-medium">CNPJ:</span>{" "}
                      <span className="font-mono">{selectedBetHouse.cnpj}</span>
                    </p>
                    <p>
                      <span className="font-medium">Website:</span>{" "}
                      <a
                        href={`https://${selectedBetHouse.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {selectedBetHouse.website}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Última Verificação:</span>{" "}
                      {new Date(selectedBetHouse.lastCheck).toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Status Atual
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Compliance:</span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          selectedBetHouse.status
                        )}`}
                      >
                        {getStatusIcon(selectedBetHouse.status)}
                        {getStatusText(selectedBetHouse.status)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Nível de Risco:</span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(
                          selectedBetHouse.riskLevel
                        )}`}
                      >
                        <FaFlag className="w-3 h-3" />
                        {selectedBetHouse.riskLevel.charAt(0).toUpperCase() +
                          selectedBetHouse.riskLevel.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modalidades Oferecidas */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Modalidades Oferecidas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBetHouse.modalitiesOffered.map((modality, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {modality}
                    </span>
                  ))}
                </div>
              </div>

              {/* Violações Encontradas */}
              {selectedBetHouse.violations.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Violações Identificadas
                  </h3>
                  <div className="space-y-4">
                    {selectedBetHouse.violations.map((violation, index) => (
                      <div
                        key={index}
                        className="border border-red-200 rounded-lg p-4 bg-red-50"
                      >
                        <div className="flex items-start gap-3">
                          <FaExclamationTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-red-900">
                              {violation.type}
                            </h4>
                            <p className="text-red-800 mt-1">
                              {violation.description}
                            </p>
                            <p className="text-sm text-red-700 mt-2">
                              <span className="font-medium">
                                Regulamentação:
                              </span>{" "}
                              {violation.regulation}
                            </p>
                            <span
                              className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                                violation.severity === "high"
                                  ? "bg-red-100 text-red-800"
                                  : violation.severity === "medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              Severidade:{" "}
                              {violation.severity === "high"
                                ? "Alta"
                                : violation.severity === "medium"
                                ? "Média"
                                : "Baixa"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Itens Proibidos Encontrados */}
              {selectedBetHouse.prohibitedFound.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Itens Proibidos Detectados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedBetHouse.prohibitedFound.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-red-600"
                      >
                        <FaTimes className="w-4 h-4" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ações */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Nova Verificação
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Gerar Relatório
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Histórico
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplianceCheck;
