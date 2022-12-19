let wstawLi = document.getElementById('items');

const submitForm = (event) =>{
let tab = document.getElementsByTagName('li');
let i = tab.length+1;
let wstaw = document.createElement('li');
wstaw.innerText = ('Item '+ i);
wstawLi.appendChild(wstaw);
let last = wstawLi.lastElementChild;
last.classList.add('item');
}


let btn = (onclick = submitForm);
