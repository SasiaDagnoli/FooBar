"use strict";

let students;

async function getData() {
  const resultat = await fetch("https://bandoen.herokuapp.com/");
  const data = await resultat.json();

  // console.log("data", data);
  visData(data);
}

function visData(data) {
  console.log(data);
  const main = document.querySelector("main");
  const template = document.querySelector("template");
  //main.textContent = "";

  data.forEach((elm) => {
    console.log(data);
    const klon = template.cloneNode(true).content;
    klon.querySelector(".medarbejdere").textContent = elm.bartenders;

    main.appendChild(klon);
  });
}
getData();
