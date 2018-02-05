// var express = require('express');
// var collectionId = '612689';
//   // Fuction to get collection lis from an id
//   module.exports = getCollectionFromId = (collectionId) => {
//     var baseURL = 'https://api.unsplash.com';
//     var collection = '/collections/';
//     var auth = '?client_id=d3bfba3af55bf4804574ac6470da462784009b052f89bf1127afac5dbddaa2bf';
//     var url = baseURL+collection+collectionId+auth;
//     //Get response for particular collection
//     let request = require('request');
//     var data = request(url, function (error, response, body) {
//       if(error){
//         console.log('error:', error); // Print the error if one occurred 
//       }
//       // Print the response status code if a response was received
//       console.log('statusCode:', response && response.statusCode);
//       return JSON.parse(body);
//     });
//     return data;
//   }
// //module.exports = getCollectionFromId;
//var helpers;
var request = require('request');
function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.unsplash.com/collections/612689?client_id=d3bfba3af55bf4804574ac6470da462784009b052f89bf1127afac5dbddaa2bf',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}
module.exports.initialize = initialize;