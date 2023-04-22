const express = require("express");
const {createServer} = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);
app.use(express.static(path.join(__dirname, "views")));
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
    socket.emit("welcome", "Pero mira que estas conectado");
    socket.on("mandar", data=>{
        console.log(data);
    });
    io.emit("todos", socket.id+" Se ha conectado");
});

httpServer.listen(3000);