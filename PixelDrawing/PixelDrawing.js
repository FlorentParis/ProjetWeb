/* Sources d'aide:
* https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/color ==> Détecter le changement de couleur
* https://css-tricks.com/converting-color-spaces-in-javascript/ ==> Conversion rgb en hexa
* https://developer.mozilla.org/fr/docs/Web/API/EventTarget/removeEventListener ==> enlever un eventListerner
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel ==> condition ternaire
* */

var couleurStylo = '#000000';
var couleurInput = document.getElementById("inputCouleur");
couleurInput.addEventListener("change", affecterValeurCouleur);

const pixels = document.querySelectorAll("div.pixel");
//Pour chaque case / pixel cliqué on lance la fonction affecterCouleurPixel
pixels.forEach(pixel => pixel.addEventListener("click", affecterCouleurPixel));

const pipette = document.getElementById("pipette");
pipette.addEventListener("click", fnPipette);

const effacer = document.getElementById("effacer");
effacer.addEventListener("click", toutEffacer);

//A chaque changement de couleur et qu'on quitte la fenetre de l'input, on récupere la valeur
function affecterValeurCouleur(event)
{
    event.preventDefault();
    couleurStylo = event.target.value;
}

//On colorise la case en question avec la couleur récupéré
function affecterCouleurPixel(event)
{
    event.target.style.backgroundColor = couleurStylo;
    console.log(event.target);
}

function fnPipette()
{
    //Ici on annule l'eventListerner Click du début pour lui attribuer un autre
    pixels.forEach(pixel => pixel.removeEventListener("click", affecterCouleurPixel));
    pixels.forEach(pixel => pixel.addEventListener("click", recupAffectCouleurPixel));
}

function recupAffectCouleurPixel(event)
{
    //récupére la couleur choisie avec la pipette
    var couleurPipette = event.target.style.backgroundColor;
    console.log(couleurPipette);

    //affiche la couleur choisie avec la pipette dans l'input color
    couleurInput.value = rgb2hex(event.target.style.backgroundColor);
    console.log(couleurInput.value)

    //change la couleur du stylo
    couleurStylo = couleurPipette?couleurPipette:'#FFFFFF';
    pixels.forEach(pixel => pixel.removeEventListener("click", recupAffectCouleurPixel));
    pixels.forEach(pixel => pixel.addEventListener("click", affecterCouleurPixel));
}


/* Voici le site où nous avons trouvé la fonction qui suit :https://css-tricks.com/converting-color-spaces-in-javascript/ */
function rgb2hex(rgb){

    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
    /* toString() est utilisé pour convertir un nombre en chaîne de caractères et toString(16) afin de convertir en hexadécimal. */

    if (r.length == 1) {
        r = "0" + r;
    }
    if (g.length == 1) {
        g = "0" + g;
    }
    if (b.length ==1) {
        b = "0" + b;
    }
    return "#" + r + g + b;
}

function toutEffacer()
{
    pixels.forEach(pixel => pixel.style.backgroundColor = "#FFFFFF");
}