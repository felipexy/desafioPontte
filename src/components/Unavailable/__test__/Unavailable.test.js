import React from 'react';
import Unavailable from '../Unavailable';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('Tests for Unavailable component', () => {
    
  it('Renders right phrase', async () => {
    const { getByTestId } = render(<Unavailable />);
    const unvlbTst = await waitFor(() => getByTestId('unaTest'));
    expect(unvlbTst).toHaveTextContent('Sistema fora do ar, tente novamente mais tarde! :(');
  });

  it('Matches snapshot', () => {
    const tree = renderer.create(<Unavailable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
