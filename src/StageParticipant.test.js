import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import StageParticipant from './StageParticipant';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Stage Participant Branch Component Testing', () => {
  // smoke test

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StageParticipant />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // snapshot test
  it('should render correctly', () => {
    const tree = renderer
          .create(<StageParticipant />)
          .toJSON();
    expect(tree).toMatchSnapshot();
  })
})