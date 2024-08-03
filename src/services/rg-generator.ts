// services/rg-generator/rg-generator.js

type GenerateRgProps = {
  format: boolean
}

const generateRg = ({
  format
}: GenerateRgProps): string => {
  const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  let rg = "";
  for (let i = 0; i < 8; i++) {
    rg += getRandomInt(0, 9).toString();
  }

  rg += generateDigit(rg);

  return format ? formatRG(rg) : rg;
};

const generateDigit = (rg: string) => {
  let sum = 0;
  let weight = 2;
  for (let i = rg.length - 1; i >= 0; i--) {
    sum += parseInt(rg.charAt(i)) * weight++;
  }
  const result = sum % 11;
  return result === 0 || result === 1 ? "X" : (11 - result).toString();
};

const formatRG = (doc: string) => {
  return doc.replace(/(\d{2})(\d{3})(\d{3})([0-9Xx])/, "$1.$2.$3-$4");
};

export { generateRg };
