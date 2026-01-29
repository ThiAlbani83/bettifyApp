import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Bar } from "react-chartjs-2";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import bacenIcon from "../assets/bacen.png";
import cefIcon from "../assets/CEF.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BetSitesTable = ({ results }) => {
  const [imageModal, setImageModal] = useState({
    open: false,
    src: "",
    title: "",
  });
  const [isChartExpanded, setIsChartExpanded] = useState(false);
  const [expandedRows, setExpandedRows] = useState({}); // Estado para controlar quais linhas estão expandidas

  // Função para alternar a expansão de uma linha específica
  const toggleRowExpansion = (rowId, section) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: {
        ...prev[rowId],
        [section]: !prev[rowId]?.[section],
      },
    }));
  };

  // Fechar modal de imagem com tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && imageModal.open) {
        setImageModal({ open: false, src: "", title: "" });
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [imageModal.open]);

  const handleDownloadPDF = (row) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = 20;

    // Função auxiliar para adicionar texto com quebra de linha
    const addText = (
      text,
      fontSize = 10,
      isBold = false,
      color = [0, 0, 0],
    ) => {
      doc.setFontSize(fontSize);
      doc.setTextColor(color[0], color[1], color[2]);
      if (isBold) {
        doc.setFont(undefined, "bold");
      } else {
        doc.setFont(undefined, "normal");
      }

      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line) => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, margin, yPosition);
        yPosition += fontSize * 0.5;
      });
      yPosition += 3;
    };

    const addSection = (title) => {
      yPosition += 5;
      doc.setFillColor(59, 130, 246);
      doc.rect(margin, yPosition - 5, maxWidth, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont(undefined, "bold");
      doc.text(title, margin + 2, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += 8;
    };

    const addField = (label, value) => {
      doc.setFontSize(9);
      doc.setFont(undefined, "bold");
      doc.setTextColor(55, 65, 81);
      doc.text(label + ":", margin, yPosition);
      doc.setFont(undefined, "normal");
      doc.setTextColor(0, 0, 0);
      const lines = doc.splitTextToSize(String(value), maxWidth - 40);
      doc.text(lines, margin + 40, yPosition);
      yPosition += 5 + (lines.length - 1) * 4;
    };

    // Cabeçalho
    doc.setFillColor(239, 68, 68);
    doc.rect(0, 0, pageWidth, 35, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.text(
      `RELATÓRIO DE VARREDURA - ${row.name.toUpperCase()}`,
      pageWidth / 2,
      15,
      { align: "center" },
    );
    doc.setFontSize(12);
    doc.text("CASA DE APOSTAS NÃO REGULAMENTADA", pageWidth / 2, 25, {
      align: "center",
    });

    doc.setTextColor(0, 0, 0);
    yPosition = 45;

    // Badge de risco
    const riskColors = {
      Alto: [239, 68, 68],
      Médio: [234, 179, 8],
      Baixo: [34, 197, 94],
    };
    const riskColor = riskColors[row.risk] || [156, 163, 175];
    doc.setFillColor(riskColor[0], riskColor[1], riskColor[2]);
    doc.roundedRect(margin, yPosition, 45, 8, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.text(
      `RISCO ${row.risk.toUpperCase()}`,
      margin + 22.5,
      yPosition + 5.5,
      { align: "center" },
    );
    doc.setTextColor(0, 0, 0);
    yPosition += 15;

    // INFORMAÇÕES GERAIS
    addSection("INFORMAÇÕES GERAIS");
    addField("Nome", row.name);
    addField("Domínio", row.domain);
    addField("URL Final", row.finalUrl);
    addField("Status", row.status);

    // INFORMAÇÕES TÉCNICAS
    addSection("INFORMAÇÕES TÉCNICAS");
    addField("IP", row.ip);
    addField("Geolocalização", row.geolocation);
    addField("Registrar", row.registrar);
    addField("Data de Criação", row.creationDate);
    addField("Data de Expiração", row.expirationDate);

    // GATEWAY DE PAGAMENTO
    addSection("GATEWAY DE PAGAMENTO");
    addField("Gateway", row.pgGateway);

    // INFORMAÇÕES DO BANCO CENTRAL DO BRASIL (BCB)
    addSection("INFORMAÇÕES DO BANCO CENTRAL DO BRASIL (BCB)");
    addField("Nome Reduzido", row.nomeReduzido);
    addField("ISPB", row.ispb);
    addField("CNPJ", row.cnpjBCB);
    addField("Tipo de Instituição", row.tipoInstituicao);
    addField("Autorizada pelo BCB", row.autorizadaBCB);
    addField("Tipo de Participação no SPI", row.tipoParticipacaoSPI);
    addField("Tipo de Participação no Pix", row.tipoParticipacaoPix);
    addField(
      "Modalidade de Participação no Pix",
      row.modalidadeParticipacaoPix,
    );
    addField("Iniciação de Transação de Pagamento", row.iniciacaoTransacao);
    addField(
      "Facilitador de Serviço de Saque e Troco (FSS)",
      row.facilitadorSaqueTroco,
    );

    // INFORMAÇÕES PIX
    addSection("Favorecido");
    addField("Recebedor PIX", row.pixReceiver);
    addField("CNPJ", row.pixCnpj);
    addField("URL PIX", row.pixUrl);

    // REGISTRO E PROPRIEDADE
    addSection("REGISTRO E PROPRIEDADE");
    addField("Nome do Proprietário", row.ownerName);
    addField("Registrado em", row.registeredIn);
    addField("Endereço de Hospedagem", row.hostingAddress);
    addField("CNPJ da BET", row.cnpj);
    addField("CNPJ do Proprietário", row.ownerCnpj);

    // EVIDÊNCIAS
    addSection("EVIDÊNCIAS");
    addField("Print Geral", row.printGeral);
    addField("Print Pix", row.printPix);

    // Rodapé
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      const timestamp = new Date().toLocaleString("pt-BR");
      doc.text(
        `Gerado em: ${timestamp}`,
        margin,
        doc.internal.pageSize.getHeight() - 10,
      );
      doc.text(
        `Página ${i} de ${totalPages}`,
        pageWidth - margin - 30,
        doc.internal.pageSize.getHeight() - 10,
      );
    }

    // Salvar PDF
    doc.save(
      `relatorio_${row.name.replace(/\s+/g, "_")}_${new Date().getTime()}.pdf`,
    );
  };

  const handleImageClick = (src, title) => {
    setImageModal({ open: true, src, title });
  };

  const getRiskBadgeColor = (risk) => {
    switch (risk) {
      case "Alto":
        return "bg-red-100 text-red-800 border-red-200";
      case "Médio":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Baixo":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Processar dados para o gráfico com empresas e gateways
  const companyGatewayData = {};

  results.forEach((result) => {
    const company = result.pixReceiver;
    const gateway = result.pgGateway;

    if (!companyGatewayData[company]) {
      companyGatewayData[company] = {};
    }

    if (!companyGatewayData[company][gateway]) {
      companyGatewayData[company][gateway] = 0;
    }

    companyGatewayData[company][gateway]++;
  });

  // Criar lista de todas as empresas
  const allCompanies = Object.entries(companyGatewayData).sort((a, b) => {
    const totalA = Object.values(a[1]).reduce((sum, val) => sum + val, 0);
    const totalB = Object.values(b[1]).reduce((sum, val) => sum + val, 0);
    return totalB - totalA;
  });

  // Obter todos os gateways únicos
  const allGateways = [...new Set(results.map((r) => r.pgGateway))];

  // Cores para cada gateway
  const gatewayColors = {
    "Mw lp LTDA": "rgba(59, 130, 246, 0.8)",
    "Ajc Gateway LTDA": "rgba(147, 51, 234, 0.8)",
    "Simpay Pagamentos LTDA": "rgba(236, 72, 153, 0.8)",
    "Hyper Wallet lp LTDA": "rgba(251, 146, 60, 0.8)",
    "Mt lp S.A.": "rgba(34, 197, 94, 0.8)",
    "Tycoon Technology lip S.A": "rgba(234, 179, 8, 0.8)",
    "Fitbank lp": "rgba(239, 68, 68, 0.8)",
    "Sabts Scd S.A": "rgba(99, 102, 241, 0.8)",
    "A55 Scd S.A.": "rgba(168, 85, 247, 0.8)",
  };

  // Criar datasets para cada gateway
  const datasets = allGateways.map((gateway) => ({
    label: gateway,
    data: allCompanies.map(([company, gateways]) => gateways[gateway] || 0),
    backgroundColor: gatewayColors[gateway] || "rgba(156, 163, 175, 0.8)",
    borderColor:
      gatewayColors[gateway]?.replace("0.8", "1") || "rgba(156, 163, 175, 1)",
    borderWidth: 1,
  }));

  const chartData = {
    labels: allCompanies.map(([company]) => company),
    datasets: datasets,
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 10,
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: `Empresas e Gateways de Pagamento Detectados (${results.length} resultados)`,
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#1f2937",
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            // Mostrar o nome completo no tooltip
            return allCompanies[context[0].dataIndex][0];
          },
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: ${value} casa${value !== 1 ? "s" : ""}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: "Quantidade de Casas de Apostas",
          font: {
            size: 12,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 9,
          },
          callback: function (value, index) {
            const label = this.getLabelForValue(value);
            const maxLength = 15;
            if (label.length > maxLength) {
              return label.substring(0, maxLength) + "...";
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div>
      {/* Acordeão do Gráfico de Empresas e Gateways */}
      <div className="mb-6 bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <button
          onClick={() => setIsChartExpanded(!isChartExpanded)}
          className="w-full px-6 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-150 border-b border-gray-200"
        >
          <h2 className="text-base font-medium text-gray-700">
            Empresas e Gateways de Pagamento Detectados ({results.length}{" "}
            resultados)
          </h2>
          {isChartExpanded ? (
            <FaChevronUp className="text-sm text-gray-500" />
          ) : (
            <FaChevronDown className="text-sm text-gray-500" />
          )}
        </button>

        {isChartExpanded && (
          <div className="p-6 bg-gray-50">
            <div className="bg-white p-4 rounded-lg shadow">
              <div style={{ height: "500px" }}>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Resultados da Varredura das últimas 6 horas ({results.length} casas de
          apostas detectadas)
        </h2>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Casa de Apostas
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Prints
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Dados da Instituição
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Participação PIX
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Detalhes Técnicos
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {/* Casa de Apostas */}
                <td className="px-3 py-4 w-56">
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-sm font-bold text-gray-900 break-words">
                        {row.name}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full border font-medium whitespace-nowrap ${getRiskBadgeColor(
                          row.risk,
                        )}`}
                      >
                        Risco {row.risk}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div>
                        <span className="text-xs text-gray-500">Domínio:</span>{" "}
                        <a
                          href={row.domain}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline break-all"
                        >
                          {row.domain}
                        </a>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">
                          URL Final:
                        </span>{" "}
                        <a
                          href={row.finalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline break-all"
                        >
                          {row.finalUrl}
                        </a>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Prints */}
                <td className="px-1 py-4 w-16">
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() =>
                        handleImageClick(
                          row.printGeral,
                          "Print Geral - " + row.name,
                        )
                      }
                      className="px-1 py-1 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded transition-colors duration-200"
                      title="Ver Print Geral"
                    >
                      Geral
                    </button>
                    <button
                      onClick={() =>
                        handleImageClick(
                          row.printPix,
                          "Print Pix - " + row.name,
                        )
                      }
                      className="px-1 py-1 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded transition-colors duration-200"
                      title="Ver Print Pix"
                    >
                      Pix
                    </button>
                  </div>
                </td>

                {/* Dados da Instituição */}
                <td className="px-3 py-4">
                  <div className="flex flex-col space-y-2 text-xs">
                    <div className="bg-blue-50 p-2 rounded border border-blue-200">
                      <div className="space-y-1">
                        <div>
                          <span className="text-gray-600 font-medium block">
                            Nome Reduzido:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {row.nomeReduzido || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium block">
                            ISPB:
                          </span>
                          <span className="text-gray-900 font-mono">
                            {row.ispb || "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-2 rounded border border-purple-200">
                      <div className="space-y-1">
                        <div>
                          <span className="text-gray-600 font-medium">
                            CNPJ:
                          </span>{" "}
                          <span className="text-gray-900 font-mono text-xs">
                            {row.cnpjBCB || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            Tipo:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.tipoInstituicao || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            Autorizada BCB:
                          </span>{" "}
                          <span
                            className={`font-semibold ${row.autorizadaBCB === "Sim" ? "text-green-700" : "text-red-700"}`}
                          >
                            {row.autorizadaBCB || "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Participação PIX */}
                <td className="px-3 py-4">
                  <div className="flex flex-col space-y-2 text-xs">
                    <div className="bg-green-50 p-2 rounded border border-green-200">
                      <div className="space-y-1">
                        <div>
                          <span className="text-gray-600 font-medium">
                            Participação SPI:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.tipoParticipacaoSPI || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            Participação Pix:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.tipoParticipacaoPix || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            Modalidade:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.modalidadeParticipacaoPix || "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
                      <div className="space-y-1">
                        <div>
                          <span className="text-gray-600 font-medium">
                            Iniciação de Transação:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.iniciacaoTransacao || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 font-medium">
                            FSS:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.facilitadorSaqueTroco || "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Detalhes Técnicos (Colapsável) */}
                <td className="px-4 py-4">
                  <div className="flex flex-col space-y-2">
                    {/* Botão Informações Técnicas */}
                    <button
                      onClick={() => toggleRowExpansion(row.id, "technical")}
                      className="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 flex items-center justify-between gap-2"
                    >
                      <span>+ Informações Técnicas</span>
                      {expandedRows[row.id]?.technical ? (
                        <FaChevronUp className="text-xs" />
                      ) : (
                        <FaChevronDown className="text-xs" />
                      )}
                    </button>

                    {/* Conteúdo Expansível - Informações Técnicas */}
                    {expandedRows[row.id]?.technical && (
                      <div className="flex flex-col space-y-1 text-xs animate-fadeIn">
                        <div className="bg-blue-50 p-2 rounded">
                          <span className="text-gray-600 font-medium">IP:</span>{" "}
                          <span className="text-gray-900 font-mono">
                            {row.ip}
                          </span>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <span className="text-gray-600 font-medium">
                            Geolocalização:
                          </span>{" "}
                          <span className="text-gray-900">
                            {row.geolocation}
                          </span>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <span className="text-gray-600 font-medium">
                            Registrar:
                          </span>{" "}
                          <span className="text-gray-900">{row.registrar}</span>
                        </div>
                        <div className="p-2 rounded border border-gray-200">
                          <div className="mb-1">
                            <span className="text-gray-600">Criação:</span>{" "}
                            <span className="text-gray-900">
                              {row.creationDate}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Expiração:</span>{" "}
                            <span className="text-gray-900">
                              {row.expirationDate}
                            </span>
                          </div>
                        </div>
                        <div className="bg-green-50 p-2 rounded border border-green-200">
                          <div className="font-medium text-green-800 mb-1">
                            Gateway de Pagamento
                          </div>
                          <div>
                            <span className="text-gray-900 break-words">
                              {row.pgGateway}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Botão Registro e Propriedade */}
                    <button
                      onClick={() => toggleRowExpansion(row.id, "registry")}
                      className="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 flex items-center justify-between gap-2"
                    >
                      <span>+ Registro e Propriedade</span>
                      {expandedRows[row.id]?.registry ? (
                        <FaChevronUp className="text-xs" />
                      ) : (
                        <FaChevronDown className="text-xs" />
                      )}
                    </button>

                    {/* Conteúdo Expansível - Registro e Propriedade */}
                    {expandedRows[row.id]?.registry && (
                      <div className="flex flex-col space-y-2 text-xs animate-fadeIn">
                        <div className="bg-indigo-50 p-2 rounded border border-indigo-200">
                          <div className="font-medium text-indigo-800 mb-1">
                            Proprietário
                          </div>
                          <div className="mb-1">
                            <span className="text-gray-600">Nome:</span>{" "}
                            <span className="text-gray-900">
                              {row.ownerName}
                            </span>
                          </div>
                          <div className="mb-1">
                            <span className="text-gray-600">
                              Registrado em:
                            </span>{" "}
                            <span className="text-gray-900">
                              {row.registeredIn}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Endereço:</span>{" "}
                            <span className="text-gray-900">
                              {row.hostingAddress}
                            </span>
                          </div>
                        </div>

                        <div className="bg-red-50 p-2 rounded border border-red-200">
                          <div className="font-medium text-red-800 mb-1">
                            CNPJs
                          </div>
                          <div className="mb-1">
                            <span className="text-gray-600">CNPJ BET:</span>{" "}
                            <span className="text-gray-900">{row.cnpj}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">
                              CNPJ Proprietário:
                            </span>{" "}
                            <span className="text-gray-900">
                              {row.ownerCnpj}
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 border border-red-300">
                              {row.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </td>

                {/* Ações */}
                <td className="px-4 py-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleDownloadPDF(row)}
                      className="p-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center"
                      title="Download PDF"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://olinda.bcb.gov.br/olinda/servico/DASFN/versao/v1/odata/InstituicoesAutorizadas?$filter=CNPJ eq '${row.cnpjBCB.replace(/[^\d]/g, "")}'&$format=json`,
                          "_blank",
                        )
                      }
                      className="p-1 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                      title="Enviar ao Bacen"
                    >
                      <img
                        src={bacenIcon}
                        alt="Bacen"
                        className="w-6 h-6 object-contain"
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://api.caixa.gov.br/consulta-instituicao/${row.cnpjBCB.replace(/[^\d]/g, "")}`,
                          "_blank",
                        )
                      }
                      className="p-2 text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center"
                      title="Enviar a CEF"
                    >
                      <img
                        src={cefIcon}
                        alt="CEF"
                        className="w-4 h-4 object-contain"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Imagem Ampliada */}
      {imageModal.open && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-black bg-opacity-90">
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Overlay clicável */}
            <div
              className="fixed inset-0 cursor-pointer"
              onClick={() => setImageModal({ open: false, src: "", title: "" })}
            ></div>

            {/* Modal com imagem grande */}
            <div className="relative bg-white rounded-lg shadow-2xl transform transition-all max-w-7xl w-full z-10">
              {/* Header do modal */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  {imageModal.title}
                </h3>
                <button
                  onClick={() =>
                    setImageModal({ open: false, src: "", title: "" })
                  }
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  title="Fechar (ESC)"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Imagem em tamanho grande */}
              <div className="p-4 bg-gray-100">
                <div
                  className="flex items-center justify-center"
                  style={{ maxHeight: "80vh" }}
                >
                  <img
                    src={imageModal.src}
                    alt={imageModal.title}
                    className="max-w-full max-h-[80vh] object-contain rounded shadow-lg"
                  />
                </div>
              </div>

              {/* Footer com dica */}
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                <p className="text-sm text-gray-600 text-center">
                  Clique fora da imagem ou pressione ESC para fechar
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetSitesTable;
