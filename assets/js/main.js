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

/**
 * Per ogni oggetto studente nell'array, mostra a schermo le proprietà nome e cognome.
 * 
 * @param {array} studentObjects Array di oggetti studente.
 */
function showNameSurname(studentObjects){
    for(var i=0; i< studentObjects.length; i++){
        console.log(studentObjects[i].nome, studentObjects[i].cognome);
    }
}

var studente = {
    nome : "Aldo",
    cognome : "Garofalo",
    eta : 21
};

var listaStudenti = [
    {
        nome : 'Aldo',
        cognome : 'Garofalo',
        eta : 21
    },
    {
        nome : 'Giovanni',
        cognome : 'Spoletini',
        eta : 31
    },
    {
        nome : 'Giacomo',
        cognome : 'Poretti',
        eta : 40
    }
];

console.log("Primo punto dell'esercizio: mostrare le proprietà di un oggetto studente");
showProperties(studente);
console.log("Secondo punto dell'esercizio: mostrare nomi e cognomi nell'array di studenti");
showNameSurname(listaStudenti);