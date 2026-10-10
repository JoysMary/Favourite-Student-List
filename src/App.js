import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/navbar";
import StudentList from "./pages/studentlist";
import FavouriteStudents from "./pages/favouritestudent";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<StudentList />}
                />

                <Route
                    path="/favourite"
                    element={<FavouriteStudents />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
