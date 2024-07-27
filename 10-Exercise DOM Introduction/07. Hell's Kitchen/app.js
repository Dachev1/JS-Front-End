function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputData = document.getElementsByTagName('textarea')[0].value;

        let parsedInput = JSON.parse(inputData);
        let restaurants = {};

        for (let restaurant of parsedInput) {
            let [name, ...workers] = restaurant.split(' - ');

            if (!restaurants.hasOwnProperty(name)) {
                restaurants[name] = [];
            }

            for (let worker of workers[0].split(', ')) {
                let [workerName, salary] = worker.split(' ');

                let workerToUpdate = restaurants[name].find(worker => worker.workerName === workerName);

                if (workerToUpdate) {
                    workerToUpdate.salary = Number(salary);
                } else {
                    restaurants[name].push({
                        workerName,
                        salary: Number(salary),
                    })
                }
            }
        }

        let highestAvgSalaryResturant = {
            restaurantName: '',
            avgSum: 0,
        };

        Object.keys(restaurants)
            .forEach(restaurant => {
                let currentAvgSum = 0;
                let workers = restaurants[restaurant];

                for (const worker of workers) {
                    currentAvgSum += worker.salary;
                }

                currentAvgSum /= workers.length

                if (currentAvgSum > highestAvgSalaryResturant.avgSum) {
                    highestAvgSalaryResturant.restaurantName = restaurant;
                    highestAvgSalaryResturant.avgSum = currentAvgSum.toFixed(2);
                }
            })


        const { restaurantName, avgSum } = highestAvgSalaryResturant;

        const sortedWorkers = Object.values(restaurants[restaurantName])
            .sort((a, b) => b.salary - a.salary);

        const bestSalary = sortedWorkers[0].salary.toFixed(2);
        // OUTPUT    
        document.querySelector('#bestRestaurant p').innerText = `Name: ${restaurantName} Average Salary: ${avgSum} Best Salary: ${bestSalary}`
        document.querySelector('#workers p').innerText = sortedWorkers
            .map(worker => `Name: ${worker.workerName} With Salary: ${worker.salary}`)
            .join(' ');
    }
}
