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

let opcion1Buton = document.getElementById("opcion1");
if (opcion1Buton) {
  opcion1Buton.onclick = function (element) {
    opcion1Click();
    buttonClick(element);
  };
}

function opcion1Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion1Members = document.getElementsByClassName("opcion1");
  for (let i = 0; i < opcion1Members.length; i++) {
    opcion1Members[i].classList.remove("d-none");
  }
}

let opcion2Button = document.getElementById("opcion2");
if (opcion2Button) {
  opcion2Button.onclick = function (element) {
    opcion2Click();
    buttonClick(element);
  };
}

function opcion2Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion2ClickMembers = document.getElementsByClassName("opcion2");
  for (let i = 0; i < opcion2ClickMembers.length; i++) {
    opcion2ClickMembers[i].classList.remove("d-none");
  }
}

let opcion3Button = document.getElementById("opcion3");
if (opcion3Button) {
  opcion3Button.onclick = function (element) {
    opcion3Click();
    buttonClick(element);
  };
}

function opcion3Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion3ClickMembers = document.getElementsByClassName("opcion3");
  for (let i = 0; i < opcion3ClickMembers.length; i++) {
    opcion3ClickMembers[i].classList.remove("d-none");
  }
}

let opcion4Button = document.getElementById("opcion4");
if (opcion4Button) {
  opcion4Button.onclick = function (element) {
    opcion4Click();
    buttonClick(element);
  };
}

function opcion4Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion4ClickMembers = document.getElementsByClassName("opcion4");
  for (let i = 0; i < opcion4ClickMembers.length; i++) {
    opcion4ClickMembers[i].classList.remove("d-none");
  }
}

let opcion5Button = document.getElementById("opcion5");
if (opcion5Button) {
  opcion5Button.onclick = function (element) {
    opcion5Click();
    buttonClick(element);
  };
}

function opcion5Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion5ClickMembers = document.getElementsByClassName("opcion5");
  for (let i = 0; i < opcion5ClickMembers.length; i++) {
    opcion5ClickMembers[i].classList.remove("d-none");
  }
}

let opcion6Button = document.getElementById("opcion6");
if (opcion6Button) {
  opcion6Button.onclick = function (element) {
    opcion6Click();
    buttonClick(element);
  };
}

function opcion6Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion6ClickMembers = document.getElementsByClassName("opcion6");
  for (let i = 0; i < opcion6ClickMembers.length; i++) {
    opcion6ClickMembers[i].classList.remove("d-none");
  }
}

let opcion7Button = document.getElementById("opcion7");
if (opcion7Button) {
  opcion7Button.onclick = function (element) {
    opcion7Click();
    buttonClick(element);
  };
}

function opcion7Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion7ClickMembers = document.getElementsByClassName("opcion7");
  for (let i = 0; i < opcion7ClickMembers.length; i++) {
    opcion7ClickMembers[i].classList.remove("d-none");
  }
}

let opcion8Button = document.getElementById("opcion8");
if (opcion8Button) {
  opcion8Button.onclick = function (element) {
    opcion8Click();
    buttonClick(element);
  };
}

function opcion8Click() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.add("d-none");
  }
  let opcion8ClickMembers = document.getElementsByClassName("opcion8");
  for (let i = 0; i < opcion8ClickMembers.length; i++) {
    opcion8ClickMembers[i].classList.remove("d-none");
  }
}