import React from "react";
// TODO: answer here
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import AddStudent from "./Routes/AddStudent";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddStudent />} />
        <Route path="student">
          <Route index element={<Student />} />
          <Route path=":id" element={<EditStudent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </> // TODO: replace this
  );
};

export default App;
