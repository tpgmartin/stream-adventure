var through = require('through2');
var split   = require('split');

var lineNum = 0;
process.stdin
  .pipe(split())
  .pipe(through(function (buffer, _, next) {
    this.push(lineNum % 2 === 0 ? buffer.toString().toLowerCase() + '\n' : buffer.toString().toUpperCase() + '\n');
    lineNum++;
    next();
})).pipe(process.stdout);