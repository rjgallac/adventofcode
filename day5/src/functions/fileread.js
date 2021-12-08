const fs = require('fs')
exports.read = function(){
    return new Promise((resolve, reject) =>{
        fs.readFile('./data/input.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          reject(err)
        }
        let lines = data.split("\r\n")
        resolve(lines);
    });
})};
