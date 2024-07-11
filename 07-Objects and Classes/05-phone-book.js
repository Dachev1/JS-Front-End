function phoneBook(input) {
    let phoneBook = {};

    for (const record of input) {
        const [name, phoneNumber] = record.split(' ');

        phoneBook[name] = phoneNumber;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

phoneBook(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );
