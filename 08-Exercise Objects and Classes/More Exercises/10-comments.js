function solve(input) {
    let usersList = [];
    let articleList = [];
    let comments = {};

    for (const line of input) {
        if (line.includes('user')) {
            let user = line.split('user ')[1];
            usersList.push(user);
        } else if (line.includes('article')) {
            let article = line.split('article ')[1];
            articleList.push(article);
        } else {
            const username = line.split(': ')[0].split(' posts on ')[0];
            const articleName = line.split(': ')[0].split(' posts on ')[1];
            const commentTitle = line.split(': ')[1].split(', ')[0];
            const commentContent = line.split(': ')[1].split(', ')[1];
            if (usersList.includes(username) && articleList.includes(articleName)) {

                if (!comments.hasOwnProperty(articleName)) {
                    comments[articleName] = [];
                }

                comments[articleName].push({
                    user: username,
                    title: commentTitle,
                    content: commentContent
                });
            }
        }
    }

    let sortedByCommentsLength = Object.entries(comments).sort((a, b) => b[1].length - a[1].length);

    for (let [articleName, articleComments] of sortedByCommentsLength) {
        console.log(`Comments on ${articleName}`);

        let sortedByUsername = articleComments.sort((a, b) => a.user.localeCompare(b.user));
        for (let comment of sortedByUsername) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
        }
    }
}
