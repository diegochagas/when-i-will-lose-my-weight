import React from 'react';

import { Form, Button } from './styles';

export default function Home() {
  return (
    <Form>
      <div>
        <label htmlFor="date">Actual Date</label>

        <input id="date" type="text" defaultValue={new Date()} />
      </div>

      <div>
        <label htmlFor="weight">Weight</label>

        <input id="weight" type="number"/>
      </div>

      <div>
        <label htmlFor="height">Height</label>

        <input id="height" type="number"/>
      </div>

      <Button to="/results">Show results</Button>
    </Form>
  );
}
