// services/cnpj-validator/cnpj-validator.ts

export const isValidCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove any non-numeric characters

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false; // Invalid CNPJ length or all digits are the same
  }

  const validateDigit = (cnpj: string, factor: number): number => {
    let sum = 0;
    let pos = factor - 7;
    for (let i = factor; i >= 1; i--) {
      sum += parseInt(cnpj.charAt(factor - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result;
  };

  const digit1 = validateDigit(cnpj.substr(0, 12), 12);
  const digit2 = validateDigit(cnpj.substr(0, 13), 13);

  return digit1 === parseInt(cnpj.charAt(12)) && digit2 === parseInt(cnpj.charAt(13));
};
