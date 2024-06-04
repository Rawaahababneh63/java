// /* 1. Write a JavaScript program that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A


function comp(x){
    if(x<=50)
        {
        return 'Fail';
        }

else if (50<=x &x<=59)
    {
    return 'E';
}
 else if (60<=x&x<=69)
    {
    return 'D';
}
 else if (70<=x&x<=79)
    {
    return 'C';
}
 else if (80<=x&x<=89)
    {
    return 'B';
}
 else
  (90<=x&x<=100)
    {
    return 'A';
}
}

let output=comp(100);
window.alert(output);




// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 */
function nun2(c,v,n)
{
    if (c>v&c>n){
        if(v>n){
            console.log(c,v,n)
        }
       else{console.log(c,n,v)}
    }
    else if (v>c&v>n){
        if(c>n){
            console.log(v,c,n)
        }
       else{ console.log(v,n,c)}
    }
else if(n>v&n>c)
    {
        if(v>c){
            console.log(n,v,c)
        }
       else{console.log(n,c,v)}
    }


}

nun2(0, -1, 4 );






