const express = require("express");
const {createServer} = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);
app.use(express.static(path.join(__dirname, "views")));
const socketsOnline = [];
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

io.on("connection", (socket)=>{
    // console.log("clientes conectados: ", io.engine.clientsCount)
    // console.log("Id del socket conectado",socket.id);

    // socket.on("disconnect", ()=>{
    //     console.log(socket.id + "se ha desconectado");
    // });
    // socket.conn.once("upgrade", ()=>{
    //     console.log("Hemos pasado de http long-polling a "+socket.conn.transport.name);
    // });
    // socket.emit("welcome", "Pero mira que estas conectado");
    // socketsOnline.push(socket.id);
    // socket.on("mandar", data=>{
    //     console.log(data);
    // });
    // io.emit("todos", socket.id+" Se ha conectado");

    // socket.on("last", data=>{
    //     const lastSocket = socketsOnline[socketsOnline.length-1];
    //     io.to(lastSocket).emit("salute", data);
    // });
    
    
});

httpServer.listen(3000);