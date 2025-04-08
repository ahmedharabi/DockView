const express=require("express");
const container=require("./routes/containers");
const image=require("./routes/imageRoute");
const volume=require("./routes/volumeRoute");
const network=require("./routes/networkRoute")
const cors=require("cors");
const app=express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/containers",container);
app.use("/images",image);
app.use("/volumes",volume);
app.use("/networks",network);

app.listen(5001);