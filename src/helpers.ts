import type { TCalculatorParams } from 'types/calculatorParams';
import type { TFormulaResult } from 'types/formulaResult';
import { nutritionRatio } from 'components/CalculatorForm/config';

export const calorieFormula = (params: TCalculatorParams): TFormulaResult => {
  const { activity, height, weight, age, gender, target } = params;
  // men BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
  // women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

  let BMR = 0;
  let targetWeight = weight + weight * target;

  if (gender === 'male') {
    BMR = 66.5 + 13.75 * targetWeight + 5.003 * height - 6.75 * age;
  } else {
    BMR = 655.1 + 9.563 * targetWeight + 1.85 * height - 4.676 * age;
  }

  const totalCalories = Math.ceil(BMR * activity);
  const proteinCalories = Math.ceil(totalCalories * nutritionRatio.protein);
  const carboCalories = Math.ceil(totalCalories * nutritionRatio.carbo);
  const fatCalories = Math.ceil(totalCalories * nutritionRatio.fat);

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
