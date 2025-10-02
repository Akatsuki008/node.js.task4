// function declaration
/*function greet() {
    console.log('hello there');
}*/

// function expression

/*const speak = function(){
    console.log('good day');
 }; */
 

/*const speak = function(name){
   console.log(`good day ${name}`);
}; */


const speak = function(name= 'Pretty' , time= 'night'){
    console.log(`good  ${name} ${time}`);
 };
 speak();
 speak('Sujon');
 speak('Sujon', 'day');

const calcArea = function(radius)
{
    return 3.14 * radius**2;
    console.log(area); return area; } 



// arrow function

const calcArea1 = (radius) =>{
    return 3,14* radius **2;
}

const area = calcArea(5);
console.log(area);

const greet = () => 'hello world';
const re = greet();

//const bill = function(products , tax){
//    let total = 0;
 //   for (let i = 0; i < products.length; i++) {
 ////       total += products[i] + products[i] *tax;
        
//    }
 //   return total; 
//}
const bill1 = (products,tax) => {
   let total = 0;
   for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] *tax;
    
}
return total;
};
//console.log(bill([10,15,30],0.2));
console.log(bill1([10,15,30],0.2));

const name100 = 'Pretty';
//function
const greet100 = ()=> 'hello';
let result100 = greet100();
console.log(result100);
//methods

let result101= name100.toUpperCase();
console.log(result101);

const myFunc = (callbackFunc) => {
    let value = 50 ; 
    callbackFunc(value);
};

myFunc (value =>{
    console.log(value);
});

let people = ["Sujon", "Pretty", "Farhan", "Sajib", "Sahadat"];


people.forEach(function(person, index){
    console.log(index, person);
});

