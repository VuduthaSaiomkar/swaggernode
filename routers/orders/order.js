const routes = module.exports = require('express')();
const bcservice = require('../../blockchainservices/transactions')


routes.post('/createOrder',async function (req,res,next) { 
    try{
    console.log("order creation started  from here ")
    console.log(req.body,"body")
    //let reponse =  await bcservice.submitInvoke('admin','fnCreateOrder',JSON.stringify(req.body))
    res.status(200).send('data got submitted createOrder')
    }catch (error){

    }

    
})

routes.post('/updateOrder',async function(req,res,next){
    console.log("started from here ")
    console.log(req.body)
    ///let reponse =  await bcservice.submitInvoke('admin','fnUpdateOrder',JSON.stringify(req.body))
    res.status(200).send('deatils for updateOrder ')
})




