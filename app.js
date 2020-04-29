const swaggerUi = require('swagger-ui-express');
const swaggerCLi = require('swagger-cli')
const rotues = require('./routers')
const bodyparse = require('body-parser')
const path = require('path')
const express = require('express')
const app = express();

var options = {
    customCss: '.info { display: none }'
};
app.use(bodyparse.json())

async function run(){
  await   swaggerCLi.bundle(path.join(__dirname, './swagger/index.yaml'), { dereference: true, outfile: (path.join(__dirname, './swagger.json')) })
    const swaggerDocument = require('./swagger.json');
    app.use('/api1', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
    app.use(rotues)
    app.listen(4000,function(err){
        console.log('server as started listing at port 4000')
    })
}
run()



