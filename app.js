
// import module
const express = require('express');
const app = express();
const port = 3000;



app.use(require('./route/index'));
//create server
app.listen(port,()=>{console.log(`server running  3000 `)})

module.exports = app;