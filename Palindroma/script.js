// L'utente può scrivere la parola sul prompt
const word = prompt("Inserisci parola da verificare");

// Richiamo la funzione che mi dice se la parola è palindroma
palindrome(word);

// funzione palindroma
function palindrome(word) {
  //creo una funzione di nome palindrome che come input ha la variabile word
  let letters = word.split(""); //creo una variabile che contiene la parola di input splittata a caratteri
  console.log(letters); //stampo i caratteri splittati della parola
  letters = letters.reverse(); //sovrascrivo la variabile splittata con la stessa ma letta al contrario
  console.log(letters); //stampo i caratteri splittati della parola al contrario
  let reverseWord = letters.join(""); //creo una variabile che mi converta i caratteri in una parola
  console.log(reverseWord); //stampo la parola al contrario

  if (word === reverseWord) {
    //la parola al contrario è uguale alla parola di partenza?
    console.log("la parola è palindroma");
  } else {
    console.log("la parola non è palindroma");
  }

  return word;
}
