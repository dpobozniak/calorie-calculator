import s from './FormInput.module.css';

type TProps = {
  errorMessage?: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: {
    label: string;
    value: string;
  }[];
  selected: string;
};

const FormSelect = ({
  errorMessage,
  label,
  name,
  onChange,
  options,
  selected,
}: TProps) => (
  <fieldset className={s.wrapper}>
    <legend className={s.label}>{label}</legend>
    {options.map(({ label, value }) => (
      <span key={value}>
        <input
          type="radio"
          className={s.radio}
          id={`${name}-${value}`}
          value={value}
          name={name}
          onChange={onChange}
          checked={value === selected}
        />
        <label htmlFor={`gender-${value}`}>{label}</label>
      </span>
    ))}
    {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
  </fieldset>
);

export default FormSelect;
