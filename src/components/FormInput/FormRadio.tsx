import s from './FormInput.module.css';

type TProps = {
  className?: string;
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
  className,
  errorMessage,
  label,
  name,
  onChange,
  options,
  selected,
}: TProps) => (
  <fieldset className={`${s.wrapper} ${className ? className : undefined}`}>
    <legend className={s.label}>{label}</legend>
    {options.map(({ label, value }) => (
      <span key={value} className={s.radioOption}>
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
