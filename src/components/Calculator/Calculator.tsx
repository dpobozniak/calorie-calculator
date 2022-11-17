import { useRouter } from 'next/router';
import Form from 'components/CalculatorForm/Form';
import type { TFormElements } from 'components/CalculatorForm/types';

const Calculator = () => {
  const router = useRouter();

  const handleSumit = (formValues: TFormElements) => {
    router.push(`/calc/?${new URLSearchParams(formValues).toString()}`);
  };

  return <Form onSubmit={handleSumit} />;
};

export default Calculator;
