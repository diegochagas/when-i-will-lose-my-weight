import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateInformationsRequest } from '~/store/modules/informations/actions';
import { formatDate } from '~/services/api';
import { Form } from './styles';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const actualDate = new Date();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(updateInformationsRequest({ weight, height, actualDate }));
  }

  function checkValues() {
    return (
      isNaN(weight) ||
      weight === '' ||
      height === '' ||
      isNaN(height) ||
      weight === 0 ||
      height === 0
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Actual Date</label>

        <input id="date" type="text" defaultValue={formatDate(actualDate)} />
      </div>

      <div>
        <label htmlFor="weight">Weight (kg)</label>

        <input
          id="weight"
          type="text"
          onChange={event => setWeight(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="height">Height (m)</label>

        <input
          id="height"
          type="text"
          onChange={event => setHeight(event.target.value)}
        />
      </div>

      <div>
        <button type="submit" className="btn" disabled={checkValues()}>
          Show results
        </button>
      </div>
    </Form>
  );
}
