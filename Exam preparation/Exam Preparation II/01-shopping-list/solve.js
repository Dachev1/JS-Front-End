function solve(input) {
    const shoppingList = input.shift().split("!");

    for (const command of input) {
        const commandData = command.split(' ');
        const item = commandData[1];
        if (commandData[0].includes('Urgent')) {
            if (!isExsits(item)) {
                shoppingList.unshift(item);
            }
        } else if (commandData[0].includes('Unnecessary')) {
            if (isExsits(item)) {
                shoppingList.splice(shoppingList.indexOf(item), 1);
            }
        } else if (commandData[0].includes('Correct')) {
            const newItem = commandData[2];

            if (isExsits(item)) {
                shoppingList[shoppingList.indexOf(item)] = newItem;
            }
        } else if (commandData[0].includes('Rearrange')) {
            if (isExsits(item)) {
                shoppingList.splice(shoppingList.indexOf(item), 1);
                shoppingList.push(item);
            }
        }
    }

    console.log(shoppingList.join(', '));

    function isExsits(item) {
        return shoppingList.includes(item);
    }
}
