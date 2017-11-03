const express = require('express');
const router = express.Router();
var fs = require('fs');
var $rdf = require('rdflib');


// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};
let response2 = {
  status: 200,
  data: '',
  message: null
};
// Get users
router.get('/users', (req, res) => {
  response.data = ["Mehdi","José"];
  res.json(response);
});
router.get('/rdfxml', (req, res) => {
  response2.data = 'Hola Mundo';
res.json(response2);
var rdfData=fs.readFileSync(__dirname+'/1.xml').toString();

var store=$rdf.graph();
var contentType='application/rdf+xml';
var baseUrl="http://IoFTriples.com";
try{
  $rdf.parse(rdfData,store,baseUrl,contentType);
  console.log("Funciona Ddf Parser .")
} catch(err){
  console.log(err);
}
});
// post formidable


module.exports = router;
