const routes = module.exports = require('express')();
const bcservice = require('../../blockchainservices/transactions')

routes.post('/creatstoreRequest',async function (req,res,next) {
    console.log("started from here ")
    //let reponse =  await bcservice.submitInvoke('admin','fnCreateOrder',JSON.stringify(req.body))
    res.status(200).send('data got submitted storeRequest')
    
})


routes.post('/updatestoreRequest',async function (req,res,next) {
    console.log("started from here ")
    //let reponse =  await bcservice.submitInvoke('admin','fnCreateOrder',JSON.stringify(req.body))
    res.status(200).send('data got submitted update storeRequest')
    
})



