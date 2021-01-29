import io from 'socket.io-client'

export function SocketInit(playerName, roomCode, roomAction){
    const socket = io(`${process.env.REACT_APP_SOCKETS_BASE_URL}`, {
        query: {playerName, roomCode, roomAction},
    });

    socket.on('message', data => {
        console.log(`Message from server: "${data}"`)
    })

    return socket;
}