// 'use strict';

// const { FileSystemWallet, Gateway } = require('fabric-network');
// const client = require('fabric-client')
// let enroll = require("./enrollment.js")
// var query = require('./query.js')
// const fs = require('fs');
// const path = require('path');
// const request = require('request');
// const defaultsPath = path.resolve(__dirname, 'connection.json');
// const defaultsJSON = fs.readFileSync(defaultsPath, 'utf8');
// const defaults = JSON.parse(defaultsJSON);
// const ccpPath = path.resolve(__dirname, 'connection.json');
// const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
// const ccp = JSON.parse(ccpJSON);
// const walletPath = path.join(process.cwd(), 'wallet');
// console.log(walletPath)
// const wallet = new FileSystemWallet(walletPath);

// async function doesUserExists(_user) {
//     let userExists = await wallet.exists(_user);
//     if (userExists) {
//         return true;
//     } else {
//         return false
//     }
// }
// async function logOut(user) {
//     try {
//         await wallet.delete(user)
//         return { success: true, message: "Logout succesfull" }
//     } catch (err) {
//         return { success: false, message: "Failed to logout" }
//     }

// }

// async function submitInvoke(user, _fcn, _args) {

//     console.info("invoking With admin : ", user)
   
//     if (doesUserExists(user)) {
//         const gateway = new Gateway();
//         try {
//             // Create a new gateway for connecting to our peer node.
//             await gateway.connect(ccp, { wallet, identity: user, discovery: { enabled: false } });
//             // Get the network (channel) our contract is deployed to.
//             const network = await gateway.getNetwork('mychannel');
            
//             // Get the contract from the network.
//             const contract = network.getContract('mycc');
//             //var co = JSON.parse(_args);
//            // console.log(co,"args")
//         //     let privatedata = await contract.createTransaction("Putprivatedata").
//         //     setTransient({"saleprice":"eyJJZCI6IjJnIiwiU2FsZWRwcmljZSI6IjQ1NiIsIk1hcmtldHZhbHVlIjoiODQ1In0="}).submit()
//         //     console.log(privatedata,"privatedata")                     
// //             let result = await contract.submitTransaction(_fcn,co[0],co[1],co[2],co[3])
//             console.log("result tx id:", result.toString())
//             console.log('Transaction has been submitted');
//             await gateway.disconnect();
//             return { success: true, message: "Transaction successfully sumbmitted. " + result.toString() }
//         } catch (error) {
//             await gateway.disconnect();
//             return { success: false, message: `Failed to submit transaction: ${error}` }
//         }
//     }
// }




// exports.submitInvoke = submitInvoke
// exports.logOut = logOut