const loopbackApiTesting = require('loopback-api-testing');
const test = require('./product/_test_.product.json')
const server = require('../server/server.js');
const url = 'http://localhost:3000/api';

loopbackApiTesting.run(test,server,url,err=>{
    if(err){
        console.log(err);
        
    }
})