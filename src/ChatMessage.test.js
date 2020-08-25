import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ChatMessage from './ChatMessage';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Chat Message Branch Testing', () => {
  // smoke test

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessage data-id="3" />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // snapshot test
  it('should render correctly', () => {
    const tree = renderer
          .create(<ChatMessage type="message" data-id="3" />)
          .toJSON();
    expect(tree).toMatchSnapshot();
  })
})