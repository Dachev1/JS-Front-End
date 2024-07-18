function solve (input) {
    let arrays = [];

    for (const line of input) {
       arrays.push((JSON.parse(line)).sort((a, b) => b - a));
    }

     Array.from(new Set(arrays.map(JSON.stringify)), JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}
