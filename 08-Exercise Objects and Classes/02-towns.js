function towns(inputTable) {
    let townsList = [];
    
    for (const information of inputTable) {
        const[town, latitude, longitude] = information.split(' | ');
        
        townsList.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        });
    }

    townsList.forEach(town => console.log(town));
}
