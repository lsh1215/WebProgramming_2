var os = require("os");

console.log("hostName:", os.hostname());
console.log("cpuInfo:\n");
console.log(os.cpus());
console.log(os.networkInterfaces());
