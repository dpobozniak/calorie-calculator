import type { TFormElements } from './types';

type TErrors = Partial<Record<keyof TFormElements, string>>;

const validate = (values: TFormElements): TErrors => {
  const errors: TErrors = {};

  if (!values.height.trim()) {
    errors.height = 'Proszę podaj swój wzrost';
  } else if (isNaN(parseFloat(values.height))) {
    errors.height = 'Proszę podaj prawidłowy wzrost';
  }

  if (!values.weight.trim()) {
    errors.weight = 'Proszę podaj swoją wagę';
  } else if (isNaN(parseFloat(values.weight))) {
    errors.weight = 'Proszę podaj prawidłową wagę';
  }

  if (!values.age.trim()) {
    errors.age = 'Proszę podaj swój wiek';
  } else if (isNaN(parseFloat(values.age))) {
    errors.age = 'Proszę podaj prawidłowy wiek';
  }

  if (!values.gender.trim()) {
    errors.gender = 'Proszę wybierz swóją płeć';
  }

  return errors;
};

export default validate;
