export const activityOptions = [
  { value: '1.40', label: 'Niska aktywność' },
  { value: '1.60', label: 'Umiarkowana aktywność' },
  { value: '1.75', label: 'Aktywny tryb życia' },
  { value: '2.00', label: 'Bardzo aktywny tryb życia' },
];

export const genderOptions = [
  { value: 'female', label: 'Kobieta' },
  { value: 'male', label: 'Mężczyzna' },
];

export const targetOptions = [
  { value: '0', label: 'Chcę utrzymać wagę' },
  { value: '-0.20', label: 'Chcę schudnąć' }, // -20% of total calories
  { value: '0.20', label: 'Chcę przytyć' }, // +20% of total calories
];

export const nutritionRatio = {
  carbo: 0.4,
  fat: 0.3,
  protein: 0.3,
};
