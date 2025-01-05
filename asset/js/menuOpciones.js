function buttonClick(element) {
  let menuItems = document.getElementsByClassName("aside-link splide__slide");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("_current");
  }
  element.target.parentElement.parentElement.classList.add("_current");
}

let allButton = document.getElementById("all");
if (allButton) {
  allButton.onclick = function (element) {
    allClick();
    buttonClick(element);
  };
}

function allClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.remove("d-none");
  }
}

let seniorsButon = document.getElementById("seniors");
if (seniorsButon) {
  seniorsButon.onclick = function (element) {
    seniorsClick();
    buttonClick(element);
  };
}

function seniorsClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let seniorsMembers = document.getElementsByClassName("senior");
  for (let i = 0; i < seniorsMembers.length; i++) {
    seniorsMembers[i].classList.remove("d-none");
  }
}

let leadersButton = document.getElementById("leaders");
if (leadersButton) {
  leadersButton.onclick = function (element) {
    leadersClick();
    buttonClick(element);
  };
}

function leadersClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let leadersClickMembers = document.getElementsByClassName("leader");
  for (let i = 0; i < leadersClickMembers.length; i++) {
    leadersClickMembers[i].classList.remove("d-none");
  }
}

let associatesButton = document.getElementById("associates");
if (associatesButton) {
  associatesButton.onclick = function (element) {
    associatesClick();
    buttonClick(element);
  };
}

function associatesClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let associatesClickMembers = document.getElementsByClassName("associate");
  for (let i = 0; i < associatesClickMembers.length; i++) {
    associatesClickMembers[i].classList.remove("d-none");
  }
}

let consultantsButton = document.getElementById("consultants");
if (consultantsButton) {
  consultantsButton.onclick = function (element) {
    consultantsClick();
    buttonClick(element);
  };
}

function consultantsClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let consultantsClickMembers = document.getElementsByClassName("consultant");
  for (let i = 0; i < consultantsClickMembers.length; i++) {
    consultantsClickMembers[i].classList.remove("d-none");
  }
}

let internsButton = document.getElementById("interns");
if (internsButton) {
  internsButton.onclick = function (element) {
    internsClick();
    buttonClick(element);
  };
}

function internsClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let internsClickMembers = document.getElementsByClassName("intern");
  for (let i = 0; i < internsClickMembers.length; i++) {
    internsClickMembers[i].classList.remove("d-none");
  }
}

let analisisButton = document.getElementById("analisis");
if (analisisButton) {
  analisisButton.onclick = function (element) {
    analisisClick();
    buttonClick(element);
  };
}

function analisisClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let analisisClickMembers = document.getElementsByClassName("analisis");
  for (let i = 0; i < analisisClickMembers.length; i++) {
    analisisClickMembers[i].classList.remove("d-none");
  }
}

let consultoriaButton = document.getElementById("cosultoria");
if (consultoriaButton) {
  consultoriaButton.onclick = function (element) {
    cosultoriaClick();
    buttonClick(element);
  };
}

function cosultoriaClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let cosultoriaClickMembers = document.getElementsByClassName("consultar");
  for (let i = 0; i < cosultoriaClickMembers.length; i++) {
    cosultoriaClickMembers[i].classList.remove("d-none");
  }
}

let marketingButton = document.getElementById("marketing");
if (marketingButton) {
  marketingButton.onclick = function (element) {
    marketingClick();
    buttonClick(element);
  };
}

function marketingClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let marketingClickMembers = document.getElementsByClassName("marketing");
  for (let i = 0; i < marketingClickMembers.length; i++) {
    marketingClickMembers[i].classList.remove("d-none");
  }
}

let masificasionButton = document.getElementById("masificasion");
if (masificasionButton) {
  masificasionButton.onclick = function (element) {
    masificasionClick();
    buttonClick(element);
  };
}

function masificasionClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let masificasionClickMembers = document.getElementsByClassName("masificasion");
  for (let i = 0; i < masificasionClickMembers.length; i++) {
    masificasionClickMembers[i].classList.remove("d-none");
  }
}

let softwareButton = document.getElementById("software");
if (softwareButton) {
  softwareButton.onclick = function (element) {
    softwareClick();
    buttonClick(element);
  };
}

function softwareClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let softwareClickMembers = document.getElementsByClassName("software");
  for (let i = 0; i < softwareClickMembers.length; i++) {
    softwareClickMembers[i].classList.remove("d-none");
  }
}

let restaurantesButton = document.getElementById("restaurantes");
if (restaurantesButton) {
  restaurantesButton.onclick = function (element) {
    restaurantesClick();
    buttonClick(element);
  };
}

function restaurantesClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let restaurantesClickMembers = document.getElementsByClassName("restaurante");
  for (let i = 0; i < restaurantesClickMembers.length; i++) {
    restaurantesClickMembers[i].classList.remove("d-none");
  }
}

let raicesButton = document.getElementById("raices");
if (raicesButton) {
  raicesButton.onclick = function (element) {
    raicesClick();
    buttonClick(element);
  };
}

function raicesClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let raicesClickMembers = document.getElementsByClassName("rais");
  for (let i = 0; i < raicesClickMembers.length; i++) {
    raicesClickMembers[i].classList.remove("d-none");
  }
}