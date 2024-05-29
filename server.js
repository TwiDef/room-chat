const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

app.post('/rooms', (req, res) => {
  const { roomID, userName } = req.body;

  if (!rooms.has(roomID)) {
    rooms.set(roomID, new Map([
      ['users', new Map()],
      ['messages', []],
    ]));
  };

  res.send();
});

io.on('connection', socket => {
  socket.on('ROOM:JOIN', (data) => {
    console.log(data);
  });

  console.log('user has been connected', socket.id);
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server has been started');
});


