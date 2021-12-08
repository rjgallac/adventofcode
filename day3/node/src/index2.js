const app = require('./functions/main')
const fileread = require('./functions/fileread');

fileread.read().then(lines => {
  lifesupport = app.main(lines);
  console.log(lifesupport);
});
  


