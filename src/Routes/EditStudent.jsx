// TODO: answer here
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Heading, Center } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const EditStudent = () => {
  // TODO: answer here
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        const data = await response.json();
        setStudent(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let faculty = "";

    if (name === "programStudy") {
      switch (value) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          faculty = "Fakultas Ekonomi";
          break;
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          faculty = "Fakultas Ilmu Sosial dan Politik";
          break;
        case "Teknik Sipil":
        case "Arsitektur":
          faculty = "Fakultas Teknik";
          break;
        case "Matematika":
        case "Fisika":
        case "Informatika":
          faculty = "Fakultas Teknologi Informasi dan Sains";
          break;
        default:
          faculty = "";
          break;
      }
    }
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value, faculty }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const data = await response.json();

      navigate("/student");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      {!student ? (
        <p>Loading ...</p>
      ) : (
        <Container maxW="1000px">
          <Heading as="h2" size="lg">
            Edit Student
          </Heading>
          <Center mb={4}>
            <img
              // borderRadius="lg"
              // mb={4}
              // objectFit="cover"
              // w="sm"
              // height="sm"
              src={student.profilePicture}
              alt="Profile Picture"
            />
          </Center>
          <form id="form-student" onSubmit={handleSubmit}>
            <div class="fullname">
              <label htmlFor="fullname">Full Name</label>
              <Input
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
                type="text"
                id="programStudy"
                name="programStudy"
                value={student.programStudy}
                onChange={handleChange}
                data-testid="prody"
              />
            </div>
            <br />

            <Button
              colorScheme="blue"
              id="add-btn"
              type="submit"
              data-testid="edit-btn"
            >
              Edit Student
            </Button>
          </form>
          <br></br>
        </Container>
      )}
    </>
  );
};

export default EditStudent;
