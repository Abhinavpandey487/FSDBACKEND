const fs = require('fs');

fs.writeFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("File created successfully");

})