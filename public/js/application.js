// const navList_links = document.querySelectorAll(".navList_link");
// async function staticPage(path){

//     const response = await fetch(`${path}`);
   
//     const result = await response.json();
//     const resp = await fetch(`/template${path}.hbs`);
   

//     const hbs = await resp.text();
//     const template = Handlebars.compile(hbs);
//     console.log(template());

//     document.body.innerHTML += template();
//     ymaps.ready(init);
// }

// for (let btn of navList_links) {
//   btn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     let path = btn.getAttribute("href");

// //     switch (path){
// //     case '/contacts':
// //         staticPage(path)
// // }
// if(path==='/contacts'){
//     staticPage(path)
// }
//   });
// }
