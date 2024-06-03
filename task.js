let x=250;
const z= 0.025;
x=z*x;
console.log(x);


// Array Tasks : 
 
//Correct the syntax error
// error ---SyntaxError: Unexpected number (The comma is missing)

let num= [ 1,7, 9, 45];

console.log(num);

// ---------------------------------------------------------
// SyntaxError: Unexpected token ']' (at INDEX.HTML:29:21)-// --(Put [], comma,and declare the array with a specific name)
  
let name1=["Str", "alex","moh" ];
console.log(name1);

// ------------------
// SyntaxError: Unexpected token ']' and don't use single qutation.

let array= ['the','fox' ,'over' ,'lazy', 'dog']; 
document.write(array);
console.log(array);




// 2
// What the index of "Banana","Totoma"//
// indexOf --to locate value in array
 
var fruits=["Tomato","Banana","Watermelon"]

 

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));


// -----------------------



/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let food=[ 'kabsa','biryani'];
console.log('My fav food is'+food);

let sport=[ 'Walking', 'resistance sports' ,'running'];
console.log( 'My fav sport are:'+sport);


let movie=[ 'Sleeping beauty', 'Wish' ];
console.log( 'My fav movies are :'+ movie);


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let first=[1,4,5];
console.log('index value of first array='+first[0]);

let s=["t","u","g","x"];
console.log(s[0]);


// 5
// Create a Variable to return the lastOfArray element in an array 

let  lastOfArray=([1,4,5]) ;
console.log('lastofarray='+lastOfArray[2]);



// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

var array1= [0,5,7,9];
array1.push(10);
array1.shift();
array1.shift();
array1.shift();
array1.unshift(8);
array1.unshift(6);
array1.unshift(4);
array1.unshift(3);
array1.unshift(1);
console.log(array1);









// 7
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5];
array2.push(3) ;  /* in this case I added number in the end of the array */
array2.unshift(10,'Rawaah',8) ;  /* in this case I added number in the beginning of the array */
array2.shift() ;  /* in this case I deleted index in the first of the array */
array2.pop() ;  /* in this case I deleted number in the end of the array */

console.log(array2);


// 8.
// Write a JavaScript program to sort the items of an array.

 var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ].sort((a, b) => a - b);
console.log(arr1);


// Sample Output : -4,-3,1,2,3,5,6,7,8

