function solve(browserInfo, commands) {
    let browserName = browserInfo['Browser Name'];
    let openTabs = browserInfo['Open Tabs'];
    let closedTabs = browserInfo['Recently Closed'];
    let browserLogs = browserInfo['Browser Logs'];
    
    for (const command of commands) {
        
        if (command === 'Clear History and Cache') {
            openTabs = []
            closedTabs = [];
            browserLogs = [];
            continue;
        }
        
        const[commandType, site] = command.split(' ');
        
        if (commandType === 'Open') {
            openTabs.push(site);
            browserLogs.push(command);
        }
        
        if (commandType === 'Close') {
            for (let i = 0; i <  browserInfo['Open Tabs'].length; i++) {
                if (openTabs[i] === site) {
                    openTabs.splice(i, 1);
                    
                    closedTabs.push(site);
                    browserLogs.push(command);
                    break;
                }
            }
        }
    }
    
    console.log(`${browserName}`);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${closedTabs.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}
