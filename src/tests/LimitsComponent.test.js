import { checkIfValid } from "../LimitsComponent";
import Limits from "../LimitsComponent";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Limits", () => {
  describe("handleCO2Change function", () => {
    it("should update CO2 state with sanitized value", () => {
      render(<Limits />);

      // Find the CO2 input element
      const co2Input = screen.getByTestId("co2-input");

      // Simulate a change event on the input
      fireEvent.change(co2Input, { target: { value: "80As,0" } });

      // Verify that the CO2 state is updated with the sanitized value
      expect(screen.getByTestId("co2-input").value).toBe("800");
    });
  });
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
});
