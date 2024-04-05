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
    templeList = await response.json();
    displayTemples(templeList);

}

/* reset Function */
function reset(){
    while (templesElement.childElementCount > 0){
        templesElement.removeChild(templesElement.lastChild)
    }  
}

/* filterTemples Function */
function filterTemples(temples){
    reset();
    let filter = document.querySelector('#filtered');

    switch (filter.value){
        case 'utah':
            displayTemples(
                temples.filter((temple) => {
                    return String(temple.location).split(', ')[1] == "Utah"
            }));
            break;
        case 'notutah':
            displayTemples(
                temples.filter((temple) => {
                    return String(temple.location).split(', ')[1] != "Utah"
            }));
            break;
        case 'older':
            displayTemples(
                temples.filter((temple) => {
                    return Number(String(temple.dedicated).split(', ')[0]) < 1950 
            }));
            Date.parse(string)
            break;
        case 'all':
            displayTemples(temples);
            break;   
    }

}

getTemples();
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList) });
/* Event Listener */