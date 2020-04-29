const routes = module.exports = require('express')();
const bcservice = require('../../blockchainservices/transactions')

routes.post('/createLabel',async function (req,res,next) {
    console.log("started from here ")
    console.log(req.body,"partlabel")
    //let reponse =  await bcservice.submitInvoke('admin','fnOrderLabel',JSON.stringify(req.body))
    res.status(200).send('data got submitted partLabel')
    
})





