import { all } from 'redux-saga/effects';

import informations from './informations/sagas';

export default function* rootSaga() {
  return yield all([informations]);
}
