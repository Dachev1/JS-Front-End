function solve(input) {
    let courses = {};

    for (const line of input) {
        if (line.includes(':')) {
            let courseName = line.split(': ')[0];
            let capacity = Number(line.split(': ')[1]);

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = {
                    capacity: 0,
                    students: [],
                }
            }

            courses[courseName].capacity += capacity;
        } else {
            let username = line.split(' with email ')[0].split('[')[0];
            let credits = Number(line.split(' with email ')[0].split('[')[1].slice(0, -1));
            let email = line.split(' with email ')[1].split(' joins ')[0];
            let courseName = line.split(' with email ')[1].split(' joins ')[1];

            if (courses.hasOwnProperty(courseName)) {
                let courseCurrentCapacity = courses[courseName].capacity;
                if (courseCurrentCapacity > 0) {
                    courses[courseName].students.push({
                        username,
                        credits,
                        email,
                        courseName,
                    });

                    courses[courseName].capacity -= 1;
                }
            }
        }
    }

    Object.keys(courses)
        .sort((a, b) => courses[b].students.length - courses[a].students.length)
        .forEach(courseName => {
            console.log(`${courseName}: ${courses[courseName].capacity} places left`);

            Object.values(courses[courseName].students)
                .sort((a, b) => b.credits - a.credits)
                .forEach(student => console.log(`--- ${student.credits}: ${student.username}, ${student.email}`));

        })
}
