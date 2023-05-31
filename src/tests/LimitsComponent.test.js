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
  describe("handleUTempChange function", () => {
    it("should update Upper Temperature state with sanitized value", () => {
      render(<Limits />);

      // Find the UTemp input element
      const TempUpInput = screen.getByTestId("tempUp-input");

      // Simulate a change event on the input
      fireEvent.change(TempUpInput, { target: { value: "2A2. d" } });

      // Verify that the UTemp state is updated with the sanitized value
      expect(screen.getByTestId("tempUp-input").value).toBe("22");
    });
  });
  describe("handleLTempChange function", () => {
    it("should update Lower Temperature state with sanitized value", () => {
      render(<Limits />);

      // Find the LTemp input element
      const TempLowInput = screen.getByTestId("tempLow-input");

      // Simulate a change event on the input
      fireEvent.change(TempLowInput, { target: { value: "1A.aslkd 5" } });

      // Verify that the LTemp state is updated with the sanitized value
      expect(screen.getByTestId("tempLow-input").value).toBe("15");
    });
  });
  describe("handleUHumChange function", () => {
    it("should update Upper Humidity state with sanitized value", () => {
      render(<Limits />);

      // Find the UHum input element
      const HumUpInput = screen.getByTestId("humUp-input");

      // Simulate a change event on the input
      fireEvent.change(HumUpInput, { target: { value: "A.6asl ,O0ASD" } });

      // Verify that the UHum state is updated with the sanitized value
      expect(screen.getByTestId("humUp-input").value).toBe("60");
    });
  });
  describe("handleLHumChange function", () => {
    it("should update Lower Humidity state with sanitized value", () => {
      render(<Limits />);

      // Find the LHum input element
      const HumLowInput = screen.getByTestId("humLow-input");

      // Simulate a change event on the input
      fireEvent.change(HumLowInput, { target: { value: "2A.asl ,5ASD" } });

      // Verify that the LHum state is updated with the sanitized value
      expect(screen.getByTestId("humLow-input").value).toBe("25");
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
