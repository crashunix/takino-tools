import { isValidCNPJ } from "../../validators/cnpj-validator/cnpj-validator";
import { generateCnpj } from "./cnpj-generator";

describe('CNPJ Generator', () => {
  it('should generate a valid non-formatted CNPJ', () => {
    const cnpj = generateCnpj({ format: false });
    expect(isValidCNPJ(cnpj)).toBe(true);
    expect(cnpj).toMatch(/^\d{14}$/); // Verifica se tem 14 dígitos numéricos
  });

  it('should generate a valid formatted CNPJ', () => {
    const cnpj = generateCnpj({ format: true });
    expect(isValidCNPJ(cnpj)).toBe(true);
    expect(cnpj).toMatch(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/); // Verifica se está no formato xx.xxx.xxx/xxxx-xx
  });

  it('should generate different CNPJs', () => {
    const cnpj1 = generateCnpj({ format: false });
    const cnpj2 = generateCnpj({ format: false });
    expect(cnpj1).not.toBe(cnpj2); // Verifica se os CNPJs gerados são diferentes
  });
});
