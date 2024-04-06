
/* Declare and initialize global variables */
const ridesElement = document.querySelector('#rides')
let rideList;

/* async displayRides Function */
const displayRides = (rides) => {

    rides.forEach((ride) =>{
        let article = document.createElement('article');  
        
        let p = document.createElement('p');
        p.innerText = ride.name;
        

        ridesElement.appendChild(article);
    
    });
}
/* async getRides Function using fetch()*/
const getRides = async () =>{
    const response = await fetch('https://run.mocky.io/v3/a5ff3f23-5207-429e-8f98-036cb7c5d4f6');
    rideList = await response.json();
    displayRides(rideList);

}

/* reset Function */
function reset(){
    while(ridesElement.childElementCount > 0){
        ridesElement.removeChild(ridesElement.lastChild)
    }
}

/* filterRides Function */
function filterRides(){
    reset();
    let filter = document.querySelector('#filtered');

    switch (filter.value){
        case 'all':
            displayRides(rides);
    }
}

getRides();
document.querySelector('#filtered').addEventListener('change', () => { filterRides(rideList) });
/* Event Listener */