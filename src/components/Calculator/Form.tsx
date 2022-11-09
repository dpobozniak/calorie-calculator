import Input from 'components/FormInput/FormInput';
import Select from 'components/FormInput/FormSelect';
import Radio from 'components/FormInput/FormRadio';
import useForm from 'hooks/useForm';
import validate from './validate';
import { TFormElements } from './types';

import s from './Form.module.css';

const activityOptions = [
  { value: '1.20', label: 'Prawie brak' },
  { value: '1.40', label: 'Lekka aktywność' },
  { value: '1.60', label: 'Umiarkowana aktywność' },
  { value: '1.80', label: 'Duża aktywność' },
  { value: '2.00', label: 'Bardzo duża aktywność' },
];

const genderOptions = [
  { value: 'female', label: 'Kobieta' },
  { value: 'male', label: 'Mężczyzna' },
];

const initialValues = {
  activity: activityOptions[0].value,
  age: '',
  gender: '',
  height: '',
  weight: '',
};

const CalculatorForm = () => {
  const handleOnSubmit = (isValid: boolean) => {
    console.log('----values', formValues);
  };

  const {
    errors,
    formValues,
    handleOnChange,
    handleOnSelectChange,
    handleSubmit,
    touchedInputs,
  } = useForm({
    initialState: initialValues,
    validation: validate,
    onSubmit: handleOnSubmit,
  });

  const getTextFieldProps = (fieldName: keyof TFormElements) => {
    const isTouched = touchedInputs[fieldName];
    const errorMessage = isTouched ? errors[fieldName] : undefined;
    const value = formValues[fieldName];

    return {
      value,
      errorMessage,
      name: fieldName,
      onChange: handleOnChange(fieldName),
    };
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        label="Twoja waga:"
        placeholder="Uzupełnij..."
        unit="kg"
        {...getTextFieldProps('weight')}
      />
      <Input
        label="Twój wzrost:"
        placeholder="Uzupełnij..."
        unit="cm"
        {...getTextFieldProps('height')}
      />
      <Input
        label="Twój wiek:"
        placeholder="Uzupełnij..."
        unit="lat"
        {...getTextFieldProps('age')}
      />
      <Radio
        label="Twoja płeć:"
        {...getTextFieldProps('gender')}
        options={genderOptions}
        selected={formValues.gender}
      />
      <Select
        label="Aktywność fizyczna:"
        {...getTextFieldProps('activity')}
        onChange={handleOnSelectChange('activity')}
        options={activityOptions}
        selected={formValues.activity}
      />
      <button type="submit" className={s.submitButton}>
        Oblicz
      </button>
    </form>
  );
};

export default CalculatorForm;
