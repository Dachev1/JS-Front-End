function extract(content) {
    const pattern = /\(([A-Z a-z]+)\)/g;
    const text = document.getElementById(content).textContent;

    const matches = text.matchAll(pattern);

    let result = [];
    for (const match of matches) {
        result.push(match[1])
    }
    
    return result.join('; ');;
}
