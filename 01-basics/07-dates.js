// dates

let myDate= new Date() // 
console.log(myDate.toString()); //  this will return a string representation of the date object (myDate) in a human-readable format (Fri Jun 21 2024 12:00:00 GMT+0000 (Coordinated Universal Time)) which includes the day of the week, month, day of the month, year, time, and timezone information.
console.log(myDate.toDateString()); // this will return a string representation of the date object (myDate) in a human-readable format (Fri Jun 21 2024) which includes the day of the week, month, day of the month, and year.

console.log(myDate.toISOString());// this will return a string representation of the date object (myDate) in ISO format (2024-06-21T12:00:00.000Z) which is a standardized format for representing dates and times.
console.log(myDate.toLocaleString());// this will return a string representation of the date object (myDate) with a locale-specific formatting (6/21/2024, 12:00:00 PM) in this case it is formatted with the date and time according to the conventions of the default locale of the environment.

console.log(typeof myDate);


let myCreatedDate = new Date(2026,0,12) // this will create a date object with the specified year (2026), month (0 for January), and day (12)
console.log(myCreatedDate.toDateString()); // this will return a string representation of the date object (myCreatedDate) in a human-readable format (Fri Jan 12 2026) which includes the day of the week, month, day of the month, and year.

let myCreatedDate2 = new Date("December 17, 2025 03:24:00") // this will create a date object with the specified date and time in a string format
console.log(myCreatedDate2.toString()); // this will return a string representation of the date object (myCreatedDate2) in a human-readable format (Wed Dec 17 2025 03:24:00 GMT+0000 (Coordinated Universal Time)) which includes the day of the week, month, day of the month, year, time, and timezone information.


let myTimeStamp = Date.now() // this will return the number of milliseconds since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time) which is a common way to represent dates and times in programming.
console.log(myTimeStamp); // this will return the current timestamp in milliseconds (e.g., 1711234567890)

console.log(Math.floor(myTimeStamp / 1000)); // this will return the current timestamp in seconds by dividing the timestamp in milliseconds by 1000 and rounding down to the nearest integer (e.g., 1711234567)


newDate= new Date
newDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });