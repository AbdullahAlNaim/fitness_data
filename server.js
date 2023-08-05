const express = require('express');
const app = express();
const port = 3000;
var something = '';
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.sendFile('index.html')
})

app.post('/move', (req, res) => {
    res.send('recieved info')
    something = res.body.chose;
    console.log(something);
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`)
})