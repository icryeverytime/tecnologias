const express = require('express') //crear un servidor de express
const app = express() //para correr la funcion express
const server = require('http').Server(app) //para crear un servidor para usar socket.io
const io = require('socket.io')(server) //crea un servidor basado en nuestro servidor de express
const { v4: uuidV4 } = require('uuid') //uuid es parte de peer JS, se usa para generar un id unico apra cada sesion

app.set('view engine', 'ejs') //como se va a renderizar nuestra vista con el motor ejs
app.use(express.static('public')) //para especificar nuestro folder estatico llamado public

app.get('/', (req, res) => { //para recibir nuestras peticiones
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => { //pasamos un parametro variable por el url
  res.render('room', { roomId: req.params.room }) //renderizamos el parametro room
})

io.on('connection', socket => { //para que corra cada vez que alguien se conecte
  socket.on('join-room', (roomId, userId) => { //se crea el evento que muestra el id de los usuarios que se conecten
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {//para que corra cada vez que alguien se desconecte se muestre el id de los usuarios
      socket.broadcast.to(roomId).emit('user-disconnected', userId)
    })
  })
})

server.listen(3000) //para empezar el servidor en el puerto 3000