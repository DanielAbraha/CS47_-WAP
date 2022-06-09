 "use strict";
 // problem 1
function max(x,y){
    if(x>y){
       console.log(x + " is larger");
    } else{
        console.log(y+ " is larger");
    }
}
max(5,9);

// problem 2
function maxOfThree(x,y,z){
    if(x>y && x>z)
    return x;
    else if(y>z && y>x)
    return y;
    else
    return z;
}
console.log( "The max number is " + maxOfThree(12,34,45));

// problem 3
function isVowel(x ){
    if(x=="a"|| x=="e"||  x=="i" || x=="o" ||  x=="u" )
    return true;
    else return false; 

}
console.log(isVowel("r"));

// problem 4
function sum(num){
    let sums=0;
for (let index = 0; index < num.length; index++) {
    sums+=num[index];
       
}
    return sums;
}
console.log( "The sum of the numbers is : " + sum([1,2,3,4]));

// mulitiply
function mulitiply(nums){
    let multiple=1;
for (let index = 0; index < nums.length; index++) {
    multiple*=nums[index];
       
}
    return multiple;
}
console.log("The product of the numbers is : " + mulitiply([1,2,3,4]));

//problem 5
function reverse(str){
    let rev=""
    for (let i =str.length-1; i>=0;i-- ) {
        rev+=str[i];
    }
    return rev;
}
console.log(reverse("dani"));

//problem 6
function findLongestWords(word) {
    let longest=0;
    for (let index = 0; index < word.length; index++) {
         longest= word[0].length;
        if (word.length[index]>longest) {
            longest=word[index];
            
        }
        
    }
    return longest;
}
console.log(findLongestWords(  [ "brukie","dani","juddy"]));

// problem 7
/**7.	Write a function filterLongWords() that takes an
 *  array of words and an integer i and returns a new array 
 * containing only those words that were longer than i characters. */
function filterLongWords(arr,num) {
//     let filt=[]
//   for (let i = 0; i <arr.length; i++) {
//         if(arr[i].length>num)
//             filt.push(arr[i]);
        
//           }
      
//   return filt;
return arr.filter(e=> e.length>num);
}
console.log(filterLongWords(["dani","fre","siku"],3));

//problem 8 
/* 8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct;
 instead use functional programming style/approach*/

 function computeSumOfSquares(x) {
    return x.reduce((a,b)=>a+b*b,0);
}
console.log(computeSumOfSquares([1,2,3]));

// problem 9
/* 9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and 
prints only the numbers which are odd.*/
function printOddNumbersOnly(x) {
    
    for (let index = 0; index < x.length; index++) {
        if(x[index]%2!=0)
        console.log((x[index]));
        
    }
    
}
console.log(printOddNumbersOnly([1,2,3,4,5]));

//problem 10
/*	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and 
returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.*/
// using map
function computeSumOfEvenSquares(x) {
  return x.filter(a=>a%2==0).map(a=>a*a).reduce((a,b)=>a+b,0);
    
}
console.log(computeSumOfEvenSquares([1,2,3,4]));

//problem 11
/* 11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using 
Imperative programming. i.e. Do NOT use any explicit looping construct;
 instead use functional programming style/approach. */
  function sum2(x) {
    return x.reduce((x,y)=>x+y,0);  
  }
  console.log(sum2([1,2,3,4]));
  // multiply
  function mulitiply2(x) {
    return  x.reduce((x,y)=>x*y,1);
      
  }
  console.log(mulitiply2([1,2,3,4]));

  // problem 12
  /* 12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and 
  finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. 
  (Note: Do not use sorting!) */
  
  function findSecondBiggest(a){
   let maxindex=0;
    let max=0;
    for(let i=0; i<a.length;i++){
        if(a[i]>max){
        max=a[i];
        maxindex=i;
        }
    }
    let secmax=0;
    for(let j=0;j<a.length;j++){
        if(a[j]>secmax && j!=maxindex)
           secmax=a[j];
    }
    return secmax;
}
console.log(findSecondBiggest([1,2,3,4]));

// problem13
/* 13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence,
 e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
 printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1),
 prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), 
prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).*/

  function printfibo(x,y,z){
       
    for(let i =1;i<=x;i++){
           console.log(y + " ");
      let sumOfPrevTwo = y+ z;
            y= z;
            z = sumOfPrevTwo;
    }
  }
  console.log(printfibo(1,2,3));


