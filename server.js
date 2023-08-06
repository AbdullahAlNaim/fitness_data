const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.static('scripts'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.post('/', function (req, res) {
    const something = req.body.chose;
    console.log(something);
    res.send('recieved info')
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`)
})