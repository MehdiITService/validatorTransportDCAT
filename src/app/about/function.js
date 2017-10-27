function myFunction(event) {
  alert(event.target.nodeName);
  var fs = require('fs');
   var $rdf = require('rdflib');

//var parser = new xml2js.Parser();
  fs.readFile(__dirname + '/1.xml', function(err, data) {
    // Fetch data via a regular AJAX call, load from a file, or pass in a literal
    // string. In this example, it was loaded from 'https://fred.me/profile'
    var store = $rdf.graph()  // Init a new empty graph
    var contentType = 'application/rdf+xml'
    var baseUrl = ""
    var parsedGraph = $rdf.parse(data, store, baseUrl, contentType);

    $rdf.parse(data,function(triples){
      for (var i in triples){
        console.log(triples[i]);
      }
    })
  });
}
