function isLeapYear(year) {

    if (year % 4 == 0) {
        if (year % 100 != 0) {
            console.log('yes');
            return;
        }
    }

    if (year % 100 == 0 && year % 400 == 0) {
        console.log('yes');
        return;
    }

    console.log('no');
}

isLeapYear(2000);
