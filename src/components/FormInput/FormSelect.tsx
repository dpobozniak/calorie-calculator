import s from './FormInput.module.css';

type TProps = {
  errorMessage?: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
  <div className={s.wrapper}>
    <label className={s.label} htmlFor={name}>
      {label}
    </label>
    <span className={s.inputWrapper}>
      <select
        className={`${s.input} ${s.select}`}
        id={name}
        name={name}
        value={selected}
        onChange={onChange}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </span>
    {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
  </div>
);

export default FormSelect;
