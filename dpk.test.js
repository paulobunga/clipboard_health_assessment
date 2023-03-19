const { generatePartitionKey } = require("./dpk");

describe("generatePartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = generatePartitionKey();
    expect(trivialKey).toBe("0");
  });

  test("Returns same output for same input", () => {
    const input = { id: 1, name: "Paul Obunga" };
    const result1 = generatePartitionKey(input);
    const result2 = generatePartitionKey(input);
    expect(result1).toBe(result2);
  });

  test("Generates a partition key of max length on large input", () => {
    const input = { data: "x".repeat(1000) };
    const result = generatePartitionKey(input);
    expect(result.length).toBeLessThanOrEqual(256);
  });
});
