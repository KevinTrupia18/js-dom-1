/*Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)*/



//  cerco nella pagina html e prendo  l'elemento con l'id= "accensione" lo trova e lo assegna alla costante button 
const button = document.getElementById("accensione");

// cerco e  Prendo l'elemento  in questo caso l'img con id=lampadina  e faccio la stessa cosa della riga precedente 

const lampadina = document.getElementById("lampadina");

// registro cosa succede quando l'utente clicca il bottone. quando l'elemento button riceve un click, esegui la funzione 
// addEventListener registra per il click del bottone
 
button.addEventListener("click", () => {

    // dentro la funzione di click imposto lampadina.src = img/yellow_lamp.png cosi il browser carica questa immagine e la mostra 
    // al posto di quella precedente.
     
    lampadina.src = "img/yellow_lamp.png";
});