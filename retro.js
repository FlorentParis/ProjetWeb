let delayInMilliseconds = 2000; //1 second
let bar = document.getElementById("bar");
let cursor = 10;
let loader = document.getElementById("loader");
let test = 0;

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
  if(game == "justeprix"){
    document.getElementById("link").href="JustePrix/justePrix.html";
    document.getElementById('cassette').src="images/JustePrix.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l1.style.color= "orange";
  }else if(game == "tallyClickCounter"){
    document.getElementById("link").href="Taily click counter/TailyClickCounter.html";
    document.getElementById('cassette').src="images/TallyClickCounter.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l2.style.color= "orange";
  }else if(game == "chiffreCesar"){
    document.getElementById("link").href="CesarNumber/Cesar.html";
    document.getElementById('cassette').src="images/numberCesar.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l3.style.color= "orange";
  }else if(game == "pixelDrawer"){
    document.getElementById("link").href="PixelDrawing/PixelDrawing.html";
    document.getElementById('cassette').src="images/pixelDrawer.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l4.style.color= "orange";
  }else if(game == "janken"){
    document.getElementById("link").href="Jaken/jakenOriginal.html";
    document.getElementById('cassette').src="images/Janken.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l5.style.color= "orange";
  }else if(game == "puissance4"){
    document.getElementById("link").href="Puissance4/firstPuissance4.html";
    document.getElementById('cassette').src="images/Puissance4.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l6.style.color= "orange";
  }else if(game == "snake"){
    document.getElementById("link").href="snake/bouton.html";
    document.getElementById('cassette').src="images/Snake.svg";
    for (i = 0; i < L.length; i++) {
      L[i].style.color = "white";
    }
    l7.style.color= "orange";
  }else{
    alert("bug");
  }
}