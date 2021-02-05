let textnew = "";
let newPosition = 0;
let newletter = "";
let letter = "";

function criptage(){
    let text = document.getElementById("message").value;
    let nb = document.getElementById("nombre").value;
    let result = document.getElementById("result");
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    textnew = "";
    
    textancien = text.toUpperCase();

    if(nb == 0 || nb == null){
        result.innerHTML = text;
    }else{
        for(let i=0; i < textancien.length; i++){
            nb = parseInt(nb); /* Conversion str en int */
            letter = textancien.charAt(i); /* Défile les lettre de textancien un par un */
            if(letter == " "){
                textnew += " ";
            }else{
                newPosition = nb + alpha.indexOf(letter); /* Ajoute a cette index la quantité de décalage */
                newletter = alpha.charAt(newPosition); /* Nouvelle lettre relevé dans alpha grace a l'index */
                textnew += newletter; /* Ajout de chaque lettre chiffré dans une var */
            }
        }
    result.innerHTML = textnew;
    }
}