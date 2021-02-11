const container = document.querySelector('.container')
function recurseFetch (){
  const main = document.querySelector('#main')
const contacts = document.querySelector('#contacts')
const animals = document.querySelector('#animals')

contacts.addEventListener("click", async (e) =>  {
  e.preventDefault();
  console.log(e.target);
  const response = await fetch(`/contacts`);

  const result = await response.json();
  const resp = await fetch(`/template/contacts.hbs`);

  const hbs = await resp.text();
  const template = Handlebars.compile(hbs); // компилирует шаблон 
  console.log(template());

  container.innerHTML = template();
  ymaps.ready(init);
  recurseFetch()
})

animals.addEventListener("click", async(e) =>  {
 e.preventDefault();
 console.log(e.target);
  const response = await fetch(`/animals`);
  const animal = await response.json();
  const resp = await fetch(`/template/animals.hbs`);
  const hbs = await resp.text();
  const template = Handlebars.compile(hbs);
  container.innerHTML = template(animal);
  recurseFetch()
})
}

recurseFetch()

