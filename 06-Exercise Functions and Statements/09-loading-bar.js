function loadingBar(percentOfCompilation) {
    
    if (percentOfCompilation === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }
    
    console.log(`${percentOfCompilation}% [${'%'.repeat(percentOfCompilation / 10)}${'.'.repeat((100 - percentOfCompilation) / 10)}]`);
    console.log('Still loading...');
}

loadingBar(30);