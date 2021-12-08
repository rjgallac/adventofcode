const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  lines = data.split("\r\n")
  console.log(lines)
  depth = 0;
  vertical = 0;
  for(var i=0;i<lines.length;i++){
    if(lines[i].startsWith("forward")) {
      vertical += parseInt(lines[i].slice(-1));
    }
    if(lines[i].startsWith("down")) {
      depth += parseInt(lines[i].slice(-1));
    }
    if(lines[i].startsWith("up")) {
      depth -= parseInt(lines[i].slice(-1));
    }

  }
  console.log(depth)
  console.log(vertical)
  console.log(vertical*depth)
})