const http = require("http");
const host = 'localhost';
const port = 8001;
// esta requerindo a pasta que vai ser citada na frente
const fs = require('fs').promises;

// adicionei a função para chamar o http
// mostra e recebe o que é feito no navegador
const requestListener = function (req, res) {
    fs.readFile(__dirname + "/projeto7.html").then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.end(contents);
    })
};
//criar um servidor http
const server = http.createServer(requestListener);
// inicia o servidor
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

