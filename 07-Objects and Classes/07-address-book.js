function addressBook(peopleInformation) {

    let addressBook = {};

    for (const personInfo of peopleInformation) {
        const[name, address] = personInfo.split(':');

        addressBook[name] = address;
    }

    Object
    .keys(addressBook)
    .sort((a, b) => a.localeCompare(b))
    .forEach(name => console.log(`${name} -> ${addressBook[name]}`));
} 

addressBook(
    [
        'Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd'
    ]    
);
