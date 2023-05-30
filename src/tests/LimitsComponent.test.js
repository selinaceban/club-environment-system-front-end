import { checkIfValid } from "../LimitsComponent";

describe("checkIfValid", () => {
  it("returns true when all limits are valid", () => {
    const result = checkIfValid("10", "20", "30", "40", "50");
    expect(result).toBe(true);
  });

  it("returns false and alerts for invalid CO2 limit", () => {
    global.alert = jest.fn(); // Mock the alert function

    const result = checkIfValid("10", "20", "30", "40", "-10");
    expect(result).toBe(false);
    expect(global.alert).toHaveBeenCalledWith("Invalid CO2 limit");
  });

  it("returns false and alerts for invalid Humidity limits", () => {
    global.alert = jest.fn(); // Mock the alert function

    const result = checkIfValid("10", "20", "40", "30", "50");
    expect(result).toBe(false);
    expect(global.alert).toHaveBeenCalledWith("Invalid Humidity limits");
  });

  it("returns false and alerts for invalid Temperature limits", () => {
    global.alert = jest.fn(); // Mock the alert function

    const result = checkIfValid("20", "10", "30", "40", "50");
    expect(result).toBe(false);
    expect(global.alert).toHaveBeenCalledWith("Invalid Temperature limits");
  });
});
