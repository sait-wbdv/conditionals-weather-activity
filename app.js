"use strict";

// command line argument code. you shouldn't need to edit this

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error(
    "Usage: node app.js <temperature> <weather> \n ie: node 15.2 rainy"
  );
}

const [temperature, weather] = args;

/* This example uses nested conditional statements to also give recommendations for different weather states at different temperatures */

// if temperature is below 5 degrees
// indent __ if the weather is snowy...
// if temperature is greater than 5 and less than 15 degrees
// indent __ if the weather is rainy or windy
// if temperature is between 15 and 25
// indent __ if the weather is sunny
// if temperature is greater than 25
// indent __ if the weather is sunny
