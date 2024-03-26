import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);
const io = new Server(server);

// socket.io
io.on('connection', (socket)=>{     /*whenever frontend(client) connects with the server ...*/


    socket.on('userMessage', (message)=>{    /*data arrives from the client*/
        console.log(`A new msg : ${message}`); 

        io.emit('serverMessage', (message))   // since the data arrives from the client server now sends the data to all the socket(clients)
    })
})





app.use(express.static(path.resolve('../public')))

app.get('/', (req,res)=>{
    res.sendFile('/public/index.html')
})

server.listen(3000, ()=>{
    console.log(`server is running at port 3000`);
})