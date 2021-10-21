import {render, screen} from '@testing-library/react';
import GreetingsComponent from "../../components/Greetings.component";

// afterEach(() => {
//   jest.useRealTimers();
// });


jest.setTimeout(6000);

describe('Greetings component unit test', () => {

  // jest.useFakeTimers('legacy');

  it('should render Hello World as a text', (assert) => {
    jest.useFakeTimers('legacy');


    render(<GreetingsComponent />);

    const helloWorldElement = screen.getByText('Hello World!');

    expect(helloWorldElement).toBeInTheDocument();
  });
});
