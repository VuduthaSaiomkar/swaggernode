const routes = module.exports = require('express')();

routes.get('/getByID/', async function(req, res, next) {
   // if (!req.query.pin) {
       // await sendResponse(" ID not found")
    //}
    try {
       // let data = await ownerService.getPinDetails(req.query.pin, req.id)
       
        res.status(500).send("querylist")
    } catch (err) {
       // await sendResponse(err, res)
    }
})
routes.get('/getOrdersList/', async function(req, res, next) {
    try {
      //  let data = await ownerService.getAllPins(req.id)
        res.status(500).send("")
    } catch (err) {
        //await sendResponse(err, res)
    }
})