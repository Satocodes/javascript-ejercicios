/*
Instructions
Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!

In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.

You have four tasks related to the time spent cooking the lasagna.

1. Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.



2. Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.
Example:
remainingMinutesInOven(30);
// => 10



3. Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.
Example:
preparationTimeInMinutes(2);
// => 4


4. Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.
Example:
totalTimeInMinutes(3, 20);
// => 26


How to debug
When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:
console.log('Debug message');
*/

const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}


export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}


export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return ((numberOfLayers* PREPARATION_MINUTES_PER_LAYER)+actualMinutesInOven)
}
