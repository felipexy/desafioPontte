const INITIAL_STATE = { id: 0, valid: false, data: 3, loading: false };

function reducer(state = INITIAL_STATE, action) {
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

export default reducer;
