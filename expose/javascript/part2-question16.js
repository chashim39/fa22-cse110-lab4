let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
    a: 2
};

function printProperties (properties) {
    for (var property in properties) {
        if (property[0] == 'r') {
            console.log(properties[property])
        }
        else if ((properties[property] % 2) != 0) {
            console.log(properties[property])
        }
    }
}

printProperties(statistics);