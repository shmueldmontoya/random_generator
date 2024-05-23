document.addEventListener("DOMContentLoaded", () => {
	const input = document.getElementById("input");
	const output = document.getElementById("output");
	const copyButton = document.getElementById("button--copy");
	const clearButton = document.getElementById("button--clear");
	const downloadButton = document.getElementById("dwn-btn");
	const fileInput = document.getElementById("archivoTexto");

	const charMap = {
		"a": "¢", "b": "£", "c": "¤", "d": "¥", "e": "¦", "f": "§", "g": "►", "h": "©", "i": "ª", "j": "«", "k": "¬", 
		"l": "®", "m": "¯", "n": "°", "ñ": "±", "o": "²", "p": "³", "q": "µ", "r": "¶", "s": "·", "t": "¹", "u": "º", 
		"v": "»", "w": "¼", "x": "½", "y": "¾", "z": "ø", "A": "¢^", "B": "£^", "C": "¤^", "D": "¥^", "E": "¦^", "F": "§^", 
		"G": "►^", "H": "©^", "I": "ª^", "J": "«^", "K": "¬^", "L": "®^", "M": "¯^", "N": "°^", "Ñ": "±^", "O": "²^", 
		"P": "³^", "Q": "µ^", "R": "¶^", "S": "·^", "T": "¹^", "U": "º^", "V": "»^", "W": "¼^", "X": "½^", "Y": "¾^", 
		"Z": "ø^", "Á": "¢^´", "É": "¦^´", "Í": "ª^´", "Ó": "²^´", "Ú": "º^´", "á": "¢´", "é": "¦´", "í": "ª´", "ó": "²´", 
		"ú": "º´", "Ü": "º^¨", "ü": "º¨", " ": "&"
	};
	const reverseCharMap = Object.fromEntries(Object.entries(charMap).map(([k, v]) => [v, k]));

	const transformText = (text, map) => text.replace(/./g, char => map[char] || char);

	const execute = () => {
		const text = input.value;
		const isText = /[a-záéíóúü]/gi.test(text);
		output.value = transformText(text, isText ? charMap : reverseCharMap);
	};

	const clear = () => {
		input.value = "";
		output.value = "";
	};

	const copy = () => {
		output.select();
		document.execCommand("copy");
	};

	const download = () => {
		const text = output.value;
		if (!text) return;
		const filename = `${prompt("Escribe un nombre para el archivo")}.txt`;
		const element = document.createElement('a');
		element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
		element.setAttribute('download', filename);
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	const openFile = event => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = e => {
				input.value = e.target.result;
				execute();
			};
			reader.readAsText(file);
		}
	};

	input.addEventListener("input", execute);
	copyButton.addEventListener("click", copy);
	clearButton.addEventListener("click", clear);
	downloadButton.addEventListener("click", download);
	fileInput.addEventListener("change", openFile);
});
