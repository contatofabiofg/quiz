let acertos = 0;
document.querySelector("#one").style.display = "block";
var interval;

function restart() {
  acertos = 0;
  document.querySelector(".result").style.display = "none";
  document.querySelector("#one").style.display = "block";
}

function reset() {

  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".correct")[i].classList.remove("correctstyle");
    document.querySelectorAll(".correct")[i].disabled = false;
  }
  for (let i = 0; i < 10; i++) {
    document.querySelectorAll(".wrong")[i].classList.remove("wrongstyle");
    document.querySelectorAll(".wrong")[i].disabled = false;
  }
  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".answer")[i].innerHTML = "";
  }

  clearInterval(interval);

}


function nextquestion() {
  clearInterval()
  if (document.querySelector("#one").style.display == "block") {
    document.querySelector("#one").style.display = "none";
    document.querySelector("#two").style.display = "block";
    reset();
  } else if (document.querySelector("#two").style.display == "block") {
    document.querySelector("#two").style.display = "none";
    document.querySelector("#three").style.display = "block";
    reset();
  } else if (document.querySelector("#three").style.display == "block") {
    document.querySelector("#three").style.display = "none";
    document.querySelector("#four").style.display = "block";
    reset();
  } else if (document.querySelector("#four").style.display == "block") {
    document.querySelector("#four").style.display = "none";
    document.querySelector("#five").style.display = "block";
    reset();
  }
  else if (document.querySelector("#five").style.display == "block") {
    document.querySelector("#five").style.display = "none";
    document.querySelector(".result").style.display = "block";
    document.querySelector(".textresult").innerHTML = "Quantidade total de acertos: " + acertos;
    reset();
  }

}

function correct() {


  for (let i = 0; i < 10; i++) {
    document.querySelectorAll(".wrong")[i].classList.add("wrongstyle");
    document.querySelectorAll(".wrong")[i].disabled = true;
  }

  acertos++;

  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".correct")[i].classList.add("correctstyle");
    document.querySelectorAll(".correct")[i].disabled = true;
  }

  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".answer")[i].innerHTML = "Acertou!";
  }

  interval = setInterval(nextquestion, 2000);

}

function wrong() {

  for (let i = 0; i < 10; i++) {
    document.querySelectorAll(".wrong")[i].classList.add("wrongstyle");
    document.querySelectorAll(".wrong")[i].disabled = true;
  }


  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".correct")[i].classList.add("correctstyle")
    document.querySelectorAll(".correct")[i].disabled = true;
  }

  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".answer")[i].innerHTML = "Errou... ";
  }

  interval = setInterval(nextquestion, 2000);

}

