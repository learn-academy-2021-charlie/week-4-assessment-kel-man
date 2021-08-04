// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
describe('arrayModifier', () => {
  it('removes the first element from the array and randomizes the order of content', () => {
    let output1 = arrayModifier(colors1)
    let output2 = arrayModifier(colors2)
    // expect(arrayModifier(colors1).length).toEqual(4) // checks if the length has been modified by -1
    // expect(arrayModifier(colors1).sort()).toEqual(['blue', 'green', 'pink', 'yellow']) // checks that the remaining elements are all the ones after the 0th index
    // expect(arrayModifier(colors2).length).toEqual(5)
    // expect(arrayModifier(colors2).sort()).toEqual([ 'aquamarine', 'indigo', 'ochre', 'periwinkle', 'saffron' ])
    expect(output1.length).toEqual(4)
    expect(output1.sort()).toEqual(['blue', 'green', 'pink', 'yellow'])
    expect(output2.length).toEqual(5)
    expect(output2.sort()).toEqual([ 'aquamarine', 'indigo', 'ochre', 'periwinkle', 'saffron' ])
  })
})

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// The first step is very simple, we simply .shift() the first element from the input array
// The word "shuffles" is very much left to interpretation in the prompt. I'll look up a few ways to randomize order and go from there
/* function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);
*/
// The above function pulled from stackoverflow
// I'll rewrite it as a const but otherwise it looks like it should work perfectly

// b) Create the function that makes the test pass.
const arrayModifier = words => {
  let modifiedArray = words
  modifiedArray.shift()
  let currentIndex = modifiedArray.length, i
  while(0!== currentIndex){
    i = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [modifiedArray[currentIndex], modifiedArray[i]] = [modifiedArray[i], modifiedArray[currentIndex]]
  }
  return modifiedArray
}
// so at this point my function is operating properly but my test runs it twice, and somehow it is modifying the input array so my second test is failing.
// I am not sure of why the argument is being mutated when I only use it to assign the value of my output at the beginning of my function
// However, I will fix my test so that it assigns a variable to the output of my function call and then use that variable to assert equality

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe('leastAndGreatest', () => {
  it('returns an array with only the least and greatest values, in that order', () => {
    expect(leastAndGreatest(nums1)).toEqual([-8, 90])
    expect(leastAndGreatest(nums2)).toEqual([5, 109])
  })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.
// Map over the array and store the current least/greatest values in an output array, then return the output

const leastAndGreatest = nums => {
  let outputArray = [nums[0], nums[0]]
  nums.map(num => {
    if(num > outputArray[1]) outputArray[1] = num
    if(num < outputArray[0]) outputArray[0] = num
    return null
  })
  return outputArray
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe('removeDupes', () => {
  it('removes any duplicate values from the arrays', () => {
    expect(removeDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
// For starters I will ignore the stretch challenge, and make a working function for the MVP
// Using the spread operator I combine the two arrays into one new array
// I also create an empty array to store numbers I've checked already
// Then, looping through my big array, I add each value to the empty array if it is not already included with .includes

/*const removeDupes = (arr1, arr2) => {
  let output = [], bigArray = [...arr1, ...arr2]
  for(let i=0; i<bigArray.length; i++){
    if(output.includes(bigArray[i]) == false){
      output.push(bigArray[i])
    }
  }
  return output
}*/
// this works as intended. Now I just need to handle an unknown quantity of inputs

const removeDupes = (...arrays) => {
  let bigArray = [], output = []
  for(let arr of arrays){
    bigArray = [...bigArray, ...arr] // This handles combining all the arrays into a single array
  }                                  // Now I can rip my logic from the first function and apply it in an identical way
  for(let i=0; i<bigArray.length; i++){
    if(output.includes(bigArray[i]) == false){
      output.push(bigArray[i])
    }
  }
  return output
}

// Had to look up the alternate for loop notation because initially I had written for(let arr in arrays) and it was throwing me for a loop
// Works perfectly now
