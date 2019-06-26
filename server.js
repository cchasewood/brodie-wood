const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('./*', (req, res) => res.redirect('https://localhost:3000/'))

app.listen(3000, ()=> console.log('Server is listening on port 3000'));