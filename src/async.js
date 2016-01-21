// Explaining ES7 Async await

var request = require('request');
 
function getJSON(url) {

  request(url, function(error, response, body) {
    return body;
  });
}
 
function main() {
  var data = getJSON('http://some_api/item1');
  console.log(data); // Undefined
}
 
main();

// Solution? Async/await
var request = require('request');
 
function getJSON(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}
 
async function main() {
  var data = await getJSON();
  console.log(data); // NOT undefined!
}
 
main();

