const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleWares);
server.use(router);
console.log(`Your json-server run in the port ${port}`);
server.listen(port);
