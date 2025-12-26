import { useState } from "react";
function StudentForm({ students, setStudents }) {
    const [student, setStudent] = useState({
        name: "",
        age: "",
        standard: "",
        gender: "male",
        isPhysicallyDisabled: false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents([...students, student]);
        setStudent({
            name: "",
            age: "",
            standard: "",
            gender: "male",
            isPhysicallyDisabled: false,
        });
        errorDialog.showModal();

    }

    return <form onSubmit={handleSubmit}>

        <table border={"1"}>
            <thead>
                <tr>
                    <th>Info</th>
                    <th>Field</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Full Name</td>
                    <td>
                        <input required minLength={3} maxLength={32} onChange={(e) => setStudent({ ...student, name: e.target.value })} value={student.name} />
                    </td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td><input type="number" required min={1} max={100} onChange={(e) => setStudent({ ...student, age: e.target.value })} value={student.age} /></td>
                </tr>
                <tr>
                    <td>Standard</td>
                    <td>        <select name="standard" id="standard" required onChange={(e) => setStudent({ ...student, standard: e.target.value })} value={student.standard}>
                        <option value="" disabled>Select Standard</option>
                        {
                            new Array(10).fill(0).map((item, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                        }
                    </select></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>  <input type="radio" checked={student.gender === 'male'} id="male" name="gender" value="male" onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
                        <label htmlFor="male" >Male</label>
                        <input type="radio" checked={student.gender === 'female'} id="female" name="gender" value="female" onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
                        <label htmlFor="female" >Female</label></td>
                </tr>
                <tr>
                    <td>Is Physically Disabled</td>
                    <td>        <input type="checkbox" id="isPhysicallyDisabled" name="isPhysicallyDisabled" checked={student.isPhysicallyDisabled} onChange={(e) => setStudent({ ...student, isPhysicallyDisabled: e.target.checked })} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}> <button type="submit">Submit</button> <br /></td>
                </tr>
            </tbody>
        </table>
        <dialog id="errorDialog">
            <strong>Saved Successfully!</strong><br />
            <button type="button" onClick={() => errorDialog.close()}>Close</button>
        </dialog>
    </form>
}

export default StudentForm;