import React from 'react';
import ReactDOM from 'react-dom';
import ContinueBtt from '../ContinueBtt';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
describe('Tests for ContinueBtt component', () => {
  it('Click Button + Render', async () => {
    const { getByTestId } = render(<ContinueBtt />);
    const ctnBtt = await waitFor(() => getByTestId('contBtt'));
    fireEvent.click(ctnBtt);
  });

  it('Matches snapshot (notValid)', () => {
    const tree = renderer.create(<ContinueBtt isValid={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Matches snapshot (Valid)', () => {
    const tree = renderer.create(<ContinueBtt isValid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
