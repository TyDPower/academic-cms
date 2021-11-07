class _StudentUtils {

    async findStudent(studentID) {
        try {
            const result = await fetch(`http://localhost:5000/students/findStudent/${studentID}`);
            const resultData = await result.json();
            return resultData;
        } catch (err) {
            return err;
        }
    }

    async findAllStudents() {
        try {
            const result = await fetch(`http://localhost:5000/students/findAllStudents`)
            const resultData = await result.json();
            return resultData;
        } catch (err) {
            return err;
        }
    }

}

export { _StudentUtils as StudentUtils };