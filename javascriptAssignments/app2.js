// chapter 21-25 task 1
// var first = prompt("Enter your first name:")
// var last = prompt("Enter your last name:")
// var full = first + last
// document.write("Greetings " + full)
// chapter 21-25 task 2
// var name = prompt("Enter your mobile name name:")
// var find = name.length
// document.write(find)
// document.write("my favorite phone is " + name+"<br>")
// document.write("length is " + find)
// chapter 21-25 task 3
// var name = "pakistani";
// document.write("string = "+name+"<br>")
// document.write("Index of n "+ name.indexOf('n'))
// chapter 21-25 task 4
// var name = "hello world";
// document.write("string = "+name+"<br>")
// document.write("Index of n "+ name.lastIndexOf('l'))
// chapter 21-25 task 5
//    var name = "pakistani";
//    document.write("string = "+name+"<br>")
//    document.write("Index of n "+ name.charAt(3))
// chapter 21-25 task 6
//     var first = prompt("Enter your first name:")
// var last = prompt("Enter your last name:")
// document.write("Greetings " + first.concat(last))
// chapter 21-25 task 7
//  var city = "hyderabad";
//     document.write("City = "+city+"<br>")
//     document.write("After Replacement "+ city.replace('hyderabad','Islamabad'))
// chapter 21-25 task 8
//   var message = "Ali and Sami are best friends. They play cricket and football together.";
//   document.write("Message = "+message+"<br>")
//     document.write("After Replacement "+ message.replace(/and/g,'&'))
// chapter 21-25 task 9
//  var val = "472";           
//  document.write("Value = "+val+"<br>")
//  document.write("Type = "+typeof(val)+"<br>")
//  var convert = parseInt(val);
//  document.write("value = "+convert+"<br>")
//  document.write("Type = "+typeof(val)+"<br>")
// chapter 21-25 task 10
// var num = prompt("Enter your name");
// document.write("user input"+num+"<br>");
// document.write("Upper case "+num.toUpperCase());
// chapter 21-25 task 11
//    var num = prompt("Enter your name");
// document.write("user input "+num+"<br>");
// document.write("Upper case "+num.toLowerCase());
// chapter 21-25 task 12
// var num = 35.36 ;
// document.write("Number "+num+"<br>");
// document.write("Result "+num.toString()+"<br>");
// chapter 21-25 task 13
//  var A = ["cake", "apple pie", "cookie", "chips", "patties"]
//  var num = prompt("Enter your name");
//  if (num === a[]) {

//  }
// chapter 21-25 task 16
// var university = "University of Karachi";
// document.write(university.split(""));
// chapter 21-25 task 17
// var num = prompt("Enter your name");
// document.write("User input"+num+"<br>");
// document.write("Last character of input"+num.lastIndexOf("l"));
// chapter 21-25 task 18
//  var name =  "The quick brown fox jumps over the lazy dog";
//  document.write("Text"+name+"<br>");
//  for (var i = 0; i < text.length; i++) {
//   if (name.slice(i, i + 12) === "the") {
//    name = name.slice(0, i) + "the" + name.slice(i + 12);
//    }
//   }
//  document.write("There are occurrence words are"+name+"<br>");
// chapter 26-30 task 1
// var num = +prompt("Enter a positive number");
// document.write("Number "+ num+"<br>");
// document.write("Round off value"+Math.round(num)+"<br>");
// document.write("Floor Value"+Math.floor(num)+"<br>");
// document.write("Ceil value"+Math.ceil(num)+"<br>");
// chapter 26-30 task 2
// var num = +prompt("Enter a negative floating point number");
// document.write("Number "+ num+"<br>");
// document.write("Round off value"+Math.round(num)+"<br>");
// document.write("Floor Value"+Math.floor(num)+"<br>");
// document.write("Ceil value"+Math.ceil(num)+"<br>");
// chapter 26-30 task 3
// var val = -4
// document.write("Absolute value "+Math.abs(val)+"<br>");
// chapter 26-30 task 4
//  var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
//  var numberOfStars = Math.floor(improvedNum);
// document.write("Random dice value "+numberOfStars);
// chapter 26-30 task 5
//  var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
//  var numberOfStars = Math.floor(improvedNum);
// document.write("Random dice value "+numberOfStars+"<br>");
// if (numberOfStars == 2) {
//   document.write("heads");
// }
// else{
//   document.write("tails");
// }

// chapter 26-30 task 6
//  var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
//  var numberOfStars = Math.floor(improvedNum);
// document.write("Random 1-100 value "+numberOfStars)
// chapter 26-30 task 7
// var weight = +prompt("Enter your weight in kilogram");

