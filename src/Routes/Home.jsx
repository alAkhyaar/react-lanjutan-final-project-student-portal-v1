// TODO: answer here
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Container maxW="50%" bg="blue.600" centerContent>
        <Box padding="4" bg="blue.200" color="black" maxW="md">
          <Heading as="h2" size="lg">
            Home
          </Heading>

          <Link to="/student" data-testid="student-btn">
            <Button colorScheme="blue" size="md" variant="solid">
              All Student
            </Button>
          </Link>
        </Box>
        <footer/>
      </Container>
      
    </>
  ); // TODO: replace this
};

export default Home;