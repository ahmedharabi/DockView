const express=require("express");
const container=require("./routes/containers");
const cors=require("cors");
const app=express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/",container);

app.listen(5001);