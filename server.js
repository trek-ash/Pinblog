const app = require('./backend/app');
const http = require('http');
http.createServer(app).listen(3000);
app.set("port",3000);
