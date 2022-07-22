import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine'
import initWebRouters from './route/web'

require('dotenv').config()
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app)
initWebRouters(app)

let port =8080
app.listen(port, (req, res) => {
    console.log("Start at"+port)
})