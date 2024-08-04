import { isValidCNPJ } from './cnpj-validator';

describe('CNPJ Validator', () => {
	it('should return true for a valid CNPJ', () => {
		expect(isValidCNPJ('11444777000161')).toBe(true);
		expect(isValidCNPJ('61.057.202/0001-64')).toBe(true);
		expect(isValidCNPJ('92.763.371/0001-43')).toBe(true);
		expect(isValidCNPJ('30753161000117')).toBe(true);
		expect(isValidCNPJ('19986185000183')).toBe(true);
		expect(isValidCNPJ('74734852000149')).toBe(true);
		expect(isValidCNPJ('99801009000169')).toBe(true);
		expect(isValidCNPJ('68284127000113')).toBe(true);
	});

	it('should return false for an invalid CNPJ', () => {
		expect(isValidCNPJ('11444777000160')).toBe(false);
		expect(isValidCNPJ('27401618000151')).toBe(false);
	});

	it('should return false for a CNPJ with invalid length', () => {
		expect(isValidCNPJ('114447770001')).toBe(false);
		expect(isValidCNPJ('11444777000161123')).toBe(false);
	});

	it('should return false for a CNPJ with all same digits', () => {
		expect(isValidCNPJ('11111111111111')).toBe(false);
	});
});
