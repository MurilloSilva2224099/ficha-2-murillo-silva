const http = require("http");

const PORT = 3000;

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Body guard", type: "Criatura", attack: 20, defense: 50 },
  { name: "Convulsões", type: "Criatura", attack: 100, defense: 0 },
  { name: "ronaldinho", type: "Criatura", attack: 1, defense: -20},
];
    
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
 
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Bem-vindo à página inicial!</h1>");
    return;
  }
 
  if (req.url === "/sobre") {
  res.end("<h1> Murillo Silva TGPSI24T<h1>");
  return;
  }
 
    if (req.url === "/cartas") {
        const items = cards.map(card => `<li>${card.name}</li>`).join("");
 
    res.write(`<h1>Cartas<h1><ul>${items}</ul>`);
    res.end(`${cards.length} cartas disponiveis`);
    return;
    }

    if (req.url === "/agora") {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    const now = new Date().toLocaleString("pt-PT");
    res.end(`${now}`);
    return;
    }

    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>404 — Página Não Encontrada</h1>
    <p>O endereço pedido não existe neste servidor.</p>
  `);
   });

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
 
 