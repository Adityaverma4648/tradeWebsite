const Trade = require("../model/Trade");
const https = require('https');

let data =[]; //array to keep data chunks
https.get('https://api.wazirx.com/api/v2/tickers', function (response) { 
        
  response.on('data', d => {
    // data.push(d);
    console.log(d)
  }).on('error',e=>{
      console.log(e); //
  });

//   response.on('end',()=>{
//    let fetchedData= JSON.parse(Buffer.concat(data).toString()); 
//    console.log(fetchedData);
//    let result = new Trade({
//     entries:fetchedData.entries 
// });
// result.save()
//     .then(result => {
//         console.log('Entry saved');
//     })
//     .catch(err => {
//         console.log(err)})
