export const types = {
  UPDATE_INFORMATIONS_REQUEST: '@informations/UPDATE_INFORMATIONS_REQUEST',
  UPDATE_INFORMATIONS_SUCCESS: '@informations/UPDATE_INFORMATIONS_SUCCESS',
  UPDATE_INFORMATIONS_FAILURE: '@informations/UPDATE_INFORMATIONS_FAILURE',
};

export function updateInformationsRequest(data) {
  return {
    type: types.UPDATE_INFORMATIONS_REQUEST,
    payload: { data },
  };
}

export function updateInformationsSuccess(informations) {
  return {
    type: types.UPDATE_INFORMATIONS_SUCCESS,
    payload: { informations },
  };
}

export function updateInformationsFailure(error) {
  return {
    type: types.UPDATE_INFORMATIONS_FAILURE,
    payload: { error },
  };
}
