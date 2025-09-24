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