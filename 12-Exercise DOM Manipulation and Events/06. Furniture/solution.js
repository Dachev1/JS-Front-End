function solve() {
    const textareaInputElement = document.querySelector('#exercise textarea:first-of-type');
    const textareaOutputElement = document.querySelector('#exercise textarea:last-of-type');
    const generateButton = document.querySelector('#exercise button:first-of-type');
    const buyButton = document.querySelector('#exercise button:last-of-type');

    generateButton.addEventListener('click', () => {
        const parsedInputIntoArrOfObj = JSON.parse(textareaInputElement.value);
        const tbodyElement = document.querySelector('tbody');

        for (const currentObject of parsedInputIntoArrOfObj) {
            const { name, img: imgSource, price, decFactor } = currentObject;

            // img
            const imgTdElement = document.createElement('td');
            const imgElement = document.createElement('img');
            imgElement.src = imgSource;
            imgTdElement.appendChild(imgElement);

            // name
            const nameTdElement = document.createElement('td');
            const paraNameElement = document.createElement('p');
            paraNameElement.textContent = name;
            nameTdElement.appendChild(paraNameElement);

            // price
            const priceTdElement = document.createElement('td');
            const paraPriceElement = document.createElement('p');
            paraPriceElement.textContent = price;
            priceTdElement.appendChild(paraPriceElement);

            // decFactor
            const factorTdElement = document.createElement('td');
            const paraFactorElement = document.createElement('p');
            paraFactorElement.textContent = decFactor;
            factorTdElement.appendChild(paraFactorElement);

            // checkbox
            const checkboxTdElement = document.createElement('td');
            const inputElement = document.createElement('input');
            inputElement.type = 'checkbox';
            checkboxTdElement.appendChild(inputElement);

            // apped date cells to the row
            const trElement = document.createElement('tr');
            trElement.appendChild(imgTdElement);
            trElement.appendChild(nameTdElement);
            trElement.appendChild(priceTdElement);
            trElement.appendChild(factorTdElement);
            trElement.appendChild(checkboxTdElement);

            // append row to the table
            tbodyElement.appendChild(trElement);
        }
    })

    buyButton.addEventListener('click', () => {
        let boughtItemsName = [];
        let totalPrice = 0;
        let avgDecFactor = 0;

        const trElements = document.querySelectorAll('tbody tr:not(:first-child)');

        for (const trElement of trElements) {
            const inputChecboxElement = trElement.querySelector('input[type = "checkbox"]')

            if (inputChecboxElement.checked) {
                const productName = trElement.children.item(1).textContent;
                const productPrice = Number(trElement.item(2).textContent);
                const productDecFactor = Number(trElement.item(3).textContent);

                boughtItemsName.push(productName);
                totalPrice += productPrice;
                avgDecFactor += productDecFactor;
            }
        }

        avgDecFactor /= boughtItemsName.length;
        textareaOutputElement.value += `Bought furniture: ${boughtItemsName.join(', ')}\n`;
        textareaOutputElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        textareaOutputElement.value += `Average decoration factor: ${avgDecFactor}`;
    })
}
