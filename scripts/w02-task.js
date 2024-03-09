/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jennifer Kohl';
let currentYear = '2024';
let profilePicture = 'images/JLKohl.jpg';
let otherFood = 'cake';
let favFoods = ["tacos", "BBQ", "nachos"];
let favFoods2 = ["tacos", "BBQ", "nachos"];
favFoods2.push('cake');
let favFoods3 = ["tacos", "BBQ", "nachos", 'cake'];
favFoods3.shift();
let favFoods4 = ["BBQ", "nachos", 'cake'];
favFoods4.pop()

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
foodElement.textContent = favFoods;
foodElement.innerHTML += `<br>${favFoods2}`;
foodElement.innerHTML += `<br>${favFoods3}`;
foodElement.innerHTML += `<br>${favFoods4}`;

/* Step 5 - Array */




