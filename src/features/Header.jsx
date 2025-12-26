
function Header({ handleClick }) {

    return (
        <nav>
            <button onClick={() => handleClick('teacher')}>Teacher</button>
            <button onClick={() => handleClick('student')}>Student</button>
            <br />
            <br />
            <br />
        </nav>
    )
}
export default Header;