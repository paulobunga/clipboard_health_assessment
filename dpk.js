const crypto = require("crypto");

exports.generatePartitionKey = (event) => {
  const MAXIMUM_KEY_LENGTH = 256;
  let partitionKey = event ? event.partitionKey || JSON.stringify(event) : "0";

  if (typeof partitionKey !== "string") {
    partitionKey = JSON.stringify(partitionKey);
  }

  if (partitionKey.length > MAXIMUM_KEY_LENGTH) {
    partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
  }

  return partitionKey;
};