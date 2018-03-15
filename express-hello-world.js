
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Woooooooooooorld!')
})

app.get('/time', (req, res) => {
    const datetime = new Date().toISOString();
    res.send(datetime);
})

app.listen(8080, () => {
    console.log('listening on port 8080')
});

const port = process.env.PORT || 8080