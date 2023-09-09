const express = require('express');

const app = express();


app.use('/', (req, res) => {
    res.send("هاتو فكرة للمشروعععععععععععععععععع!!!!!!!!!!!!");
})



app.listen(5050);