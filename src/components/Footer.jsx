// TODO: answer here
import { Box, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    // TODO: answer here
    <div style={styles.footer}>
      <Center>
        <Box className="footer" padding="4" color="black" maxW="md">
          <p
            className="studentName"
            style={{ textAlign: "center", color: "white" }}
          >
            M. Mushthofa Al-Akhyar
          </p>
          <p
            className="studentId"
            style={{ textAlign: "center", color: "white" }}
          >
            FE5555646
          </p>
        </Box>
      </Center>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#559dc9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
};
