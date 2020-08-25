import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ChatLog from './ChatLog';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Chat Log Branch Testing', () => {
  // smoke test

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatLog />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // snapshot test
  it('should render correctly', () => {
    const tree = renderer
          .create(<ChatLog />)
          .toJSON();
    expect(tree).toMatchSnapshot();
  })
})