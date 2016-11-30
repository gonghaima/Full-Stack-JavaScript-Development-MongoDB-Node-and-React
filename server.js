import config from './config';
import express from 'express';
import apiRouter from './api';
// import fs from 'fs';

const server = express();
server.set('view engine','ejs');

server.get('/',(req, res)=>{
    // res.send('Hello Express');
    res.render('index',{
        content:'Hello Express and ejs! <em>EJS</em>'
    });
});

server.use('/api',apiRouter);
server.use(express.static('public'));

// server.get('/about.html',(req, res)=>{
//     fs.readFile('./about.html',(err,data)=>{
//         res.send(data.toString());
//     });
// });

server.listen(config.port, ()=>{
    console.info('Express listening on port ', config.port);
});