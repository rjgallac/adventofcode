const funcs = require('./functions');

exports.main = function(lines) {
    oxygen = extractMeasurement([...lines], funcs.oxygentest);
    co2 = extractMeasurement([...lines], funcs.carbontest);
    lifesupport = oxygen * co2;
    return lifesupport;
}

function extractMeasurement(lines, test) {
  idx=0;

  while(lines.length>1){
    lines = funcs.reduceandfilter(idx, lines, test);
    idx++;
  }
  return parseInt(lines[0],2);
}