import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const app=express();
const port=3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/",(req,res)=>{

    // res.status(404).send("<h1>Namasthe.</h1>")
    // res.sendFile(__dirname + "/index.html");
    const pathlocation=path.resolve();
    res.sendFile(path.join(pathlocation ,"index.html"));
    console.log(path.join(pathlocation ,"index.html"))
    });

app.listen(port,()=>{
    console.log("server is working");
});