import Container from "react-bootstrap/esm/Container";

export default function About() {
  return (
    <div
      id="about"
      style={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Container>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
          tincidunt nisl nisl nec nunc. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        </p>
      </Container>
    </div>
  );
}
