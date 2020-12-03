/************************************************************************************************************************************************************
 * Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
 * Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
 * Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*************************************************************************************************************************************************************/

/**
 * Mostra a schermo le proprietà di un oggetto.
 * 
 * @param {object} generalObject Oggetto di cui mostrare le proprietà.
 */
function showProperties(generalObject){
    for(var key in generalObject){
        console.log(key + " : " + generalObject[key]);
    }
}

var studente = {
    nome : "Salvatore",
    cognome : "Abate",
    eta : 35
};

showProperties(studente);