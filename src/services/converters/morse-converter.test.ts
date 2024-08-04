import { convertMorse } from "./morse-converter";

describe('Morse Converter', () => {
	it('should return .- -... -.-. for abc string', () => {
		expect(convertMorse({ type: 0, content: "abc"})).toBe('.- -... -.-.');
	});
	it('should return -... -.-. -.. for bcd string', () => {
		expect(convertMorse({ type: 0, content: "bcd"})).toBe('-... -.-. -..');
	});
	it('should return alphabet in morse', () => {
		expect(convertMorse({ type: 0, content: "abcdefghijklmnopqrstuvwxyz"})).toBe('.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..');
	});
	it('should return alphabet from morse', () => {
		expect(convertMorse({ type: 1, content: ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.."})).toBe('abcdefghijklmnopqrstuvwxyz');
	});
	it('should return Juan Gomes Macario from morse', () => {
		expect(convertMorse({ type: 1, content: ".--- ..- .- -. / --. --- -- . ... / -- .- -.-. .- .-. .. ---"})).toBe('juan gomes macario');
	});
	it('should return .--- ..- .- -. / --. --- -- . ... / -- .- -.-. .- .-. .. --- from text', () => {
		expect(convertMorse({ type: 0, content: "juan gomes macario"})).toBe('.--- ..- .- -. / --. --- -- . ... / -- .- -.-. .- .-. .. ---');
	});
	it('should return alphabet with spaces in morse from text', () => {
		expect(convertMorse({ type: 0, content: "a b c d e f g h i j k l m n o p q r s t u v w x y z"})).toBe('.- / -... / -.-. / -.. / . / ..-. / --. / .... / .. / .--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --..');
	});
});
