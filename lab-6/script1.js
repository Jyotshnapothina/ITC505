document.getElementById('generateBtn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('output').textContent = "Random Number: " + randomNumber;
  });

  document.getElementById('primeBtn').addEventListener('click', function() {
    var outputText = document.getElementById('output').textContent;
    if (outputText === "") {
      alert("Please generate a random number first.");
      return;
    }
    var randomNumber = parseInt(outputText.split(' ')[2]);
    if (checkPrime(randomNumber)) {
      alert("Correct! It's a prime number.");
      incrementScore();
    } else {
      alert("Incorrect! It's not a prime number.");
      showScore();
    }
    resetInterface();
  });

  document.getElementById('notPrimeBtn').addEventListener('click', function() {
    var outputText = document.getElementById('output').textContent;
    if (outputText === "") {
      alert("Please generate a random number first.");
      return;
    }
    var randomNumber = parseInt(outputText.split(' ')[2]);
    if (!checkPrime(randomNumber)) {
      alert("Correct! It's not a prime number.");
      incrementScore();
    } else {
      alert("Incorrect! It's a prime number.");
      showScore();
    }
    resetInterface();
  });

  function checkPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function resetInterface() {
    document.getElementById('output').textContent = "";
  }

  function incrementScore() {
    var score = parseInt(document.getElementById('score').textContent);
    score++;
    document.getElementById('score').textContent = score;
  }

  function showScore() {
    var score = parseInt(document.getElementById('score').textContent);
    alert("Your score: " + score + "\nTry again...!");
    document.getElementById('score').textContent = "0";
  }