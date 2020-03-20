const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const sequelize = require('./core/helpers/db.helper');
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: '*',
}

async function start() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors(corsOptions));
    app.use(controllers);
    sequelize.sync().then(()=>{
        app.listen(port, function(){
          console.log(`server is runnig on ${port} port`);
        });
    }).catch(err=>console.log(err));
}

start();