function reverse(n, inputArr) {
    const result = inputArr.slice(0, n).reverse().join(' ')

    console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);