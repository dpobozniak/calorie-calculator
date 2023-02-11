import Input from 'components/FormInput/FormInput';
import Select from 'components/FormInput/FormSelect';
import Radio from 'components/FormInput/FormRadio';
import useForm from 'hooks/useForm';
import validate from './validate';
import { TFormElements } from './types';
import { activityOptions, genderOptions, targetOptions } from './config';

import s from './Form.module.css';

const initialValues = {
  activity: activityOptions[0].value,
  age: '',
  gender: '',
  height: '',
  target: targetOptions[0].value,
  weight: '',
};

type TProps = {
  onSubmit: (values: TFormElements) => void;
};

const CalculatorForm = ({ onSubmit }: TProps) => {
  const handleOnSubmit = (isValid: boolean) => {
    if (isValid) {
      onSubmit(formValues);
    }
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
        inputMode="numeric"
        label="Twoja waga:"
        placeholder="Uzupełnij..."
        unit="kg"
        {...getTextFieldProps('weight')}
      />
      <Input
        inputMode="numeric"
        label="Twój wzrost:"
        placeholder="Uzupełnij..."
        unit="cm"
        {...getTextFieldProps('height')}
      />
      <Input
        inputMode="numeric"
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
        className={s.radioOption}
      />
      <Select
        label="Aktywność fizyczna:"
        {...getTextFieldProps('activity')}
        onChange={handleOnSelectChange('activity')}
        options={activityOptions}
        selected={formValues.activity}
      />
      <Select
        label="Twój cel:"
        {...getTextFieldProps('target')}
        onChange={handleOnSelectChange('target')}
        options={targetOptions}
        selected={formValues.target}
      />
      <button type="submit" className={s.submitButton}>
        Oblicz
      </button>
    </form>
  );
};

export default CalculatorForm;
