
/* Declare and initialize global variables */
const ridesElement = document.querySelector('#rides')
let rideList;

/* async displayRides Function */
const displayRides = (rides) => {

    rides.forEach((ride) =>{
        let article = document.createElement('article');  
        
        let h2 = document.createElement('h2');
        h2.innerHTML = ride.name

        let h3 = document.createElement('h3');
        h3.innerHTML = `wait time: ${ride.wait_time}`
        
        article.appendChild(h2)
        article.appendChild(h3)

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
function filterRides(rides){
    reset();
    let filter = document.querySelector('#filtered');

    switch (filter.value){
        case 'longestWait':
            displayRides(
                rides.filter((ride) => {
                    return ride.wait_time > 35
                }));
            break;
        case 'shortestWait':
            displayRides(
                rides.filter((ride) => {
                    return ride.wait_time <=35
                }));
            break;
        case 'allRides':
            displayRides(rides);
            break;
    }
}

getRides();
document.querySelector('#filtered').addEventListener('change', () => { filterRides(rideList) });