document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});
const steder = [
    {
      "sted":"Etta",
      "titel":"📍 Etta",
      "tekst":"Her kan man få den lækreste slushice Matcha og gode vibes",
      "billede":"matcha"
    },
    {
      "sted":"Leanowski",
      "titel":"📍 Bip Bip Bar",
      "tekst":"Et hyggeligt sted at mødes med venner, med arkadespil og god stemning",
      "billede":"bip"
    },
    {
      "sted":"Plugin_Saunagus",
      "titel":"📍 Plugin Heat Club",
      "tekst":"Det perfekte sted til at afkoble og blive genopfrisket med saunagus og isbadning",
      "billede":"sauna"
    }
    
    ];

async function runProgram() {
  let selected;
  let selectedId;
  let fillColor;
  let active;
  const popover = document.querySelector("#kunstnerinfo");
    // 1. Load svg map
    //------------------------------------------------------------------------------------	
let rawSvg = await fetch("stedercph.svg");
let svg = await rawSvg.text();
document.querySelector("#map").innerHTML = svg;

    // 2. Skift farve ved klik, og vis tekst
    //-----------------------------------------------------------------------
document.querySelector("#map #steder").addEventListener("click", (evt) => clicked(evt));
console.log("Klikket element:", selected);
console.log("Klikket ID:", selectedId);
    //function clicked
    //--------------------------------------------------------------------
function clicked(evt) {

  
    // a. find det klikkede element
    //----------------------------------------------
    selected = evt.target;
 
    // b. find det klikkede elementets ID
    //---------------------------------------------
selectedId = selected.id;

    // c. find  det klikkede elements fillfarve
fillColor = selected.getAttribute("fill");

 
    // d. vis info
    //--------------------------------------------
steder.forEach(sted => {
    if (sted.sted === selectedId) {
        document.querySelector("#kunstnertekst").textContent = sted.tekst;
        document.querySelector("#stedbillede").src ="billeder/" + sted.billede + ".jpg";
        document.querySelector("#titel").textContent = sted.titel;
    }
});


    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------
if(active){
    active.setAttribute("fill", fillColor)
}
    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------
active = selected;

    //skift farve på det valgte
    //-------------------------------------------------------------------------
if (fillColor == "#b62300"){
    document.querySelector("#" + selectedId).setAttribute("fill", "#123456");
}

    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
else {
    document.querySelector("#" + selectedId).setAttribute("fill", "#b62300");

}
popover.togglePopover();
}
document.addEventListener("click", () => {
    if (!popover.matches(":popover-open")) {
        selected.setAttribute("fill", "#b62300");
    }
});

};
