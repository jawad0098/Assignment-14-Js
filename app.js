                                    //  CHAPTER(38-44)
                                    // Q.NO = 1 
                                    // ANS  =
// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// let base = 2;
// let exponent = 3;
// let result = power(base, exponent);
// document.write(`${base} raised to the power of ${exponent} is: ${result}`);
// ---------------------------------------------------------------------------

// Q.NO = 2
// ANS = 
// function isLeapYear(year) {    
//     if (year % 4 !== 0) {
//         return false; 
//     } else if (year % 100 !== 0) {
//         return true; 
//     } else if (year % 400 !== 0) {
//         return false; 
//     } else {
//         return true; 
//     }
// }
// let year = prompt("Enter a year:");
// year = parseInt(year); 
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }
// ---------------------------------------------------

// Q.NO = 3
// ANS =
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//     let s = calculateSemiPerimeter(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// let sideA = 3;
// let sideB = 4;
// let sideC = 5;

// let area = calculateTriangleArea(sideA, sideB, sideC);
// console.log(`Area of the triangle with sides ${sideA}, ${sideB}, and ${sideC} is: ${area}`);
// ---------------------------------------------------------------------------------------------

// Q.NO = 4
// ANS =
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
// }

// function mainFunction(marks1, marks2, marks3) {
//     var averageMarks = calculateAverage(marks1, marks2, marks3);
//     var totalMarks = marks1 + marks2 + marks3;
//     var maxMarks = 300; 
//     var percentage = calculatePercentage(totalMarks, maxMarks);

//     console.log("Average Marks: " + averageMarks);
//     console.log("Percentage: " + percentage + "%");
// }

// var marksSubject1 = 85;
// var marksSubject2 = 90;
// var marksSubject3 = 78;

// mainFunction(marksSubject1, marksSubject2, marksSubject3);
// ------------------------------------------------------------

// Q.NO = 5
// ANS =
// function customIndexOf(inputString, searchChar) {
//     for (var i = 0; i < inputString.length; i++) {
//         if (inputString[i] === searchChar) {
//             return i; 
//         }
//     }
//     return -1; 
// }
// var str = "Hello, World!";
// var charToSearch = "W";
// var index = customIndexOf(str, charToSearch);

// if (index !== -1) {
//     console.log("Character found at index: " + index);
// } else {
//     console.log("Character not found in the string.");
// }
// -------------------------------------------------------

// Q.NO = 6
// ANS =
// function removeVowels(sentence) {
//     var regex = /[aeiouAEIOU]/g;
//     var result = sentence.replace(regex, '');
//     return result;
// }
// // Example usage
// var inputSentence = "Hello, World! This is a sample sentence.";
// var processedSentence = removeVowels(inputSentence);
// console.log("Sentence without vowels: " + processedSentence);
// ----------------------------------------------------------------

// Q.NO = 7
// ANS =
// function countSuccessiveVowels(text) {
//     var count = 0;
//     text = text.toLowerCase(); 
    
//     for (var i = 0; i < text.length - 1; i++) {
//         var currentChar = text[i];
//         var nextChar = text[i + 1];
        
//         switch (currentChar + nextChar) {
//             case 'aa':
//             case 'ee':
//             case 'ii':
//             case 'oo':
//             case 'uu':
//                 count++;
//                 break;
//         }
//     }
    
//     return count;
// }

// var sentence = "Pleases read this application and give me gratuity";
// var numberOfOccurrences = countSuccessiveVowels(sentence);
// console.log("Number of occurrences of any two vowels in succession: " + numberOfOccurrences);
// ----------------------------------------------------------------------------------------------

// Q.NO = 8
// ANS =
// function convertToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function convertToFeet(kilometers) {
//     const FEET_IN_A_KILOMETER = 3280.84;
//     return kilometers * FEET_IN_A_KILOMETER;
// }

// function convertToInches(kilometers) {
//     const INCHES_IN_A_KILOMETER = 39370.1;
//     return kilometers * INCHES_IN_A_KILOMETER;
// }

// function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
// }

// // Example usage
// var distanceInKilometers = parseFloat(prompt("Enter distance between two cities in kilometers:"));

// var distanceInMeters = convertToMeters(distanceInKilometers);
// var distanceInFeet = convertToFeet(distanceInKilometers);
// var distanceInInches = convertToInches(distanceInKilometers);
// var distanceInCentimeters = convertToCentimeters(distanceInKilometers);

// console.log("Distance in Meters: " + distanceInMeters + " meters");
// console.log("Distance in Feet: " + distanceInFeet + " feet");
// console.log("Distance in Inches: " + distanceInInches + " inches");
// console.log("Distance in Centimeters: " + distanceInCentimeters + " centimeters");
// ----------------------------------------------------------------------------------------------------

// Q.NO = 9
// ANS =
// function calculateOvertimePay(hoursWorked) {
//     const standardHours = 40;
//     const overtimeRate = 12.00; 
//     var overtimePay = 0;

//     if (hoursWorked > standardHours) {
//         var overtimeHours = hoursWorked - standardHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     return overtimePay;
// }

// var hoursWorked = parseInt(prompt("Enter total hours worked by the employee:"));

// var overtimePay = calculateOvertimePay(hoursWorked);
// console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2)); 
// ----------------------------------------------------------------------------------

// Q.NO = 10
// ANS =
// function calculateCurrencyNotes(amountInHundreds) {
//     const TEN_NOTE = 10;
//     const FIFTY_NOTE = 50;
//     const HUNDRED_NOTE = 100;
    
//     var remainingAmount = amountInHundreds * HUNDRED_NOTE;
//     var tenNotes = Math.floor(remainingAmount / TEN_NOTE);
//     remainingAmount %= TEN_NOTE;
    
//     var fiftyNotes = Math.floor(remainingAmount / FIFTY_NOTE);
//     remainingAmount %= FIFTY_NOTE;
    
//     var hundredNotes = Math.floor(remainingAmount / HUNDRED_NOTE);
    
//     console.log("Number of 100 notes: " + hundredNotes);
//     console.log("Number of 50 notes: " + fiftyNotes);
//     console.log("Number of 10 notes: " + tenNotes);
// }

// // Example usage
// var amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));
// calculateCurrencyNotes(amountInHundreds);
// ------------------------------------------------------------------------------------------