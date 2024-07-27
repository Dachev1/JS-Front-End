function solve() {
    const firstOption = document.querySelector('#selectMenuTo option');
    firstOption.textContent = 'Binary';
    firstOption.value = 'binary';

    const secondOption = document.createElement('option');
    secondOption.textContent = 'Hexadecimal';
    secondOption.value = 'hexadecimal';

    document.querySelector('#selectMenuTo').appendChild(secondOption);

    const convertButtonElement = document.querySelector('button');

    convertButtonElement.addEventListener('click', () => {
        convert();
    })
}

function convert() {
    const numberToConvert = Number(document.getElementById('input').value);
    const convertTo = document.getElementById('selectMenuTo').value;
    const result = document.getElementById('result');

    switch (convertTo) {
        case 'binary':
            result.value = convertToBinary(numberToConvert);
            break;

        case 'hexadecimal':
            result.value = convertToHexadecimal(numberToConvert);
            break;
    }
}

function convertToBinary(number) {
    return Number(number.toString(2));
}

function convertToHexadecimal(number) {
    return (number.toString(16)).toUpperCase();
}
