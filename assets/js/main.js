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

/**
 * Richiede un numero intero tramite prompt e lo restituisce solo quando il valore inserito è effettivamente un numero.
 * Il messaggio da mostrare nel prompt è richiesto come parametro.
 * 
 * @param {string} message Stringa di testo da inserire nel prompt
 * @return {number} Numero inserito dall'utente.
 */
function getPromptedInteger(message){
    do{
        var invalidInput = false;
        var number = parseInt(prompt(message));
        if(number === null || isNaN(number)){
            alert("Attenzione! Puoi inserire solo un valore numerico");
            invalidInput = true;
        }
    }while(invalidInput);
    
    return number;
}

/**
 * Crea un oggetto studente con i dati inseriti dall'utente. Il nuovo oggetto studente viene aggiunto alla fine dell'array di oggetti studente. 
 * 
 * @param {array} studentList Array di oggetti studente al quale aggiungere un nuovo oggetto studente.
 */
function getPromptedStudent(studentList) {
    var newStudent = {};
    newStudent.nome = prompt("Inserisci il nome del nuovo studente");
    newStudent.cognome = prompt("Inserisci il cognome del nuovo studente");
    newStudent.eta = getPromptedInteger("Inserisci l'età del nuovo studente");
    studentList.push(newStudent);
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
console.log("Terzo punto dell'esercizio: chiedo all'utente di inserire un nuovo studente con 3 prompt");
getPromptedStudent(listaStudenti);
console.log("Stampo la lista aggiornata degli studenti");
for(var i=0; i < listaStudenti.length; i++){
    console.log(`---------- Studente numero ${i+1} ----------`);
    showProperties(listaStudenti[i]);
}