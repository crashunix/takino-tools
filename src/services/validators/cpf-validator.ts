const isValidCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove any non-numeric characters

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false; // Invalid CPF length or all digits are the same
  }

  const validateDigit = (cpf: string, factor: number) => {
    let sum = 0;
    for (let i = 0; i < cpf.length; i++) {
      sum += parseInt(cpf.charAt(i)) * (factor - i);
    }
    const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result;
  };

  const digit1 = validateDigit(cpf.substr(0, 9), 10);
  const digit2 = validateDigit(cpf.substr(0, 10), 11);

  return digit1 === parseInt(cpf.charAt(9)) && digit2 === parseInt(cpf.charAt(10));
};

export { isValidCPF };
