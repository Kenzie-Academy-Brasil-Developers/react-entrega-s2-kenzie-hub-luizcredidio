import { ButtonReturn, Container, ContainerForm, InputDiv, StyledForm, Input, Button } from "./style";

export default function SignUp() {
  return (
      <Container>
        <img src="../assets/logo.png" alt="logo"/>
        <ButtonReturn/>
        <ContainerForm>
          <h1>Create your account</h1>
          <p>Free and Fast, Let's go!</p>
          <StyledForm>
            <InputDiv>

            <h3></h3>
            <Input/>

            <h3></h3>
            <Input/>

            <h3></h3>
            <Input/>

            <h3></h3>
            <Input/>

            <h3></h3>
            <Input/>

            <h3></h3>
            <Input/>

            <h3></h3>
            <Input/>

            <Button> Sign Up</Button>
            </InputDiv>
          </StyledForm>
        </ContainerForm>
      </Container>
  );
}
