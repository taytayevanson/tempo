var
// pin = require('pi-gpio'),

exe = function(m, n, note) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(m + ' | ' + n);
};

module.exports = exe;