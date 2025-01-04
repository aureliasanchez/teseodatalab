function buttonClick(element) {
  let menuItems = document.getElementsByClassName("aside-link splide__slide");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("_current");
  }
  element.target.parentElement.parentElement.classList.add("_current");
}

document.getElementById("all").onclick = function (element) {
  allClick();
  buttonClick(element);
};

function allClick() {
  let members = document.getElementsByClassName("archive-article");
  for (let i = 0; i < members.length; i++) {
    members[i].classList.remove("d-none");
  }
}

document.getElementById("seniors").onclick = function (element) {
  seniorsClick();
  buttonClick(element);
};

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

document.getElementById("leaders").onclick = function (element) {
  leadersClick();
  buttonClick(element);
};

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

document.getElementById("associates").onclick = function (element) {
  associatesClick();
  buttonClick(element);
};

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

document.getElementById("consultants").onclick = function (element) {
  consultantsClick();
  buttonClick(element);
};

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

document.getElementById("interns").onclick = function (element) {
  internsClick();
  buttonClick(element);
};

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
