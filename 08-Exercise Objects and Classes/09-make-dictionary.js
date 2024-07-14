function solve(input) {
    let dictionary = {};
   
    const inputIntoObj = input.map(JSON.parse);
    for (const line of inputIntoObj) {
        const term = Object.keys(line)[0];

        dictionary[term] = line[term];
    }

    Object.keys(dictionary)
    .sort((a, b) => a.localeCompare(b))
    .forEach(term => console.log(`Term: ${term} => Definition: ${dictionary[term]}`));
}
