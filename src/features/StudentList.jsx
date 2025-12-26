import { useState, useEffect } from "react";

function StudentList({ students }) {
    const [search, setSearch] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        setFilteredStudents(students.filter(student =>
            student?.name?.toLowerCase().includes(search.toLowerCase())
        ));
    }, [search, students]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return <>
        <h1>Joined Students</h1>

        <table border="1" width={'100%'}>
            <thead>
                <tr>
                    <td colSpan="6"><input type="search" value={search} placeholder="Search..." onChange={handleSearch} style={{ width: '100%' }} /></td>
                </tr>
                <tr>
                    <th>Roll No.</th>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Standard</th>
                    <th>Gender</th>
                    <th>Physically Disabled</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredStudents.map((item, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.standard}</td>
                        <td>{item.gender}</td>
                        <td>{item.isPhysicallyDisabled ? 'Yes' : 'No'}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}
export default StudentList;