import { TCalculatorParams } from 'types/calculatorParams';

export const calorieFormula = (params: TCalculatorParams) => {
  const { activity, height, weight, age, gender } = params;
  // men BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
  // women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

  let BMR = 0;

  if (gender === 'male') {
    BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  } else {
    BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }

  const totalCalories = Math.ceil(BMR * activity);
  const proteinCalories = Math.ceil(totalCalories * 0.15);
  const carboCalories = Math.ceil(totalCalories * 0.55);
  const fatCalories = Math.ceil(totalCalories * 0.3);

  return {
    totalCalories,
    protein: {
      cal: proteinCalories,
      g: Math.ceil(proteinCalories / 4),
    },
    carbo: {
      cal: carboCalories,
      g: Math.ceil(carboCalories / 4),
    },
    fat: {
      cal: fatCalories,
      g: Math.ceil(fatCalories / 9),
    },
  };
};