// chapter 26-30 task 8
//  var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
//  var numberOfStars = Math.floor(improvedNum);
//  document.write(numberOfStars);
// var num = +prompt("Enter a number between 1 to 10");
// if (num == numberOfStars) {
//   document.write("congrats");
// } else {
//   document.write("try again");
// }

// chapter 35-38 task 1
// var rightNow = new Date();
// var theDay = rightNow.getDay();
// var month = rightNow.getMonth();
// document.write(rightNow+month+theDay);
// chapter 35-38 task 2
// var rightNow = new Date();
// var month = rightNow.getMonth();
// var monthString = month.toString();
// document.write(monthString);
// chapter 35-38 task 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var rightNow = new Date();
// var theDay = rightNow.getDay();
// var dayString = dayNames[theDay];
// alert(dayString);
// chapter 35-38 task 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var rightNow = new Date();
// var theDay = rightNow.getDay();
// var dayString = dayNames[theDay];
// if (dayString == "sat" || dayString == "sun") {
//   document.write("It's a fun day");
// } 

// chapter 35-38 task 5
// var rightNow = new Date();
// c_date = rightNow.getDate();
// if (c_date < 16) {
//   document.write("First fifteen days of the month");
//   } else {
//       document.write("Last days of the month");
//   }

// chapter 35-38 task 6
// var rightNow = new Date();
// var rightNowMilli = rightNow.getTime();
// var dateBefore = new Date("Jan 01, 1970");
// var dateBeforeMilli = dateBefore.getTime();
// var diff = rightNowMilli - dateBeforeMilli;
// var diffInMin = diff / (1000 * 60 * 60);
// document.write("Current Date: " + rightNow + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970:  " + diff + "<br>");
// document.write("Elapsed minutes since January 1, 1970:  " + diffInMin + "<br>");
// chapter 35-38 task 7
// var rightNow = new Date();
// var time = rightNow.getTime();
// if (time <=12) {
//   alert("Its PM")
// }
// else{
//   alert("Its AM")
// }
// chapter 35-38 task 8
// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);

// chapter 35-38 task 9
//     var ramadanStartDate = new Date("Apr 24, 2020");
// var rightNow = new Date();
// var timeDiff = rightNow - ramadanStartDate;
// var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
// document.write(diffDays + " days have passed since 1st Ramadan, 2020");

