import styled from "styled-components";
import { Button } from "../signUp/style";

export const ContainerSignIn = styled.div`
  height: 100vh;
  padding: 50px;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--greyFour);
  label {
    font-family: Inter;
    font-size: 12px;
    color: white;
  }
`;
export const LoginBtn = styled(Button)`
    margin: 15px 0px;
`;
export const SignUpBtn = styled(Button)`
    margin: 15px;
    width: 95%;
`;