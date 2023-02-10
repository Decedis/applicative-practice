import { data } from "../data/data";

import {maxBy} from "exercises/e17";
// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let counter = 1;
    let discoveryData = [];
    const discoveryYear = data.asteroids
        .map(asteroid => {return asteroid.discoveryYear}).sort();
    //console.log(discoveryYear);
    for(let i = 0; i < discoveryYear.length; i++){
        if(discoveryYear[i] === discoveryYear[i + 1]){
            counter++;
        } else if(discoveryYear[i] !== discoveryYear[i + 1]){
            if (counter > 1){
                discoveryData.push({year: discoveryYear[i], count: counter})
            }
            counter = 1;
        }
    }
    let cb = (people)  => people.age; //This honestly shouldn't work
    // I think this is required because of the way my minBy and maxBy functions work. 
    // let returnVal = array.filter(person => {return person.age === max}); I think this is the offender for why this is needed
    // I'd do it differently if I could, but I can't figure out another way to derive the appropriate values, as there are references to person and age in the original functions.
    //This is a learning experience I didn't expect. 

    let greatestYear = maxBy(discoveryData, cb);
    return greatestYear.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
