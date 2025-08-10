import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

let users = 0;
let activeSockets = [];

wss.on('connection', function connection(socket) {
    users++;
    // console.log("NEW USER", users);
    activeSockets.push(socket);

    // socket.send("Welcome to my server");
    activeSockets.forEach((s) => {
        s.send(`Users count: ${users}`);
    })

    // To recieve a message from user
    socket.on('message', (data) => {
        console.log(data.toString());

        activeSockets.forEach((s) => {
            s.send(data.toString());
        })
    })

    socket.on('close', () => {
        activeSockets = activeSockets.filter((s) => s !== socket);
        users--;

        activeSockets.forEach((s) => {
            s.send(`Users Left, Users remaining: ${users}`);
        })
    })
});
