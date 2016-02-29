//Empire Vehicle Database
//The empire needs a data structure
//Create an Object with a list of vehicles
//Each vehicle needs 3 properties
//Create one method for each vehicle
//Use this in the methods to output one of the properties

function getInfo() {
    var flight = 'can';
    if (!this.canFly) {
        flight += 'not';
    }
    console.log(this.name + ' is ' + this.weight + ' lbs. and ' + flight + ' fly.');
}

var empireDatabase = {
    vehicles: [
        {
            name: 'AT-AT Walker',
            weight: 2000,
            canFly: false,
            info: getInfo
        },
        {
            name: 'Starfighter',
            weight: 200,
            canFly: true,
            info: getInfo
        },
        {
            name: 'Millenium Falcon',
            weight: 3000,
            canFly: true,
            info: getInfo
        }
    ]
};

for (var i = 0; i < empireDatabase.vehicles.length; i++) {
    empireDatabase.vehicles[i].info();
}