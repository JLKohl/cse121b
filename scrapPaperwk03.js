let firstName = 'Antonia';
let lastName = 'Francesca';

// Write a function declaration / definition named fullName that has two parameters named first and last. 
function fullName(first, last){
    return`${first} ${last}`;
}
// anonymous function expression
const fullName = function (first, last) {
  return `${first} ${last}`;
}
// arrow function expression 
const fullName = (first, last) => `${first} ${last}`;
// Write an expression that calls the fullName function declaration 
// and writes the result to an existing HTML element's
//  text node with the ID of fullName
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);