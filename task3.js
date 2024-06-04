// 1. Write a JS code to print numbers from 1 to 10


function num(){
    for (let i=1;i<11;i++)
        {
document.write(i);
console.log(i);

        }
}
num();

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]


// to print array all*/
var arr1 = [13,23,12,45,22,48,66,100];

        console.log(arr1);




        // to print even element in array
        var arr1 = [13,23,12,45,22,48,66,100];
for(let k=0;k<9;k++)
    {
        console.log(arr1[k]);
       
    }



/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

  for (let i = 1; i <9; i++) {
    let line = '';
    for (let p = 1; p <= i; p++) {
        line += p+ ' ';
    }
    console.log(line);
}
let x = "don’t know why";

if (x.includes('y')) {
    console.log("yes");
} else {
    console.log("no");
}
