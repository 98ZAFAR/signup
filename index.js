const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'routes')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')));
app.use(express.static(path.join(__dirname, 'templates')));

app.listen(port, (req, res)=>{
    console.log(`Blog is running on http://localhost:${port}`);
});