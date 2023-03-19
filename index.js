const {generatePartitionKey} = require("./dpk");

console.log(generatePartitionKey("{'Hello':'World'}"));