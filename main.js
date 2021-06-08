const types = ['sedan', 'coupe', 'sports car', 'station wagon', 'hatchback', 'convertible', 'minivan', 'pickup truck'];
const colours = ['green', 'white', 'black', 'red', 'yellow', 'orange', 'blue', 'silver', 'grey'];
const nationality = ['german', 'japanese', 'korean', 'american', 'swedish', 'chinese', 'english', 'french', 'italian'];

function randomise(){
    let randType = Math.floor(Math.random() * types.length);
    let randColor = Math.floor(Math.random() * colours.length);
    let randNation = Math.floor(Math.random() * nationality.length);
    return {type: types[randType], color: colours[randColor], nationality: nationality[randNation]};
}

function printMessage(car){
    console.log(`You are a ${car.color} ${car.nationality} ${car.type}. Congratulations!`);
}

printMessage(randomise());
