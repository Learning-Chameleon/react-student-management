import { useState } from "react";
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function Student() {
    const [students, setStudents] = useState(() => {
        let genereatedStudents = [];
        for (let index = 0; index < 50; index++) {
            genereatedStudents.push({
                name: (() => {
                    let firstName = '';
                    let lastName = '';
                    const characters = 'abcdefghijklmnopqrstuvwxyz';
                    const length = Math.floor(Math.random() * 15) + 3; // 3 to 17 characters
                    for (let i = 0; i < length; i++) {
                        firstName += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    for (let i = 0; i < length; i++) {
                        lastName += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    return firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1);
                })(),
                age: Math.floor(Math.random() * 20) + 10,
                standard: Math.floor(Math.random() * 10) + 1,
                gender: Math.random() > 0.5 ? 'male' : 'female',
                isPhysicallyDisabled: Math.random() > 0.8 ? true : false,
            });

        }
        return genereatedStudents;
    });

    return <>
        <StudentForm students={students} setStudents={setStudents} />
        <StudentList students={students} />
    </>
}
export default Student;