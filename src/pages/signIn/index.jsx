import {
  Container,
  ContainerForm,
  InputDiv,
  StyledForm,
  Input,
  Button,
} from "../signUp/style";

export default function SignIn() {
  return (
    <Container>
      <img src="../assets/Logo.png" alt="Logo"></img>
      <ContainerForm>
        <h1>Login</h1>
        <StyledForm>
          <InputDiv>

            <h3></h3>
            <Input />

            <h3></h3>
            <Input />

            <Button>Login</Button>

            <p>Don't have an account ?</p>

            <Button>Sign Up</Button>

          </InputDiv>
        </StyledForm>
      </ContainerForm>
    </Container>
  );
}
