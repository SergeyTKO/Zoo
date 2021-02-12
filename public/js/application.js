const container = document.querySelector(".container");
const main = document.querySelector("#main");
const contacts = document.querySelector("#contacts");
const animals = document.querySelector("#animals");
const login = document.querySelector("#login");
const tariffs = document.querySelector("#tariffs");
const auth = document.querySelector("#auth");
const card = document.querySelector(".card");

function recurseFetch() {
  animals.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(`/animals`);
    const animals = await response.json();

    const resp = await fetch(`/template/animals.hbs`);
    const hbs = await resp.text();
    const template = Handlebars.compile(hbs);
    container.innerHTML = template();
    const cardAnimal = document.querySelector(".cardAnimal");
    const card = await fetch(`/template/card.hbs`);

    const hbsCard = await card.text();
    const templateCard = Handlebars.compile(hbsCard);
    for (let i = 0; i < animals.length; i++) {
      cardAnimal.innerHTML += templateCard({
        animals: [animals[i].name],
      });
    }

    const cardButton = document.querySelectorAll(".cardButton");
    for(let btn of cardButton){
      btn.addEventListener("click", async(e) => {
       
    const animalName = e.target.id;
    const animalResponse = await fetch('/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       name:animalName
      })
    })
    const animalResp = await animalResponse.json()
   const animalh1Name = document.querySelector('.animalName')
   const animalDesc = document.querySelector('.animalDesc')
   const animalFile = document.querySelector('.animalFile')
  
   animalFile.src=animalResp[0].file
   animalh1Name.innerHTML=animalResp[0].name
   animalDesc.innerHTML=animalResp[0].desc
      });
    }
  });

  login.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("/login");
    // const login = await response.json()
    const res = await fetch("/template/login.hbs");
    const hbs = await res.text();
    const template = Handlebars.compile(hbs);
    container.innerHTML = template();
  });

  tariffs.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("/tariffs");

    const res = await fetch("/template/tariffs.hbs");
    const hbs = await res.text();
    const template = Handlebars.compile(hbs);
    container.innerHTML = template();

  });

  main.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("/");
 
    const res = await fetch("/template/main.hbs");
    const hbs = await res.text();
    const template = Handlebars.compile(hbs);
    container.innerHTML = template();

  });

  auth.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("/auth");

    const res = await fetch("/template/auth.hbs");
    const hbs = await res.text();
    const template = Handlebars.compile(hbs);
    container.innerHTML = template();
    recurseFetch();
  });

  contacts.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await fetch(`/contacts`);
    // const result = await response.json();
    const resp = await fetch(`/template/contacts.hbs`);
    const hbs = await resp.text();
    const template = Handlebars.compile(hbs); // компилирует шаблон
    container.innerHTML = template();
    function init() {
    
      ymaps.geocode('Геленджик').then(function (res) {
        myMap = new ymaps.Map('map', {
            center: res.geoObjects.get(0).geometry.getCoordinates(),
            zoom : 10
        });
    });
  }
    ymaps.ready(init);
  
  });
}

recurseFetch();

