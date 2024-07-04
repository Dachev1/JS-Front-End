function solve(array, step) {
    // let resultArr = [];
    // for (let i = 0; i < array.length; i += step) {
    //     resultArr.push(array[i]);
    // }
    
    // return resultArr;

    const result = array.filter((element, index) => index % step === 0);

    return result;
}

solve(['5', '20', '31', '4', '20'], 2);