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
    var colorPipette = event.target.backgroundColor;
    console.log(colorPipette);
    penColor = event.target.style.backgroundColor;
    event.target.style.backgroundColor?event.target.style.backgroundColor:'white';
    const tableau = document.querySelectorAll("div.pixel");
    tableau.forEach(pixel => pixel.removeEventListener("click", getPixelColor));
    tableau.forEach(pixel => pixel.addEventListener("click", setPixelColor));
}