type GeneratePasswordProps = {
	length: number,
  lowercase: boolean,
  uppercase: boolean,
  numbers: boolean,
  symbols: boolean
}

const generatePassword = ({
  length,
  lowercase,
  uppercase,
  numbers,
  symbols
}: GeneratePasswordProps): string => {
  const lowercaseChars = "abcdefghjkmnpqrstuvwxyz"; // Removed similar chars like 'i', 'l'
  const uppercaseChars = "ABCDEFGHJKMNPQRSTUVWXYZ"; // Removed similar chars like 'I', 'L'
  const numberChars = "23456789"; // Removed similar chars like '0', '1'
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  let chars = "";
  if (lowercase) chars += lowercaseChars;
  if (uppercase) chars += uppercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
};

export { generatePassword };