// TODO: answer here
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const AddStudent = () => {
  // TODO: answer here
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...student,
          faculty: getFacultyByProgramStudy(student.programStudy),
        }),
      });
      const data = await response.json();
      console.log("Student added successfully", data);
      navigate("/student");
    } catch (error) {
      console.error("Error adding student", error);
    }
  };
  const getFacultyByProgramStudy = (programStudy) => {
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
    }
  };

  return (
    <>
      <NavBar />
      <Container maxW="1000px">
        <Heading as="h2" size="lg">
          Add Student
        </Heading>
        <form onSubmit={handleSubmit} id="form-student">
          <div class="fullname">
            <label htmlFor="fullname">Full Name</label>
            <Input
              variant="outline"
              placeholder="Masukan Nama Lengkap Anda"
              type="text"
              id="fullname"
              name="fullname"
              value={student.fullname}
              onChange={handleChange}
              data-testid="name"
            />
          </div>
          <div class="fullname">
            <label htmlFor="profilePicture">Profile Picture</label>
            <Input
              variant="outline"
              placeholder="Masukan Tautan Foto Anda"
              type="text"
              id="profilePicture"
              name="profilePicture"
              value={student.profilePicture}
              onChange={handleChange}
              data-testid="profilePicture"
            />
          </div>
          <div class="fullname">
            <label htmlFor="address">Address</label>
            <Input
              variant="outline"
              placeholder="Masukan Alamat Tempat Tinggal Anda"
              type="text"
              id="address"
              name="address"
              value={student.address}
              onChange={handleChange}
              data-testid="address"
            />
          </div>
          <div class="fullname">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              variant="outline"
              placeholder="Masukan Nomor HP Anda"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={student.phoneNumber}
              onChange={handleChange}
              data-testid="phoneNumber"
            />
          </div>
          <div class="wrapper-selection">
            <div class="birthdate">
              <label htmlFor="birthDate">Birth Date</label>
              <Input
                variant="outline"
                type="date"
                id="birthDate"
                name="birthDate"
                value={student.birthDate}
                onChange={handleChange}
                data-testid="date"
              />
            </div>

            <div class="gender">
              <label htmlFor="gender">Gender</label>
              <Select
                id="gender"
                name="gender"
                value={student.gender}
                onChange={handleChange}
                data-testid="gender"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
          </div>
          <div class="fullname">
            <label htmlFor="programStudy">Program Study</label>
            <Input
              variant="outline"
              placeholder="Masukan Nama Program Studi Anda"
              type="text"
              id="programStudy"
              name="programStudy"
              value={student.programStudy}
              onChange={handleChange}
              data-testid="prody"
            />
            <br />
          </div>
          <br></br>
          <Button
            colorScheme="green"
            id="add-btn"
            type="submit"
            data-testid="add-btn"
          >
            Add Student
          </Button>
        </form>
        <br></br>
      </Container>
    </>
  );
};

export default AddStudent;
