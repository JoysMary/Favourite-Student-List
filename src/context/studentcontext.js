import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    // Add a student to favourites
    const addFavorites = (student) => {
        setFavourites((current) => {
            const alreadyExists = current.some(
                (item) => item.id === student.id
            );

            if (alreadyExists) {
                return current;
            }

            return [...current, student];
        });
    };

    // Remove a student from favourites
    const removeFavourite = (id) => {
        setFavourites((current) =>
            current.filter((student) => student.id !== id)
        );
    };

    // Check whether a student is a favourite
    const isFavourites = (id) => {
        return favourites.some((student) => student.id === id);
    };

    return (
        <StudentContext.Provider
            value={{
                favourites,
                addFavorites,
                removeFavourite,
                isFavourites,
            }}
        >
            {children}
        </StudentContext.Provider>
    );
};

// Custom hook
export const useStudentContext = () => {
    return useContext(StudentContext);
};