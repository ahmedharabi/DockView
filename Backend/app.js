const express=require("express");
const container=require("./routes/containers");
const image=require("./routes/imageRoute");
const volume=require("./routes/volumeRoute");
const network=require("./routes/networkRoute");
const monitor=require("./routes/monitorRoute");
const cors=require("cors");
const app=express();
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: "http://localhost:5173", // Your frontend
        methods: ["GET", "POST"],
        credentials: true
    }
});
require('./listeners/monitoring')(io);

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/containers",container);
app.use("/images",image);
app.use("/volumes",volume);
app.use("/networks",network);
app.use("/monitor",monitor);
server.listen(5001);