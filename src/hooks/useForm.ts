import { useEffect, useState, useRef, ChangeEvent, FormEvent } from 'react';

const markEveryPropertyValue = <T extends {}>(ob: T) =>
  Object.keys(ob).reduce(
    (acc, val) => ({
      ...acc,
      [val]: true,
    }),
    {},
  );

type TValidation<T> = Partial<Record<keyof T, string>>;

const useForm = <T extends Record<keyof T, any> = {}>(options: {
  initialState: Partial<T>;
  onSubmit?: (isValid: boolean) => void;
  validation: (elements: T) => TValidation<T>;
}) => {
  const { initialState, onSubmit, validation } = options;

  const firstRender = useRef(true);
  const touchedInputs = useRef<Partial<Record<keyof T, boolean>>>({});

  const [errors, setErrors] = useState<TValidation<T>>({});
  const [formValues, setFormValues] = useState<T>((initialState || {}) as T);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setErrors(validation(formValues));
  }, [formValues, validation]);

  function updateFormValue<K extends keyof T>(
    inputName: K,
    inputValue: string,
  ) {
    touchedInputs.current[inputName] = true;

    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  }

  const handleOnChange =
    <K extends keyof T>(name: K) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      updateFormValue(name, value);
    };

  const handleOnSelectChange =
    <K extends keyof T>(name: K) =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;

      updateFormValue(name, value);
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // set all fields as touched when form has been submitted
    touchedInputs.current = markEveryPropertyValue(initialState);

    const errorList = validation(formValues);
    setErrors(errorList);

    const isValid = Object.keys(errorList).length === 0;

    if (onSubmit) {
      onSubmit(isValid);
    }
  };

  return {
    errors,
    formValues,
    handleOnChange,
    handleOnSelectChange,
    handleSubmit,
    touchedInputs: touchedInputs.current,
  };
};

export default useForm;
