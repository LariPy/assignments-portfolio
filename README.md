# Lari's Assignments Portfolio

In this repository I showcase some of the assignments I have done in Trainee Academy.

## Assignment 1: Palindrome

### The assignment

Write a function isPalindrome that returns whether a specific string is a palindrome.
For example:

```js
let value = isPalindrome("saippuakivikauppias");
console.log(value); // prints true

value = isPalindrome("saippuakäpykauppias");
console.log(value); // prints false
```
### Initial thoughts

In this assignment you need a function which takes a string as a parameter, checks if that string is a palindrome and returns a boolean value depending on the result.

### Solution

```js
function isPalindrome(string) {
    
    let stringBackwards = ""
    let result = `The word "${string}" is not a palindrome`

    for (let i = string.length - 1; i >= 0; i--) {
        stringBackwards = stringBackwards + string[i]
    }

    if (string === stringBackwards) {
        result = `The word "${string}" is a palindrome`
    }

    return result
}

console.log(isPalindrome("saippuakivikauppias"))
```
My solution goes as follows:
- Declare variable `stringBackwards` which is empty.
- Declare variable `result` which basically has the value "false" by default.
- Use a for loop to character by character write the received string backwards into `stringBackwards`.
- Compare if the string matches with `stringBackwards`. If they match, change `result` into "true."
- Return `result`.

I made the result into a sentence because I wanted to practice using Template Literals.

## Assignment 2: Look-up Object

### The assignment

We're scoring game results with ranks of S, A, B, C, D and F, with S being best and F the worst.
We want to measure the overall performance of a player by converting these grades to numeric values in the following way:

```js
S: 8
A: 6
B: 4
C: 3
D: 2
F: 0
```

a)

Create a function calculateTotalScore that takes a sequence of grades (a string) and returns the total score (sum of grade scores) calculated from the sequence.
Instead of using a if-else or switch-case when looking up the score of a letter, use a look-up object. It'll make your code simpler.
Make sure that the following code works:

```js
const totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // prints 33
```

b)

Create a function calculateAverageScore that takes a sequence of grades and returns the average score from the grades.
Average means total score divided by the number of grades. For example, if the sequence was ACD, the result would be (6 + 3 + 2) / 3.
Make sure that the following code works:

```js
const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665
```

EXTRA: In case you didn't do it already, make use of the `calculateTotalScore` function in your implementation of calculateAverageScore. If done correctly, you can make the body of calculateAverageScore only take 1 line of code!

c)

We have the following array of grade sequences:

```js
[ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ]
```

Use `Array.map` to convert this array into an array of average scores of the sequences. Print the resulting array.

### Initial thoughts

In this assigment you have to separate a given string character by character and look up the numerical value given to each character by comparing it to a list of values in an object.

### Solution

#### 1)

```js
const scoreLookup = {
    "S": 8,
    "A": 6,
    "B": 4,
    "C": 3,
    "D": 2,
    "F": 0
}

function calculateTotalScore(grades) {
    
    let total = 0
    const gradesArray = [...grades]

    gradesArray.forEach(grade => {
        if (grade in scoreLookup) {
            total = total + scoreLookup[grade]
        }
    })

    return total
}
```
The first part:
- I create an object called `scoreLookup` which holds values for each grade.
- I make a function that takes a string called `grades` as a parameter.
- I declare a variable called `total` with a value of 0. This will hold the total sum of the grades.
- I put the given string "grades" into an array, ``gradesArray``, character by character.
- With an if conditional inside a forEach loop I look up the ``scoreLookup`` object for the value of each grade in `gradesArray` and add them to the `total`.
- Finally I return `total`.

#### 2)

```js
function calculateAverageScore(grades) {
    return calculateTotalScore(grades) / grades.length
}
```

In the second part I have to calculate the average of the grades. This can be done simply by dividing the result of the function `calculateTotalScore` with the length of the `grades` string.

#### 3)

```js
const arrayOfGrades = [ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ]
const averageScores = arrayOfGrades.map(grades => calculateAverageScore(grades))
console.log(averageScores)
```

Since we already used the function `calculateTotalScore` inside the function `calculateAverageScore`, we can simply give the latter function as an argument to the `Array.map` method.

## Assignment 3: Cleanup

### The assignment

```js
const objectArray = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ];
```
There are some entries in the above array that are marked to be deleted.

a)
Erase the entries by finding them and setting them to null. Do not replace the original array, but modify it instead.

b)
Erase the entries by generating a new array with Array.map where the objects to be deleted have been replaced with null and the rest stay as-is.

c)
Imagine that instead of 9 entries, the above array would have 100,000 entries. What would be the implications for performance and memory use between doing it like in a) or like in b)?

To answer this question, write a comment to your source where you present your thoughts on the subject.

### Initial thoughts

In this assignment there is an array of objects. Some of the objects are marked for deletion, so you have to go through the array somehow and check each object, then set those to be deleted null.

### Solution

#### 1)

```js
for (let i = 0; i < objectArray.length; i++) {
    
    if (objectArray[i] === null) {
        objectArray[i] = null
    } else if (objectArray[i].toDelete === true) {
        objectArray[i] = null
    }
}
```

Go through the the array with a for loop. If an object is already null, keep it null. If an object is marked to be deleted, set it to null.

#### 2)

```js
function deleteMarked(array) {

    const newArray = array.map(object => {
      if (object === null) {
        return null
      } else if (object.toDelete === true) {
        return null
      } else {
        return object
      }
    })

    return newArray
}
```

In the next part I use a function to accept arrays as a parameter. The function then does basically the same thing as the for loop in the first part, but it uses the `Array.map` method to create a new array. The new array is then returned.

#### 3)

```
Imagine that instead of 9 entries, the above array would have 100,000 entries. What would be the implications for performance and memory use between doing it like in a) or like in b)?
```

I didn't make a function in part a), but for the sake of this question let's assume that a) is a function which modifies the given array directly and b) is a function which creates a new array based on the given array and then modifies and returns it.

I am no data scientist, but I would assume that a) would be faster, because it doesn't have to use resources to create and return a totally new array. However there are cases where it's better to create a copy which to modify and then replace the original data with.
