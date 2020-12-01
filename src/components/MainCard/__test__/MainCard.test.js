import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MainCard from '../MainCard';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider, useDispatch } from 'react-redux';

afterEach(cleanup);

const apiData = `{
    "prazos": [
        60,
        90,
        120,
        150,
        180
    ],
    "valoresEmprestimo": [
        70000,
        85000,
        100000,
        115000,
        130000
    ],
    "valoresEmprestimeBruto": [
        78919.63,
        95114.83,
        110841.81,
        126366.55,
        141891.29  
    ],
    "parcelas": [
        [
            2287.12,
            2736.97,
            3173.81,
            3605.04,
            4036.26
        ],
        [
            1848.68,
            2208.55,
            2558.02,
            2903,
            3247.98
        ],
        [
            1629.46,
            1944.35,
            2250.13,
            2551.98,
            2853.83 
        ],
        [
            1497.93,
            1785.82,
            2065.39,
            2341.37,
            2617.35
        ],
        [
            1410.24,
            1680.14,
            1942.24,
            2200.96,
            2459.69
        ]
    ],
    "loading": true
}`;

const startingState = {
  id: 2,
  valid: false,
  data: apiData,
  loading: apiData.loading,
};

function reducer(state = startingState, action) {
  switch (action.type) {
    case 'CHANGE_ID':
      return {
        id: action.id,
        valid: state.valid,
        data: state.data,
        loading: state.loading,
      };
    case 'CHANGE_VALID':
      return {
        id: state.id,
        valid: action.valid,
        data: state.data,
        loading: state.loading,
      };
    case 'LOAD_DATA':
      return {
        id: state.id,
        valid: state.valid,
        data: action.data,
        loading: action.loading,
      };
    default:
      return state;
  }
}

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe('Tests for MainCard component with Redux', () => {
  it('Renders with Redux', () => {
    const { getByTestId } = renderWithRedux(<MainCard />);
  });

  /* it("Check if defineQtdeOptions is called", async() => {
        const {getByTestId} = renderWithRedux(<MainCard></MainCard>);
        
        expect(getByTestId( 'vlTitle' )).toHaveTextContent("R$ 100.000,00");
    }) */

  it('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={createStore(reducer, startingState)}>
          <MainCard />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
