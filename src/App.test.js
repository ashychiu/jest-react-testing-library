import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', { name: "Learn React" });
//   expect(linkElement).toBeInTheDocument();
// });

// test('throw error', () => {
//   throw new Error ('sample failed message')
// })

test('button has correct initial text & colour', () => {
  const { container } = render(<App />)
  logRoles(container) // show all the roles on the page in the console

  const button = screen.getByRole('button', { name: "Change to blue" })
  expect(button).toHaveStyle({"background-color": "red"})
})

test('button turns blue when clicked', () => {
  render(<App />)  
  const colorButton = screen.getByRole('button', { name: "Change to blue" })
  
  //click button
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ "background-color": "blue" })
  expect(colorButton).toHaveTextContent("Change to red")
})

test('initial conditions of checkbox', () => {
  render(<App />)
  //check button is enabled
  const colorButton = screen.getByRole('button', {name: "Change to blue"})
  expect(colorButton).toBeEnabled()
  
  // checkbox is unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})
