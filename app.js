const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('port', process.env.PORT || 3000);

// sockets
require('./sockets')(io);


// Settings
app.use(express.static(path.join(__dirname, 'public')))

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

module.exports = app;
