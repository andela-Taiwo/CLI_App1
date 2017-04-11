
// This cli app retrieves font information from https://www.googleapis.com/webfonts 
// The aim is to actually test if we can get response for the GET verbs
// The output is in .JSON format and includes all the font family present on google webfonts
var request = require('superagent');

var api = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA4v28LKVHmpzLKSXOMMJFv_jceViJfVK8';

function apiApp(api){

	

	request.get(api, function(err, res){
  	if (err) throw err;  
  
  	console.log(res.text);
});


}


apiApp(api);



