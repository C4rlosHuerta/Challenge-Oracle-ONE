
var ingresaTexto = document.getElementById("textoAEncriptar");
ingresaTexto.value = null;
ingresaTexto.focus();

var desencriptaTexto = document.getElementById("textoEncriptado")
desencriptaTexto.value == null;

var botonEncriptar = document.getElementById("encriptar");
var textoEncriptado = [];

function encriptarOk(){

	var textEncriptar = ingresaTexto.value;

	for (var posicion = 0;posicion < textEncriptar.length ;posicion++){

		if(textEncriptar[posicion] == "e"){

			textoEncriptado.push("enter")

		} 

		else{

			if(textEncriptar[posicion] == "i"){

				textoEncriptado.push("imes")

			} 

			else{

				if(textEncriptar[posicion] == "a"){

					textoEncriptado.push("ai")

				} 

				else{

					if(textEncriptar[posicion] == "o"){

						textoEncriptado.push("ober")

					} 

					else{

						if(textEncriptar[posicion] == "u"){

							textoEncriptado.push("ufat")

						} 

						else{

							textoEncriptado.push(textEncriptar[posicion])

						}
					}
				}
			}
		}
		
	}
	
	pasarArray()
	ingresaTexto.value = null;
	textoEncriptado = []

}

function pasarArray(){

	for(let i = 0; i < textoEncriptado.length; i++){
 
		desencriptaTexto.value += textoEncriptado[i];
 
   }

}

var botonCopiar = document.getElementById("copiar");

function copiarTexto(){

	ingresaTexto.value = desencriptaTexto.value;
	desencriptaTexto.value = null;
	mostrarImagen()

}

var botonDesencriptar = document.getElementById("desencriptar");

function desenencriptarOk(){

	var textDesencriptar = ingresaTexto.value;

	for (var posicion = 0;posicion < textDesencriptar.length ;posicion++){

		if (textDesencriptar[posicion]+textDesencriptar[posicion+1]=="ai"){

			textoEncriptado.push("a")
			posicion++

		}

		else{

			if (textDesencriptar[posicion]+textDesencriptar[posicion+1]+textDesencriptar[posicion+2]+textDesencriptar[posicion+3]=="imes"){

			textoEncriptado.push("i")
			posicion++
			posicion++
			posicion++

			}

			else{

				if (textDesencriptar[posicion]+textDesencriptar[posicion+1]+textDesencriptar[posicion+2]+textDesencriptar[posicion+3]=="ober"){

					textoEncriptado.push("o")
					posicion++
					posicion++
					posicion++

				}

				else{

					if (textDesencriptar[posicion]+textDesencriptar[posicion+1]+textDesencriptar[posicion+2]+textDesencriptar[posicion+3]=="ufat"){

					textoEncriptado.push("u")
					posicion++
					posicion++
					posicion++
						
					}
				
					else{

						if (textDesencriptar[posicion]+textDesencriptar[posicion+1]+textDesencriptar[posicion+2]+textDesencriptar[posicion+3]+textDesencriptar[posicion+4]=="enter"){

						textoEncriptado.push("e")
						posicion++
						posicion++
						posicion++
						posicion++

						}
							
						else{

							textoEncriptado.push(textDesencriptar[posicion])
							
						}
				
					}

				}

			}

		}

	}

	pasarArray()
	ingresaTexto.value = null;
	textoEncriptado = []
}
	
function encriptar(){

	desencriptaTexto.value = null;
	encriptarOk();
	mostrarImagen()

}

function desenencriptar(){

	desencriptaTexto.value = null;
	desenencriptarOk()
	mostrarImagen()

}

function mostrarImagen(){

	var imagen = document.getElementById("sinTexto");
	var texto = desencriptaTexto.value;

	if(texto.length > 1){

		desencriptaTexto.style.display = "inline-block"
		imagen.style.display = "none";
		botonCopiar.style.display = "inline-block"

	} 
	
	else{

		desencriptaTexto.style.display = "none"
		imagen.style.display = "inline-block";
		botonCopiar.style.display = "none"

	}

}
	botonEncriptar.onclick= encriptar;
	botonDesencriptar.onclick= desenencriptar;
	botonCopiar.onclick = copiarTexto;
