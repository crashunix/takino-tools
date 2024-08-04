import { isValidCPF } from "../../validators/cpf-validator/cpf-validator";
import { generateCpf } from "./cpf-generator";

describe('CPF Generator', () => {
  it('should generate a valid non-formatted CPF', () => {
    const cpf = generateCpf({ format: false });
    expect(isValidCPF(cpf)).toBe(true);
    expect(cpf).toMatch(/^\d{11}$/); // Verifica se tem 11 dígitos numéricos
  });

  it('should generate a valid formatted CPF', () => {
    const cpf = generateCpf({ format: true });
    expect(isValidCPF(cpf)).toBe(true);
    expect(cpf).toMatch(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/); // Verifica se está no formato xxx.xxx.xxx-xx
  });

  it('should generate different CPFs', () => {
    const cpf1 = generateCpf({ format: false });
    const cpf2 = generateCpf({ format: false });
    expect(cpf1).not.toBe(cpf2); // Verifica se os CPFs gerados são diferentes
  });
});