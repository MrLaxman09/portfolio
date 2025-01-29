let setbgcolor = document.querySelector('#setbgcolor');
let body = document.querySelector('body');
let setImg = document.querySelector('#setimg');
let btn = document.querySelector('.btn');

console.log(setbgcolor.value)

btn.onclick = () =>{
    alert('Download CV Started')
}

setImg.ondblclick = () =>{
    setImg.style.transform= "rotate(0deg)"
}

