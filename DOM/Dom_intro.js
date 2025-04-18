console.log(document.body); 
let h1 =document.getElementById('hea');
console.dir(h1);
console.dir(document.getElementsByClassName("top"));

let par = document.getElementsByTagName('p');
console.dir(par);

let que = document.querySelector('h1');
console.dir(que);

let all= document.querySelectorAll('h1');
console.dir(all);

document.querySelector('#hea');

//InnerText
//document.getElementById('hea').innerText = 'Dynamic Changes'
// innerHTMl
//document.getElementById('hea').innerHTML = '<i>Dynamic Changes</i>'

// textContent
//document.querySelector('h2').textContent

// add new content
let h3 = document.querySelector('h3');
h3.innerText = h3.innerText + "using Dom Concepts";

 //all[0].innerText = 'we learn many properties';

 //getAttribute
h1.getAttribute('id');

// setattribute
h1.setAttribute('id', 'heading1');

//style
h3.style.color = 'green';

//create new element
let btn = document.createElement('button');
btn.innerText = 'New Button';
console.log(btn);
// to show in screen
let div = document.querySelector('div');
div.append(btn); /// ad in end

div.prepend(btn); /// add in start

div.before(btn); // add before the div node

div.after(btn); // add after div




