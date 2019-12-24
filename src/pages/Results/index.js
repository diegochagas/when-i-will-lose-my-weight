import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Results() {
  const informations = useSelector(state => state.informations);

  return (
    <Container>
      <div className="table">
        <h2>Losing 1kg per week</h2>

        <div className="thead">
          <span>Date</span>

          <span>Weight (kg)</span>

          <span>BMI</span>

          <span>BMI Categories</span>
        </div>

        {informations.map(information => (
          <div className="line" key={information.weight}>
            <span>{information.date}</span>

            <span>{information.weight}</span>

            <span>{information.bmi}</span>

            <span>{information.category}</span>
          </div>
        ))}
      </div>

      <div>
        <Link to="/" className="btn">
          Go back to home
        </Link>
      </div>
    </Container>
  );
}
