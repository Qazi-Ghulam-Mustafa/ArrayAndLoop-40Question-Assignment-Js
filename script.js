// Q:1 Print All Element of an array one by one?
// var element=[10,20,30,40,50]
// for(var i=0; i<element.length; i++){
//   console.log(element[i])
// }

// Q:2 Pint All element of an array in reverse order?
// var element =[10,20,30,40,50]
// for(var i=element.length; i>=0; i--){
//     console.log(element[i])
// }

// Q:3 Find the sum of all numbers in an array?
// var number=[10,19,21,40,50]
// sum=0;
// for(var i=0; i<number.length; i++){
//     sum+=number[i]
// }
// console.log("The Sum of all number is : ", sum)

// Q:4 Find The average of all number in an array?
// var number=[10,19,21,40,50]
// var sum=0;
// for(var i=0; i<number.length; i++){
//     sum+=number[i]
// }
// var average=sum / number.length
// console.log("Average",average)


// Q:5 Count how many elements are in the array (without using .length)?
// var arr=["Mustafa",23]
// var count=0;
// for(var value of arr){
// count++
// }
// console.log("Count",count)

// Q:6 Print only the even numbers from an array.
// var number=[1,2,3,4,5,6,7,8,9,10]

// for(var i=0; i<number.length; i++){
//     if(number[i]%2==0)     {
// console.log("These are the even numbers in array ", number[i])
//     }
// }


// Q:6 Print only the even numbers from an array.
// var number=[1,2,3,4,5,6,7,8,9,10]

// for(var i=0; i<number.length; i++){
//     if(number[i] % 2 == 0)     {
// console.log("These are the even numbers in array ", number[i])
//     }
// }

// Q:7 Print only the odd numbers from an array.
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var i = 0; i < number.length; i++) {
//     if (number[i] % 2 != 0) {
//         console.log(number[i])
//     }
// }

// Q:8 Double each number in an array and print the result.
// var number=[2,4,8,16,32]
// for(var i=0; i<number.length; i++){
//     console.log(number[i]*2)
// }

// Q:9 Square of each number in an array and print the result
// var number=[2,4,8,16,32]
// for(var i=0; i<number.length; i++){
//     console.log( number[i] * number[i])
// }

// Q:10 Make an array of 10 numbers and print only numbers which are greater than 5
// var number= [1,2,3,4,5,6,7,8,9,10]
// for(var i=0; i<number.length; i++){
//     if(number[i] > 5){
//         console.log(number[i])
//     }
// }

// Q:11 Find the largest number in an array.
// var number=[10,30,60,40,99]
// var largestNum=0
// for(var i=0; i<number.length; i++){
//     if(number[i] > largestNum){
//         largestNum=number[i]
//     }
// }
// console.log(largestNum)

// Q:12 Find the smallest number in an array

// var number=[10,30,60,40,99]
// var smallest=number [0];
// for(var i=1; i<number.length; i++){
//     if(number[i] < smallest){
//         smallest= number[i]
//     }
// }
// console.log( smallest)

// Q:13  Find both largest and smallest numbers in an array.

// var numbers=[10,20,30,40,50]
// if (numbers.length === 0) {
//   console.log("Array is empty.");
// } else {
//   var smallest = numbers[0];
//   var largest = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       smallest = numbers[i];
//     }
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }

//   console.log("Smallest number is:", smallest);
//   console.log("Largest number is:", largest);
// }

// Q:14  Count how many numbers are even and how many are odd in an array
// var numbers=[1,2,3,4,5,6,7,8,9,10]
// var evenNum=0;
// var oddNum=0;
// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]%2==0){
//         evenNum++;
//     }   else {
//            oddNum++;
//     }
// }
//     console.log(oddNum)
//     console.log(evenNum)

// Q:15  Find how many times a given number appears in an array
// var number=[1,2,3,3,3,4,4,5,2]
// var target=4;
// var count=0
// for(var i=0; i<number.length; i++){
//     if(number[i]===target){
//         count++;
//     }
// }
// console.log(`The number ${target} appears ${count} times in the array.`)