// chapter 35-38 task 10
// var time = new Date();
// var setTime = new Date("Jan 1,2015")
// var gettime = time.getTime();
// var getSetTime = setTime.getTime();
// var diff = gettime - getSetTime;
// var secDiff = Math.abs(diff / 1000);
// document.write(secDiff + " seconds had past since begining of 2015")

     //  chapter 35-38 task11
    // var cDate = new Date();
    // document.write("Current date: " + cDate + "<br>");    
    // var setHours = cDate.setHours(15);
    // document.write("1 hour ago, it was: " + setHours);

    //  chapter 35-38 task12
    // var cDate = new Date();
    // var getYear = cDate.getFullYear();
    // document.write("Current date: " + cDate + "<br>");    
    // var setHours = cDate.setFullYear(getYear-100);
    // document.write("100 years back, it was: " + cDate);

    //  chapter 35-38 task13
    // var age = +prompt("Enter your age");
    // var cDate = new Date();
    // var getYear = cDate.getFullYear();
    // var birthYear = getYear - age;
    // document.write("Your age is " + age + "<br>");
    // document.write("Your birth year is " + birthYear + "<br>");

    //  chapter 35-38 task14
    // var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var cName = "Bilal Iqbal";
    // var cMonth = new Date().getMonth();
    // cMonth = allMonths[cMonth];
    // var noOfUnits = 410;
    // var chargesPerUnit = 16;
    // var lateAmount = 350;

    // document.write("<h2>K-Eletric Bill</h2>" + "<br>");
    // document.write("Customer Name: " + customerName + "<br>");
    // document.write("Month: " + cMonth + "<br>");
    // document.write("Number of Units: " + noOfUnits + "<br>");
    // document.write("Charges Per Unit: " + chargesPerUnit + "<br>");
    // document.write("<br>");
    // document.write("Net Amout Payable (within Due Date): " + noOfUnits*chargesPerUnit + "<br>");
    // document.write("Late Payment Surcharge: " + lateAmount + "<br>");
    // document.write("Gross Amout Payable (after Due Date): " + ((noOfUnits*chargesPerUnit)+lateAmount) + "<br>");
        

        // chapter 35-38 task 1
      // function time(){
      //   var rightNow = new Date();
      //   document.write(rightNow);
      // }
      // time();

        // chapter 35-38 task 2
        // function greetName(fname,lname) {
        //   var fullName = fname + lname;
        //   alert("Welcome"+fullName)
        // }
        // var fname = prompt("Enter your first name")
        // var lname = prompt("Enter your Last name")
        // greetName(fname,lname);
        // chapter 35-38 task 3 
          // function sum(x,y) {
        //     return sum = x + y;
        // }
        // var firstNum = +prompt("Enter First Number");
        // var secondNum = +prompt("Enter Second Number");
        // document.write(sum(firstNum,secondNum));

        // chapter 35-38 task4
        // function cal(num1,num2,opr) {
        //     if (opr === "+") {
        //         return num1 + num2; 
        //     } 
        //     else if(opr === "-") {
        //         return num1 - num2;
        //     }
        //     else if(opr === "/") {
        //         return num1 / num2;
        //     }
        //     else if(opr === "*") {
        //         return num1 * num2;
        //     }
        //     else if(opr === "%") {
        //         return num1 % num2;
        //     }
        //     else {
        //         return "Wrong Command";
        //     }
        // }
        // var num1 = +prompt("Enter First Number");
        // var num2 = +prompt("Enter Second Number");
        // var opr = prompt("Enter Operator");
        // alert("Equation is " + num1 + opr + num2 + "\nOutput is " + cal(num1,num2,opr));
 
    // chapter 35-38 task5
    // function square(x) {
    //     alert("Input is "+x + "\nSquare is " + x*x);
    // }
    // square(+prompt("Enter any number"));
    
    // chapter 35-38 task6
    // function factorial(x) {
    //     var initial = x;
    //     for (var i = x-1; i > 0; i--) {
    //         x *= i;
    //     }
    //     alert("Input is "+initial + "\nFactorial is " + x);
    // }
    // factorial(+prompt("Enter any number"));
    
    // chapter 35-38 task7
    // function counting(x,y) {
    //     for (var i = x; i <= y; i++) {
    //         document.write(i + "<br>");
    //     }
    // }
    // counting(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));

    // chapter 35-38 task8
    // function calHypotenuse(base,perpendicular) {
    //     var finalHypotenuse;
    //     var hypSquare = Math.pow(base,2) + Math.pow(perpendicular,2);
    //     function calSquare(hyp) {
    //         finalHypotenuse = Math.sqrt(hyp).toFixed(2);
    //         return finalHypotenuse;
    //     }
    //     calSquare(hypSquare);
    //     return finalHypotenuse;
    // }
    // document.write(calHypotenuse(10,10));

    // chapter 35-38 task9
    // function calArea(w,h) {
    //     var A = w * h;
    //     return A;
    // }
    // //Arguments As Values
    // alert("Area of Rectengle: " + calArea(20,10));
    // //Arguments As Variables
    // var width = 20;
    // var height = 10;
    // alert("Area of Rectengle: " + calArea(width,height));

    // chapter 35-38 task10
    // function checkPalindrome(str) {
    //     var reversed = "";
    //     for (var i = str.length-1; i >= 0; i--) {
    //         reversed += str[i];
    //     }
    //     if (str === reversed) {
    //         alert("It's a Palindrome");
    //     } else {
    //         alert("It's not a Palindrome");
    //     }
    // }
    // checkPalindrome(prompt("Enter a string to check it's Palindrome or not"));

    // chapter 35-38 task11
    // function titleCase(str) {
    //     var splitted = str.split(" ");
    //     for (var i = 0; i < splitted.length; i++) {
    //         document.write(splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1,)+" ");
    //     }
    // }
    // titleCase(prompt("Enter any word here","This is a sample text").toLowerCase());
    
    // chapter 35-38 task12
    // function findLongest(str) {
    //     var strToArr = str.split(" ")
    //     var longest = strToArr[0];
    //     for (var i = 1; i < strToArr.length; i++) {
    //         if (strToArr[i].length > longest.length ) {
    //           longest = strToArr[i];
    //         }
    //     }
    //     document.write("String: " + str + "<br>Longest Word: " + longest);
    // }
    // findLongest("This is assignment.");
    
    // chapter 35-38 task13
    // function findOcc(str,ltr) {
    //     var spilitted = str.toLowerCase().split("");
    //     var occurances = 0;
    //     for (var i = 0; i < spilitted.length; i++) {
    //         if(spilitted[i] == ltr) {
    //             occurances++;
    //         }
    //     }
    //     document.write("Text: " + str + "<br>");
    //     document.write("There are '" + occurances + "' occurance(s) of letter '" + ltr + "'");
    // }
    // var str = "The quick brown fox jumps over lazy the dog";
    // var ltr = "o";
    // findOcc(str,ltr);
    
    // chapter 35-38 task14
    // function calCircumference(r = 10) {
    //     var circumference = (2 * 3.142 * r).toFixed(2);
    //     alert("The circumference is " + circumference);
    // }
    // function calArea(r = 10) {
    //     var area = (3.142 * (r*r)).toFixed(2);
    //     alert("The area is " + area);
    // }
    // calCircumference();
    // calArea();






