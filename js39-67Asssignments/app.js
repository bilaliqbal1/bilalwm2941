// assignement 38-42 task 1
// function power(a, b) {
//     result = 1;
//     for (var i = 0; i < b; i++) {
//         result = result * a;
//     }
//     document.write("Number: " + a + "<br>" + "Power: " + b + "<br>" + "Result: " + result);
// }
// power(4, 3);
// // assignement 38-42 task 2
// function leapYear(year) {
//     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//         document.write("It's a leap year");
//     }
//     else {
//         document.write("It's not a leap year");
//     }
// }
// leapYear(prompt("Enter any year like '2012'"));

// assignement 38-42 task 3
// function calculateArea(a, b, c) {
//     var S = 0;
//     var area = 0;
//     function area(a, b, c) {
//         S = (a + b + c) / 2;
//         return S;
//     }
//     S = area(a, b, c);
//     area = S * (S - a) * (S - b) * (S - c);
//     document.write("Area of triangle without Square Root is " + area + "<br>");
//     area = Math.sqrt(area).toFixed(2);
//     document.write("Area of triangle with Square Root is " + area);
// }
// calculateArea(5, 5, 5);

// assignement 38-42 task 4
    // var sub1 = +prompt("Enter marks of subject1");
    // var sub2 = +prompt("Enter marks of subject2");
    // var sub3 = +prompt("Enter marks of subject3");
    // function calAverage(sub1,sub2,sub3){
    //     var obtainMarks = sub1 + sub2 + sub3;
    //     var average = obtainMarks/3;
    //     return average;
    // }
    // function calPercentage(sub1,sub2,sub3){
    //     var obtainMarks = sub1 + sub2 + sub3;
    //     var percentage = (obtainMarks/300)*100;
    //     return percentage;
    // }
    // function mainFunction(sub1,sub2,sub3){
    //     var resultAverage = calAverage(sub1,sub2,sub3);
    //     var resultPercentage = calPercentage(sub1,sub2,sub3).toFixed(2);
    //     document.write("Average is "+resultAverage+"<br>"+"Percentage is "+resultPercentage+"%");
    // }
    // mainFunction(sub1,sub2,sub3);


    //  assignement 38-42 task5
    // var str = "Hello world";
    // function customIndexOf(x){
    //     for(var i = 0; i < str.length; i++){
    //         if(str[i] != x){
    //             continue;
    //         }
    //         else {    	
    //             document.write(i);
    //             break;
    //         }
    //     }
    // }
    // customIndexOf("w");


    // assignement 38-42 task6
    // var sentence = "Delete all vowels of this";
    // var sentence = sentence.toLowerCase();
    // var withoutVowels = "";
    // function deleteAllVowels(s){
    //     for(var i =0; i < sentence.length; i++){
    //         if(sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u"){
    //             continue;
    //         }
    //         else{
    //             withoutVowels += sentence[i];
    //         }
    //     }
    //     document.write("<strong>With Vowels: </strong>"+sentence+"<br>");
    //     document.write("<strong>Without Vowels: </strong>"+withoutVowels);
    // }
    // deleteAllVowels(sentence);


    //  assignement 38-42  task7
    // function findOccurrences() {
    //     var str = "Pleases read this application and give me gratuity";
    //     str = str.toLocaleLowerCase();
    //     document.write("Sentence is: " + str + "<br>")
    //     var count = 0;
    //     let haveSeenVowel = false;
    //     for (const letter of str) {
    //         switch (letter) {
    //             case 'a':
    //             case 'e':
    //             case 'u':
    //             case 'i':
    //             case 'o':
    //                 {
    //                     if (haveSeenVowel) {
    //                         count++;
    //                         haveSeenVowel = false;
    //                     } else {
    //                         haveSeenVowel = true;
    //                     }
    //                     break;
    //                 }
    //             default:
    //                 haveSeenVowel = false
    //         }
    //     }
    //     return document.write("The number of occurrences are: " + count);
    // }
    // findOccurrences();


    //  assignement 38-42 task8
    // var disKM = +prompt("Enter Distance in KM");
    // function KmtoMeter(x){
    //     var meter = x*1000;
    //     return meter;
    // }
    // function Kmtofeet(x){
    //     var feet = x*3281;
    //     return feet;
    // }
    // function KmtoInches(x){
    //     var inches = x*39370;
    //     return inches;
    // }
    // function KmtoCentimeter(x){
    //     var centimeter = x*100000;
    //     return centimeter;
    // }
    // document.write("Distance in Kilometers: "+disKM+"<br>");
    // document.write("Distance in Meters: "+KmtoMeter(disKM)+"<br>");
    // document.write("Distance in Feets: "+Kmtofeet(disKM)+"<br>");
    // document.write("Distance in Inches: "+KmtoInches(disKM)+"<br>");
    // document.write("Distance in Centimeter: "+KmtoCentimeter(disKM)+"<br>");


    //  assignement 38-42 task9
    // function calOverTimePay(){
    //     var hours = +prompt("Enter working hours ");
    //     var perHourRate = 12;
    //     var overtimePay;
    //     if(hours > 40){
    //         hours -= 40;
    //         overtimePay = hours * perHourRate;
    //         document.write("Employee overtime pay is "+overtimePay)
    //     }
    //     else{
    //         alert("Working hours must be above 40");
    //     }
    // }
    // calOverTimePay();


    //  assignement 38-42 task10
    // function calDenomination(){
    //     var withdrawlAmount = +prompt("Enter amount to withdrawl!");
    //     var lengthOfAmount = withdrawlAmount.toString().length;
    //     withdrawlAmount = withdrawlAmount.toString().split('');
    //     if(lengthOfAmount == 3){
    //         if(withdrawlAmount[1] > 5){
    //             withdrawlAmount[2] = withdrawlAmount[1] - 5;
    //             withdrawlAmount[1] = 5;
    //         }
    //         else if(withdrawlAmount[1] == 5){
    //             withdrawlAmount[1] = 1;
    //             withdrawlAmount[2] = 0;
    //         }
    //         else {
    //             var swapIt = withdrawlAmount[1];
    //             withdrawlAmount[1] = withdrawlAmount[2];
    //             withdrawlAmount[2] = swapIt;
    //         }
    //         document.write(
    //             "you will have "+
    //             withdrawlAmount[0]+" hundred notes "+
    //             withdrawlAmount[1]+" fifty notes "+
    //             withdrawlAmount[2]+" ten notes."
    //         );
    //     }
    //     else if(lengthOfAmount == 2){
    //         if(withdrawlAmount[0] == 5){
    //             document.write("you will have "+0+" hundred notes "+1+" fifty notes "+0+" ten notes.");
    //         }
    //         else if(withdrawlAmount[0] > 5){
    //             withdrawlAmount[0] -= 5;
    //             document.write("you will have "+0+" hundred notes "+1+" fifty notes "+withdrawlAmount[0]+" ten notes.");                
    //         }
    //         else {
    //             document.write("you will have "+0+" hundred notes "+0+" fifty notes "+withdrawlAmount[0]+" ten notes.");                
    //         }
    //     }
    //     else {
    //         document.write("Please enter amount below 1000");
    //     }
    // }
    // calcDenomination();



// assignement 38-42 task 1


// assignement 38-42 task 1


// assignement 38-42 task 1


// assignement 38-42 task 1

// assignement 38-42 task 1


// assignement 38-42 task 1


// assignement 38-42 task 1


// assignement 38-42 task 1

