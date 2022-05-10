var nome =prompt('nome utente');
var cognome =prompt('cognome utente');

var idUtente = nome + ' ' + cognome;

alert(idUtente)


document.getElementById('nome').innerHTML=(nome);
document.getElementById('cognome').innerHTML=(cognome);


let ps =prompt('inserisci password');
let psconfirm =prompt('conferma password');

if(ps==psconfirm) {
    alert('le password coincidono')

} else {
    alert('le pasassword non coincidono')
    ps =prompt('inserisci password')
    psconfirm =prompt('conferma password')
}


const pgreco =3.14;
const due =2

console.log(pgreco * due );
console.log(pgreco / due );
console.log(pgreco - due );


let pari= 8;
let numerodacambiare = 7;

if(pari %2==0) {
 console.log(pari + numerodacambiare)

}else{
   console.log( 'il valore e dispari')
}

let maggiore=(pari>numerodacambiare)
if(maggiore) {
    alert(maggiore)
}else{
    console.log(maggiore)
}

//Differernze let e var

/* let esempio = 1
let esempio = 'esempio' */

//let non permette la creazione di 2 variabili col nome uguasli infatti da errore mentro var nopdfn da errore

/* var esempio =1
var esempio =7 */

//const e una costante e non assumeree altri valori trannre quello impostato all inizio

/* const valore= 3
let valore2 = 4

valore= valore * valore2 */

