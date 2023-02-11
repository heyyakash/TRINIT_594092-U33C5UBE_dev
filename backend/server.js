const http = require('http');
const api = require("./api/api");
require("./db/conn");
const port = process.env.PORT || 3000;
const server = http.createServer(api);
server.listen(port , ()=>{
    console.log(`Server is up at port ${port}`);
})