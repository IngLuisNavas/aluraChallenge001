var text = document.querySelector(".encrypt");
var input = document.querySelector(".form-control");
var copyText = document.querySelector(".form-control");

function mensaje() {

    if (text.textContent == 'Encriptar') {
        text.textContent = "Desencriptar";
        input.value = encriptar(input.value);


    } else {
        if (text.textContent == "Desencriptar") {
            text.textContent = "Encriptar";
            input.value = desencriptar(input.value);
        }
    }

}

function copy() {

    copyText.select();
    document.execCommand("copy");
    document.querySelector(".copy").addEventListener("click", copy);
    alert(copyText.value + " ha sido copiado exitosamente")
}

function filtrado(palabra) {
    let out = '';
    //Se añaden las letras validas
    let filtro = 'abcdefghijklmnopqrstuvwxyz'; //Caracteres validos

    for (let i = 0; i < palabra.length; i++)
        if (filtro.indexOf(palabra.charAt(i)) != -1) {
            out += palabra.charAt(i);
        }
    return out;
}

function desencriptar(texto) {
    var resultText = "";
    var min = texto.toLowerCase();
    var arrayTextUser = min.split('');
    for (let index = 0; index < arrayTextUser.length; index++) {
        if (arrayTextUser[index] == 'a') {
            arrayTextUser.splice(index + 1, 1);
        } else {
            if (arrayTextUser[index] == 'e') {
                arrayTextUser.splice(index + 1, 4);
            } else {
                if (arrayTextUser[index] == 'i') {
                    arrayTextUser.splice(index + 1, 3);
                } else {
                    if (arrayTextUser[index] == 'o') {
                        arrayTextUser.splice(index + 1, 3);
                    } else {
                        if (arrayTextUser[index] == 'u') {
                            arrayTextUser.splice(index + 1, 3);
                        }
                    }
                }
            }
        }
    }

    resultText = arrayTextUser.join('');
    return resultText;
}


function encriptar(texto2) {
    let resultText2 = "";
    let min = texto2.toLowerCase();
    let arrayTextUser = min.split('');
    for (let index = 0; index < arrayTextUser.length; index++) {
        if (arrayTextUser[index] == 'a') {
            arrayTextUser[index] = "ai";
        } else {
            if (arrayTextUser[index] == 'e') {
                arrayTextUser[index] = "enter";
            } else {
                if (arrayTextUser[index] == 'i') {
                    arrayTextUser[index] = "imes";
                } else {
                    if (arrayTextUser[index] == 'o') {
                        arrayTextUser[index] = "ober";
                    } else {
                        if (arrayTextUser[index] == 'u') {
                            arrayTextUser[index] = "ufat";
                        }
                    }
                }
            }
        }
        resultText2 = resultText2 + arrayTextUser[index].toString();
    }

    return resultText2;

}