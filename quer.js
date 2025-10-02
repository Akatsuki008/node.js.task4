const document = require('document');
const para=document.querySelector('p');
/*
console.log(para);
const paras= document.querySelectorAll('p');
paras.forEach(para=>{
    console.log(para);
})
console.log(paras[2]);
console.log(paras);
*/
// get an element Id

const title=document.getElementById('page-title');

console.log(title);

// get element by their class name

const errors=document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get element by thier tag name:
/*
const paras=document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
const para=document.querySelector('p');
//console.log(para.innerText);
para.innerText+='ninjas are awesome!';
*/

/*const paras=document.querySelectorAll('p');
paras.forEach(para=>{
 console.log(para.innerText);
 para.innerText+=' new text';
});
*/
//const content=document.querySelector('.content');
//console.log(content.innerHTML);
// content.innerHTML='<h2>This is a new H2</H2>';

/*const people=['mario','luigi','yoshi'];
people.forEach(person=>{
    content.innerHTML+='<P>${person}</P>';
});
*/
const link=document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText='The Net Ninja Website';

const mssg=document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:red');
 
//
const tie= document.querySelector('h2');
tie.setAttribute('syle','margin: 50px');
console.log(tie.style);
console.timeLog(tie.style.color);
tie.style.margin='50px';
tie.style.color='red'
tie.style.fontSize='30px'


///

const content=document.querySelector('p');
console.log(content.classlist);
content.classList.add('error');
content.classList.remove('error');

//

const paras=document.querySelector('p');
paras.forEach(p => {
    if(p.textcontent.includes('error')){
        p.classList.add('arror');
    }
    if(p.innerText,includes('success')){
        p.classList.add('success')
    }
});