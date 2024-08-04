type GenerateCnpjProps = {
  format: boolean;
};

const generateCnpj = ({ format }: GenerateCnpjProps): string => {
  const n = 9;
  const numbers: number[] = [];

  // Gera os 12 primeiros dígitos do CNPJ
  for (let i = 0; i < 12; i++) {
    numbers.push(Math.floor(Math.random() * (n + 1)));
  }

  // Adiciona os dígitos verificadores
  numbers.push(getVerificationDigit(numbers));
  numbers.push(getVerificationDigit(numbers));

  // Retorna o CNPJ formatado ou não formatado
  return format ? formatCNPJ(numbers) : numbers.join('');
};

const getVerificationDigit = (numbers: number[]): number => {
  let index = numbers.length - 7;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * index--;
    if (index < 2) index = 9;
  }

  const result = 11 - (sum % 11);
  return result > 9 ? 0 : result;
};

const formatCNPJ = (doc: number[]): string => {
  return doc.join('').replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};

export { generateCnpj };
