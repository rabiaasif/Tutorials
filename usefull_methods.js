// FOR EACH 
var colours = ['red','blue','green']

//old method
for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}

//new method 
colours.forEach(function(colour){
    console.log(colour);
});
//first way to do this
var numbers = [1,2,3,4,5];

var sum = 0;
//numbers == array, number = object that is being looped over

numbers.forEach(function(number){
    sum+= number;
})

console.log(sum);

var sum1 = 0
function adder(number){
    sum += number
}

numbers.forEach(adder); //no need to do adder(), es6 knows how the input and how many times to call it
console.log(sum1);



// MAP 


//ex 1 
var numbers = [1,2,3];
//dont manipulate original array
var double =[];

//old way to do this
for (let index = 0; index < numbers.length; index++) {
    double.push(numbers[i]*2);
}
//using map function 
double1= numbers.map(function(number){
    return number * 2; //return keyword is necessary, otherwise youll get null in your array 
});

//ex 2 
var cars = [
    {model: "toyota", price: "cheap"},
    {model: "benz", price: "kinda expensive"}
];

var prices = cars.map(function(car){
    return car.price; //[cheap, kinda expensive]
});

//FILTER

var products = [
    {name: "cucumber", type: "veg", quantity: 0 , price: 1},
    {name: "apple", type: "fruit",quantity: 1 , price: 2},
    {name: "strawberry", type: "fruit", quantity: 2 , price: 3},
    {name: "spinich", type: "veg", quantity: 3 , price: 4},
    
];

//ex 1
var filteredproducts = []

for (let index = 0; index < products.length; index++) {
    if (products[i].type === 'fruit') {
        filteredproducts.push(products[i]);   
    }
}

 var filtered = products.filter(function(product){
    return product.type === 'veg'; //return is necessary

});

// ex 2 
var filtered2 = products.filter(function(product){
    return product.type === 'veg' 
    && product.quantity > 0 
    && product.price < 4
});

// ex 3
var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
var filteredUsers = users.filter(function(user){
       return user.admin === true;
   }); //returns list of ids

// FIND
var users = [
    {name: 'Rabia'},
    {name: 'Tanya'},
    {name: 'Bob'}
];
var user;

for (let index = 0; index < users.length; index++) {
    if (users[i].name === 'Rabia') {
        user = users[i];
        break;
    } 
}

//using filter 
user1= users.find(function(user){
    return user.name = 'Rabia'; //if there is more than 1 rabia, it will return the first one in the array
})


// ex 2 

function Car(model){
    this.model = model;
}

var cars = [
    new Car("toyota"),
    new Car("honda"),
    new Car("nissan"),
];

car = cars.find(function(car){
    return car.model === 'toyota';
});

// ex 3

var posts = [
    {id: 1, title: 'new post'},
    {id: 2, title: 'newer post'} 
];
var comment = {postId:1 , content: "hi"}

function postForComment(post, comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}

// ex 4 
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin = users.find(function(user){
      return user.admin === true;    //should give back {id: 3 , admin: true}
  });

//  EVERY & SUM

var computers = [
    {name: 'apple', ram: 24},
    {name: 'apple', ram: 4},
    {name: 'apple', ram: 34}, 
];

computers.every(function(computer){
    return computer.ram > 16; //returns a bool False 
});

computers.some(function(computer){
    return computer.ram > 16; // returns a bool true
});


// ARROW FUNCTIONS 
const add = function(a,b){
    return a + b; 
}
 add(1,2);

 //OR

 const add = (a,b) => {
    return a + b;
 }

 //OR

 const add = (a,b) => a + b; //if you add curly braces u gotta add a return statement
 const double = number => 2 * number; //single argument doesnt need () around param
 const random = () => 2; //no param still needs ()
 const double2 = (number => 2* number); // no ; for this syntax after number 
 

const numbers = [1,2,3]
numbers.map(number => 2 * number);

const team = {
    members: ['rabia', 'tanya'],
    team: 'hifyre',
    // teamSummary: function(){
    //     //instead of .bind(this)
    //     //could do this:
    //     //var self = this;
    //     //then do seld.teamName instead of this
    //     return this.members.map(function(member){
    //         return `${member} is on team ${this.teamName}`
    //     }.bind(this));
    // }
    teamSummary: function(){ //using arrow function we dont have to worry about binding the function
        return this.members.map((member) =>{
            return `${member} is on team ${this.teamName}`
        });
    }
};

team.teamSummary();


//PROMISES 

//no need to import anything
//dont need to use const 
//both resolve and reject are functions, automatically come with promise
// 3 states, pending, resolved and rejected
//can call: resolve(); or reject(); inside the promise 

promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
            //wait for 3 seconds, then resolve, or reject
            resolve();
    }, 3000);
    //reject();
});

//call once promise is completed and resolved
promise.then(
   () => {
       console.log('finished')
   }).then(()=>{
       console.log('multiple thens inside a promise')
   }).catch(()=>{
       //come here when promise is rejected 
       console.log('rejected promise')
   });


url  = "some/url";

fetch(url)
    .then(response => response.json())
    .then(data=>console.log(data));


//requests with response above 300 still goes to then case instead of catch, unless url doesnt exist 
fetch(url)
.then(response => response.json())
.catch(error=>console.log('BAD',error));