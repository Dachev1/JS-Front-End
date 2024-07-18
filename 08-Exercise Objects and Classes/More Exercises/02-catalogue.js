function catalogue(input) {
    let productCatalog = [];
    
    for (const line of input) {
        const[productName, price] = line.split(' : ');
        
        const product = {
            productName,
            price,
        };
        
        productCatalog.push(product);
    }
    
    productCatalog.sort((a, b) => a.productName.localeCompare(b.productName));
    
    for (const product of productCatalog) {
        const letter = product.productName[0];
        
        console.log(letter);
        let group = productCatalog.filter(product => product.productName[0] === letter);

        group.forEach(product => console.log(`  ${product.productName}: ${product.price}`));
        
        for (let i = 1; i < group.length; i++) {
            productCatalog.shift();
        }
    }
}
