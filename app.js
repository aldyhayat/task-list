// document.getElementById();

// console.info(document.getElementById("task-title"));
// document.getElementById("task-title").style.background = "black";
// document.getElementById("task-title").style.color = "white";

// document.getElementById("task-title").textContent = "Hello Bro";
// document.getElementById("task-title").innerHTML = "TASK TITLE";

// // document.querySelector();

// const card = document.querySelector(".card-header");
// card.innerHTML = "TEXT TEST";

// const li = document.querySelector("li");
// li.style.background = "red";
// li.innerHTML = "Tesk 1";
// const li_1 = document.querySelector("li:nth-child(2)");
// li_1.textContent = "Tesk 2";
// const li_2 = document.querySelector("li:last-child");
// li_2.style.background = "green";
// li_2.textContent = "Tesk 3";

// document.getElementsByClassName

// console.info(document.getElementsByClassName("list-group-item"));
// const list = document.getElementsByClassName("list-group-item");
// list[0].style.color = "red";

// // document.getElementsByTagName
// const list = document.getElementsByTagName("li");
// console.info(list[0]);

// convert html collection to array
// let list = document.getElementsByTagName("li");
// list = Array.from(list);
// list.forEach(function(li, index) {
//     li.style.background = "red";
// });

// for (let x of list) {
//     x.style.color = "blue";
// }

// document.querySelectorAll
// const ganjil = document.querySelectorAll("li:nth-child(odd)");
// const genap = document.querySelectorAll("li:nth-child(even)");

// ganjil.forEach(function(x) {
//     x.style.color = "red";
// });

// for (let x of genap) {
//     x.style.background = "blue";
// }

// // create element
// const buat = document.createElement("li");

// // Add Class
// buat.className = "list-group-item";

// // add inner html
// buat.innerHTML =
//     '<button class="float-right btn btn-danger btn-sm delete-item">x</button>';

// // append text node
// buat.appendChild(document.createTextNode("HI"));
// // add element list kedalam ul
// document.querySelector("ul.list-group").appendChild(buat);
// console.info(buat);

// replace element
const heading = document.createElement("h3");
//add id
heading.id = "task-title";
//add new textnode
heading.appendChild(document.createTextNode("Task turtle"));

// get old element
const oldHeading = document.getElementById("card-title");
const cardHeader = document.querySelector(".card-header");

// replace element
cardHeader.replaceChild(heading, oldHeading);
// console.info(oldHeading);
// remove element
const li = document.querySelectorAll("li");
const ul = document.querySelector('ul');
li[0].remove();
ul.removeChild(li[1])


const firsteList = document.querySelector("li:first-child");
const button = firsteList.children[0];
console.info(button);
