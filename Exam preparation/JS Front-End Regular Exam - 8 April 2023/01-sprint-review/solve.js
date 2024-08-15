function solve(input) {
    const n = input.shift();
    const sprintBoard = {};

    for (let i = 0; i < n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(':');

        if (!isAssigneeExist(assignee)) {
            sprintBoard[assignee] = [];
        }

        sprintBoard[assignee].push({
            taskId,
            title,
            status,
            estimatedPoints: Number(estimatedPoints),
        })
    }

    for (const command of input) {
        if (command.includes('Add New')) {
            const [_, assignee, taskId, title, status, estimatedPoints] = command.split(':');

            if (!isAssigneeExist(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            sprintBoard[assignee].push({
                taskId,
                title,
                status,
                estimatedPoints: Number(estimatedPoints),
            })
        } else if (command.includes('Change Status')) {
            const [_, assignee, taskId, newStatus] = command.split(':');

            if (!isAssigneeExist(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            const getTask = sprintBoard[assignee].find(task => task.taskId === taskId);

            if (getTask) {
                getTask.status = newStatus;
            } else {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }
        } else if (command.includes('Remove Task')) {
            const [_, assignee, index] = command.split(':');

            if (!isAssigneeExist(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if (index < 0 ||index > sprintBoard[assignee].length - 1) {
                console.log('Index is out of range!');
                continue;
            }

            sprintBoard[assignee].splice(index, 1);
        }
    }


    let toDoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;

    Object.values(sprintBoard)
        .forEach(data => {
            Object.values(data)
                .forEach(task => {
                    switch (task.status) {
                        case 'ToDo': toDoPoints += task.estimatedPoints; break;
                        case 'In Progress': inProgressPoints += task.estimatedPoints; break;
                        case 'Code Review': codeReviewPoints += task.estimatedPoints; break;
                        case 'Done': donePoints += task.estimatedPoints; break;
                    }
                })
        });

    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= (toDoPoints + inProgressPoints + codeReviewPoints)) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

    function isAssigneeExist(assignee) {
        return sprintBoard.hasOwnProperty(assignee);
    }
}
