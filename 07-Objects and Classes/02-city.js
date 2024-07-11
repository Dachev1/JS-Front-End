function city(city) {
    for (const propertie in city) {
        console.log(`${propertie} -> ${city[propertie]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
