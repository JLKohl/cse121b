/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList;

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((temple)=> {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.innerHTML = temple.templeName;

        var img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const templeList = await response.json();
    displayTemples(templeList);

}

/* reset Function */
function reset(templesElement){
    templesElement.removeChild(article)
}

/* filterTemples Function */
function filterTemples(temples){
    reset(temples);
    let filter = document.getElementById('filtered');

    switch (filter){
        case 'utah':
            displayTemples.filter
            break;
        case 'notutah':
            break;
        case 'older':
            Date.parse(string)
            break;
        case 'all':
            break;   
    }

}

getTemples();
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList) });
/* Event Listener */
