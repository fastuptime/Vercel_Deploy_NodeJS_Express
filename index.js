var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Can Adam <3')
});

app.listen(process.env.PORT)
