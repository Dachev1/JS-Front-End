function orders(product, count) {
    
    function getProductPrice(product) {
        switch (product) {
            case 'coffee': return 1.50;
            case 'water': return 1;
            case 'coke': return 1.40;
            case 'snacks': return 2;
        }
    }

    const totalPrice = getProductPrice(product) * count;
    console.log(totalPrice.toFixed(2));
}

orders('water', 5);