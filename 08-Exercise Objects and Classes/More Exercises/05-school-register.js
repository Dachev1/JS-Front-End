function solve(input) {
    let students = [];
    
    const name = 'Student name:'
    const grade = 'Grade:'
    const avgScore = 'Graduated with an average score:';
    
    for (const line of input) {
        let studentInformation = line.split(', ');
        const studentName = studentInformation[0].slice(name.length + 1);
        const studentGrade = studentInformation[1].slice(grade.length + 1);
        const studentAvgScore = studentInformation[2].slice(avgScore.length + 1);
        
        if (studentAvgScore >= 3) {
            const student = {
                studentName,
                studentGrade: Number(studentGrade),
                studentAvgScore: Number(studentAvgScore),
            }
            
            students.push(student)
        }
    }
    
    let resultStudentsList = students.sort((a, b) => a.studentGrade - b.studentGrade)
    
    for (let grade = 1; grade <= 12; grade++) {
        let names = [];
        let averageScore = 0;
        
        let group = resultStudentsList
            .filter(student => student.studentGrade === grade)
            .map(student => {
            names.push(student.studentName);
            averageScore += student.studentAvgScore;
        });
        
        if (averageScore > 0) {
            averageScore = (averageScore / group.length).toFixed(2);
            
            console.log(`${grade + 1} Grade`);
            console.log(`List of students: ${names.join(', ')}`);
            console.log(`Average annual score from last year: ${averageScore}`);
            console.log();
        }  
    }
}
