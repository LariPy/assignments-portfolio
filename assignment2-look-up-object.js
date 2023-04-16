const scoreLookup = {
    "S": 8,
    "A": 6,
    "B": 4,
    "C": 3,
    "D": 2,
    "F": 0
}

const totalScore = calculateTotalScore("DFCBDABSB")
console.log(totalScore) // prints 33

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



const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665

function calculateAverageScore(grades) {
    return calculateTotalScore(grades) / grades.length
}



const arrayOfGrades = [ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ]
const averageScores = arrayOfGrades.map(grades => calculateAverageScore(grades))
console.log(averageScores)