export enum ConvertType {
	MORSE_TO_TEXT = 1,
	TEXT_TO_MORSE = 0
}

type ConvertToMorseProps = {
	type: ConvertType,
	content: string
}

const chars = [
	["a", ".-"],
	["b", "-..."],
	["c", "-.-."],
	["d", "-.."],
	["e", "."],
	["f", "..-."],
	["g", "--."],
	["h", "...."],
	["i", ".."],
	["j", ".---"],
	["k", "-.-"],
	["l", ".-.."],
	["m", "--"],
	["n", "-."],
	["o", "---"],
	["p", ".--."],
	["q", "--.-"],
	["r", ".-."],
	["s", "..."],
	["t", "-"],
	["u", "..-"],
	["v", "...-"],
	["w", ".--"],
	["x", "-..-"],
	["y", "-.--"],
	["z", "--.."],
];

const convertMorse = ({ type, content }: ConvertToMorseProps) => {

	let convertedContent = "";

	let splittedContent = content.split(type == ConvertType.TEXT_TO_MORSE ? '' : ' ');

	for(var x = 0; x < splittedContent.length; x++) {
		if(splittedContent[x] == "/") {
			convertedContent+= " ";
			continue;
		}
		if(splittedContent[x] == " ") {
			convertedContent+= " /";
			continue;
		}
		for(var y = 0; y < chars.length; y++) {
			if(splittedContent[x] == chars[y][type]) {
				convertedContent+= (type == ConvertType.TEXT_TO_MORSE ? " " : "") + chars[y][(type * -1) + 1];
			}
		}
	}
	return convertedContent.trim();
}

export { convertMorse }