import {render, screen} from '@testing-library/react';
import GreetingsComponent from "../../components/Greetings.component";

describe('Greetings component unit test', () => {
  test('should render Hello World as a text', () => {
    render(<GreetingsComponent />);

    const helloWorldElement = screen.getByText('Hello World!');

    expect(helloWorldElement).toBeInTheDocument();
  });
});
