{
    type StudentOne = {
        name: string
        email: string
        designation: string
    }

    type StudentTwo = {
        name: string
        email: string
        hasOwnDevice: boolean
    }


    const attachCourse = <X>(student: X, course: string): X & {course: string} =>{
        return {
            ...student,
            course
        }
    }

    const courseOne = "MERN Stack";
    const courseTwo = "Laravel Course";

    const studentOne: StudentOne = {
        name: "Hamid",
        email: "hamid@email.com",
        designation: "Junior Developer"
    }

    const studentTwo: StudentTwo = {
        name: "Rahim",
        email: "rahim@email.com",
        hasOwnDevice: true
    }

    const resultOne = attachCourse(studentOne, courseOne);
    const resultTwo = attachCourse(studentTwo, courseTwo);

    console.log(resultOne);
    console.log(resultTwo);
}