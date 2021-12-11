const fs = require('fs')
const decode = require('./functions.js')

fs.readFile('data.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
      }
    lines = data.split("\r\n")
    // console.log(lines)
    size = lines.length;
    console.log(size)
    for(let i=0; i<1; i++) {
        splitline = lines[i].split(" | ");
        inputs=[...splitline[0].split(" ")]
        outputs=[...splitline[1].split(" ")]
        for(let i=0;i<outputs.length;i++){
            outputs[i] = outputs[i].split('').sort().join('')
        }
        console.log(inputs) 
        console.log(decode.decoded(inputs))
        console.log(outputs)
        
    }

});