/*Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)*/



//  cerco nella pagina html l'elemento con l'id= "accensione"
const button = document.getElementById("accensione");

// Prendo l'elemento che voglio cambiare in questo caso l'img

const lampadina = document.getElementById("lampadina");

// registro cosa succede quando l'utente clicca il bottone 
 
button.addEventListener("click", () => {

    // dentro la funzione di click imposto lampadina.src = img/yellow_lamp.png cosi il browser carica questa immagine e la mostra 
    // al posto di quella precedente.
     
    lampadina.src = "img/yellow_lamp.png";
});