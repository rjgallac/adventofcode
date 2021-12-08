exports.reduceandfilter = function(idx, lines, test) {
    ones = countValues(1, lines, idx);
    zero = countValues(0, lines, idx);
    return lines.filter(line=>line[idx] == test(zero, ones));
}

function countValues(val, lines, idx) {
  return lines.reduce((a,b) => (b[idx] == val) ? ++a : a, 0);
}

exports.oxygentest = function(zero, one) {
  return (zero <= one) ? 1 : 0;
}

exports.carbontest = function(zero, one) {
  return (zero > one) ? 1 : 0;
}