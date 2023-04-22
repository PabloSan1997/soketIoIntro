const socket = io();

// function checkSocketStatus(){
//     console.log("estado del socket: "+socket.connected);
// }

// socket.on("connect", ()=>{
//     document.write(socket.id);
//     checkSocketStatus();
// })

// socket.io.on("reconnect_attempt", ()=>{
//     console.log("estoy intentando reconectar");
// });
// socket.io.on("reconnect", ()=>{
//     console.log("Me volvi a conectar");
// });
// socket.io.on("connect_error", ()=>{
//     console.log("No pude conectarme", socket.io);
// });

socket.on("welcome", (data)=>{
    document.querySelector(".text").textContent=data;
});

const mandarAlserver = document.querySelector(".boton");
mandarAlserver.addEventListener("click", ()=>{
    socket.emit("mandar", "hola servidor");
});
socket.on("todos", (data)=>{
    console.log(data);
});