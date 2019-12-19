import React from 'react';

import { Container, Button } from './styles';

export default function Results() {
  function BMI(weight, height) {
    const value = weight / (height * height);
    let category = '';
    
    if (value < 18.5 ) category = 'Underweight';
    else if (value > 18.5 && value < 24.9) category = 'Normal weight';
    else if (value > 25 && value < 29.9) category = 'Overweight';
    else category = 'Obesity';
    
    return { value, category };
  }
  
  function buildInformations() {
    const informations = [];

    let weight = 102.3;
    const height = 1.70;

    const { value: bmi, category } = BMI(weight, height);

    for (let i = 0; i < 9; i++) {
      informations.push({
        date: '25/11/2019',
        weight,
        height,
        bmi: bmi.toFixed(2),
        bmiCategories: category,
      });
  
      weight--;
    }

    return informations;
  }

  const informations = buildInformations();

  return (
    <Container>
      <div className="table">
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

            <span>{information.bmiCategories}</span>
          </div>
        ))}
      </div>

      <Button to="/">Go back to home</Button>
    </Container>
  );
}
