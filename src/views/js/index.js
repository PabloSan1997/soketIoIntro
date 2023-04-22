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

// socket.on("welcome", (data)=>{
//     document.querySelector(".text").textContent=data;
// });

// const mandarAlserver = document.querySelector(".boton");
// mandarAlserver.addEventListener("click", ()=>{
//     socket.emit("mandar", "hola servidor");
// });
// socket.on("todos", (data)=>{
//     console.log(data);
// });

// const saludarUltimo = document.querySelector(".saludar-al-ultimo");
// saludarUltimo.addEventListener("click", ()=>{
//     socket.emit("last", "Hola");
// });

// socket.on("salute", (data)=>{
//     console.log(data);
// })

const circle = document.querySelector("#circle");
const drag = (e) =>{
    const {clientX} = e;
    const {clientY} = e;
    circle.style.top= clientY+"px";
    circle.style.left= clientX+"px";
}
circle.addEventListener("mousedown", (evento)=>{
    document.addEventListener("mousemove", drag);
});
document.addEventListener("mouseup", ()=>{
    document.removeEventListener("mousemove", drag);
});