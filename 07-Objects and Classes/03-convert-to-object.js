function convertToObject(json) {
    const jsonToObejct = JSON.parse(json);
    
    print(jsonToObejct);
}

function print(object) {
    for (const propertie in object) {
        console.log(`${propertie}: ${object[propertie]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
