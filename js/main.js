/*setting fakePSW
*Richiesta dati all'utente
*/


const user_name = prompt('dimmi il tuo nome');
const user_lastname = prompt('dimmi il tuo cognome');
const fav_color = prompt('dimmi il tuo colore preferito');

const number = 21;

//stampo a schermo i dati passati dall'utente
document.getElementById('title').innerHTML= `${user_name}${user_lastname}${fav_color}${number}`;