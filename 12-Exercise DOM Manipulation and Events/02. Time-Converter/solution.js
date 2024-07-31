// solution 1
function attachEventsListeners() {
    const inputButtonElements = document.querySelectorAll('input[type=button][value=Convert]');
    
    function toSeconds(value, unit) {
        switch (unit) {
            case 'days': return value * 86400;
            case 'hours': return value * 3600;
            case 'minutes': return value * 60;
            case 'seconds': return value;
        }
    }
    
    const convertor = {
        days(seconds) {
            return seconds / 86400;
        },
        
        hours(seconds) {
            return seconds / 3600;
        },
        
        minutes(seconds) {
            return seconds / 60;
        },
        
        seconds(seconds) {
            return seconds;
        },
    }
    
    for (const button of inputButtonElements) {
        
        button.addEventListener('click', () => {
            const currentInputTextElement = button.previousElementSibling;
            const currentValue = Number(currentInputTextElement.value);
            const currentUnit = currentInputTextElement.id;
            
            const seconds = toSeconds(currentValue, currentUnit);
            
            console.log(seconds);
            
            const inputTextElements = document.querySelectorAll('input[type=text]');
            
            inputTextElements.forEach(input => {
                input.value = convertor[input.id](seconds);
            })
        })
    }
}

// solution 2
function attachEventsListeners() {
    // input fields
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    // convert buttons
    const daysConvertButton = document.getElementById('daysBtn');
    const hoursConvertButton = document.getElementById('hoursBtn');
    const minutesConvertButton = document.getElementById('minutesBtn');
    const secondsConvertButton = document.getElementById('secondsBtn');

    //One day is equal to 24 hours/1440 minutes/86400 seconds
    daysConvertButton.addEventListener('click', () => {
        const days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    })

    hoursConvertButton.addEventListener('click', () => {
        const hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;
    })

    minutesConvertButton.addEventListener('click', () => {
        const minutes = Number(minutesInput.value);
        daysInput.value = minutes * 1440;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    })

    secondsConvertButton.addEventListener('click', () => {
        const seconds = Number(secondsInput.value);
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds / 3600;
        minutesInput.value = seconds / 60;
    })
}
