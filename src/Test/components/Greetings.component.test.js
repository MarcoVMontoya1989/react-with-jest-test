import {render, screen} from '@testing-library/react';
import GreetingsComponent from "../../components/Greetings.component";
import userEvent from "@testing-library/user-event";

describe('Greetings component unit test', () => {
  test('should render Hello World as a text', () => {
    render(<GreetingsComponent />);

    const helloWorldElement = screen.getByText('Hello World!');

    expect(helloWorldElement).toBeInTheDocument();
  });
  
  test('renders good to see you if the button was not clicked', () => {
    render(<GreetingsComponent />);

    const outputElement = screen.getByText(`good to see you`, {exact: true});

    expect(outputElement).toBeInTheDocument();
  });

  test('renders and change the text after the button is clicked', () => {
    render(<GreetingsComponent />);

    const buttonElement = screen.getByRole('button');

    userEvent.click(buttonElement);

    const outputElement = screen.getByText(`Changed magically`, {exact: true});
    expect(outputElement).toBeInTheDocument();
  });
  
  test('it does not render good to see you', () => {
    render(<GreetingsComponent />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText(`good to see you`, {exact: false});
    // expect(outputElement).not.toBeInTheDocument();
    expect(outputElement).toBeNull();
  });
});
