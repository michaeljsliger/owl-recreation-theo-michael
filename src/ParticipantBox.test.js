import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ParticipantBox from './ParticipantBox';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Participant Box Branch Testing', () => {
  // smoke test

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // snapshot test
  it('should render correctly', () => {
    const tree = renderer
          .create(<ParticipantBox />)
          .toJSON();
    expect(tree).toMatchSnapshot();
  })
})