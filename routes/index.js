var express = require('express');
var router = express.Router();
//Request Js
var request = require('request');
//Unsplash-js
//var Unsplash = require('unsplash-js');
var helper = require('../public/javascripts/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Altair' });
});

/* Endpoint */
router.get('/wallpapers', function(req, res, next) {

  //have a group of routes
  //have a unified system to add collection id
  var jsonResponse;
  var previewPhotos = [];
  var initializePromise = helper.initialize();
  initializePromise.then(function(result) {
    //collectionDetails = result;
    //console.log("Initialized Collection details");
    // Use collection details from here
    //console.log(collectionDetails);
    let jsonResponse = result['preview_photos'];
    for (oneResult in jsonResponse) {
        let onePreview = jsonResponse[oneResult]['urls']['small'];
        previewPhotos.push(onePreview);
    }
    console.log('PREVIEW--');console.log({ title: 'Legolas', data: previewPhotos });
    res.render('collection', { title: 'Legolas', data: previewPhotos });
}, function(err) {
    console.log(err);
});
// console.log(jsonResponse);
// previewPhotos = jsonResponse.map((jsonResponse) => {
//   return jsonResponse['preview_photos']['urls']['small'];
// }
// );

  //res.send(collectionShadowAndLight);
  //res.render('collection', { title: 'Legolas', previewPhotos });
});

module.exports = router;
