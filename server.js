
import config from './config';
import express from 'express';
import apiRouter from "./api";


const server = express();

server.set("view engine", "ejs");

server.get("/", (req,res)=>{
    res.render("index",{
        content: "Hello from Server"
    });
});

server.use("/api", apiRouter);

server.use(express.static('public'));


server.listen(config.port, () =>{
    console.log("Express Listin on port: " + config.port)
});