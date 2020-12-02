//  Reducer contendo as opções de Actions 'CHANGE_ID' e 'CHANGE_VALID'

const INITIAL_STATE = { id: 0, valid: false, data: 3, loading: false };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ID': //  Atualiza o estado que demonstra a posição atual do slider
      return {
        id: action.id,
        valid: state.valid,
        data: state.data,
        loading: state.loading,
      };
    case 'CHANGE_VALID': // Habilita/Desabilita o estado do botão "continuar"
      return {
        id: state.id,
        valid: action.valid,
        data: state.data,
        loading: state.loading,
      };
    default:
      return state;
  }
}

export default reducer;
