/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProflie = {
    name:"Jennifer Kohl",
    photo: 'images/JLKohl.jpg',
    favoriteFoods: [
        "tacos",
        "BBQ",
        "nachos",
        "cake"
    ],
    hobbies: [
        "art",
        "music",
        "reading",
        "themed entertainment"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProflie.placesLived.push(
    {
        place:'Hayword, CA',
        length: '2 years'
    },
    {
        place:'Provo, UT',
        length: '5 years'
    },
    {
        place:'Pheonix, Az',
        length: '5 years'
    },
    {
        place:'Ozark, MO',
        length: '7 years'
    },
    {
        place:'Harrisonburg, VA',
        length: '2 years'
    },
    {
        place:'Galax, VA',
        length: '11 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProflie.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProflie.photo);
document.querySelector('#photo').setAttribute('alt', myProflie.name );

/* Favorite Foods List*/

myProflie.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProflie.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const placesElement = document.querySelector('#places-lived');
function generateListMarkup(list, templateCallback){
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

placesElement.innerHTML = generateListMarkup(
    myProflie.placesLived,
    placesTemplate
);
