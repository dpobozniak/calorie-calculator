import s from './FormInput.module.css';

type TProps = {
  errorMessage?: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  unit: string;
};

const FormInput = ({
  errorMessage,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  unit = '',
}: TProps) => (
  <div className={s.wrapper}>
    <label className={s.label} htmlFor={name}>
      {label}
    </label>
    <span className={s.inputWrapper}>
      <input
        type={type}
        className={s.input}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {unit && (
        <span className={s.unitWrapper}>
          <span className={s.unit}>{unit}</span>
        </span>
      )}
    </span>
    {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
  </div>
);

export default FormInput;
