function solve() {
    let id = 'depot';
    let currentStopName = '';
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    const infoSpanElement = document.querySelector('.info');

    function depart() {
        const baseUrl = `http://localhost:3030/jsonstore/bus/schedule/${id}`;

        fetch(baseUrl)
            .then(response => response.json())
            .then(stopData => {
                currentStopName = stopData.name;
                infoSpanElement.textContent = `Next stop ${currentStopName}`;

                id = stopData.next;

                departButtonElement.setAttribute('disabled', true);
                arriveButtonElement.removeAttribute('disabled');
            }
            );
    }

    async function arrive() {
        infoSpanElement.textContent = `Arriving at ${currentStopName}`;

        arriveButtonElement.setAttribute('disabled', true);
        departButtonElement.removeAttribute('disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
