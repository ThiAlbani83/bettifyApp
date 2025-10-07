const fs = require("fs");
const path = require("path");

// Ler o arquivo
const filePath = path.join(__dirname, "fakeData.js");
let content = fs.readFileSync(filePath, "utf8");

// Substituir todas as datas de postagem hardcoded
content = content.replace(
  /dataPostagem: "2024-06-\d{2} \d{2}:\d{2}:\d{2}"/g,
  "dataPostagem: generateRecentPostDateTime()"
);

// Escrever o arquivo atualizado
fs.writeFileSync(filePath, content, "utf8");

console.log("Datas de postagem atualizadas com sucesso!");
