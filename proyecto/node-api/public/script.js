const socket = io('/') //para que despues del / en la url sea el id
const videoGrid = document.getElementById('video-grid') 
const myPeer = new Peer(undefined, { //se crea una conección con el servidor que crea las id para conectar con otros
  host: '/',
  port: '3001'
})
const myVideo = document.createElement('video')
myVideo.muted = true //para que no nos escuchemos a nosotros mismos
const peers = {}
navigator.mediaDevices.getUserMedia({ //para obtener nuestro stream de video y audio
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream) 

  myPeer.on('call', call => { //cuando alguien llama, se contesta y se les envia el stream
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => { //para que también nuestro interlocutor vea ambos videos
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => { //cuando el evento se activa, se obtiene el userID
    connectToNewUser(userId, stream)
  })
})

socket.on('user-disconnected', userId => { //se obtiene el id del usuario que se desconecta
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => { //cuando alguin se conecte nos pasara el id unico de nuestro usuario
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) { 
  const call = myPeer.call(userId, stream) // se crea una variable llamada call que viene de nuestro objeto mypeer
  const video = document.createElement('video')
  call.on('stream', userVideoStream => { // cuando llamemos a alguien enviamos nuestro stream y ellos tambien
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => { //se remueve el video de las personas que se van
    video.remove()
  })

  peers[userId] = call //cada id del usuario esta vinculado a cada llamada que hacemos
}

function addVideoStream(video, stream) { //para reproducir nuestro video
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => { //cuando el video este cargado en la pagina, reproducirlo
    video.play()
  })
  videoGrid.append(video)
}