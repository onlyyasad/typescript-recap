{

    type StudentCommonProps = {
        id: number
        name: string
        email: string
    }

    type StudentOne = StudentCommonProps & {
        language: string
    }

    type StudentTwo = StudentCommonProps & {
        hasOwnDevice: boolean
    }

    const createStudent = <X extends StudentCommonProps>(student: X, course: string): X & {course: string} =>{
        return {
            ...student,
            course
        }
    }

    const studentOne = createStudent<StudentOne>({
        id: 1,
        name: "Hafij",
        email: "hafij@email.com",
        language: "Bangla"
    }, "PHP Course");

    const studentTwo = createStudent<StudentTwo>({
        id: 2,
        name: "Bipul",
        email: "bipul@email.com",
        hasOwnDevice: true
    }, "iOS Development")
}