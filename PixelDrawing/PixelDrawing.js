var penColor = 'black';

connectEventListener();

function setPixelColor(event)
{
    event.target.style.backgroundColor = penColor;
    console.log(event.target);
}

function reset()
{
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}
/*La méthode addEventListener permet à un élément de réagir d'une certaine maniere (fonction callback) en fonction de l'action de l'utilisateur (type)
exemple : On veut que le background change de couleur lorsqu'on clique sur le bouton
    <input type="button" id="exemple">
    <script>
        var ex = document.getElementById("exemple");
        ex.addEventListener("click", fonctionChangeBG); --> il faudra ensuite creer la fonction qui va changer le background pour qu'il soit fonctionnel
    </script>
*/

function connectEventListener ()
{
    //Récupération de la valeur de l'input couleur a chaque changement de couleur
    //https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/color ==> Détecter le changement de couleur

    const couleur = document.getElementById("valeurCouleur");
    couleur.addEventListener("change", setColorValue);

    const elements = document.querySelectorAll("div.pixel");
    console.log(elements);
    // foreach syntaxe : arr.forEach(callback)
    elements.forEach(element => element.addEventListener("click", setPixelColor));
    /*Ici le callbackfn : element => element.addEventListener("click", setPixelColor) est une fonction return...Ca revient à faire :
        elements.forEach(changeColorOnClick, element);
        function changeColorOnClick(element){
            return element.addEventListener("click", setPixelColor);
        }
    */
    
    const pipette = document.getElementById("pipette");
    pipette.addEventListener("click", fnPipette);
}

function setColorValue(event)
{
    event.preventDefault();
    penColor = event.target.value;
}

function fnPipette()
{
    const tableau = document.querySelectorAll("div.pixel");
    tableau.forEach(pixel => pixel.removeEventListener("click", setPixelColor));
    tableau.forEach(pixel => pixel.addEventListener("click", getPixelColor));
}

function getPixelColor(event)
{ 
    var colorPipette = event.target.style.backgroundColor;
    console.log(colorPipette);

    var couleur = document.getElementById("valeurCouleur");
    couleur.value = rgb2hex(event.target.style.backgroundColor);
    console.log(couleur.value)

    penColor = event.target.style.backgroundColor;
    event.target.style.backgroundColor?event.target.style.backgroundColor:'white';
    const tableau = document.querySelectorAll("div.pixel");
    tableau.forEach(pixel => pixel.removeEventListener("click", getPixelColor));
    tableau.forEach(pixel => pixel.addEventListener("click", setPixelColor));
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