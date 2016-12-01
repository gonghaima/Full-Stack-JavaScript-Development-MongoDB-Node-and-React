// import http from 'http';

// const server=http.createServer();

// server.listen(8080);

// server.on('request', (req, res)=>{
//     res.write('Hello HTTP!\n');

//     setTimeout(()=>{
//         res.write('I can stream!\n');
//         res.end();
//     },3000);
// });

import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/',(req, res)=>{
    res.render('index', {
        content:'Hello Express and <em>EJS!</em>'
    });
});

server.use('/api',apiRouter);
server.use(express.static('public'));

// server.get('/about.html',(req, res)=>{
//     fs.readFile('./ab.html', (err,data)=>{
//         res.send(data.toString());
//     });
// });

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
// import apiRouter from './api';
// // import fs from 'fs';

// const server = express();
// server.set('view engine','ejs');

// server.get('/',(req, res)=>{
//     // res.send('Hello Express');
//     res.render('index',{
//         content:'Hello Express and ejs! <em>EJS</em>'
//     });
// });

// server.use('/api',apiRouter);
// server.use(express.static('public'));

// // server.get('/about.html',(req, res)=>{
// //     fs.readFile('./about.html',(err,data)=>{
// //         res.send(data.toString());
// //     });
// // });

// server.listen(config.port, ()=>{
//     console.info('Express listening on port ', config.port);
// });