let userNumber = 0;

document.getElementById("ok-Button").addEventListener("click", function () {
  userNumber = document.getElementById("userNumber").value;
  console.log(userNumber);
});

document.getElementById("launch-button").addEventListener("click", function () {
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
  }, 1200);

  showImage();

  function radioChoise() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    if (document.getElementById("flexRadioDefault1").checked && sum % 2 === 0) {
      console.log("Hai vinto!");
    } else if (
      document.getElementById("flexRadioDefault2").checked &&
      sum % 2 !== 0
    ) {
      console.log("Hai vinto!");
    } else {
      console.log("Hai perso!");
    }
  }

  radioChoise();
});
