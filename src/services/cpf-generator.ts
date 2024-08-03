type GenerateCpfProps = {
	format: boolean
}

const generateCpf = ({
	format
}: GenerateCpfProps): string => {
	const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

	let cpf = "";
	for (let i = 0; i < 9; i++) {
		cpf += getRandomInt(0, 9).toString();
	}

	cpf += generateDigit(cpf);
	cpf += generateDigit(cpf);

	return format ? formatCPF(cpf) : cpf;
};

const generateDigit = (cpf: string) => {
	let sum = 0;
		let weight = cpf.length + 1;
		for (let i = 0; i < cpf.length; i++) {
			sum += parseInt(cpf.charAt(i)) * weight--;
		}
		const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
		return result;
};

const formatCPF = (doc: string) => {
	return doc.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export { generateCpf };