// Q:16  Find the first even number in an array
// var num=[1,3,5,6,7,10,12,15]
// var firstEven=0
// for(var i=0;i<num.length; i++){
//     if(num[i]%2==0){
//         firstEven=num[i];
//     }
// }
// if(firstEven!=null){
//     console.log("the first even", firstEven)
// }else{
// console.log("there is no even number in this array", firstEven)
// }

// Q:17 Find the last odd number in an array
// var num=[2,6,1,7,8,9,10]
// var lastOdd=[]
// for(var i=0; i<num.length; i++){
//     if (num[i]%2!=0){
//         lastOdd=num[i];
//     }
// }
// if(lastOdd==null){
//     console.log("The First Odd", lastOdd)
// }else{
//     console.log("There is no odd number is this array", lastOdd)
// }

// Q:18  Check if a given number exists in the array
// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// var target = 0;
// var found = []
// for (var i = 0; i < num.length; i++) {
//     if (num[i]===target)
//         found = true;
//     break;
// }
// if (found) {
//     console.log("This number is exist in this array")
// } else {
//     console.log("This number is not exist in this array ")
// }

// Q:19  Print the position (index) of a given number in the array.
// var number = [10, 20, 30, 40, 50]
// var index = -1;
// var target = +prompt("Enter Num");
// for (var i = 0; i < number.length; i++) {
//     if (number[i] === target) {
//         index = i;
//         break;
//     }
// }
// if(index!==-1){
// console.log('number ' +target+ '  is found at index ' +index)
// }else{
//     console.log('number ' +target+ ' is not found in this array '+ index)
// }

//Q:20 Count how many numbers are greater than 10 in an array.
// var num=[1,5,10,15,20,25,30,35,40]
// var count=0;
// for(var i=0; i<num.length; i++){
//     if(num[i]>10){
//         count++;
//     }
// }
// console.log("There are " +count+ " numbers are greater than 10 ")

// Q:21 Create a new array containing only the even numbers from the original array.
// var numbers=[1,2,3,4,5,6,7,8,9,10]
// var evenNumbers=[];
// for(var i=0; i<numbers.length;i++){
//     if(numbers[i] %2===0){
//         evenNumbers.push(numbers[i]);
//     }
// }
// console.log("Even Numbers : ", evenNumbers)

// Q:22 Create a new array containing only the odd numbers from the original array
// var numbers=[1,2,3,4,5,6,7,8,9,10]
// var oddNumbers=[]
// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]%2 !==0){
//         oddNumbers.push(numbers[i])
//     }
// }
// console.log("Odd Numbers : ", oddNumbers)

// Q:23 Create a new array where each element is increased by 1.
// var num=[1,2,3,4,5,6,7,8,9,10]
// var increasedBY=[]
// for(var i=0; i<num.length; i++){
//     increasedBY.push(num[i]+1);
// }
// console.log("Original Array : ", num)
// console.log("Increased Array : ",increasedBY)

// Q:24  Create a new array where each element is multiplied by 5
// var num=[1,5,10,15,20]
// var multipltBy=[]
// for(var i=0;i<num.length;i++){
//     multipltBy.push(num[i]*5) 

// }
// console.log(multipltBy)

// Q:25  Reverse an array without using .reverse()
// var num=[1,2,3,4,5]
// for(var i=num.length-1 ; i > -1; i--){
//     console.log(num[i])
// }

// Q:26 Copy all elements of one array into another array using a loop.
// var num=[1,2,3,4,5]
// var copy=[]
// for(var i=0; i<num.length; i++){
//     copy[i]=num[i]
// }
// console.log("This copied array",copy)

// Q:27  Merge two arrays into one (without built-in methods)
// var array1=[1,2,3]
// var array2=[4,5,6]
// var merge=[]
// for(var i=0; i<array1.length; i++){
//     merge[merge.length]=array1[i];
// }
// for(var i=0; i<array2.length; i++){
//     merge[merge.length]=array2[i];
// }
// console.log(merge)

