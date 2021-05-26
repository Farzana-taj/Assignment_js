// function checkPalindrome(str) {

//     const len = string.length;
    
//     for (let i = 0; i < len / 2; i++) {
    
//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
//     }
    
//     // take input
//     const string = prompt('Enter a string: ');
    
//     // call the function
//     const value = checkPalindrome(string);
    
//     console.log(value);
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
if(result==string)
{
    document.write("It is a polindrome");

}else{

    document.write("not a polindrome");
    
}