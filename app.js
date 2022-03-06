// 1st project
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// });

// server.listen(8000, '127.0.0.1');

const express = require("express")
const app = express();
require('./db/db')
const User = require("./models/user")
const Product = require("./models/products")
const Order = require("./models/order")
const path = require("path")

const staticdir = path.join(__dirname, './', 'public')
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static(staticdir))

app.get("/user", async (req, res) => {
    const document = console.log(req.body)
    // await document.save();
    res.send('save')
})

app.post("/user", async (req, res) => {
    const document = new User(req.body);
    await document.save();
    res.send('save')
})

app.post("/product", async (req, res) => {
    const document = new Product(req.body)
    await document.save();
    res.send('save')
})

app.post("/order", async (req, res) => {
    const document = new Order(req.body)
    await document.save();
    res.send('save')
})

app.get("/app/welcome", async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "index.html"))
})

app.get("*", async (req, res) => {
    res.render("error")
})
    


app.listen(8000)