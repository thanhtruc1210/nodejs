import express from 'express';

let route = express.Router()

let initWebRouters = (app) => {
    route.get('/', (req, res) =>{
        res.send('Hello World!');
    })

    return app.use('/', route);
}

module.exports = initWebRouters