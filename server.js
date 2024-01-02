const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const routes = require('./Routes/routes');

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', routes);

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    return res.redirect("/html/home.html");
});

app.listen(PORT, () => {
    console.log(`Server is running in Port: ${PORT}`);
});