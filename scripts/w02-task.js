/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jennifer Kohl';
let currentYear = '2024';
let profilePicture = 'images/JLKohl.jpg';
let otherFood = 'cake';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ["tacos", "BBQ", "nachos"];
foodElement.innerHTML = `<br>${favFoods}`;

const newFavFood = 'cake';
favFoods.push(newFavFood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`;


