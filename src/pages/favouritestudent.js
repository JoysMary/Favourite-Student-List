import { Link } from "react-router-dom";
import { useStudentContext } from "../context/studentcontext";
import StudentCard from "../components/studentcard";

function FavouriteStudents() {
    const { favourites } = useStudentContext();

    return (
        <div className="page">
            <div className="page-heading">
                <h1>❤️ Favourite Students</h1>
                <p>Your favourite students appear here.</p>
            </div>

            {favourites.length === 0 ? (
                <div className="empty-box">
                    <div className="empty-icon">
                        💔
                    </div>

                    <h2>No favourite student added yet</h2>

                    <p>
                        Go to the student list and add your favourite students.
                    </p>

                    <Link to="/" className="browse-btn">
                        🎓 Browse Students
                    </Link>
                </div>
            ) : (
                <div className="student-grid">
                    {favourites.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavouriteStudents;