const fs = require('fs');
const newdata="I am appended at the end of the file"

fs.readFile('./data.txt', 'utf8', (err, data) => {
    if(err)
        console.error(err);
    else 
    console.log("Data appended succesfully");
    })