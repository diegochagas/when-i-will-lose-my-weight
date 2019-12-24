import { types } from './actions';

const INITIAL_STATE = {
  informations: null,
};

export default function informations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_INFORMATIONS_SUCCESS:
      return action.payload.informations;
    case types.UPDATE_INFORMATIONS_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
}
