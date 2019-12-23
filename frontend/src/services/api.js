export function BMI(weight, height) {
  const value = weight / (height * height);
  let category = '';

  if (value < 18.5) category = 'Underweight';
  else if (value > 18.5 && value < 24.9) category = 'Normal weight';
  else if (value > 25 && value < 29.9) category = 'Overweight';
  else category = 'Obesity';

  return { value, category };
}

export function formatDate(date) {
  const formatedDate = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()}`;

  return formatedDate;
}
