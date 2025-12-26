import Student from "./Student";
import Teacher from "./Teacher";

function Body({ pageName }) {
    const page = () => {
        switch (pageName) {
            case 'student':
                return <Student />
            case 'teacher':
                return <Teacher />
            default:
                return "No page selected"
        }
    }
    return (
        <div style={{ minHeight: '80vh' }}>
            {
                page()
            }
        </div>
    )
}
export default Body;
