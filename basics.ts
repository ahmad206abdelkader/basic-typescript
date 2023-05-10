let age: number;

age = 12.1;

let userName: string;

userName = 'ahmad';

let instructor: boolean;

instructor = true;

// let hobbies: null;

// hobbies = 12;




//////////more complix


let hobbies : string[];

hobbies = ['sport' , 'Cooking'];

let person : person ;
// let person :{};

type person ={
    name: string;
    age:number;
}

// let person :{
//     name: string;
//     age:number;
// };

person =  {
 name: 'ahmad',
 age: 35
};

// person = {
//   isEmployee: true
// };


let people : {
 name: string,
 age: number
}[];

let course: string | number | boolean = 'React - the Complete Guide';

course = 2313;


////////function type

function add ( a: number,b: number)  {
    return a + b;
}

function print(value: any){
    console.log(value);
}

//////////generics

function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}  

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'] , 'd')

// updatedArray[0].split('');