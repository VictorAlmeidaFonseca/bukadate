const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Your static site folder name
app.use(express.static("post"));


app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/post/index.html'));
});

app.listen(port, () => {
    console.log("server is running on " + port)
})