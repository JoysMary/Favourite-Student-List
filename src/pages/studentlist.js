import React, { useState } from "react";
import StudentCard from "../components/studentcard";

function StudentList() {
    const [search, setSearch] = useState("");

    const students = [
        {
            id: 101,
            name: "Angel",
            department: "Computer Science",
            year: "3rd Year"
        },
        {
            id: 102,
            name: "Priya",
            department: "Information Technology",
            year: "2nd Year"
        },
        {
            id: 103,
            name: "Anjali Joseph",
            department: "Computer Application",
            year: "3rd Year"
        },
        {
            id: 104,
            name: "Mary",
            department: "Computer Application",
            year: "3rd Year"
        },
        {
            id: 105,
            name: "James",
            department: "Artificial Intelligence",
            year: "1rd Year"
        },
        {
            id: 106,
            name: "Roselin",
            department: "Machine Learning",
            year: "3rd Year"
        },
        {
            id: 107,
            name: "Ruby",
            department: "Computer Science",
            year: "2rd Year"
        },
        {
            id: 108,
            name: "Sunandha",
            department: "Computer Application",
            year: "3rd Year"
        },
         {
            id: 109,
            name: "Ivin",
            department: "Computer Application",
            year: "2rd Year"
        },
        {
            id: 110,
            name: "David",
            department: "Computer Application",
            year: "2rd Year"
        }
    ];

    // Filter students based on the search input
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <div className="hero">
                <h1>🎓 Student List</h1>
                <p>Choose your Favourite Student</p>
            </div>

            <div className="search-box">
               <input
                    type="text"
                    placeholder="🔍 Search Your Favourite Student name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="student-grid">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                        />
                    ))
                ) : (
                    <div className="empty-search">
                        No Students Found
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudentList;