function passwordValidator(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    const regex = /^[a-zA-Z0-9]+$/;
    if (!(regex.test(password)) || password.trim() === '') {
        isValid = false;
        console.log('Password must consist only of letters and digits');
     }

     let digitsCount = (password.match(/\d/g) || []).length;;
     if (digitsCount < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits');
     }

     if (isValid) {
        console.log('Password is valid');
     }
}

passwordValidator('1111111');