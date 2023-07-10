let userNumber = 0;

document.getElementById("ok-Button").addEventListener("click", function () {
  userNumber = document.getElementById("userNumber").value;
  console.log(userNumber);
});

document.getElementById("launch-button").addEventListener("click", function () {
  console.log(userNumber);
  function pcGenerator() {
    let pcNumber = 0;
    pcNumber = Math.floor(Math.random() * 6);
    console.log(pcNumber);
    return pcNumber;
  }

  const sum = parseInt(pcGenerator()) + parseInt(userNumber);
  console.log("La somma è" + " " + sum);

  function showImage() {
    let coin = document.getElementById("coin");
    coin.style.visibility = "visible";
  }

  setTimeout(() => {
    coin.style.visibility = "hidden";
  }, 2000);

  showImage();

  function oddOrEven() {
    if (sum % 2 === 0) {
      console.log("Ha vinto pari!");
    } else console.log("Ha vinto dispari!");
  }

  oddOrEven();
});
