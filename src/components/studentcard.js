import { useStudentContext } from "../context/studentcontext";

function StudentCard({ student }) {
    const {
        addFavorites,
        removeFavourite,
        isFavourites
    } = useStudentContext();

    const isFavourite = isFavourites(student.id);

    return (
        <div className="student-card">
            <h2>{student.name}</h2>
            <p>{student.department}</p>
            <p>{student.year}</p>

            {isFavourite ? (
                <button onClick={() => removeFavourite(student.id)}>
                    💔 Remove Favourite
                </button>
            ) : (
                <button onClick={() => addFavorites(student)}>
                    ❤️ Add Favourite
                </button>
            )}
        </div>
    );
}

export default StudentCard;