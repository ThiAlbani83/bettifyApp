import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsCharts = () => {
  const [isChartsExpanded, setIsChartsExpanded] = useState(false);

  // Dados do gráfico de distribuição de empresas
  const companyDistributionData = [
    { name: "MAX LTDA", count: 1 },
    { name: "RVLS COMPRE CERTO LTDA", count: 2 },
    { name: "VCOIN LTDA", count: 2 },
    { name: "A55Pagamentos LTDA", count: 2 },
    { name: "TRIPLOPAY", count: 2 },
    { name: "Koreabet", count: 2 },
    { name: "Hornet", count: 3 },
    { name: "Vitalcred", count: 4 },
    { name: "Digital LTDA", count: 5 },
    { name: "NOVA BETPLAY ENTRETENIMENTO", count: 6 },
    { name: "Questcore LTDA", count: 6 },
    { name: "BLOCKDRIVE LTDA", count: 6 },
    { name: "MARKETPLACE PAGO LTDA", count: 9 },
    { name: "Privilege", count: 9 },
    { name: "CRYPTO LTDA", count: 10 },
    { name: "PRIME LTDA", count: 10 },
    { name: "ARTPAY INSTITUIÇÃO E PROC", count: 13 },
    { name: "TMS CONSULTORIA E INVESTIMENTO", count: 16 },
    { name: "ELITE LTDA", count: 20 },
    { name: "AJC GATEWAY LTDA", count: 48 },
    { name: "IVI GATEWAY LTDA", count: 80 },
  ];

  const totalCompanies = companyDistributionData.reduce(
    (sum, item) => sum + item.count,
    0
  );

  // Dados do gráfico de gateways (Pizza)
  const gatewayData = [
    { name: "Mw lp LTDA", count: 90 },
    { name: "Ajc Gateway LTDA", count: 35 },
    { name: "Simpay Pagamentos LTDA", count: 28 },
    { name: "Hyper Wallet lp LTDA", count: 22 },
    { name: "Mt lp S.A.", count: 18 },
    { name: "Tycoon Technology lip S.A", count: 15 },
    { name: "Fitbank lp", count: 12 },
    { name: "Sabts Scd S.A", count: 10 },
    { name: "A55 Scd S.A.", count: 7 },
  ];

  const totalGateways = gatewayData.reduce((sum, item) => sum + item.count, 0);

  const gatewayChartData = {
    labels: gatewayData.map((item) => item.name),
    datasets: [
      {
        label: "Quantidade",
        data: gatewayData.map((item) => item.count),
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(147, 51, 234, 0.8)",
          "rgba(236, 72, 153, 0.8)",
          "rgba(251, 146, 60, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(234, 179, 8, 0.8)",
          "rgba(239, 68, 68, 0.8)",
          "rgba(99, 102, 241, 0.8)",
          "rgba(168, 85, 247, 0.8)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(147, 51, 234, 1)",
          "rgba(236, 72, 153, 1)",
          "rgba(251, 146, 60, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(234, 179, 8, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(99, 102, 241, 1)",
          "rgba(168, 85, 247, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const gatewayChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 11,
          },
          padding: 10,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const percentage = ((value / totalGateways) * 100).toFixed(1);
                return {
                  text: `${label}: ${value} (${percentage}%)`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  hidden: false,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
      title: {
        display: true,
        text: "Distribuição de Gateways de Pagamento",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            const percentage = ((value / totalGateways) * 100).toFixed(1);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  const chartData = {
    labels: companyDistributionData.map((item) => item.name),
    datasets: [
      {
        label: "Quantidade",
        data: companyDistributionData.map((item) => item.count),
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Gráfico de Distribuição de Empresas",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.x;
            const percentage = ((value / totalCompanies) * 100).toFixed(1);
            return `Quantidade: ${value} (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
      y: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className="mb-6 bg-white rounded-lg shadow overflow-hidden border border-gray-200">
      <button
        onClick={() => setIsChartsExpanded(!isChartsExpanded)}
        className="w-full px-6 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-150 border-b border-gray-200"
      >
        <h2 className="text-base font-medium text-gray-700">
          Análise Estatística e Gráficos (Últimos 7 dias)
        </h2>
        {isChartsExpanded ? (
          <FaChevronUp className="text-sm text-gray-500" />
        ) : (
          <FaChevronDown className="text-sm text-gray-500" />
        )}
      </button>

      {isChartsExpanded && (
        <div className="p-6 bg-gray-50">
          {/* Grid de Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico 1: Distribuição de Empresas */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div style={{ height: "600px" }}>
                <Bar data={chartData} options={chartOptions} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold mb-2">Resumo:</p>
                <ul className="space-y-1">
                  <li>
                    • Total de empresas identificadas:{" "}
                    {companyDistributionData.length}
                  </li>
                  <li>• Total de ocorrências: {totalCompanies}</li>
                  <li>
                    • Maior concentração: IVI GATEWAY LTDA (
                    {((80 / totalCompanies) * 100).toFixed(1)}
                    %)
                  </li>
                </ul>
              </div>
            </div>

            {/* Gráfico 2: Distribuição de Gateways (Pizza) */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div style={{ height: "600px" }}>
                <Pie data={gatewayChartData} options={gatewayChartOptions} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold mb-2">Resumo:</p>
                <ul className="space-y-1">
                  <li>
                    • Total de gateways identificados: {gatewayData.length}
                  </li>
                  <li>• Total de ocorrências: {totalGateways}</li>
                  <li>
                    • Maior concentração: Mw lp LTDA (
                    {((90 / totalGateways) * 100).toFixed(1)}%)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsCharts;