// Q:28 Find the sum of only even number in an array
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var sumOfEvenNumber = 0
// for (var i = 0; i < num.length; i++) {
//     if (num[i]%2 == 0) {
//         sumOfEvenNumber += num[i];
//     }
// }
// console.log(sumOfEvenNumber)

// Q:29 Find the sum of only odd number in an array
// var num=[1,2,3,4,5,6,7,8,9,10]
// var sumOfOddNumber=0;

// for(var i=0; i<num.length; i++){
//     if(num[i]%2!==0){
//         sumOfOddNumber+= num[i];
//     }
// }
// console.log(sumOfOddNumber)

// Q:30 Replace all negative numbers in array with 0
// var num=[-1,2,1,-2,3,4,5,6,-7,-8,-9]
// var replaceWithZero=[]
// for(var i=0;i<num.length;i++){
//     if(num[i]<0){
//         num[i]=0;
//     }
// }
// console.log(num)

// Q:31 Count how many positive and negative numbers are in an array.
// var num=[-5,-4,-3,-2,-1,1,2,3,4,5,6,7]
// var positiveNum=[];
// var negativeNum=[];
// for(var i=0;i<num.length; i++){
//     if(num[i]>0){
//         positiveNum++;
//     }else if(num[i]<0) {
//         negativeNum++;
//     }
// }
// console.log("These are the Positive Numbers in array : ",positiveNum)
// console.log("These are the Negative numbers in arrat : ",negativeNum)

// Q:32 Count how many numbers are divisible by 3 in an array.
// var num=[1,2,3,4,5,,9,12,15]
// var count=[]
// for(var i=0; i<num.length; i++){
//     if(num[i]%3==0){
//         count++
//     }
// }
// console.log(count)

// Q:33 Find the second largest number in an array.
// var num = [10, 20, 30, 40, 50]
// var largest = -Infinity
// var secondLargest = -Infinity
// for (var i = 0; i < num.length; i++) {
//     if (num[i] > largest) {
//         secondLargest = largest;
//         largest = num[i];
//     } else if (num[i] > secondLargest && num[i] < largest) {
//     }
// }
// console.log("This is the second largest number in array: ", secondLargest)

// Q:34 Find the second largest number in an array.
// var num=[10,20,30,40,50]
// var smallest=Infinity;
// var secondSmallest= Infinity;
// for(var i=0; i<num.length;i++){
//     if(num[i]< smallest){
//         secondSmallest=smallest
//         smallest=num[i];
//     }else if(num[i]< secondSmallest && num[i]> smallest){
//          secondSmallest=num[i]
//     }
// }
// console.log("This is the second smallest number in this array: ",secondSmallest)

// Q:35 Find the difference between the largest and smallest numbers in an array.
// var num=[10,20,30,40,50]
// var largest=-Infinity;
// var smallest=Infinity;
// for(var i=0; i<num.length; i++){
//     if(num[i]> largest){
//         largest = num[i];
//     }
//     if(num[i]< smallest){
//         smallest = num[i];
//     }
// }
// var difference= largest-smallest
// console.log("This is the largest number in this array : ",largest)
// console.log("This is the smallest number in this array : ",smallest)
// console.log("This is the difference between the laregst and smallest number in this array : ",difference)

// Q:36 Swap the first and last elements of an array
// var num=[1,2,3,4,5]
// if(num.length>1){
//     for(var i=0; i<num.length; i++){
//         if(i===0){
//             var temp= num[i];
//             num[i]=num[num.length-1];
//             num[num.length-1]=temp;
//         }
//     }
// }
// console.log(num)

// Q:37  Rotate the array to the left by one position (e.g., [1,2,3,4] → [2,3,4,1])
// var num=[1,2,3,4]
// var firstElement=num[0];
// for(var i=0; i<num.length -1; i++)  {
//     num[i]=num[i+1]
// }
// num[num.length-1]=firstElement;
// console.log(num)

// Q:38 Rotate the array to the right by one position (e.g., [1,2,3,4] → [4,1,2,3])
var num=[1,2,3,4]
var lastElement=[num.length-1]
for( var i=num.length-1; i>0; i--){
    num[i]= num[i-1];
}
num[0]=lastElement;
console.log(num)