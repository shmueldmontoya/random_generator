document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const copyButton = document.getElementById("button--copy");
    const clearButton = document.getElementById("button--clear");
    const downloadButton = document.getElementById("dwn-btn");
    const fileInput = document.getElementById("file-input");

    const charMap = {
        "a": "¢", "b": "£", "c": "¤", "d": "¥", "e": "¦", "f": "§", "g": "►", "h": "©", "i": "ª", "j": "«", "k": "¬", 
        "l": "®", "m": "¯", "n": "°", "ñ": "±", "o": "²", "p": "³", "q": "µ", "r": "¶", "s": "·", "t": "¹", "u": "º", 
        "v": "»", "w": "¼", "x": "½", "y": "¾", "z": "ø", "A": "¢^", "B": "£^", "C": "¤^", "D": "¥^", "E": "¦^", "F": "§^", 
        "G": "►^", "H": "©^", "I": "ª^", "J": "«^", "K": "¬^", "L": "®^", "M": "¯^", "N": "°^", "Ñ": "±^", "O": "²^", 
        "P": "³^", "Q": "µ^", "R": "¶^", "S": "·^", "T": "¹^", "U": "º^", "V": "»^", "W": "¼^", "X": "½^", "Y": "¾^", 
        "Z": "ø^", "Á": "¢´", "É": "¦´", "Í": "ª´", "Ó": "²´", "Ú": "º´", "á": "¢´", "é": "¦´", "í": "ª´", "ó": "²´", 
        "ú": "º´", "Ü": "º¨", "ü": "º¨", " ": "&"
    };

    const reverseCharMap = {
        "¢": "a", "£": "b", "¤": "c", "¥": "d", "¦": "e", "§": "f", "►": "g", "©": "h", "ª": "i", "«": "j", "¬": "k", 
        "®": "l", "¯": "m", "°": "n", "±": "ñ", "²": "o", "³": "p", "µ": "q", "¶": "r", "·": "s", "¹": "t", "º": "u", 
        "»": "v", "¼": "w", "½": "x", "¾": "y", "ø": "z", "¢^": "A", "£^": "B", "¤^": "C", "¥^": "D", "¦^": "E", "§^": "F", 
        "►^": "G", "©^": "H", "ª^": "I", "«^": "J", "¬^": "K", "®^": "L", "¯^": "M", "°^": "N", "±^": "Ñ", "²^": "O", 
        "³^": "P", "µ^": "Q", "¶^": "R", "·^": "S", "¹^": "T", "º^": "U", "»^": "V", "¼^": "W", "½^": "X", "¾^": "Y", 
        "ø^": "Z", "¢´": "á", "¦´": "é", "ª´": "í", "²´": "ó", "º´": "ú", "º¨": "ü", "&": " "
    };

    const transformText = (text, map) => {
        let transformedText = "";
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const nextChar = text[i + 1];
            if (char + nextChar in map) {
                transformedText += map[char + nextChar];
                i++;
            } else if (char in map) {
                transformedText += map[char];
            } else {
                transformedText += char;
            }
        }
        return transformedText;
    };

    const execute = () => {
        const text = input.value;
        const isEncoded = Object.keys(reverseCharMap).some(key => text.includes(key));
        output.value = transformText(text, isEncoded ? reverseCharMap : charMap);
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
