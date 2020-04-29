const app = module.exports = require('express')();

// app.get('/', (req, res) => {
//     res.send({ msg: 'hello! Server is up and running' });
// });

app.use('/Orders', require('./orders/order'))
app.use('/partLabel', require('./partLabel/partlabel'))
app.use('/storeRequest', require('./storeRequest/storeRequest'))


