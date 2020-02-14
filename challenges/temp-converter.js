console.log('tempConverter script has loaded');

// write this function!
function tempConverter(userTempStr, userDegrees) {
  userDegrees=userDegrees.toString();
  
  function celsiusToFah() {
    var fahrenheit = ((userTempStr * (9/5)) + 32);
    return fahrenheit;
 }
 function FarenheitToCel() {
    var celsius = ((userTempStr - 32) * (5/9));
    return celsius;
 }
 // C is to represent Celcius and F is farenheit
if(userDegrees === "C"){
  return celsiusToFah();
}
else if(userDegrees === "F"){
  return FarenheitToCel();
}

else if(userDegrees !== "C" || userDegrees!== "F"){
 result = userDegrees + " "+ "is not supported"
  return result;

}

}
// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
console.assert(tempConverter(0, 'celcius') === 32, 'fourth');
console.assert(tempConverter(4, 'celcius') === 39.2, 'fifth');
console.assert(tempConverter(12.4, 'celcius') === 54.32, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');


function tempConverterHandler() {
  // prompt the user for Temprature and Degree
  const userTempStr = prompt('enter a temperature to convert');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userDegrees = prompt('would you like to convert to farenheit or celcius? press F for farenheit and C for celcius');

  console.assert(typeof userDegrees === 'number', "don't forget to cast userDegrees to a string!");

  // perform core logic
  // write this line!
  const result=tempConverter(userTempStr, userDegrees);
  

  // alert result for the user
  // write this line!
   alert(result);

  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTempStr + '),', userTempStr);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);
