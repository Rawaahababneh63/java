function num(x,y){
if (x>0&y>0&x>y)
    {
        window.alert( 'The larger number is'+x);}
else
{
    window.alert( 'The larger number is '+y);
}

}
 num(5,10);

// 2. Write a JavaScript conditional statement to find the sign
//  of product of three numbers. Display an alert box with the 
//  specified sign. Go to the editor 
// Sample numbers : 3, -7, 2 
// Output : The sign is - */
 let d;
function num1(r,z,n){
d=r*z*n;
if(d>0){
    
    window.alert('The sign is :'+'-');
    console.log('The sign is :'+'-');

}

}
num1(5,-1,8);



/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

 let arr=[-5,-2,-6,0,-1];
 let num5=arr[0];
 for(let i=0;i<6;i++){

if(arr[i]>num5)
{

num5=arr[i];

 }}

 window.alert('The largest is:'+num5); 


 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

function hello( u,o){

if (u>o){
    window.alert("Hello World" )
}
else(
    window.alert("Goodbye")
);
}

hello(8,9);