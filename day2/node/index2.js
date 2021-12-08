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
  aim = 0;
  for(var i=0;i<lines.length;i++){
    val = parseInt(lines[i].slice(-1))
    if(lines[i].startsWith("forward")) {
      depth = depth + aim * val;
      vertical += val;
      console.log("foward")
    }
    if(lines[i].startsWith("down")) {
      aim += val;
    }
    if(lines[i].startsWith("up")) {
      aim -= val;
    }
  }
  console.log(depth)
  console.log(vertical)
  console.log(vertical*depth)
  //should be 900
})