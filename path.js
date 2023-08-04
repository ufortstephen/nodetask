const path = require('path');
const process  = require('process');
const os = require("os");



// Print out the current working directory
const cwd = path.dirname(__filename)
console.log(cwd);

// Print out the separator of a given file path
const seperator = path.sep
console.log(path.sep);

// Print out the extension name of a file path
const extensionName = path.extname(__dirname)
console.log(path.extname(__filename));


//Print out the process id of the current running process
const processId = process.pid
console.log(processId);


// Print out the user information of the os
const user = os.userInfo()
console.log(user);


// Print out the platform of an operating system
const operatingSystem = os.type()
console.log(operatingSystem);