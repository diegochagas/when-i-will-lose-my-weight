import { takeLatest, put, all } from 'redux-saga/effects';

import history from '~/services/history';

import { BMI, formatDate } from '~/services/api';

import {
  types,
  updateInformationsSuccess,
  updateInformationsFailure,
} from './actions';

export function* getInformations({ payload }) {
  try {
    const { weight: firstWeight, height, actualDate: date } = payload.data;
    const informations = [];

    let weight = firstWeight;
    let bmiCategories = '';

    do {
      const { value, category } = BMI(weight, height);

      bmiCategories = category;

      informations.push({
        date: formatDate(date),
        weight,
        height,
        bmi: value.toFixed(2),
        category,
      });

      weight--;

      date.setDate(date.getDate() + 7);
    } while (bmiCategories === 'Obesity' || bmiCategories === 'Overweight');

    yield put(updateInformationsSuccess(informations));

    history.push('/results');
  } catch (err) {
    yield put(updateInformationsFailure(err));
  }
}

export default all([
  takeLatest(types.UPDATE_INFORMATIONS_REQUEST, getInformations),
]);
