function storeProvision(currentStocks, productsOrderForDelivery) {
    let provisions = {};
    
    collectAllProducts(provisions, currentStocks);
    collectAllProducts(provisions, productsOrderForDelivery);
    
    for (const product in provisions) {
        console.log(`${product} -> ${provisions[product]}`);
    }
}

function collectAllProducts(provisions, productcs) {
    for (let i = 0; i < productcs.length - 1; i += 2) {
        let productName = productcs[i];
        let productQuantity = Number(productcs[i + 1]);
        
        if (provisions[productName]) {
            provisions[productName] += productQuantity;
        } else {
            provisions[productName] = productQuantity;
        }
    }
}
