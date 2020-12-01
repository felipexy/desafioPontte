import React from 'react';
import CardTitle from '../CardTitle';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
describe('Tests for CardTitle component', () => {
  it('Render', async () => {
    const { getByTestId } = render(<CardTitle />);
    const ctnBtt = await waitFor(() => getByTestId('cdTitle'));
    expect(ctnBtt).toHaveTextContent('Valor Solicitado');
  });

  it('Matches snapshot', () => {
    const tree = renderer.create(<CardTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
