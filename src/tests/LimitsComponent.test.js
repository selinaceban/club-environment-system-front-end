import checkIfValid from "../LimitsComponent";

test("checks if limits are valid", () => {
  // Test case 1: Valid limits
  expect(checkIfValid(20, 30, 40, 50, 500)).toBe(true);

  // Test case 2: Invalid CO2 limit
  expect(() => {
    checkIfValid(20, 30, 40, 50, -10);
  }).toThrow("Invalid CO2 limit");

  // Test case 3: Invalid Humidity limits
  expect(() => {
    checkIfValid(20, 30, 60, 50, 100);
  }).toThrow("Invalid Humidity limits");

  // Test case 4: Invalid Temperature limits
  expect(() => {
    checkIfValid(30, 20, 40, 50, 100);
  }).toThrow("Invalid Temperature limits");
});
