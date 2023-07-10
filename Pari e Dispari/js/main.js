pcGenerator();

function pcGenerator() {
  let pcNumber = 0;
  pcNumber = Math.floor(Math.random() * 10);
  console.log(pcNumber);
  return pcNumber;
}

const userNumber = document.getElementById("userNumber");

sum = userNumber + pcGenerator;
console.log("la somma da valutare è" + sum);

function oddOrEven(sum) {
  if (sum % 2 === 0) {
    console.log("Ha vinto pari!");
  } else console.log("Ha vinto dispari!");
}
