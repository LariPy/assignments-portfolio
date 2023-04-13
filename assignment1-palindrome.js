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