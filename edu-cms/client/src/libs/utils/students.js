class StudentUtils {
    constructor(student) {
        this.student = student;
    }
    async findStudent(studentID) {
        try {
            const result = await fetch(`http://localhost:5000/students/findStudent/${studentID}`);
            const resultData = await result.json();
            return resultData;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports.StudentUtils = StudentUtils;