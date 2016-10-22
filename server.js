import express from 'express';

let app = express();

app.get('/home',(req,res)=>res.send('hello yuhu'));

app.use(express.static('public'));

app.listen(3000);
