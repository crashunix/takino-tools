import { isValidCPF } from './cpf-validator';

describe('CPF Validator', () => {
  it('should return true for a valid CPF', () => {
    expect(isValidCPF('12345678909')).toBe(true);
    expect(isValidCPF('11144477735')).toBe(true);
  });

  it('should return false for an invalid CPF', () => {
    expect(isValidCPF('12345678900')).toBe(false);
    expect(isValidCPF('11144477736')).toBe(false);
  });

  it('should return false for a CPF with invalid length', () => {
    expect(isValidCPF('123456789')).toBe(false);
    expect(isValidCPF('12345678909123')).toBe(false);
  });

  it('should return false for a CPF with all same digits', () => {
    expect(isValidCPF('11111111111')).toBe(false);
  });
});
