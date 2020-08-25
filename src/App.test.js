import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App trunk testing', () => {
  // smoke test

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // snapshot test
  it('should render correctly', () => {
    const tree = renderer
          .create(<App />)
          .toJSON();
    expect(tree).toMatchSnapshot();
  })
})