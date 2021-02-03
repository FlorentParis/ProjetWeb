var penColour = 'black';

connectEventListener();

function setPixelColour(event)
{
    event.target.style.backgroundColor = penColour;
    console.log(event.target);
}

/*La méthode addEventListener permet à un élément de réagir d'une certaine maniere (fonction callback) en fonction de l'action de l'utilisateur (type)
exemple : On veut que le background change de couleur lorsqu'on clique sur le bouton
    <input type="button" id="exemple">
    <script>
        var ex = document.getElementById("exemple");
        ex.addEventListener("click", fonctionChangeBG); --> il faudra ensuite creer la fonction qui va changer le background pour qu'il soit fonctionnel
    </script>
*/
function connectEventListener () {
    //Récupération de la valeur de l'input couleur a chaque changement de couleur
    //https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/color ==> Détecter le changement de couleur
    const couleur = document.getElementById("valeurCouleur");
    couleur.addEventListener("change", setColorValue);

    const elements = document.querySelectorAll("div.pixel");
    console.log(elements);
    // foreach syntaxe : arr.forEach(callback)
    elements.forEach(element => element.addEventListener("click", setPixelColour));
    /*Ici le callbackfn : element => element.addEventListener("click", setPixelColour) est une fonction return...Ca revient à faire :
     elements.forEach(changeColorOnClick, element);
     function changeColorOnClick(element){
        return element.addEventListener("click", setPixerColour);
     }
    */
}

function setColorValue(event) {
    event.preventDefault();
    penColour = event.target.value;
}