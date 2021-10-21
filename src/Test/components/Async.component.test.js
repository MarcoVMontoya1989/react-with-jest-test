import {render, screen} from '@testing-library/react';
import AsyncComponent from "../../components/Async.component";

describe('async component unit testing', () => {

  it('should render component', function () {
    render(<AsyncComponent />);
  });

  it('should posts if request is successful',  async () => {

    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{
        id: 'a1',
        title: 'foobar',
        
      }]
    });

    render(<AsyncComponent />);

    const listItemElement = await screen.findAllByRole('listitem');

    expect(listItemElement).not.toHaveLength(0);
  });
});