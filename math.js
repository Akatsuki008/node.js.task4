// object literals

const blogs=[
    {title:'why mac & cheese rules',lokes:30},
    {title:'10 things to make with marmite',likes:50}
]
console.log(blogs);


let user={
 nam:'Pretty',
 age:20,
 location:'Narayanganj',
 blogs:['why mac & cheese rules','10 things to make'],
 login:function(){
   console.log('the user logged in');
 },

 logout:function(){
  console.log('the user logout');

 },

 logblogs:function(){
    // console.log(this.blogs);
    console.log('this user has written the follow')
;
this .blogs.forEach(blog=>{
    console.log(blog);
});
 }
 
};
/*
console.log(user);
console.log(user.nam);
console.log(user.age);
console.log(user['location']);
user['name']='chun-li';
console.log(user['nam']);
*/
// 
user.login();
user.logblogs();
 

// math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));
console.log(Math.ceil(area));

// random numbers

 const random=Math.random();

 console.log(random);
 console.log(Math.round(random*100));

// primitive value

let scoreOne=50;
let scoretwo=scoreOne;

console.log('scoreOne:${scoreOne}','scoretwo:{scoretwo}');

// reference value

const userOne={nam:'Sujon failtush',age:25};
const userTwo=userOne;

user.nam='Pretty'
console.log(userOne,userTwo);
