"use strict";

// command line argument code. you shouldn't need to edit this

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error(
    "Usage: node app.js <temperature> <weather> \n ie: node 15.2 rainy"
  );
}

const [temperature, weather] = args;

if (temperature < 5) {
  console.log("- a winter coat");
  console.log("- a hat and scarf");
  console.log("- gloves or mitteens");
  if (weather === "snowy") {
    console.log("- Snow boots");
  } else {
    console.log("- Warm boots or shoes");
  }
} else if (temperature >= 5 && temperature <= 15) {
  console.log("- a light jacket or sweater");
  if (weather === "rainy" || weather === "windy") {
    console.log("- a waterproof jacket");
    console.log("- a hat");
  }
} else if (temperature >= 15 && temperature < 25) {
  console.log("- a t-shirt or blouse");
  console.log("- Jeans or shorts");
  if (weather === "sunny") {
    console.log("- sunglasses and/or a hat");
  }
  // implies 25 and above
} else {
  console.log("- a tank top or sundress");
  console.log("- shorts or a skirt");
  if (weather === "sunny") {
    console.log("- sunglasses and/or a hat");
  }
}
