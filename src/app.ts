import express from "express";
const app = express(); 
app.use(express.json());

app.get("/" , (_, res)=>{
    res.json({message : "Hello World"})
} )

app.listen(8000, ()=>{
    console.log("server running on 8000")
})