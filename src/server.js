import express from "express";

const app = express();
app.use(express.json());

app.post('/hello', (req,res)=>{
    res.send(`Hello ${req.body.name}`);
});

app.get('/hello/:name/id/:id', (req,res)=>{
    const {name} = req.params;
    const {id} = req.params;
    res.send(`Hello ${name} and your id is ${id}`)
})

app.listen(8000, ()=>{
    console.log('Server is listening on the port 80000')
})