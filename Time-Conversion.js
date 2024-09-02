// Time conversion

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//12:00:00AM => 00:00:00
//01:00:00AM => 01:00:00
//02:00:00AM => 02:00:00

//Tarde noche
//01:00:00PM => 13:00:00
//02:00:00PM => 14:00:00
//03:00:00PM => 15:00:00

//10:00:00PM => 22:00:00
//11:00:00PM => 23:00:00
//11:59:00PM => 23:59:00
//12:00:00AM => 00:00:00
//12:00:00PM => 12:00:00

// Debemos convertir de 12h a formato 24h]
// La entrada es un string y la salida debe ser un string

//primero vamos a separa en un vecto para saber si es AM o PM

const s = "08:00:00AM";

const h = s.slice(0, 8);
const format = s.slice(8);

let hrs = h.split(":");
console.log(hrs);

if (format == "PM") {
  hrs[0] = Number(hrs[0]) + 12;
  console.log(hrs);
} else {
  console.log(hrs);
}

function timeConversion(s) {
  // Write your code here
}
