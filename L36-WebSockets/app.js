import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

let users = 0;
let activeSockets = [
    // {socket1, room:'cpp'}
    // {socket1, room:'general'}
];

let allMessages = [
    { message: 'general message-1', room: 'general' },
    { message: 'general message-2', room: 'general' },
    { message: 'cpp messsage-1', room: 'cpp' },
    { message: 'cpp messsage-2', room: 'cpp' },
];

function joinRoom(socket, room) {
    activeSockets.forEach(s => {
        if (s.socket === socket && s.room === room) return;
    })

    activeSockets.push({ socket, room })
}

function addMessage(message, room) {
    allMessages.push({
        message,
        room
    })
}

wss.on('connection', function connection(socket) {

    // activeSockets.push({ socket, room: 'general' });
    joinRoom(socket, 'general');
    allMessages.forEach((m) => {
        if (m.room === "general") socket.send(JSON.stringify({
            message: m.message,
            room: m.room
        }));
    })

    // To recieve a message from user
    socket.on('message', (data) => {
        data = JSON.parse(data.toString());
        /*
            data = {
                type: 'joinroom',
                payload:{
                    room:'cpp'
                }
            }
        */
        console.log(data);
        if (data.type == 'joinroom') {
            joinRoom(socket, data.payload.room)
            allMessages.forEach((m) => {

                if (m.room === data.payload.room) socket.send(JSON.stringify({
                    message: m,
                    room: data.payload.room
                }));
            })
        }
        else if (data.type == 'chat') {
            /*
            data = {
                type: 'chat',
                payload:{
                    room:'cpp',
                    message: 'I am new here'
                }
            }
            */
            addMessage(data.payload.message, data.payload.room);
            console.log(allMessages);
            activeSockets.forEach((s) => {
                console.log(s.room);
                if (s.room === data.payload.room) s.socket.send(JSON.stringify({
                    message: data.payload.message,
                    room: data.payload.room
                }));
            })
        }

    })

    socket.on('close', () => {
        activeSockets = activeSockets.filter((s) => s.socket !== socket);
        users--;
    })
});
