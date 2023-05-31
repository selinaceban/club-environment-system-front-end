import { render, screen, fireEvent } from '@testing-library/react';
import ClimateControlToggleComponent from './ClimateControlToggleComponent';

test('renders ClimateControlToggleComponent and toggles the button', async () => {
  render(<ClimateControlToggleComponent />);
  
  // Find the button by its text using screen.getByText
  const toggleButton = screen.getByText(/ON/i);

  // Verify that the button is initially rendered with the text "ON"
  expect(toggleButton).toBeInTheDocument();

  // Simulate a button click to toggle the state
  fireEvent.click(toggleButton);

  // Wait for the API call to complete
  await screen.findByText(/OFF/i);

  // Verify that the button text has changed to "OFF"
  expect(screen.getByText(/OFF/i)).toBeInTheDocument();
});
