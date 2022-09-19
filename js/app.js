function ejecutar(){
	let texto = (document.getElementById("input").value);
	function detectarLenguaje(){
		if(/[a-záéíóúü]/gi.test(texto)){
			return "estexto";
		}
		else {
			return "escodigo";
		}
	}
	if (detectarLenguaje() == "estexto") {
 	// Letras minúsculas
		texto = texto.replace(/a/g,'¢');
		texto = texto.replace(/b/g,'£');
		texto = texto.replace(/c/g,'¤');
		texto = texto.replace(/d/g,'¥');
		texto = texto.replace(/e/g,'¦');
		texto = texto.replace(/f/g,'§');
		texto = texto.replace(/g/g,'►');
		texto = texto.replace(/h/g,'©');
		texto = texto.replace(/i/g,'ª');
		texto = texto.replace(/j/g,'«');
		texto = texto.replace(/k/g,'¬');
		texto = texto.replace(/l/g,'®');
		texto = texto.replace(/m/g,'¯');
		texto = texto.replace(/n/g,'°');
		texto = texto.replace(/ñ/g,'±');
		texto = texto.replace(/o/g,'²');
		texto = texto.replace(/p/g,'³');
		texto = texto.replace(/q/g,'µ');
		texto = texto.replace(/r/g,'¶');
		texto = texto.replace(/s/g,'·');
		texto = texto.replace(/t/g,'¹');
		texto = texto.replace(/u/g,'º');
		texto = texto.replace(/v/g,'»');
		texto = texto.replace(/w/g,'¼');
		texto = texto.replace(/x/g,'½');
		texto = texto.replace(/y/g,'¾');
		texto = texto.replace(/z/g,'ø');
		// Letras Mayúsculas
		texto = texto.replace(/A/g,'¢^');
		texto = texto.replace(/B/g,'£^');
		texto = texto.replace(/C/g,'¤^');
		texto = texto.replace(/D/g,'¥^');
		texto = texto.replace(/E/g,'¦^');
		texto = texto.replace(/F/g,'§^');
		texto = texto.replace(/G/g,'►^');
		texto = texto.replace(/H/g,'©^');
		texto = texto.replace(/I/g,'ª^');
		texto = texto.replace(/J/g,'«^');
		texto = texto.replace(/K/g,'¬^');
		texto = texto.replace(/L/g,'®^');
		texto = texto.replace(/M/g,'¯^');
		texto = texto.replace(/N/g,'°^');
		texto = texto.replace(/Ñ/g,'±^');
		texto = texto.replace(/O/g,'²^');
		texto = texto.replace(/P/g,'³^');
		texto = texto.replace(/Q/g,'µ^');
		texto = texto.replace(/R/g,'¶^');
		texto = texto.replace(/S/g,'·^');
		texto = texto.replace(/T/g,'¹^');
		texto = texto.replace(/U/g,'º^');
		texto = texto.replace(/V/g,'»^');
		texto = texto.replace(/W/g,'¼^');
		texto = texto.replace(/X/g,'½^');
		texto = texto.replace(/Y/g,'¾^');
		texto = texto.replace(/Z/g,'ø^');
		// Especiales
		texto = texto.replace(/Á/g,'¢^´');
		texto = texto.replace(/É/g,'¦^´');
		texto = texto.replace(/Í/g,'ª^´');
		texto = texto.replace(/Ó/g,'²^´');
		texto = texto.replace(/Ú/g,'º^´');
		texto = texto.replace(/á/g,'¢´');
		texto = texto.replace(/é/g,'¦´');
		texto = texto.replace(/í/g,'ª´');
		texto = texto.replace(/ó/g,'²´');
		texto = texto.replace(/ú/g,'º´');
		texto = texto.replace(/Ü/g,'º^¨');
		texto = texto.replace(/ü/g,'º¨');
		texto = texto.replace(/ /g,'&');
	}
	else if (detectarLenguaje() == "escodigo") {
		// Especiales
		texto = texto.replace(/¢\^´/g,'Á');
		texto = texto.replace(/¦\^´/g,'É');
		texto = texto.replace(/ª\^´/g,'Í');
		texto = texto.replace(/²\^´/g,'Ó');
		texto = texto.replace(/º\^´/g,'Ú');
		texto = texto.replace(/¢´/g,'á');
		texto = texto.replace(/¦´/g,'é');
		texto = texto.replace(/ª´/g,'í');
		texto = texto.replace(/²´/g,'ó');
		texto = texto.replace(/º´/g,'ú');
		texto = texto.replace(/º\^¨/g,'Ü');
		texto = texto.replace(/º¨/g,'ü');
		texto = texto.replace(/&/g,' ');
		// Mayúsculas
		texto = texto.replace(/¢\^/g,'A');
		texto = texto.replace(/£\^/g,'B');
		texto = texto.replace(/¤\^/g,'C');
		texto = texto.replace(/¥\^/g,'D');
		texto = texto.replace(/¦\^/g,'E');
		texto = texto.replace(/§\^/g,'F');
		texto = texto.replace(/►\^/g,'G');
		texto = texto.replace(/©\^/g,'H');
		texto = texto.replace(/ª\^/g,'I');
		texto = texto.replace(/«\^/g,'J');
		texto = texto.replace(/¬\^/g,'K');
		texto = texto.replace(/®\^/g,'L');
		texto = texto.replace(/¯\^/g,'M');
		texto = texto.replace(/°\^/g,'N');
		texto = texto.replace(/±\^/g,'Ñ');
		texto = texto.replace(/²\^/g,'O');
		texto = texto.replace(/³\^/g,'P');
		texto = texto.replace(/µ\^/g,'Q');
		texto = texto.replace(/¶\^/g,'R');
		texto = texto.replace(/·\^/g,'S');
		texto = texto.replace(/¹\^/g,'T');
		texto = texto.replace(/º\^/g,'U');
		texto = texto.replace(/»\^/g,'V');
		texto = texto.replace(/¼\^/g,'W');
		texto = texto.replace(/½\^/g,'X');
		texto = texto.replace(/¾\^/g,'Y');
		texto = texto.replace(/ø\^/g,'Z');
		 // Letras minúsculas
		texto = texto.replace(/¢/g,'a');
		texto = texto.replace(/£/g,'b');
		texto = texto.replace(/¤/g,'c');
		texto = texto.replace(/¥/g,'d');
		texto = texto.replace(/¦/g,'e');
		texto = texto.replace(/§/g,'f');
		texto = texto.replace(/►/g,'g');
		texto = texto.replace(/©/g,'h');
		texto = texto.replace(/ª/g,'i');
		texto = texto.replace(/«/g,'j');
		texto = texto.replace(/¬/g,'k');
		texto = texto.replace(/®/g,'l');
		texto = texto.replace(/¯/g,'m');
		texto = texto.replace(/°/g,'n');
		texto = texto.replace(/±/g,'ñ');
		texto = texto.replace(/²/g,'o');
		texto = texto.replace(/³/g,'p');
		texto = texto.replace(/µ/g,'q');
		texto = texto.replace(/¶/g,'r');
		texto = texto.replace(/·/g,'s');
		texto = texto.replace(/¹/g,'t');
		texto = texto.replace(/º/g,'u');
		texto = texto.replace(/»/g,'v');
		texto = texto.replace(/¼/g,'w');
		texto = texto.replace(/½/g,'x');
		texto = texto.replace(/¾/g,'y');
		texto = texto.replace(/ø/g,'z');
	}
	document.getElementById("output").value = texto;
}
function limpiar(){
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
}
function copiar(){
	document.getElementById("output").select();
	document.execCommand("copy");
}
document.getElementById("input").addEventListener("input", ejecutar);
document.getElementById("button--copy").addEventListener("click", copiar);
document.getElementById("button--clear").addEventListener("click", limpiar);


// codigo para descargar el texto del usuario
function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

document.getElementById("dwn-btn").addEventListener("click", descarga);
function descarga(){
        let file = prompt("Escribe un nombre para el archivo")
        let text = document.getElementById("output").value;
        let filename = file + ".txt";
	if(text !== ""){
		download(filename, text);
	}
}

// funcion para cargar archivo

function abrirArchivo(evento){
	let archivo = evento.target.files[0];

	if (archivo){
			let reader = new FileReader();

			reader.onload = function(e) {
					let contenido = e.target.result;

					document.getElementById('input').innerText = contenido;
			};

			reader.readAsText(archivo);
	}
}

window.addEventListener('load', () => {
	document.getElementById('archivoTexto').addEventListener('change', abrirArchivo);
});