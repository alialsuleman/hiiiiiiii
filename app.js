const express = require('express');

const app = express();


app.use('/', (req, res) => {
    res.send("wait for new feature *_*");
})



app.listen(5050);