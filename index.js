const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors());


app.get('/', (req, res)=>{
    res.json({message: 'hello server running'});
})
app.get('/alldata', (req, res)=>{
    console.log('hello');
    res.json({message: 'Shohan tumi valo hoye jaw'});
})






app.listen(3000, ()=>{
    console.log('server is running port 3000!');
})