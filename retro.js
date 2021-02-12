// Source d'aide :
// https://developer.mozilla.org/fr/docs/Web/API/Element/classList ==> Changement de style

let delayInMilliseconds = 2000; //1 second
let bar = document.getElementById("bar");
let cursor = 10;
let loader = document.getElementById("loader");
let test = 0;
const btnsound = document.getElementById("btnsound");

/* Init l1,l2,...l7 puis Init Liste */
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");
let l6 = document.getElementById("l6");
let l7 = document.getElementById("l7");

let L = document.querySelectorAll("a");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(){
  document.getElementById("bg_music").pause();
  while(test<11){
    var time = Math.floor(Math.random(2) * Math.floor(5));
    cursor = 10*test;
    console.log(cursor); 
    sleep(100);
    bar.innerHTML = cursor + "%";
    test++;
    await sleep(100 * time);
  }
  await sleep(1000);
  loader.style.display = "none";
}

demo();

function ajout(game) {
  //Supprime le style du lien deja actif...
  L.forEach(lien => lien.classList.remove("orange"));
  if(game == "justeprix"){
    document.getElementById("link").href="JustePrix/justePrix.html";
    document.getElementById('cassette').src="images/JustePrix.svg";
    l1.classList.add("orange");
  }else if(game == "tallyClickCounter"){
    document.getElementById("link").href="Taily click counter/TailyClickCounter.html";
    document.getElementById('cassette').src="images/TallyClickCounter.svg";
    l2.classList.add("orange");
  }else if(game == "chiffreCesar"){
    document.getElementById("link").href="CesarNumber/Cesar.html";
    document.getElementById('cassette').src="images/numberCesar.svg";
    l3.classList.add("orange");
  }else if(game == "pixelDrawer"){
    document.getElementById("link").href="PixelDrawing/PixelDrawing.html";
    document.getElementById('cassette').src="images/pixelDrawer.svg";
    l4.classList.add("orange");
  }else if(game == "janken"){
    document.getElementById("link").href="Jaken/jakenOriginal.html";
    document.getElementById('cassette').src="images/Janken.svg";
    l5.classList.add("orange");
  }else if(game == "puissance4"){
    document.getElementById("link").href="Puissance4/firstPuissance4.html";
    document.getElementById('cassette').src="images/Puissance4.svg";
    l6.classList.add("orange");
  }else if(game == "snake"){
    document.getElementById("link").href="snake/snake2/index.html";
    document.getElementById('cassette').src="images/Snake.svg";
    l7.classList.add("orange");
  }else{
    alert("bug");
  }
}

let etat = false;

function ajoutSound() {
  if(etat){
    etat = false;
    document.getElementById("imgsound").src = "images/no-sound.svg";
    document.getElementById("bg_music").pause();
  }else{
    etat = true;
    document.getElementById("imgsound").src = "images/sound.svg";
    document.getElementById("bg_music").play();
  }
}